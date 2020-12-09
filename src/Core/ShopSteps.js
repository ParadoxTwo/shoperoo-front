import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Packaging from './Packaging'
import Invoice from './Invoice'
import Payment from './Payment'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: '20px'
  },
  buttons: {
    textAlign: 'center',
    marginBottom: '10px'
  }
}));

function getSteps() {
  return ['Select Package Size', 'Upload Invoice', 'Make Payment'];
}

var details = {
  id: '',
  size: 'custom',
  fileName: '',
  fname: '',
  lname: '',
  email: '', 
  invoice: '',
  phone: '',
  address: '',
  expectedDate: ''
}
const setSize = (size)=>{
  details.size = size;
  console.log(size)
}
const setFileName = (name)=>{
  details.fileName = name;
  console.log(name)
}
const setInvoiceFile = (name)=>{
  details.invoice = name;
  console.log(name)
}
const setFirstName = (name)=>{
  details.fname = name;
  console.log(name)
}
const setAddress = (address)=>{
  details.address = address;
  console.log(address)
}
const setLastName = (name)=>{
  details.lname = name;
  console.log(name)
}
const setEmail = (email)=>{
  details.email = email;
  console.log(email)
}
const setPhoneNumber = (phone)=>{
  details.phone = phone;
  console.log(phone)
}
const setId = (id)=>{
  details.id = id;
  console.log(id)
}
const setExpectedDate = (date)=>{
  details.expectedDate = date;
  console.log(date)
}
const getSaveDetails = ()=>{
  var save = {
    size: details.size,
    fname: details.fname,
    lname: details.lname,
    email: details.email, 
    phone: details.phone,
    address: details.address, 
    expectedDate: details.expectedDate
  }
  return save
}
const getFiles = ()=>[details.invoice, details.fileName]
function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Packaging setPhoneNumber={setPhoneNumber} setEmail={setEmail} setFirstName={setFirstName} setLastName={setLastName} setFileName={setFileName} setSize={setSize}/>;
    case 1:
      return <Invoice setExpectedDate={setExpectedDate} setPhoneNumber={setPhoneNumber} getEmail={()=>details.email} getLastName={()=>details.lname} getFirstName={()=>details.fname} getPhoneNumber={()=>details.phone} setAddress={setAddress} getSize={()=>details.size} setEmail={setEmail} setFirstName={setFirstName} setLastName={setLastName} setInvoiceFile={setInvoiceFile} setSize={setSize}/>;
    case 2:
      return <Payment setId={setId} getId={()=>details.id} getFiles={getFiles} getSaveDetails={getSaveDetails} />;
    default:
      return 'Unknown stepIndex';
  }
}


export default function ShopSteps() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div className={classes.buttons}>
            <Typography className={classes.instructions}>All steps completed<br/> 
              Size: {details.size}<br/>
              {/* File: {details.fileName}<br/>   */}
              First Name: {details.fname}<br/>  
              Last Name: {details.lname}<br/>  
              Email: {details.email}<br/> 
              {/* Invoice File: {details.invoice}<br/>   */}
              Phone Number: {details.phone}<br/>  
              Address: {details.address}<br/>
              ID: {details.id}<br/>
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className={classes.buttons}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
