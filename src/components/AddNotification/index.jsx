import React from 'react';
import { useForm } from 'react-hook-form';
import Header from './components/header';
import AddNotificationForm from './components/addNotificationForm';
import { FormProvider } from '../../hooks/hook-form';

const AddNotification = () => {
  const methods = useForm();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async data => {
    console.debug('onSubmit', data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col p-8 -mt-7 space-y-8 overflow-x-hidden'>
        <h1 className='text-white text-3xl text-left'>Notification</h1>
        <Header />
        <AddNotificationForm />
      </div>
    </FormProvider>
  );
};

export default AddNotification;
