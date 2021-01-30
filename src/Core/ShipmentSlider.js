import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const marks = [
  {
    value: 'Receiving parcel',
    label: 'Receiving parcel',
  },
  {
    value: 'Shipping',
    label: 'Shipping',
  },
  {
    value: 'Arrived at warehouse',
    label: 'Arrived at warehouse',
  },
  {
    value: 'Dispatched',
    label: 'Dispatched',
  },
];

function valuetext(value) {
  return value;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function ShipmentSlider({defaultValue, setValue}) {
  const classes = useStyles();
  const handleSliderChange = e=>{
      console.log(e.target.value)
  }
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-restrict" gutterBottom>
        Set Shipment Status
      </Typography>
      <Slider
        defaultValue={defaultValue}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={handleSliderChange}
      />
    </div>
  );
}
