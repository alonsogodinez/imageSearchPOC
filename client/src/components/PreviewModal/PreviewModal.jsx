import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  image: {
    maxWidth: "500px"
  },
  backDrop: {
    backgroundColor: "rgba(0,0,0,0.8)"
  }
}));

export default function PreviewModal({isOpen, setModalOpen, img}) {
  const classes = useStyles();

  return (
    <Fragment>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={() => setModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          classes: {
            root: classes.backDrop
          }
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <img
              className={classes.image}
              src={img.url}
              alt={img.text}/>
          </div>
        </Fade>
      </Modal>
    </Fragment>
  );
}
