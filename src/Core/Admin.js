import React, {useState, useEffect} from "react"
import firebase from '../firebase'
import {Table, Card, Accordion, Button} from 'react-bootstrap'
import CustomPackaging from './CustomPackaging'
import Details from './Details'

export default function Admin(){
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(false)
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

  function getOrders(){
    setLoading(true)
    ref.onSnapshot((querySnapshot)=>{
      var items = []
      querySnapshot.forEach((doc)=>{
        items.push(doc.data())
      })
      console.log(items)
      setCustomers(items)
      setLoading(false)
    })
  }
  // let refresh = ()=>{}
  // const returner=(setVal)=>{
  //   refresh = setVal
  // }
  useEffect(()=>{
    getOrders()
  },[])

  return (
  <div>
    Admin section <br/>
    {loading?"Loading":
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
              <Table>
                <thead><tr>
                  <td>First Name</td><td>Last Name</td><td>Email</td><td>Phone Number</td><td>Parcel Size</td>{/*
                  <td>Expected Arrival</td><td>Invoice</td><td>Payment Status</td><td>Fulfillment</td><td>Ordered Time</td> */}
                </tr></thead>
                <tbody>{customers.map((customer,i)=><tr>
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
                  {/* <td>{customer.expectedDate?customer.expectedDate:null}</td>
                  <td><a href={customer.invoice?customer.invoice:null} target="_blank" rel="noopener noreferrer">Show</a></td>
                  <td>{customer.paymentStatus?customer.paymentStatus:null}</td>
                  <td>{customer.fulfillment?customer.fulfillment:null}</td>
                  <td>{customer.time?customer.time:null}</td> */}
                </tr>)
                }</tbody>
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    </Accordion>

    </div>
    }
    
  </div>
  )
}
