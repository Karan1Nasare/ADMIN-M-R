import React, { useState } from 'react';
import ConfirmDelete from '../ui/Dialog/ConfirmDelete';
import EditCard from './editCard';
import MyComponent from './myComponent';

const Cards = ({ cards }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [popup, setPopup] = useState(false);
  const handlePopupClick = () => {
    setPopup(!popup);
  };
  const handleEditClick = () => {
    setIsEdit(!isEdit);
  };
  const handleDeleteClick = () => {
    setIsDeleteOpen(true);
  };
  const handleCloseDelete = () => {
    setIsDeleteOpen(false);
  };
  const confirmDeleteHandler = () => {
    setIsDeleteOpen(false);
  };
  return (
    <div className='mt-8 2xl:grid 2xl:grid-cols-3 xl:grid xl:grid-cols-2 md:gap-8 md:grid mg:grid-cols-1 gap-8 lg:grid lg:grid-cols-2 2xl:gap-8'>
      {!cards || cards.length === 0 ? (
        <p className='text-white'>No cards found.</p>
      ) : (
        cards.map((card, index) => (
          <div
            key={index}
            className='bg-secondary__fill border border-gray-700 h-28 p-7 rounded-xl '
          >
            <div className='flex justify-between'>
              <div className='text-left'>
                <h1 className='text-white text-lg'>{card.name}</h1>
                <div className='flex mt-1'>
                  <h3 className='text-grey__primary__light mr-2 text-sm '>
                    Question Count:
                  </h3>
                  <h3 className='bg-success w-10 rounded-full text-sm pl-3 bg-opacity-25 text-success'>
                    {card.count}
                  </h3>
                </div>
              </div>
              <div className='flex mt-3 '>
                <span onClick={handlePopupClick} className='mr-3 text-white'>
                  {card.icon1}
                </span>
                <span onClick={handleEditClick} className='mr-3 text-white'>
                  {card.icon2}
                </span>
                <span onClick={handleDeleteClick} className='mr-2 text-red-600'>
                  {card.icon3}
                </span>
              </div>
            </div>
          </div>
        ))
      )}
      <div>
        <ConfirmDelete
          fullMessage={'Are you sure want to Delete Question Bank ?'}
          title={'Delete Topic Name'}
          handleClose={handleCloseDelete}
          deleteHandler={confirmDeleteHandler}
          open={isDeleteOpen}
        />
      </div>
      {isEdit ? <EditCard isEdit={setIsEdit} /> : null}
      {popup ? <MyComponent /> : null}
    </div>
  );
};
export default Cards;
