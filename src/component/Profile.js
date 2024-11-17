import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

 

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose( );
  };

  const logoutFun=()=>{
    localStorage.clear()
    window.location.reload()
  }
  

  return (
    <Dialog onClose={handleClose} open={open} >
      <DialogTitle>Logout User</DialogTitle>
       <Button variant="contained"  sx={{m:3}} onClick={logoutFun}>Logout</Button>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  
};

export default function Profile( ) {
  const [open, setOpen] = React.useState(false);
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
     
  };

  return (
    <div>
      <ExpandMore onClick={handleClickOpen} />
      <SimpleDialog
      sx={{p:2}}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
