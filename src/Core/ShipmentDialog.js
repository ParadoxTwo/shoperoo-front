import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ShipmentSlider from './ShipmentSlider'

export default function ShipmentDialog(props) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  const translate = (value)=>{
    switch(value){
      case 'Received Parcel': return 0
      case 'Shipped': return 1
      case 'Arrived at warehouse': return 2
      case 'Dispatched': return 3
      default: return -1
    }
  }
  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Set shipment status</DialogTitle>
      <div style={{ textAlign: 'center', padding: '120px 90px 120px 90px'}}>
        <ShipmentSlider id={props.id} defaultValue={translate(props.shipmentStatus)}/>
      </div>
    </Dialog>
  );
}

ShipmentDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};