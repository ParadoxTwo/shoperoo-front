import React, { useEffect, useState } from "react"
import firebase from '../firebase'
import Progress from './Progress'
 const Track = ()=>{
    let [status, setShipmentStatus] = useState(-1)
    const [showStatus, show] = useState(false)
    let [orderId, setOrderId] = useState(0)
    const ref = firebase.firestore().collection("customers")
    const getShipmentDetails = (orderId)=>{
        let status = orderId
        //code to get status from firebase
        try{
            ref.doc(orderId).get().then(function(doc) {
                if (doc.exists) {
                    let document = doc.data()
                    console.log("Document data:", doc.data());
                    console.log(document.shipmentStatus)
                    switch(document.shipmentStatus){
                        case 'Receiving parcel': status = 0; break;
                        case 'Shipping':  status = 1; break;
                        case 'Arrived at warehouse': status = 2; break;
                        case 'Dispatched': status = 3; break;
                        default: status = -1; break;
                    }
                    console.log(status)
                    setShipmentStatus(status)
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect( ()=>{
        console.log("OrderID set to: "+orderId) 
        getShipmentDetails(orderId)
    },[orderId])

    useEffect(()=>{
        console.log("Status set to: "+status) 
    }, [status])

    const handleOrderIdChange = (e)=>{
        setOrderId(e.target.value)
        console.log(orderId)
    }
    const handleTrack = ()=>{
        show(true)
    }
    const getStatus = ()=>{
        return status
    }
  return(
    <div style={{padding: '40px'}}>
        <h1>Track your order: </h1>
        <div class="md-form">
            <input type="text" id="form1" onChange={handleOrderIdChange} class="form-control"/>
            <label for="form1">Order ID</label>
            {!showStatus?<button type="submit" onClick={handleTrack} class="btn btn-primary btn-md">Track</button>:null}
        </div>
        {showStatus?<Progress handleTrack={handleTrack} current={getStatus} />:null}
    </div>
  )
}
export default Track