import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthButtonBg from '../../../../assets/auth/buttonBg.svg';

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <div className='text-white w-[40%] lg:ml-64'>
      <Typography variant='title' className='text-start block mb-10'>
        Login to Continue
      </Typography>
      <div className='text-start mt-6 mb-6'>
        <div className='lg:mb-6'>
          <TextField
            autoFocus={true}
            id='username'
            placeholder='UserName (Required)'
            label=''
            name='username'
            className='underline-border w-full'
            variant='standard'
          />
        </div>
        <div>
          <TextField
            autoFocus={true}
            id='password'
            placeholder='Password (Required)'
            label=''
            name='possword'
            className='underline-border w-full'
            variant='standard'
          />
        </div>
        <h1
          onClick={() => navigate('/forgot-password')}
          className='text-right cursor-pointer mt-2'
        >
          Forget Password ?
        </h1>
      </div>
      <div className='authButton mt-10'>
        <img src={AuthButtonBg} alt='button' />
        <Button variant='outline-primary'>Log In</Button>
      </div>
    </div>
  );
};

export default LoginForm;
