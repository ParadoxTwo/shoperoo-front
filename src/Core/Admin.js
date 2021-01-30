import React, {useState, useEffect} from "react"
import firebase from '../firebase'
import {Table, Card, Accordion, Button} from 'react-bootstrap'
import CustomPackaging from './CustomPackaging'
import Details from './Details'
import { ContactSupportOutlined } from "@material-ui/icons"

export default function Admin(){
  const [customers, setCustomers] = useState([])
  const [unlocked, unlock] = useState(false)
  const [passcode, setPasscode] = useState('')
  const [loading, setLoading] = useState(false)
  const [fulfilmentChange, makeFulfilmentChange] = useState(false)
  const [showCustomDetails, toggleCustomDetails] = useState(false)
  const [customDetails, setCustomDetails] = useState({fname:'', lname:'', description:'',image:''})
  //let customDetails={fname:'', lname:'', description:'',image:''}
  
  const handleCustomDetails = (fname, lname, customDescription, custom)=>{
    console.log(fname, lname, customDescription, custom)
    setCustomDetails({fname:fname, lname:lname, description:customDescription,image:custom})
    console.log(customDetails)
    toggleCustomDetails(true)
  }

  const ref = firebase.firestore().collection("customers")
  function handleFulfilmentToggle(fulfilment, id){
    if(fulfilment=='Unfulfilled'){
      fulfilment='Fulfilled'
    }
    else{
      fulfilment = 'Unfulfilled'
    }
    ref.doc(id).update({fulfilment: fulfilment});
    makeFulfilmentChange(true)
  }
  function getOrders(){
    setLoading(true)
    unlock(false)
    ref.onSnapshot((querySnapshot)=>{
      var items = []
      querySnapshot.forEach((doc)=>{
        var item = doc.data()
        item.id = doc.id
        try {
          var date = new Date(item.expectedDate.seconds * 1000).toLocaleDateString("en-US")
          console.log(date)
          item.expectedDate = date
        }
        catch(e){
          item.expectedDate = ""
        }
        items.push(item)
      })
      setCustomers(items)
      setLoading(false)
    })
  }
  // let refresh = ()=>{}
  // const returner=(setVal)=>{
  //   refresh = setVal
  // }
  const handlePasscodeChange = e=>{
    e.preventDefault();
    setPasscode(e.target.value)
  }
  const authenticate = ()=>{
    if(passcode ==='slkjqwgenkabs!enkj@NDKJcaksjbdk'){
      unlock(true)
    }
  }
  useEffect(()=>{
    getOrders()
  },[])

  return (
  <div>
    <br/>
    <h1>Admininstrator Panel</h1>
    <br/>
    {!unlocked?<div>
      <form>
        <input type='password' onChange={handlePasscodeChange}></input> <br/>
        <button class='btn' onClick={authenticate}>Unlock</button>
      </form>
    </div>:null}
    {loading?"Loading":unlocked?
    <div>
      {/* {showCustomDetails?<CustomPackaging returner={returner} toggleCustomDetails={toggleCustomDetails} getCustomDetails = {getCustomDetails}/>:null} */}
      <Details popup={showCustomDetails} custom={customDetails} closePopup = {()=>toggleCustomDetails(false)}/>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Orders
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Table responsive striped bordered hover size="sm">
                <thead><tr>
                  <td>Order ID</td>
                  <td>First Name</td><td>Last Name</td><td>Email</td><td>Phone Number</td><td>Parcel Size</td>
                  <td>Expected Arrival</td><td>Invoice</td><td>Payment Status</td><td>Fulfillment</td><td>Ordered Time</td>
                  <td>Shipment Status</td>
                </tr></thead>
                <tbody>{customers.map((customer,i)=><tr key={i}>
                  <td>{customer.id?customer.id:null}</td>
                  <td>{customer.fname?customer.fname:null}</td>
                  <td>{customer.lname?customer.lname:null}</td>
                  <td>{customer.email?customer.email:null}</td>
                  <td>{customer.phone?customer.phone:null}</td>
                  <td>{customer.size==='custom'?
                    <Button onClick={()=>handleCustomDetails(customer.fname, customer.lname, customer.customDescription, customer.custom)}>
                      Details
                    </Button>
                    :customer.size?customer.size:null}
                  </td>
                  <td>{customer.expectedDate?customer.expectedDate:null}</td>
                  <td><a style={{textDecoration: 'underline'}} href={customer.invoice?customer.invoice:null} target="_blank" rel="noopener noreferrer">Open</a></td>
                  <td>{customer.paymentStatus?customer.paymentStatus:null}</td>
                  <td><Button className={customer.fulfilment=='Fulfilled'?"btn-success":"btn-danger"} onClick={()=>{handleFulfilmentToggle(customer.fulfilment,customer.id)}}>{customer.fulfilment?customer.fulfilment:null}</Button></td>
                  <td>{customer.time?customer.time:null}</td>
                  <td><Button>{customer.shipmentStatus?customer.shipmentStatus:null}</Button></td>
                </tr>)
                }</tbody>
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    </Accordion>

    </div>
    :null}
    
  </div>
  )
}
