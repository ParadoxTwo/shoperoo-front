import React from 'react'
import {Button} from 'react-bootstrap'
import firebase from '../firebase'
import {uuid} from 'uuidv4'

export default function Payment(props){
    
    const saveCustomerDetails = ()=>{
        firebase.firestore().collection("customers").add(props.getSaveDetails())
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            props.setId(docRef.id)
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    return(
        <div>
            <Button onClick={()=>saveCustomerDetails()}>Save</Button>
        </div>
    )
}