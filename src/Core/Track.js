import React from "react"
import Progress from './Progress'
import { useState } from 'react'
 const Track = ()=>{
    const [status, setShipmentStatus] = useState(2)
    const [showStatus, show] = useState(false)
    const [orderId, setOrderId] = useState(0)
    const handleOrderIdChange = (e)=>{
        setOrderId(e.target.value)
    }
    const handleTrack = ()=>{
        show(true)
        setShipmentStatus(orderId)
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
            <button type="submit" onClick={handleTrack} class="btn btn-primary btn-md">Track</button>
        </div>
        {showStatus?<Progress current={getStatus} />:null}
    </div>
  )
}
export default Track