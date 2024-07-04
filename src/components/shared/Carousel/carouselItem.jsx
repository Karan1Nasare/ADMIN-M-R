import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from '../../../utilities/axios-client';
import BannerPreviewDialog from '../../banner/bannerPreview';
import ConfirmDelete from '../../ui/Dialog/ConfirmDelete';

const CarouselItem = ({ backgroundImage, image, item, onDelete }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const DeleteBannerById = async id => {
    try {
      const response = await axios.delete(`/banners/${id}`);
      if (response.data.success) {
        onDelete(id); // Update the parent component's state
      } else {
        console.error('Error:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    handleCloseDelete();
  };
  const confirmDeleteHandler = () => {
    if (item.id) {
      DeleteBannerById(item.id);
    }
    setOpenDelete(false);
  };

  const openDeleteDialog = () => {
    setOpenDelete(true);
  };

  const openPreviewDialog = () => {
    setIsPreviewOpen(true);
  };

  const closePreviewDialog = () => {
    setIsPreviewOpen(false);
  };

  return (
    <div className='bg-blue-900 rounded-xl w-[95%] overflow-hidden shadow-lg p-4'>
      <div className='relative rounded-xl group'>
        <img
          className='w-full h-48 object-cover rounded-lg'
          src={image}
          alt='University'
        />
        <div className='absolute inset-0 bg-black opacity-50 rounded-lg group-hover:opacity-75 transition-opacity'></div>
        <div className='absolute inset-0 flex flex-col justify-center items-start p-4 rounded-lg group-hover:opacity-75 transition-opacity'>
          <img
            className='w-12 h-12 mb-4 rounded-full object-cover'
            src={image}
            alt='University Logo'
          />
          <Typography variant='description' className='text-white text-sm mb-2'>
            {item?.title}
          </Typography>
          <Button
            variant='contained'
            className='bg-white text-black'
            sx={{
              fontSize: '0.65rem',
              backgroundColor: 'white',
              color: 'black',
              '&:hover': { backgroundColor: 'primary', color: 'white' },
            }}
          >
            Know More
          </Button>
        </div>
        <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity'>
          <VisibilityIcon
            className='text-white'
            style={{ fontSize: '3rem' }}
            onClick={openPreviewDialog}
          />
          <Icon
            icon={'material-symbols:delete'}
            color='red'
            width={30}
            onClick={openDeleteDialog}
            className='cursor-pointer'
          />
        </div>
      </div>
      <BannerPreviewDialog
        isOpen={isPreviewOpen}
        onClose={closePreviewDialog}
        banneritem={item}
      />
      {openDelete ? (
        <ConfirmDelete
          fullMessage='Are you sure you want to Delete Banner?'
          title='Delete Banner'
          handleClose={handleCloseDelete}
          open={openDelete}
          deleteLanguage={() => confirmDeleteHandler()}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default CarouselItem;
