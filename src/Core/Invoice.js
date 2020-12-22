import React, {useState} from "react"
import {Row, Col, Form, Button} from 'react-bootstrap'
import DatePicker from 'react-date-picker';

const Invoice = (props)=>{
  const [date, showExpectedDate] = useState(new Date())
  const setExpectedDate = (date)=>{
    showExpectedDate(date)
    props.setExpectedDate(date)
  }
  return (<div style={{padding: '20px'}}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control defaultValue={props.getFirstName()} onChange={(event)=>props.setFirstName(event.target.value)} type="text" placeholder="Enter first name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control defaultValue={props.getLastName()} onChange={(event)=>props.setLastName(event.target.value)} type="text" placeholder="Enter last name" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control defaultValue={props.getEmail()} onChange={(event)=>props.setEmail(event.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control defaultValue={props.getPhoneNumber()} onChange={(event)=>props.setPhoneNumber(event.target.value)} type="number" placeholder="Phone number" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridSize">
               <Form.Label>Parcel Size</Form.Label>
               <Form.Control id="opts" onClick={()=>props.setSize(document.getElementById('opts').value)} as="select" defaultValue={props.getSize()}>
                  <option value='small'>Small</option>
                  <option value='medium'>Medium</option>
                  <option value='large'>Large</option>
                  <option value='extraL'>Extra Large</option>
                  <option value='carton'>Carton</option>
                  <option value='custom'>Custom</option>
               </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress">
              <Form.Label>Delivery Address in Sri Lanka</Form.Label>
              <Form.Control type="address" onChange={event=>props.setAddress(event.target.value)} placeholder="Address" />
            </Form.Group>
          </Form.Row>
          <Row>
            <Form.Group as={Col} controlId="formGridAddress">
            <Form.Label>Expected date of arrival in warehouse</Form.Label>
            <br/>
            <span style={{backgroundColor:'#1110', padding:'10px', borderWidth: '1px', borderColor: '#1116', borderStyle: 'solid', borderRadius: '5px'}}>
              <DatePicker
                onChange={setExpectedDate}
                value={date}
              />
            </span>
            </Form.Group>
          </Row>
          
          <Form.File id="formcheck-api-regular">
            <Form.File.Label>Upload Invoice</Form.File.Label>
            <Form.File.Input label="Upload" onChange={event=>props.setInvoiceFile(event.target.files[0])} type="file" accept=".jpg, .png, .jpeg, .pdf"/>
          </Form.File>
        </Form>
    </div>)
}
export default Invoice;
