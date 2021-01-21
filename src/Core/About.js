import React from "react"
import {Row, Col} from "react-bootstrap"
import './about.css'
const About = ()=>{
  const strip = {backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '1vw 0px 1vw 0px', fontSize: '20px'}
  const strip2 = {backgroundColor: 'rgba(0,0,0,0.0)', borderRadius: '1vw 0px 1vw 0px', fontSize: '20px'}
  return(
    <div>
      <div>
        <Row style={{height: 'auto'}}>
          <Col className="center" md="6" style={{width: '100%', height: '500px', backgroundSize: 'cover', backgroundImage: `url('delivery.jpg')`, textAlign: 'center'}}>
            <h1 style={{marginTop:'30%'}} class='neon'>What we do?</h1>
          </Col>
          <Col className="center" md="6" style={{width: '100%', backgroundColor: 'black', color: 'white', padding: '10px 20px 10px 20px'}}>
            <h4 style={{marginTop:'22%', marginBottom: '22%'}}>Fast and friendly, we offer professional transportation services throughout Sri Lanka. A subsidiary of Laksiri Seva who have been providing logistics solutions for more than 30 years. We are committed to provide the highest quality of service at a the most competitive price. 
Connecting you with the rest of the world. </h4>
          </Col>
        </Row>
        <Row style={{textAlign: 'center', color: 'white', backgroundImage : `url('shop_online.jpg')`, backgroundSize: 'cover', padding: '100px'}}>
          
          <h1 style={{marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '1vw 0px 1vw 0px'}}>Ship Almost Anything If you Can Find It Online</h1>
          <p style={strip}>
            <span style={strip2}>Buy anything from Clothes ,accessories, furniture, gardening, pets and baby products. The list just goes on. </span>
            <br/>
            <span style={strip2}>For the first time ever, buy products such as Sephora, Gucci, Zara, H&M and many more from the comfort of your own home. Not to forget the groceries which you can purchase online. </span>
            <br/>
            <span style={strip2}>Don't ever pay a marked up price for a chocolate bar ever again.</span> 
            <br/>
            <span style={strip2}>Now you have the ability to select and compare prices between countries so you know you're getting the best deal. Bringing back the buying power to you.</span>
            <br/>
            <span style={strip2}>Best part? You pay the domestic price, not the "Sri Lankan price"</span> 
            <br/>
            <span style={strip2}>Revolutionize the way you shop online.</span>
            <br/>
            <span style={strip2}>Excited already?</span>
            <br/>
            <span style={strip2}>Contact us for more details.</span>
          </p>
        </Row>
      </div>
      <div>

      </div>
    </div>
  )
}

export default About;