import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import ConfirmDelete from '../ui/Dialog/ConfirmDelete';
import EditCard from './editCard';

const AcademicCard = () => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
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
  const cards = [
    {
      name: 'Eklavya',
      time: '2024-2025',
      icon1: <FiEdit style={{ fontSize: '1.2em' }} />,
      icon2: <RiDeleteBin5Fill style={{ fontSize: '1.2em' }} />,
    },
    {
      name: 'Eklavya',
      time: '2024-2025',
      icon1: <FiEdit style={{ fontSize: '1.2em' }} />,
      icon2: <RiDeleteBin5Fill style={{ fontSize: '1.2em' }} />,
    },
    {
      name: 'Eklavya',
      time: '2024-2025',
      icon1: <FiEdit style={{ fontSize: '1.2em' }} />,
      icon2: <RiDeleteBin5Fill style={{ fontSize: '1.2em' }} />,
    },
    {
      name: 'Eklavya',
      time: '2024-2025',
      icon1: <FiEdit style={{ fontSize: '1.2em' }} />,
      icon2: <RiDeleteBin5Fill style={{ fontSize: '1.2em' }} />,
    },
    {
      name: 'Eklavya',
      time: '2024-2025',
      icon1: <FiEdit style={{ fontSize: '1.2em' }} />,
      icon2: <RiDeleteBin5Fill style={{ fontSize: '1.2em' }} />,
    },
    {
      name: 'Eklavya',
      time: '2024-2025',
      icon1: <FiEdit style={{ fontSize: '1.2em' }} />,
      icon2: <RiDeleteBin5Fill style={{ fontSize: '1.2em' }} />,
    },
    {
      name: 'Eklavya',
      time: '2024-2025',
      icon1: <FiEdit style={{ fontSize: '1.2em' }} />,
      icon2: <RiDeleteBin5Fill style={{ fontSize: '1.2em' }} />,
    },
    {
      name: 'Eklavya',
      time: '2024-2025',
      icon1: <FiEdit style={{ fontSize: '1.2em' }} />,
      icon2: <RiDeleteBin5Fill style={{ fontSize: '1.2em' }} />,
    },
  ];
  return (
    <div>
      <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-6'>
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className='flex text-left h-20 justify-between p-4 ju rounded-xl border border-gray-700 border-solid bg-secondary__fill '
            >
              <div className='text-sm'>
                <h1 className='text-white text-sm'>{card.name}</h1>
                <h2 className='mt-2 text-sm text-zinc-400 '>{card.time}</h2>
              </div>
              <div className='flex mt-3'>
                <span onClick={handleEditClick} className='text-white mr-3 '>
                  {card.icon1}
                </span>
                <span onClick={handleDeleteClick} className='text-red-600'>
                  {card.icon2}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <ConfirmDelete
          fullMessage={'Are you sure want to Delete Academic Year ?'}
          title={'Delete Aklavya'}
          handleClose={handleCloseDelete}
          deleteHandler={confirmDeleteHandler}
          open={isDeleteOpen}
        />
      </div>
      <div className='flex justify-center items-center '>
        {isEdit ? <EditCard isEdit={setIsEdit} /> : null}
      </div>
    </div>
  );
};

export default AcademicCard;
