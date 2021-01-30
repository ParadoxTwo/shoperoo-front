import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import { Tab, Nav, Row, Col, Form, Button} from 'react-bootstrap'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{marginLeft: '20px'}}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 'auto',
    width: 'auto',
    textAlign: 'left'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: '20vw',
  },
}));


export default function Packaging(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [isMobile, setMobile] = React.useState(false)
  var mobilityCheck = () =>{
    if (window.innerWidth <= 760){
      setMobile(true)
    }
    else
      setMobile(false)
  }
  React.useEffect(()=>{
    mobilityCheck()
  },[])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const boxOption = {
    display: 'inline-block'
  }
  return (
    <div> 
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav fill variant="tabs" className={isMobile?"flex-row":"flex-column"} style={{borderBottom: 'none'}}>
              <Nav.Item>
                <Nav.Link style={{borderTop: 'none', color: '#000'}} eventKey="first">Preset</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{borderTop: 'none', color: '#000'}} eventKey="second">Custom</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h2>Parcel/ Satchel Sizes</h2> 
                Once your order is received  at our warehouse, our staff will place your item in our Standardized boxes for tracking and safety purposes. <br/>
                Our staff will inform you of the box sizes needed for your parcel.

                <span style={{fontSize:'x-small'}}> <br/>
                  *Price Includes door to door delivery within Colombo 1-15 <br/>
                  Outside Colombo- $7 <br/>
                  *All prices are quoted in AUD
                </span>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Select Size</FormLabel>
                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                      <Row>
                        {/* <Col>
                          <FormControlLabel
                            value="small"
                            control={<Radio color="primary" />}
                            label={<div style={{textAlign: 'center'}}><img src='/small.png'/><br/>$9</div>}
                            onChange={()=>props.setSize("small")}
                            labelPlacement="top"
                          />
                        </Col> */}
                        <div style={boxOption}>
                          <FormControlLabel
                            value="medium"
                            control={<Radio color="primary" />}
                            label={<div style={{textAlign: 'center'}}>
                              <Flippy
                                flipOnHover={!isMobile} // default false
                                flipOnClick={isMobile} // default false
                                flipDirection="horizontal" // horizontal or vertical
                                // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                // if you pass isFlipped prop component will be controlled component.
                                // and other props, which will go to div
                                style={{ width: '300px', height: '300px' }} /// these are optional style, it is not necessary
                              >
                                <FrontSide>
                                  <img src='/med.png'/><br/>$12
                                </FrontSide>
                                <BackSide>
                                  Dimensions of box: <br/>
                                  39 x 28 x 14 CM. Can fit approximately 3Kg <br/>
                                </BackSide>
                              </Flippy>  
                            </div>}
                            onChange={()=>props.setSize("medium")}
                            labelPlacement="top"
                          />
                        </div>
                        <div style={boxOption}>
                          <FormControlLabel
                            value="large"
                            control={<Radio color="primary" />}
                            label={<div style={{textAlign: 'center'}}>
                              <Flippy
                                flipOnHover={!isMobile} // default false
                                flipOnClick={isMobile} // default false
                                flipDirection="horizontal" // horizontal or vertical
                                // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                // if you pass isFlipped prop component will be controlled component.
                                // and other props, which will go to div
                                style={{ width: '300px', height: '300px' }} /// these are optional style, it is not necessary
                              >
                                <FrontSide>
                                  <img src='/large.png'/><br/>$19
                                </FrontSide>
                                <BackSide>
                                  Dimensions of box: <br/>
                                  43 x 32 x 18 CM. Can fit approximately 5Kg <br/>
                                </BackSide>
                              </Flippy>
                              
                              </div>}
                            onChange={()=>props.setSize("large")}
                            labelPlacement="top"
                          />
                        </div>
                      </Row>
                      <Row>
                        <div style={boxOption}>
                          <FormControlLabel
                            value="extraL"
                            control={<Radio color="primary" />}
                            label={<div style={{textAlign: 'center'}}>
                              <Flippy
                                flipOnHover={!isMobile} // default false
                                flipOnClick={isMobile} // default false
                                flipDirection="horizontal" // horizontal or vertical
                                // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                // if you pass isFlipped prop component will be controlled component.
                                // and other props, which will go to div
                                style={{ width: '300px', height: '300px' }} /// these are optional style, it is not necessary
                              >
                                <FrontSide>
                                  <img src='/extraL.png'/><br/>$28
                                </FrontSide>
                                <BackSide>
                                  Dimensions of box: <br/>
                                  Unknown <br/>
                                </BackSide>
                              </Flippy>
                              </div>}
                            onChange={()=>props.setSize("extraL")}
                            labelPlacement="top"
                          />
                        </div>
                        <div style={boxOption}>
                          <FormControlLabel
                            value="carton"
                            control={<Radio color="primary" />}
                            label={<div style={{textAlign: 'center'}}>
                              <Flippy
                                flipOnHover={!isMobile} // default false
                                flipOnClick={isMobile} // default false
                                flipDirection="horizontal" // horizontal or vertical
                                // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                // if you pass isFlipped prop component will be controlled component.
                                // and other props, which will go to div
                                style={{ width: '300px', height: '300px' }} /// these are optional style, it is not necessary
                              >
                                <FrontSide>
                                  <img src='/carton.png'/><br/>$50
                                </FrontSide>
                                <BackSide>
                                  Dimensions of box: <br/>
                                  41 x 44 x 32 CM. Can fit roughly around 11Kg <br/>
                                </BackSide>
                              </Flippy>
                              </div>}
                            onChange={()=>props.setSize("carton")}
                            labelPlacement="top"
                          />
                        </div>
                        <div style={boxOption}>
                          <br/>
                          *If you're purchasing groceries. <br/>
                          We advice you purchase a carton from us <br/>
                          and our friendly staff will top up the carton. <br/>
                          <br/>
                        </div>
                      </Row>
                    </RadioGroup>
                  </FormControl>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control onChange={e=>props.setFirstName(e.target.value)} type="text" placeholder="Enter first name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control onChange={e=>props.setLastName(e.target.value)} type="text" placeholder="Enter last name" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control onChange={e=>props.setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control onChange={e=>props.setPhoneNumber(e.target.value)} type="number" placeholder="Phone number" />
                    </Form.Group>
                  </Form.Row>

                    <Form.Group controlId="formGridDescription">
                      <Form.Label>Description</Form.Label>
                      <Form.Control onChange={e=>props.setCustomDescription(e.target.value)} type="text" placeholder="Enter description of goods" />
                    </Form.Group>

                    <Form.File id="formcheck-api-regular">
                      <Form.File.Label>Upload Image</Form.File.Label>
                      <Form.File.Input onChange={event=>props.setFileName(event.target.files[0])} type="file" accept=".jpg, .png, .jpeg"/>
                    </Form.File>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
    // <div className={classes.root}>
    //   <Tabs
    //     orientation="vertical"
    //     variant="scrollable"
    //     value={value}
    //     onChange={handleChange}
    //     aria-label="Vertical tabs example"
    //     className={classes.tabs}
    //   >
    //     <Tab label="Sizes" className={classes.tab} {...a11yProps(0)} />
    //     <Tab label="Custom" className={classes.tab} {...a11yProps(1)} />
    //   </Tabs>
    //   <TabPanel  value={value} index={0}>
      
    //   </TabPanel>
    //   <TabPanel value={value} index={1}>
        
    //   </TabPanel>
    // </div>
  );
}
