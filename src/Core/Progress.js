import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Received Parcel', 'Shipped', 'Arrived at warehouse', 'Dispatched']
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `We've received your parcel which will be shipped soon.`;
    case 1:
      return `Your parcel has been shipped to Sri Lanka.`;
    case 2:
      return `Your parcel has arrived at our warehouse and will be dispatched soon.`;
    case 3:
      return `Your parcel has been dispatched to your delivery address and will be delivered at your door.`;
    default:
      return 'Unknown';
  }
}

export default function Progress({handleTrack, current}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(current());
  const steps = getSteps();

  const handleTrackButton = ()=>{
    var trackNum = parseInt(current())
    console.log("Track: "+trackNum)
    setActiveStep(trackNum)
  }
  useEffect(()=>{
    let num = parseInt(current())
    console.log("Setting active step: "+num)
    setActiveStep(num)
  },[])

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - your order has been delivered!</Typography>
        </Paper>
      )}
      <button onClick={handleTrackButton} class="btn btn-primary btn-md">Track</button>
    </div>
  );
}
