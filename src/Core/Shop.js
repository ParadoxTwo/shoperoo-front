import React, {useState} from "react"
import {Button, Dropdown, DropdownButton, Row, Col, Toast} from "react-bootstrap"
import ShopSteps from './ShopSteps'

const Shop = ()=>{
  const links = {
    catagories1: ['Online         ', 'Electronics    ', 'Retail         ', 'Groceries      '],
    catagories2: ['Beauty & Health', 'Home           ', 'Kids           ', 'Automotive     '],
    au:{
      'Online         ': [['Amazon','https://www.amazon.com.au'], ['Ebay','https://www.ebay.com.au'], ['Catch', 'https://www.catch.com.au'], ['Kogan', 'https://www.kogan.com.au']],
      'Electronics    ': [['Apple', 'https://www.apple.com.au'], ['JB Hi-Fi', 'https://www.jbhifi.com.au/'], ['Harvey Norman', 'https://www.harveynorman.com.au/'], ['The Good Guys', 'https://www.thegoodguys.com.au/'], ['EB Games', 'https://www.ebgames.com.au/'], ['Selby', 'https://www.selby.com.au/'], ['Dick Smith', 'https://www.dicksmith.com.au/'], ['Samsung', 'https://www.samsung.com/au/']],
      'Retail         ': [
        ['Adidas','https://www.adidas.com.au/'],['Connor','https://www.connor.com.au/au/'],['Cotton On','https://cottonon.com/AU/'],['Culture Kings', 'https://www.culturekings.com.au/'],
        ['David Jones', 'https://www.davidjones.com/'],
        ['Footlocker', 'https://www.footlocker.com.au/en/men/'],
        ['Gucci', 'https://www.gucci.com/au/en_au/'],
        ['H&M', 'https://www2.hm.com/en_au/index.html'],
        ['JD Sport', 'https://www.jd-sports.com.au/'],
        ['Kmart', 'https://www.kmart.com.au/'],
        ['Levis', 'https://www.levis.com.au/'],
        ['Mayer', 'https://www.myer.com.au/'],
        ['Nike', 'https://www.nike.com/au/'],
        ['Raplh Lauren', 'https://www.ralphlauren.com.au/en'],
        ['Target', 'https://www.target.com.au/'],
        ['YD', 'https://www.yd.com.au/au/'],
        ['Zara', 'https://www.zara.com/au/'],
        ['Nike', 'https://www.nike.com/au']
      ],
      'Groceries      ': [['Aldi', 'https://www.aldi.com.au/en/groceries/'], ['Coles', 'https://www.coles.com.au/'], ['Woolworths', 'https://www.woolworths.com.au/']],
      'Beauty & Health': [
        ['Bath & Body works', 'https://www.bathandbodyworks.com.au/'], 
        ['Body Shop', 'https://www.thebodyshop.com/en-au/'],
        ['Chemist Warehouse', 'https://www.chemistwarehouse.com.au/'],
        ['Mac', 'https://www.maccosmetics.com.au/'],
        ['Mecca', 'https://www.mecca.com.au/'],
        ['Mr Vitamins', 'https://mrvitamins.com.au/'],
        ['My Beauty Spot', 'https://www.mybeautyspot.com.au/'],
        ['Palermo Perfume', 'https://palermoperfumes.com.au/'],
        ['Price Line', 'https://www.priceline.com.au/'],
        ['Sephora', 'https://www.sephora.com.au/']
      ],
      'Home           ': [
        ['Bed, Bath & Table', 'https://www.bedbathntable.com.au/'],
        ['Bunnings', 'https://www.bunnings.com.au/'],
        ['Freedom Sofas', 'https://www.freedom.com.au/'],
        ['Harris Scarfe', 'https://www.harrisscarfe.com.au/'],
        ['House', 'https://www.house.com.au/'],
        ['Ikea', 'https://www.ikea.com/au/en/?ref=gwp-start']
      ],
      'Kids           ': [
        ['Baby Bunting', 'https://www.babybunting.com.au/'],
        ['Shoes & Sox', 'https://shoesandsox.com.au/'],
        ['Smiggle', 'https://www.smiggle.com.au/shop/en/smiggle'],
        ['Toy World', 'https://www.toyworld.com.au/'],
        ['Toys R Us', 'https://www.toysrus.com.au/']
      ],
      'Automotive     ': [
        ['ARB (4x4)', 'https://www.arb.com.au/'],
        ['Bob Jane Tyre Mart', 'https://www.bobjane.com.au/'],
        ['Iron Man (4x4)', 'http://www.ironman4x4.com/'],
        ['Super Cheap Auto', 'https://www.supercheapauto.com.au/']
      ]
    },
    uk:{
      'Online         ': [
        ['Amazon', 'https://www.amazon.co.uk/'], 
        ['Argos', 'https://www.argos.co.uk/'], 
        ['Ebay', 'https://www.ebay.co.uk/']
      ],
      'Electronics    ': [
        ['Apple', 'https://www.apple.com/uk/'],
        ['CeX', 'https://uk.webuy.com/'],
        ['Currys', 'https://www.currys.co.uk/gbuk/index.html'],
        ['Maplin', 'https://www.maplin.co.uk/'],
        ['Samsung', 'https://www.samsung.com/uk/'],
        ['Zavvi', 'https://www.zavvi.com/']
      ],
      'Retail         ': [
        ['Acardia Group', 'https://www.arcadiagroup.co.uk/'],
        ['Adidas', 'https://www.adidas.co.uk/'],
        ['Asos', 'https://www.asos.com/'],
        ['Debenhams', 'https://www.debenhams.com/'],
        ['Gucci', 'https://www.gucci.com/uk/en_gb/'],
        ['H&M', 'https://www2.hm.com/en_gb/index.html'],
        ['Harrolds', 'https://www.harrods.com/en-gb'],
        ['JD Sports', 'https://www.jdsports.co.uk/'],
        ['Little Woods', 'https://www.littlewoods.com/'],
        ['Marks & Spencers', 'https://www.marksandspencer.com/'],
        ['Moss Bros', 'https://www.moss.co.uk/'],
        ['New Look', 'https://www.newlook.com/uk'],
        ['Next', 'https://www.next.co.uk/'],
        ['Nike', 'https://www.nike.com/gb/'],
        ['Primark', 'https://www.primark.com/en'],
        ['Ralph Lauren', 'https://www.ralphlauren.co.uk/'],
        ['Sports Direct', 'https://www.sportsdirect.com/'],
        ['TK Max', 'https://www.tkmaxx.com/uk/en/'],
        ['Watch Finder', 'https://www.watchfinder.co.uk/'],
        ['Zara', 'https://www.zara.com/uk/']
      ],
      'Groceries      ': [
        ['ASDA', 'https://www.asda.com/'],
        ['Ocardo', 'https://www.ocado.com/webshop/startWebshop.do'],
        ['Sainsburry', 'https://www.sainsburys.co.uk/shop/gb/groceries'],
        ['Tesco', 'https://www.tesco.com/groceries/en-GB/'],
        ['Waitrose', 'https://www.waitrose.com/']
      ],
      'Beauty & Health': [
        ['Bath and Body Works', 'https://www.bathandbodyshop.co.uk/'],
        ['Body shop', 'https://www.thebodyshop.com/en-gb/'],
        ['Boots', 'https://www.boots.com/'],
        ['Cult Beauty', 'https://www.cultbeauty.co.uk/'],
        ['Fragrance Direct', 'https://www.fragrancedirect.co.uk/'],
        ['Lancome', 'https://www.lancome.co.uk/'],
        ['Look Fantastic','https://www.lookfantastic.com/'],
        ['Mac', 'https://www.maccosmetics.co.uk/'],
        ['Super Drug', 'https://www.superdrug.com/']
      ],
      'Home           ': [
        ['B&Q', 'https://www.diy.com/'],
        ['Curry', 'https://www.currys.co.uk/gbuk/index.html'],
        ['Ikea', 'https://www.ikea.com/gb/en/'],
        ['John Lewis', 'https://www.johnlewis.com/'],
        ['Screw Fix', 'https://www.screwfix.com/'],
        ['Wickes', 'https://www.wickes.co.uk/']
      ],
      'Kids           ': [
        ['Children Saloon', 'https://www.childrensalon.com/'],
        ['Childrens Outlet', 'https://www.childrensoutlet.co.uk/'],
        ['Kidly', 'https://www.kidly.co.uk/'],
        ['Next', 'https://www.next.co.uk/'],
        ['Smiggle', 'https://www.smiggle.co.uk/shop/en/smiggleuk'],
        ['Very Uk', 'https://www.very.co.uk/']
      ],
      'Automotive     ': [
        ['Auto Parts Pro', 'https://www.autopartspro.co.uk/'],
        ['Autodoc', 'https://www.autodoc.co.uk/'],
        ['Best Parts Store', 'https://www.bestpartstore.co.uk/'],
        ['Buy Car Parts', 'https://www.buycarparts.co.uk/'],
        ['Euro Car Parts', 'https://www.eurocarparts.com/'],
      ]
    }
  }
  const [displayAU, setDisplayAU] = useState('none')
  const [displayUK, setDisplayUK] = useState('none')
  const [note, setNote] = useState(false)
  const [displayDefault, setDisplayDefault] = useState('block')
  const countries = ["Australia", "United Kingdom"]
  const closeNote = ()=>{
    setNote(false)
  }
  const showNote = ()=>{
    console.log("Showing")
    setNote(true)
    setTimeout(closeNote, 3000)
  }
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
      <Toast style={{zIndex: 1000, position: 'absolute'}} show={note} onClose={closeNote}>
        <Toast.Header>
          <strong className="mr-auto">Note!</strong>
          <small></small>
        </Toast.Header>
        <Toast.Body>We don’t ship anything with batteries including phones, laptops etc.</Toast.Body>
      </Toast>
      <section id='shops' style={{backgroundImage:'url(default2.jpg)', backgroundSize: 'cover', padding: '6vw', textAlign:'center', display: displayDefault}}>
      <DropdownButton title={<div style={{width: '120px'}}>Select a country</div>} style={{padding:'2vw', marginLeft: 'auto', marginRight: 'auto'}}>
        {countries.map((country, i)=><Dropdown.Item key={i} onSelect={()=>{ console.log(country); changeCountry(country)}}>{country}</Dropdown.Item>)}
      </DropdownButton>
      </section>
      <section id='au-shops' style={{backgroundImage:`url(australia_shop.jpg)`, padding: '6vw', display: displayAU}}>
        <DropdownButton title={<div style={{width: '120px'}}>Select a country</div>} style={{padding:'2vw'}}>
          {countries.map((country, i)=><Dropdown.Item key={i} onSelect={()=>{ console.log(country); changeCountry(country)}}>{country}</Dropdown.Item>)}
        </DropdownButton>
        <h2 style={{color:'white', marginBottom: '2vw'}}>Australia</h2>
        <Row>
          {links.catagories1.map((catagory, i)=><Col onClick={catagory==='Electronics    '?showNote:null}>
            <DropdownButton title={<div onClick={catagory==='Electronics    '?showNote:null} style={{width: '120px'}} onClick={catagory==='Electronics    '?showNote:null}>{catagory}</div>} style={{padding:'2vw'}}>
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
        <DropdownButton title={<div style={{ width: '120px'}}>Select a country</div>} style={{ padding:'2vw'}}>
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