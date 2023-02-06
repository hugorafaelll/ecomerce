import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ModalStandart = (props) => {
  const { openModal, handleCloseModal, item } = props;

  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{item.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {item.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary" autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalStandart;
