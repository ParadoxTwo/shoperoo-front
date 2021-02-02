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
      case 'Awaiting Parcel': return 0
      case 'Received Parcel': return 1
      case 'Shipped': return 2
      case 'Arrived at warehouse': return 3
      case 'Dispatched': return 4
      default: return -1
    }
  }
  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Set shipment status</DialogTitle>
      <div style={{ textAlign: 'center',  marginRight: '60px', marginLeft: '60px', marginTop: '20px', marginBottom: '20px'}}>
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