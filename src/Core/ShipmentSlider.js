import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import firebase from '../firebase'

const useStyles = makeStyles({
  PC: {
    width: 400,
  },
  Mobile: {
    height: 400
  }
});

const marks = [
  {
    value: 0,
    label: 'Received Parcel',
  },
  {
    value: 1,
    label: 'Shipped',
  },
  {
    value: 2,
    label: 'Arrived at warehouse',
  },
  {
    value: 3,
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
      case 0: return 'Received Parcel'
      case 1: return 'Shipped'
      case 2: return 'Arrived at warehouse'
      case 3: return 'Dispatched'
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
        Set Shipment Status
      </Typography>
      <Slider
        defaultValue={defaultValue}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        min={0}
        max={3}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={handleSliderChange}
        orientation={isMobile?'vertical':'horizontal'}
      />
    </div>
  );
}
