import URLS from '../../../constants/api';
import axiosInstance from '../../../utilities/axios-client';

const services = () => {
  // profile service function
  const updateProfile = async data => {
    return axiosInstance.post(URLS.UPDATE_PROFILE(), data);
  };

  const getProfile = async () => {
    return axiosInstance.get(URLS.GET_PROFILE);
  };

  // Account Info
  const updateUsername = async data => {
    return axiosInstance.post(URLS.UPDATE_USERNAME(), data);
  };

  const updatePhone = async data => {
    return axiosInstance.post(URLS.UPDATE_PHONE(), data);
  };

  const updateEmail = async data => {
    return axiosInstance.post(URLS.UPDATE_EMAIL(), data);
  };

  const updatePassword = async data => {
    return axiosInstance.post(URLS.UPDATE_PASSWORD(), data);
  };

  return {
    getProfile,
    updateProfile,
    updateUsername,
    updatePhone,
    updateEmail,
    updatePassword,
  };
};

export default services;
