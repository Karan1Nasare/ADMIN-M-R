/*   no-case-declarations */
/*   func-names */
import React, { useMemo } from 'react';
import axios from 'axios';
// import { PROD_HOST_URL, DEV_HOST_URL, TEST_HOST_URL } from '../constants/api';
import { useLocation } from 'react-router-dom';
import urls from '../constants/api';
import { useStore } from '../store/context-store';

axios.defaults.baseURL = urls.HOST_URL + urls.SUFFIX_URL;

export const APIClient = () => {
  const [Store, StoreDispatch] = useStore();
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      console.log('error interceptor', error);
      if (error.response.status === 401) {
        StoreDispatch({ type: 'RemoveState' });
      }
      return Promise.reject(error);
    },
  );
  const API = async (
    method,
    url,
    data = null,
    withAuth = true,
    responseType = {},
    token = '',
    setLoading = () => {},
  ) => {
    let config = {};
    if (withAuth) {
      config = {
        headers: {
          Authorization: `Bearer ${token || Store?.user?.token}`,
        },
        ...responseType,
      };
    }
    switch (method) {
      case 'GET':
        setLoading(true);
        const getResponse = axios
          .get(url, config)
          .then(response => {
            setLoading(false);
            return response;
          })
          .catch(err => {
            setLoading(false);
            return err;
          });
        return getResponse;
      case 'POST':
        setLoading(true);
        const postResponse = axios
          .post(url, data, config)
          .then(response => {
            setLoading(false);
            return response;
          })
          .catch(err => {
            setLoading(false);
            return err;
          });
        return postResponse;
      case 'PUT':
        const putResponse = axios
          .put(url, data, config)
          .then(response => {
            setLoading(false);
            return response;
          })
          .catch(err => {
            setLoading(false);
            return err;
          });
        return putResponse;
      case 'PATCH':
        const patchResponse = axios
          .patch(url, data, config)
          .then(response => {
            setLoading(false);
            return response;
          })
          .catch(err => {
            setLoading(false);
            return err;
          });
        return patchResponse;
      case 'DELETE':
        const deleteResponse = axios
          .delete(url, config)
          .then(response => {
            setLoading(false);
            return response;
          })
          .catch(err => {
            setLoading(false);
            return err;
          });
        return deleteResponse;
      default:
        const defaultResponse = axios
          .get(url, config)
          .then(response => {
            setLoading(false);
            return response;
          })
          .catch(err => {
            setLoading(false);
            return err;
          });
        return defaultResponse;
    }
  };

  return { API };
};

export const useQueryParams = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};
