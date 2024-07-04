import { Stack } from '@mui/material';
import React from 'react';
import TabTitle from '../../../shared/TabTitle';
import UpdateAccountField from './updateAccountField';
import useAccountInfo from '../../hooks/useAccountInfo';

const ProfileInfo = ({ profileData }) => {
  const {
    username,
    password,
    email,
    phoneNumber,
    onUpdateUserName,
    onUpdatePassword,
    onUpdateEmail,
    onUpdatePhone,
  } = useAccountInfo(profileData);

  return (
    <>
      <Stack sx={{ margin: '20px 0' }}>
        <TabTitle title={'Org Account Info'} />
      </Stack>
      <Stack>
        {/* Update User Name */}
        <UpdateAccountField
          label={'Username'}
          value={username || profileData?.username}
          formFields={[
            {
              label: 'Username',
              name: 'username',
              type: 'text',
              placeholder: 'Enter your username',
              value: username || profileData?.username,
              required: true,
            },
          ]}
          handleUpdate={onUpdateUserName}
        />
        {/* Update Password */}
        <UpdateAccountField
          label={'Password'}
          value={password || profileData?.password}
          formFields={[
            {
              label: 'Current Password*',
              name: 'current_password',
              type: 'password',
              placeholder: 'Enter Current Password',
              value: '',
              required: true,
            },
            {
              label: 'New Password*',
              name: 'new_password',
              type: 'password',
              placeholder: 'Enter New Password',
              value: '',
              required: true,
            },
            {
              label: 'New Confirm Password*',
              name: 'new_password_confirmation',
              type: 'password',
              placeholder: 'New Confirm Password',
              value: '',
              required: true,
            },
          ]}
          isPassword={true}
          handleUpdate={onUpdatePassword}
        />
        {/* Update Phone Number */}
        <UpdateAccountField
          label={'Phone Number'}
          value={phoneNumber || profileData?.phone_number}
          formFields={[
            {
              label: 'Phone Number',
              name: 'phone_number',
              type: 'text',
              placeholder: 'Enter Phone Number',
              value: phoneNumber || profileData?.phone_number,
              required: true,
            },
          ]}
          handleUpdate={onUpdatePhone}
        />
        {/* Update Email */}
        <UpdateAccountField
          label={'Email'}
          value={email || profileData?.email}
          formFields={[
            {
              label: 'Email',
              name: 'email',
              type: 'email',
              placeholder: 'Enter your Email',
              value: email || profileData?.email,
              required: true,
            },
          ]}
          handleUpdate={onUpdateEmail}
        />
      </Stack>
    </>
  );
};

export default ProfileInfo;
