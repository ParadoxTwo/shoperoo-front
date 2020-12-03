import React, {useState, useEffect} from "react"
import firebase from '../firebase'
import {Table, Card, Accordion, Button} from 'react-bootstrap'

export default function Admin(){
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection("customers")

  function getSchools(){
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

  useEffect(()=>{
    getSchools()
  },[])

  return (
  <div>
    Admin section <br/>
    {loading?"Loading":
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Customers
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Table>
                <thead><tr><td>First Name</td><td>Last Name</td><td>Email</td><td>Phone Number</td><td>Parcel Size</td></tr></thead>
                <tbody>{customers.map((customer,i)=><tr>
                  <td>{customer.fname}</td>
                  <td>{customer.lname}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.size}</td>
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
