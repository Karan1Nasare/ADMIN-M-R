import React from 'react';
import ProfileInfo from './profileInfo';
import useProfile from '../../hooks/useProfile';

const OrgAccountInfo = () => {
  const { profileData } = useProfile();
  return (
    <>
      <ProfileInfo profileData={profileData} />
    </>
  );
};

export default OrgAccountInfo;
