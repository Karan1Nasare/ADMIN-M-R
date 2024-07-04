import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { APIClient, APIClient2 } from '../../../utilities/axios-client';
import URLS from '../../../constants/api';
import useFetcher from '../../../hooks/useFetcher';
import services from '../services/services';

const useProfile = () => {
  const { getProfile, updateProfile } = services();
  const { fetcher, getExecutorState } = useFetcher();

  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isChangeProfile, setIsChangeProfile] = useState(false);

  // Fetch initial data
  const fetchProfile = async () => {
    setLoading(true);
    try {
      fetcher({
        key: 'get-profile',
        executer: () => getProfile(),
        onSuccess: response => {
          console.log('rresponse: ', response);
          const record = response?.data?.data;
          setProfileData(record);
          setLoading(false);
        },
      });
    } catch (err) {
      console.log('error while fetching notifications', err);
    }
  };

  // update profile
  const UpdateProfile = useCallback(async updateData => {
    console.log('🚀 ~ UpdateProfile ~ updateData:', updateData);
    return new Promise((resolve, reject) => {
      try {
        fetcher({
          key: 'update-profile',
          executer: () => updateProfile(updateData),
          onSuccess: response => {
            console.log('response: ', response);
            resolve(true);
          },
          onError: error => {
            console.log('error: ', error);
            resolve(false);
          },
        });
      } catch (err) {
        console.log('error while fetching notifications', err);
        resolve(false);
      }
    });
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [isChangeProfile]);

  return {
    profileData,
    loading,
    UpdateProfile,
    isChangeProfile,
    setIsChangeProfile,
  };
};

export default useProfile;
