import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// API base URL
const BASE_URL = 'https://superadmin.mandreducation.in/api/v1/languages';

// Custom hook
const useLanguageManagement = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the language list
  const fetchLanguages = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL);
      setLanguages(response.data.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Add a new language
  const addLanguage = async language => {
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}`, { name: language });
      if (response.status === 200) {
        fetchLanguages();
      }
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Update an existing language
  const updateLanguage = async (id, updatedLanguage) => {
    setLoading(true);
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, {
        name: updatedLanguage,
      });
      if (response.status === 200) {
        fetchLanguages();
      }

      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Delete a language
  const deleteLanguage = async id => {
    setLoading(true);
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      if (response.status === 200) {
        fetchLanguages();
      }
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    languages,
    setLanguages,
    loading,
    error,
    fetchLanguages,
    addLanguage,
    updateLanguage,
    deleteLanguage,
  };
};

export default useLanguageManagement;
