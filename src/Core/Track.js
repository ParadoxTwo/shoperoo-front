import React, { useEffect } from "react"
import Progress from './Progress'
import { useState } from 'react'
 const Track = ()=>{
    let [status, setShipmentStatus] = useState(-1)
    const [showStatus, show] = useState(false)
    let [orderId, setOrderId] = useState(0)

    const getShipmentDetails = (orderId)=>{
        //code to get status from firebase
        let status = orderId
        return status;
    }

    useEffect(()=>{
        console.log("OrderID set to: "+orderId) 
        let shipmentStatus = getShipmentDetails(orderId)
        setShipmentStatus(shipmentStatus)
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
            <input type="number" id="form1" onChange={handleOrderIdChange} class="form-control"/>
            <label for="form1">Order id</label>
            {!showStatus?<button type="submit" onClick={handleTrack} class="btn btn-primary btn-md">Track</button>:null}
        </div>
        {showStatus?<Progress handleTrack={handleTrack} current={getStatus} />:null}
    </div>
  )
}
export default Track