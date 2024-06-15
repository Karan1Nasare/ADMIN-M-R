import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  dialogPaper: {
    width: '800px',
    height: '400px',
    backgroundColor: '#0B1739',
    borderRadius: '10px',
    color: 'white',
    padding: '20px',
  },
  dialogTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    borderBottom: '1px solid #526B7A',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  closeButton: {
    fontSize: '24px',
    cursor: 'pointer',
    color: 'white',
  },
  bannerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  bannerText: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    padding: '10px',
    borderRadius: '5px',
  },
  bannerLogo: {
    width: '50px',
    height: '50px',
    marginBottom: '10px',
  },
  knowMoreButton: {
    backgroundColor: 'white',
    color: '#0B1739',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
  },
}));

const BannerPreviewDialog = ({ isOpen, onClose }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      classes={{ paper: classes.dialogPaper }}
    >
      <div className={classes.dialogTitle}>
        <span>Banner Preview</span>
        <span className={classes.closeButton} onClick={onClose}>
          &times;
        </span>
      </div>
      <DialogContent>
        <div className={classes.bannerContent}>
          <img
            src='https://via.placeholder.com/800x400'
            alt='Banner Preview'
            className={classes.bannerImage}
          />
          <div className={classes.bannerText}>
            <img
              src='https://via.placeholder.com/50'
              alt='Logo'
              className={classes.bannerLogo}
            />
            <p>
              The Gujarat University is a public state university located at
              Ahmedabad, Gujarat, India.
            </p>
            <Button className={classes.knowMoreButton}>Know More</Button>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BannerPreviewDialog;
