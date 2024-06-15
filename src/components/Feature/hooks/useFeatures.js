import React, { useCallback, useEffect, useState } from 'react';
import AnouncementImage from '../../../assets/announcement_card.png';
import { APIClient } from '../../../utilities/axios-client';
import URLS from '../../../constants/api';

const ITEMS_PER_PAGE = 6;

const useFeatures = () => {
  const [featureData, setFeatureData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState('');
  const { API } = APIClient();

  const openEditDialog = () => {
    setIsEditOpen(true);
  };

  const closeEditDialog = () => {
    setIsEditOpen(false);
  };

  const openPreviewDialog = () => {
    setIsPreviewOpen(true);
  };

  const closePreviewDialog = () => {
    setIsPreviewOpen(false);
  };

  const confirmDeleteHandler = () => {
    setOpenDelete(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const openDeleteDialog = () => {
    setOpenDelete(true);
  };
  // const fetchData = async () => {
  //   const data = Array.from({ length: 50 }, (_, index) => ({
  //     title: `Feature ${index}`,
  //     descriptionTitle: 'Total Amount:',
  //     descriptionMetaData: '600',
  //     image: AnouncementImage,
  //     id: index + 1,
  //   }));

  //   setFeatureData(data);
  // };

  // useEffect(() => {
  //   try {
  //     fetchData();
  //   } catch (error) {
  //     console.log('error while fetching features', error);
  //   }
  // }, []);

  // Calculate filtered items based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredData([]);
      setCurrentPage(1); // Reset page number when clearing search
      return;
    }

    const filteredItems = featureData.filter(notification =>
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    console.log('🚀 ~ useEffect ~ filteredItems:', filteredItems);

    setFilteredData(filteredItems);
  }, [searchTerm, featureData]);

  // Determine current items based on search results or pagination
  const lastCardIndex = currentPage * ITEMS_PER_PAGE;
  const firstCardIndex = lastCardIndex - ITEMS_PER_PAGE;
  const currentItems = searchTerm
    ? filteredData.slice(firstCardIndex, lastCardIndex)
    : featureData.slice(firstCardIndex, lastCardIndex);

  // Calculate total pages based on original data
  const totalPages = Math.ceil(featureData.length / ITEMS_PER_PAGE);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };
  console.log('current page:', currentPage);
  const [error, setError] = useState(null);

  // const AddFeature = useCallback(async newFeature => {
  //   if (!newFeature.title || !newFeature.descriptionMetaData) {
  //     setError('All fields are required');
  //     return;
  //   }
  //   try {
  //     const data = { ...newFeature };
  //     const response = await API('POST', URLS.ADD_FEATURE, data);

  //     if (response.data && response.data.code === 200) {
  //       setFeatureData(prevFeatures => [
  //         ...prevFeatures,
  //         response.data.feature,
  //       ]);
  //     } else {
  //       setError('Failed to add feature');
  //     }
  //   } catch (err) {
  //     console.error('Error while adding feature', err);
  //     setError('Error adding feature');
  //   }
  // }, []);

  const AddFeature = useCallback(
    newFeature => {
      console.log('Adding feature', newFeature);
      if (
        !newFeature.title ||
        !newFeature.gst ||
        !newFeature.rate ||
        !newFeature.totalAmount
      ) {
        setError('All fields are required');
        return;
      }
      try {
        const featureId = featureData.length
          ? featureData[featureData.length - 1].id + 1
          : 1;
        const addedFeature = { ...newFeature, id: featureId };
        setFeatureData(prevFeatures => [...prevFeatures, addedFeature]);
        setError(null);
      } catch (err) {
        console.error('Error while adding feature', err);
        setError('Error adding feature');
      }
    },
    [featureData],
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const body = {
          name: 'kartik',
          rate: 100,
          gst: 100,
          total_amount: 100,
          description: 'tests',
        };
        const response = await API('POST', URLS.ADD_FEATURE, body);
        if (response.status !== 200) {
          throw response;
        }
        setFeatureData(response.data.data);
      } catch (err) {
        console.log('error while fetching notifications', err);
      }
    };
    fetchData();
  }, []);
  return {
    data: currentItems,
    isPreviewOpen,
    isEditOpen,
    openDelete,
    searchTerm,
    totalShowItems: featureData?.length,
    currentPage,
    totalPages,
    ITEMS_PER_PAGE,
    setCurrentPage,
    handleSearchChange,
    openEditDialog,
    closeEditDialog,
    openPreviewDialog,
    closePreviewDialog,
    confirmDeleteHandler,
    handleCloseDelete,
    openDeleteDialog,
    featureData,
    error,
    AddFeature,
  };
};

export default useFeatures;
