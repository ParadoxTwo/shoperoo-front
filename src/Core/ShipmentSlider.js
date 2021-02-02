import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import firebase from '../firebase'

const useStyles = makeStyles({
  PC: {
    width: 500,
  },
  Mobile: {
    height: 500
  }
});

const marks = [
  {
    value: 0,
    label: 'Awaiting Parcel',
  },
  {
    value: 1,
    label: 'Received Parcel',
  },
  {
    value: 2,
    label: 'Shipped',
  },
  {
    value: 3,
    label: 'Arrived at warehouse',
  },
  {
    value: 4,
    label: 'Dispatched',
  },
];

function valuetext(value) {
  return value;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function ShipmentSlider({id, defaultValue, setValue}) {
  const classes = useStyles();

  const translate = (value)=>{
    switch(value){
      case 0: return 'Awaiting Parcel'
      case 1: return 'Received Parcel'
      case 2: return 'Shipped'
      case 3: return 'Arrived at warehouse'
      case 4: return 'Dispatched'
      default: return 'Unknown'
    }
  }
  const ref = firebase.firestore().collection("customers")
  const handleSliderChange = (event, newValue)=>{
      console.log("Change status for ID: "+id+" to "+newValue)
      //code
      ref.doc(id).update({shipmentStatus: translate(newValue)});
  }
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

  return (
    <div className={isMobile?classes.Mobile:classes.PC}>
      <Typography id="discrete-slider-restrict" gutterBottom>
        Select the current parcel status:
      </Typography>
      <br/>
      <Slider
        defaultValue={defaultValue}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        min={0}
        max={4}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={handleSliderChange}
        orientation={isMobile?'vertical':'horizontal'}
      />
      <br/>
    </div>
  );
}
