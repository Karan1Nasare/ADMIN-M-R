import { Stack } from '@mui/material';
import React from 'react';
import axios from 'axios';
import TabTitle from '../../shared/TabTitle';
import Button from '../../shared/buttons/Button';
import UpdateAccountField from './UpdateAccountField';

const OrganizationAccountInfo = ({ organization }) => {
  // Call Update Api Here
  const token =
    JSON.parse(window.localStorage.getItem('last_state'))?.user?.token || '';
  const handleUpdate = async (data, property) => {
    try {
      const formdata = new FormData();
      formdata.append('_method', 'PUT');
      formdata.append('full_name', organization.full_name);
      if (property !== 'email') formdata.append('email', organization.email);

      if (property === 'userName') {
        formdata.append('org_person_name', data.username);
      }

      if (property === 'password') {
        formdata.append('password', data.new_password);
      }

      if (property === 'phoneNumber') {
        formdata.append('phone_number', data.phone_number);
      }

      if (property === 'email') {
        formdata.append('email', data.email);
      }

      const response = await axios.post(
        `https://superadmin.mandreducation.in/api/v1/organizations/${organization.id}`,
        formdata,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      console.log('error :: ', error);
    }
  };
  const handleUpdateUserName = async data => {
    const handleNameUpdate = await handleUpdate(data, 'userName');
  };

  const handleUpdatePassword = async data => {
    const handlePasswordUpdate = await handleUpdate(data, 'password');
  };

  const handleUpdateEmail = async data => {
    const handleEmailUpdate = await handleUpdate(data, 'email');
  };

  const handleUpdatePhone = async data => {
    const handlePhoneNumberUpdate = await handleUpdate(data, 'phoneNumber');
  };

  return (
    <>
      <Stack sx={{ margin: '20px 0' }}>
        <TabTitle title={'Org Account Info'} />
      </Stack>
      <Stack>
        {/* Update User Name */}
        <UpdateAccountField
          label={'Username'}
          value={
            organization?.org_person_name ? organization?.org_person_name : '-'
          }
          formFields={[
            {
              label: 'Username',
              name: 'username',
              type: 'text',
              placeholder: 'Enter your username',
              value: organization?.org_person_name,
              required: true,
            },
          ]}
          handleUpdate={handleUpdateUserName}
        />
        {/* Update Password */}
        <UpdateAccountField
          label={'Password'}
          value={organization?.password || ''}
          formFields={[
            {
              label: 'Current Password*',
              name: 'current_password',
              type: 'text',
              placeholder: 'Enter Current Password',
              value: '',
              required: true,
            },
            {
              label: 'New Password*',
              name: 'new_password',
              type: 'text',
              placeholder: 'Enter New Password',
              value: '',
              required: true,
            },
            {
              label: 'New Confirm Password*',
              name: 'new_confirm_password',
              type: 'text',
              placeholder: 'New Conform Password',
              value: '',
              required: true,
            },
          ]}
          isPassword={true}
          handleUpdate={handleUpdatePassword}
        />
        {/* Update Phone Number : */}
        <UpdateAccountField
          label={'Phone Number'}
          value={organization?.phone_number || ''}
          formFields={[
            {
              label: 'Phone Number',
              name: 'phone_number',
              type: 'text',
              placeholder: 'Enter Phone Number',
              value: organization?.phone,
              required: true,
            },
          ]}
          handleUpdate={handleUpdatePhone}
        />
        {/* Update Email */}
        <UpdateAccountField
          label={'Email'}
          value={organization?.email}
          formFields={[
            {
              label: 'Email',
              name: 'email',
              type: 'text',
              placeholder: 'Enter your Email',
              value: organization?.email,
              required: true,
            },
          ]}
          handleUpdate={handleUpdateEmail}
        />
      </Stack>
    </>
  );
};

export default OrganizationAccountInfo;
