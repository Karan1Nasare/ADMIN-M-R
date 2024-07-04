import { useState } from 'react';
import useFetcher from '../../../hooks/useFetcher';
import services from '../services/services';

const useAccountInfo = initialProfileData => {
  const {
    getProfile,
    updateUsername,
    updatePassword,
    updateEmail,
    updatePhone,
  } = services();
  const { fetcher } = useFetcher();

  const [username, setUsername] = useState(initialProfileData?.username);
  const [password, setPassword] = useState(initialProfileData?.password);
  const [email, setEmail] = useState(initialProfileData?.email);
  const [phoneNumber, setPhoneNumber] = useState(
    initialProfileData?.phone_number,
  );

  const onUpdateUserName = async data => {
    try {
      fetcher({
        key: 'update-username',
        executer: () => updateUsername(data),
        onSuccess: response => {
          console.log('response: ', response);
          setUsername(response?.data?.data?.username);
        },
      });
    } catch (err) {
      console.log('error', err);
      throw err;
    }
  };

  const onUpdatePassword = async data => {
    try {
      fetcher({
        key: 'update-password',
        executer: () => updatePassword(data),
        onSuccess: response => {
          console.log('response: ', response);
          //   setPassword('******' + response.new_password.slice(-2));
        },
      });
    } catch (err) {
      console.log('error', err);
      throw err;
    }
  };

  const onUpdateEmail = async data => {
    try {
      fetcher({
        key: 'update-email',
        executer: () => updateEmail(data),
        onSuccess: response => {
          console.log('response: ', response);
          setEmail(response?.data?.data?.email);
        },
      });
    } catch (err) {
      console.log('error', err);
      throw err;
    }
  };

  const onUpdatePhone = async data => {
    console.log('phoneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
    try {
      fetcher({
        key: 'update-phone',
        executer: () => updatePhone(data),
        onSuccess: response => {
          console.log('response: ', response);
          setPhoneNumber(response?.data?.data?.phone_number);
        },
      });
    } catch (err) {
      console.log('error', err);
      throw err;
    }
  };

  return {
    username,
    password,
    email,
    phoneNumber,
    onUpdateUserName,
    onUpdatePassword,
    onUpdateEmail,
    onUpdatePhone,
  };
};

export default useAccountInfo;
