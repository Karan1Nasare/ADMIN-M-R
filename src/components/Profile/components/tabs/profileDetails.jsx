import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import TabTitle from '../../../shared/TabTitle';
import ProfileDetailsForm from '../Forms/profileForm';
import UploadProfileImage from '../viewProfile/changeProfileImage';
import useProfile from '../../hooks/useProfile';

const ProfileDetails = () => {
  const {
    profileData,
    UpdateProfile: onUpdate,
    isChangeProfile,
    setIsChangeProfile,
  } = useProfile();
  const methods = useForm();
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
  } = methods;

  return (
    <>
      <TabTitle title='Org & Personal Details' sx={{ marginTop: '20px' }} />
      <FormProvider {...methods}>
        <form>
          {!isChangeProfile ? (
            <UploadProfileImage
              profileData={profileData}
              setIsChangeProfile={setIsChangeProfile}
            />
          ) : (
            <ProfileDetailsForm
              profileData={profileData}
              setValue={setValue}
              onUpdate={onUpdate}
              setIsChangeProfile={setIsChangeProfile}
            />
          )}
        </form>
      </FormProvider>
    </>
  );
};

export default ProfileDetails;
