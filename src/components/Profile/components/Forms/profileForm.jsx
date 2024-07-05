import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useFormContext } from 'react-hook-form';
import { RHFTextField } from '../../../../hooks/hook-form';
import AdminImageSelect from '../../../Admins/Form/AdminImageSelect';

const ProfileDetailsForm = ({ profileData, onUpdate, setIsChangeProfile }) => {
  const navigate = useNavigate();
  const { setValue, getValues, reset } = useFormContext();
  const [file, setFile] = useState();

  useEffect(() => {
    if (file && file.length > 0) {
      console.log('🚀 ~ useEffect ~ file:', file, file[0]);
      setValue('image', file[0]);
    } else {
      setValue('image', null);
    }
  }, [file, setValue]);

  useEffect(() => {
    if (profileData) {
      Object.entries(profileData).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [profileData, setValue]);

  const handleSave = async () => {
    const values = getValues();
    const formData = new FormData();

    const payload = {
      name: values?.name,
      phone_number: values?.phone_number,
      gst_number: values?.gst_number,
      email: values?.email,
      image: values?.image,
    };

    formData.append('_method', 'PUT');

    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const updated = await onUpdate(formData);
    console.log('🚀 ~ handleSave ~ updated:', updated);
    if (updated) {
      setIsChangeProfile(false);
      // navigate('/');
    }
  };

  const handleCancel = () => {
    reset(profileData);
  };

  return (
    <div className='mt-3'>
      <AdminImageSelect file={file} setFile={setFile} />
      <div className='text-sm w-full mt-5 font-medium border border-gray-700 text-center bg-[#0B1739] text-gray-500 p-6 rounded-lg'>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='name'
              label='Admin Name*'
              placeholder='Enter name'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='email'
              type='email'
              label='Email*'
              placeholder='Enter Email'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='phone_number'
              type='number'
              label='Admin Phone Number*'
              placeholder='Enter Phone Number'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='username'
              label='Admin Person Name*'
              placeholder='Enter Person Name'
              fullWidth
              required
              disabled
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='phone_number'
              type='number'
              label='Admin Person Number*'
              placeholder='Enter Person Number'
              fullWidth
              required
              disabled
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='website'
              type='text'
              label='Website*'
              placeholder='www.abcorg.com'
              fullWidth
              required
              disabled
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='gst_number'
              type='text'
              label='GST Number'
              placeholder='Enter GST Number'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='phone_number'
              type='number'
              label='Alternative Phone Number*'
              placeholder='Enter Phone Number'
              fullWidth
              required
              disabled
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='state'
              type='text'
              label='State*'
              placeholder='Gujarat'
              fullWidth
              required
              disabled
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='city'
              type='text'
              label='City*'
              placeholder='Gandhinagar'
              fullWidth
              required
              disabled
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='address'
              type='text'
              label='Org Address*'
              placeholder='814 Howard Street, 120065, India'
              fullWidth
              required
              disabled
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='pincode'
              type='text'
              label='Pin code*'
              placeholder='380058'
              fullWidth
              required
              disabled
            />
          </Grid>
        </Grid>
      </div>
      <div className='flex justify-end mt-4'>
        <button
          type='button'
          onClick={handleSave}
          className='flex items-center h-12 px-4 py-2 bg-white text-black rounded transition-colors duration-200 mr-2'
        >
          Save
        </button>
        <button
          type='button'
          onClick={handleCancel}
          className='flex items-center h-12 px-4 py-2 bg-delete text-delete bg-opacity-20 rounded transition-colors duration-200'
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProfileDetailsForm;
