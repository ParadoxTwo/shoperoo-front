import React from "react"
import {Card, Button, Container, Row, Col} from "react-bootstrap"
import Carousel from './Carousel'

var index = 0;

const selectIndex=(i)=>index=i;

const Home = ()=>
    <div style={{backgroundImage: 'url(shopping_blur.jpg)'}}> 
      <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.0)', color: 'white', width: 'auto'}}>
        <Container fluid="md" >
              <Card.Body style={{fontSize: '2vw', marginRight: 'auto', marginLeft: 'auto'}}>
                <Card.Title style={{fontSize: '6vw'}}>
                  If you can find it, <br/>We can ship it 
                </Card.Title>
                <Card.Text >
                  Connecting Sri Lanka with the Rest of the World
                </Card.Text>
              </Card.Body>
            {/* <Col style={{marginTop: 'auto', marginBottom: 'auto'}}>
              <Card.Img variant="top" src="/shopping_bag.jpg" />
            </Col> */}
        </Container>
      </Card> 
      <br/>
      <Carousel selectIndex={selectIndex}/>
    </div>

export default Home;