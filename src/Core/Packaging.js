import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Row, Col, Form, Button} from 'react-bootstrap'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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
    width: 'auto',
  },
}));


export default function Packaging(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Sizes" className={classes.tab} {...a11yProps(0)} />
        <Tab label="Custom" className={classes.tab} {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <h2>Parcel/ Satchel Sizes</h2> 
      Once your order is received  at our warehouse, our staff will place your item in our Standardized boxes for tracking and safety purposes. <br/>
      Our staff will inform you of the box sizes needed for your parcel.

      <span style={{fontSize:'0.85vw'}}> <br/>
        *Price Includes door to door delivery within Colombo 1-15 <br/>
        Outside Colombo- $7 <br/>
        *All prices are quoted in AUD
      </span>
        <FormControl component="fieldset">
          <FormLabel component="legend">Select Size</FormLabel>
          <RadioGroup row aria-label="position" name="position" defaultValue="top">
            <Row>
              <Col>
                <FormControlLabel
                  value="small"
                  control={<Radio color="primary" />}
                  label={<div style={{textAlign: 'center'}}><img src='/small.png'/><br/>$9</div>}
                  onChange={()=>props.setSize("small")}
                  labelPlacement="top"
                />
              </Col>
              <Col>
                <FormControlLabel
                  value="medium"
                  control={<Radio color="primary" />}
                  label={<div style={{textAlign: 'center'}}><img src='/med.png'/><br/>$12</div>}
                  onChange={()=>props.setSize("medium")}
                  labelPlacement="top"
                />
              </Col>
              <Col>
                <FormControlLabel
                  value="large"
                  control={<Radio color="primary" />}
                  label={<div style={{textAlign: 'center'}}><img src='/large.png'/><br/>$19</div>}
                  onChange={()=>props.setSize("large")}
                  labelPlacement="top"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormControlLabel
                  value="extraL"
                  control={<Radio color="primary" />}
                  label={<div style={{textAlign: 'center'}}><img src='/extraL.png'/><br/>$28</div>}
                  onChange={()=>props.setSize("extraL")}
                  labelPlacement="top"
                />
              </Col>
              <Col>
                <br/>
                *If you're purchasing groceries. <br/>
                We advice you purchase a carton from us <br/>
                and our friendly staff will top up the carton. <br/>
                <br/>
              </Col>
              <Col>
                <FormControlLabel
                  value="carton"
                  control={<Radio color="primary" />}
                  label={<div style={{textAlign: 'center'}}><img src='/carton.png'/><br/>$50</div>}
                  onChange={()=>props.setSize("carton")}
                  labelPlacement="top"
                />
              </Col>
            </Row>
          </RadioGroup>
        </FormControl>
        Dimensions of boxes: <br/>

        Small-  22 x 16x 7 CM. Can fit approximately 1Kg <br/>

        Medium- 39 x 28 x 14 CM. Can fit approximately 3Kg <br/>

        Large- 43 x 32 x 18 CM. Can fit approximately 5Kg <br/>

        Carton - 41 x 44 x 32 CM. Can fit roughly around 11Kg <br/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Phone number" />
            </Form.Group>
          </Form.Row>

            <Form.Group controlId="formGridDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description of goods" />
            </Form.Group>

            <Form.File id="formcheck-api-regular">
              <Form.File.Label>Upload Image</Form.File.Label>
              <Form.File.Input onChange={event=>props.setFileName(event.target.files[0])} type="file" accept=".jpg, .png, .jpeg"/>
            </Form.File>
        </Form>
      </TabPanel>
    </div>
  );
}
