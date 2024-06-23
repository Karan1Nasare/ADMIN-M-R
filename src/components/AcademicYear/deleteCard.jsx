import React from 'react';
import ConfirmDelete from '../ui/Dialog/ConfirmDelete';
import axios from '../../utilities/axios-client'; // Adjust the path as needed

const DeleteCard = ({ yearId, onDelete, handleClose }) => {
  const deleteLanguage = async id => {
    try {
      const response = await axios.delete(`/academic-years/${id}`);
      if (response.data.success) {
        onDelete(id); // Update the parent component's state
      } else {
        console.error('Error:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    handleClose();
  };

  return (
    <ConfirmDelete
      fullMessage={'Are you sure you want to delete this academic year?'}
      title={'Delete Academic Year'}
      handleClose={handleClose}
      id={yearId}
      deleteLanguage={deleteLanguage}
      open={true}
    />
  );
};

export default DeleteCard;
