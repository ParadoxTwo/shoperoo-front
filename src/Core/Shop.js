import React, {useState} from "react"
import {Button, Dropdown, DropdownButton, Row, Col} from "react-bootstrap"
import ShopSteps from './ShopSteps'


const Shop = ()=>{
  const links = {
    catagories1: ['Online         ', 'Electronics    ', 'Retail         ', 'Groceries      '],
    catagories2: ['Beauty & Health', 'Home           ', 'Kids           ', 'Automotive     '],
    au:{
      'Online         ': [['Amazon','https://www.amazon.com.au'], ['Ebay','https://www.ebay.com.au'], ['Catch', 'https://www.catch.com.au'], ['Kogan', 'https://www.kogan.com.au']],
      'Electronics    ': [['Apple', 'https://www.apple.com.au'], ['JB Hi-Fi', 'https://www.jbhifi.com.au/'], ['Harvey Norman', 'https://www.harveynorman.com.au/'], ['The Good Guys', 'https://www.thegoodguys.com.au/'], ['EB Games', 'https://www.ebgames.com.au/'], ['Selby', 'https://www.selby.com.au/'], ['Dick Smith', 'https://www.dicksmith.com.au/'], ['Samsung', 'https://www.samsung.com/au/']],
      'Retail         ': [['Nike', 'https://www.nike.com/au']],
      'Groceries      ': [],
      'Beauty & Health': [],
      'Home           ': [],
      'Kids           ': [],
      'Automotive     ': []
    },
    uk:{
      'Online         ': [],
      'Electronics    ': [],
      'Retail         ': [],
      'Groceries      ': [],
      'Beauty & Health': [],
      'Home           ': [],
      'Kids           ': [],
      'Automotive     ': []
    }
  }
  const [displayAU, setDisplayAU] = useState('none')
  const [displayUK, setDisplayUK] = useState('none')
  const [displayDefault, setDisplayDefault] = useState('block')
  const countries = ["Australia", "United Kingdom"]
  const changeCountry = (country)=>{
    if(country==="Australia"){
      setDisplayAU('block')
      setDisplayUK('none')
      setDisplayDefault('none')
    }
    else if(country==="United Kingdom"){
      setDisplayAU('none')
      setDisplayUK('block')
      setDisplayDefault('none')
    }
    else {
      setDisplayAU('none')
      setDisplayUK('none')
      setDisplayDefault('block')
    }
  }
  return(
    <div>
      <section id='shops' style={{backgroundImage:'url(default.jpg)', padding: '6vw', display: displayDefault}}>
      <DropdownButton title={<div style={{width: '120px'}}>Select a country</div>} style={{padding:'2vw'}}>
        {countries.map((country, i)=><Dropdown.Item key={i} onSelect={()=>{ console.log(country); changeCountry(country)}}>{country}</Dropdown.Item>)}
      </DropdownButton>
      </section>
      <section id='au-shops' style={{backgroundImage:`url(australia_shop.jpg)`, padding: '6vw', display: displayAU}}>
        <DropdownButton title={<div style={{width: '120px'}}>Select a country</div>} style={{padding:'2vw'}}>
          {countries.map((country, i)=><Dropdown.Item key={i} onSelect={()=>{ console.log(country); changeCountry(country)}}>{country}</Dropdown.Item>)}
        </DropdownButton>
        <h2 style={{color:'white', marginBottom: '2vw'}}>Australia</h2>
        <Row>
          {links.catagories1.map((catagory, i)=><Col>
            <DropdownButton title={<div style={{width: '120px'}}>{catagory}</div>} style={{padding:'2vw'}}>
              {links.au[catagory].map((value,i)=><Dropdown.Item href={value[1]} target="_blank" rel="noopener noreferrer" >{value[0]}</Dropdown.Item>)}
            </DropdownButton>
          </Col>)}
        </Row>
        <Row>
        {links.catagories2.map((catagory, i)=><Col>
            <DropdownButton title={<div style={{width: '120px'}}>{catagory}</div>} style={{padding:'2vw'}}>
              {links.au[catagory].map((value,i)=><Dropdown.Item href={value[1]} target="_blank" rel="noopener noreferrer" >{value[0]}</Dropdown.Item>)}
            </DropdownButton>
          </Col>)}
        </Row>
        <Row style={{color: 'white'}}>
          <Col>
            <h2>
              Delivery Address
            </h2>
            <h3>
              Melbourne: 
            </h3>
            <h3>
              Sydney: 
            </h3>
          </Col>
        </Row>
      </section>
      <section id='uk-shops' style={{backgroundImage:`url(UK_shop.jpg)`, padding: '6vw', display: displayUK}}>
        <DropdownButton title={<div style={{width: '120px'}}>Select a country</div>} style={{padding:'2vw'}}>
          {countries.map((country, i)=><Dropdown.Item key={i} onSelect={()=>{ console.log(country); changeCountry(country)}}>{country}</Dropdown.Item>)}
        </DropdownButton>
        <h2 style={{color:'white', marginBottom: '2vw'}}>United Kingdom</h2>
        <Row>
          {links.catagories1.map((catagory, i)=><Col>
            <DropdownButton title={<div style={{width: '120px'}}>{catagory}</div>} style={{padding:'2vw'}}>
              {links.uk[catagory].map((value,i)=><Dropdown.Item href={value[1]} target="_blank" rel="noopener noreferrer" >{value[0]}</Dropdown.Item>)}
            </DropdownButton>
          </Col>)}
        </Row>
        <Row>
        {links.catagories2.map((catagory, i)=><Col>
            <DropdownButton title={<div style={{width: '120px'}}>{catagory}</div>} style={{padding:'2vw'}}>
              {links.uk[catagory].map((value,i)=><Dropdown.Item href={value[1]} target="_blank" rel="noopener noreferrer" >{value[0]}</Dropdown.Item>)}
            </DropdownButton>
          </Col>)}
        </Row>
        <Row style={{color: 'white'}}>
          <Col>
            <h2>
              Delivery Address
            </h2>
            <h3>
              London: 
            </h3>
          </Col>
        </Row>
      </section>
      <section>
        <ShopSteps/>
      </section>
    </div>)
}
export default Shop;