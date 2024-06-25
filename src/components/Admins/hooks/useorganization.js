import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// API base URL
const BASE_URL = 'https://superadmin.mandreducation.in/api/v1/organizations';

// Custom hook
const useOrganizationManagement = () => {
  const [organizations, setOrganizations] = useState([]);
  const [singleOrganizationDetails, setSingleOrganizationDetails] = useState(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token =
    JSON.parse(window.localStorage.getItem('last_state'))?.user?.token || '';
  // Fetch the language list
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const multipartConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  };

  const fetchOrganizations = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}?page_size=1000&page=1`,
        config,
      );
      console.log(response.data.data.data, 'response.data.data s');
      setOrganizations(response.data.data.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchSingleOrganization = useCallback(async id => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/${id}`, config);
      console.log(response.data.data, 'response.data.data s');
      singleOrganizationDetails(response.data.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Add a new language
  // eslint-disable-next-line consistent-return
  const addOrganization = async formData => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}`,
        formData,
        multipartConfig,
      );
      if (response.status === 200) {
        fetchOrganizations();
      }
      setError(null);
      return response;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Update an existing language
  const updateOrganization = async (id, updatedOrganization) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/${id}`,
        updatedOrganization,
        multipartConfig,
      );
      if (response.status === 200) {
        fetchOrganizations();
      }

      setError(null);
      return true;
    } catch (err) {
      setError(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Delete a language
  const deleteOrganization = async id => {
    setLoading(true);
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`, config);
      if (response.status === 200) {
        fetchOrganizations();
      }
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    organizations,
    singleOrganizationDetails,
    setOrganizations,
    loading,
    error,
    fetchOrganizations,
    addOrganization,
    updateOrganization,
    deleteOrganization,
    fetchSingleOrganization,
  };
};

export default useOrganizationManagement;
