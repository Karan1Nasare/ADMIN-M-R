import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CardBg from '../shared/Carousel/cardbg.png';
import './BannerPreviewDialog.css';

const BannerPreviewDialog = ({ isOpen, onClose, banneritem }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} classes={{ paper: 'dialogPaper' }}>
      <div className='dialogTitle'>
        <span>Banner Preview</span>
        <span className='closeButton' onClick={onClose}>
          &times;
        </span>
      </div>
      <DialogContent>
        <div className='bannerContent'>
          <img src={CardBg} alt='Banner Preview' className='bannerImage' />
          <div className='bannerText'>
            <img
              src={banneritem?.image?.url}
              alt='Logo'
              className='bannerLogo'
            />
            <p>
              <b>{banneritem?.title}</b>
            </p>
            <Button className='knowMoreButton'>Know More</Button>
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
