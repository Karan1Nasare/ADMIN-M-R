/*   import/no-extraneous-dependencies */

import React, { useEffect, useState } from 'react';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFormContext } from 'react-hook-form';
import { Grid, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AdminImageSelect from './AdminImageSelect';
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from '../../../hooks/hook-form';
import Button from '../../shared/buttons/Button';
import colors from '../../../theme/colors';
import { useStore } from '../../../store/context-store';
import TabTitle from '../../shared/TabTitle';

const OrganizationDetailsForm = ({
  setValue,
  control,
  statesOptions,
  cityOptions,
}) => {
  const [file, setFile] = useState();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [Store, StoreDispatch] = useStore();

  useEffect(() => {
    if (file && file.length > 0) {
      setValue('profilePicture', file[0]);
    } else {
      setValue('profilePicture', null);
    }
  }, [file]);

  console.log('control  :: ooo', control);
  return (
    <>
      <TabTitle title='Org & Personal Details' sx={{ marginTop: '20px' }} />

      <div className='mt-3'>
        <AdminImageSelect file={file} setFile={setFile} />
        <div className='text-sm w-full mt-5 font-medium text-center bg-[#0B1739] text-gray-500   p-6 rounded-md flex items-center justify-between'>
          <Grid container spacing={4}>
            <Grid item md={6} sm={12}>
              <RHFTextField
                size='small'
                name='OrgName'
                label='Org Name*'
                placeholder='Enter name'
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <RHFTextField
                size='small'
                name='AdminEmail'
                type='email'
                label='Email*'
                placeholder='Enter Email'
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <RHFTextField
                size='small'
                name='OrgPhoneNumber'
                type='number'
                label='Org Phone Number*'
                placeholder='Enter Phone Number'
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <RHFTextField
                size='small'
                name='OrgPersonName'
                type='text'
                label='Org Person Name*'
                placeholder='Enter Name'
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <RHFTextField
                size='small'
                name='OrgPersonNumber'
                type='number'
                label='Org Person Number*'
                placeholder='+91 12345 65478'
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <RHFTextField
                size='small'
                name='GSTNumber'
                type='text'
                label='GST Number'
                placeholder='GST Number'
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <RHFTextField
                size='small'
                name='AlternativePhoneNumber'
                type='text'
                label='Alternative Phone Number*'
                placeholder='Phone Number'
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <RHFTextField
                size='small'
                name='AdminAddress'
                type='text'
                label='Admin Address*'
                placeholder='814 Howard Street, 120065, India'
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <RHFTextField
                size='small'
                name='Website'
                type='text'
                label='Website*'
                placeholder='Enter Website'
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6} sm={12}>
              {/* <RHFTextField
                size='small'
                name='State'
                type='text'
                label='State*'
                placeholder='Enter State'
                fullWidth
                required
              /> */}
            </Grid>
            <Grid item md={6} sm={12}>
              {/* <RHFTextField
                size='small'
                name='City'
                type='text'
                label='City*'
                placeholder='Enter City'
                fullWidth
                required
              /> */}
              <RHFSelect
                name={'State'}
                label={'State'}
                control={control}
                options={statesOptions}
                placeholder='Select...'
              />
            </Grid>
            <Grid item md={6} sm={12}>
              {/* <RHFTextField
                size='small'
                name='City'
                type='text'
                label='City*'
                placeholder='Enter City'
                fullWidth
                required
              /> */}{' '}
              <RHFSelect
                name={'City'}
                label={'city'}
                control={control}
                options={cityOptions}
                placeholder='Select...'
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <RHFTextField
                size='small'
                name='OrgAddress'
                type='text'
                label='Org Address*'
                placeholder='Enter Org Address'
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <RHFTextField
                size='small'
                name='Pincode'
                type='number'
                label='Pin code*'
                placeholder='Enter Pin code'
                fullWidth
                required
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default OrganizationDetailsForm;
