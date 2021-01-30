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

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <ShipmentSlider defaultValue={props.shipmentStatus}/>
    </Dialog>
  );
}

ShipmentDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};