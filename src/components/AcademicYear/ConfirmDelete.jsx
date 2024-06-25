import React from 'react';

const ConfirmDelete = ({
  fullMessage,
  title,
  handleClose,
  deleteHandler,
  open,
}) => {
  if (!open) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
        <h2 className='text-lg font-bold mb-4'>{title}</h2>
        <p className='mb-4'>{fullMessage}</p>
        <div className='flex justify-center'>
          <button
            className='bg-red-600 text-white px-4 py-2 rounded mr-2'
            onClick={deleteHandler}
          >
            Delete
          </button>
          <button
            className='bg-gray-300 text-black px-4 py-2 rounded'
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
