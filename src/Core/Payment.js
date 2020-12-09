import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import firebase from '../firebase'

export default function Payment(props){
    const [filesUrl, setFilesUrl] = useState({urls: ['', '']})
    const saveFiles = ()=>{
        return new Promise( function(resolve, reject){
            const files = props.getFiles()
            console.log(files.length)
            console.log(files)
            setFilesUrl({urls: []})
            let urls = [];
            for(let i=0;i<files.length;i++){
                console.log(files[i])
                if(files[i]!==""){
                    const id = Date.now()
                    console.log(id)
                    const upload = firebase.storage().ref(`/files/${id+files[i].name}`).put(files[i])
                    upload.on('state_changed', 
                    snapShot =>{
                        console.log(snapShot)
                    }, err=>{
                        console.log(err)
                        reject(err)
                    }, ()=>{
                        
                        firebase.storage().ref('files').child(id+files[i].name).getDownloadURL()
                        .then(fireBaseUrl => {
                            urls[i] = fireBaseUrl
                            console.log(fireBaseUrl)
                            setFilesUrl({urls})
                            console.log(urls)
                            console.log(filesUrl)
                            if(files[i+1]===""||files[i+1]===undefined){
                                console.log(i)
                                console.log(files[i+1])
                                resolve(urls)
                            }
                        })
                    }
                    )
                }
            }
        })
        
    }
    const saveCustomerDetails = ()=>{
        saveFiles().then((urls)=>{
            console.log(urls)
            let details = props.getSaveDetails()
            details.invoice = urls[0]
            details.time = new Date().toUTCString()
            details.paymentStatus = 'not paid'
            if(urls[1]!==""&&urls[1]!==undefined)
                details.custom = urls[1]
            console.log(details)
            firebase.firestore().collection("customers").add(details)
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                props.setId(docRef.id)
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
    return(
        <div>
            <Button onClick={()=>saveCustomerDetails()}>Save</Button>
            <img src={filesUrl.urls[0]} alt="image invoice" />
            <img src={filesUrl.urls[1]} alt="image size" />
        </div>
    )
}