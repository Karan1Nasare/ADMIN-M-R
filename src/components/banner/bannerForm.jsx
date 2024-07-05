import React from 'react';
import { RHFTextField } from '../../hooks/hook-form';

const BannerForm = ({ Bannertype }) => {
  return (
    <div className='bg-darkBlue p-6 border border-gray-700 rounded-lg shadow-lg  mt-6'>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='text-white text-start mb-2 block'>
            Enter Title
          </label>
          <RHFTextField
            required
            name='title'
            variant='outlined'
            placeholder={`Enter ${Bannertype} Name`}
            fullWidth
            InputProps={{
              style: {
                color: 'white',
              },
              classes: {
                notchedOutline: 'border-none',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
          />
        </div>
        <div>
          <label className='text-white text-start mb-2 block'>
            Read More Button Link
          </label>
          <RHFTextField
            required
            name='button_link'
            variant='outlined'
            placeholder={`Enter ${Bannertype} button link`}
            fullWidth
            sx={{ borderColor: '#869ab8' }}
          />
        </div>
      </div>
      <div className='mb-4'>
        <RHFTextField
          required
          multiline
          label='Description'
          name='description'
          variant='outlined'
          placeholder='Enter description'
          fullWidth
          sx={{
            borderColor: '#869ab8',
            '& .MuiInputBase-root': { p: 2 },
          }}
        />
      </div>
    </div>
  );
};

export default BannerForm;
