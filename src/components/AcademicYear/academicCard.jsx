import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import DeleteCard from './deleteCard';

const AcademicCard = ({ academicYears, onEdit, onDelete }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleEditClick = year => {
    onEdit(year);
  };

  const handleDeleteClick = year => {
    setSelectedYear(year);
    setIsDeleteOpen(true);
  };

  const handleCloseDelete = () => {
    setIsDeleteOpen(false);
    setSelectedYear(null);
  };

  return (
    <div>
      <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-6'>
        {academicYears.map((year, index) => {
          const startYear = new Date(year.start_year).getFullYear();
          const endYear = new Date(year.end_year).getFullYear();
          return (
            <div
              key={index}
              className='flex text-left h-20 justify-between p-4 rounded-xl border border-gray-700 border-solid bg-secondary__fill '
            >
              <div className='text-sm'>
                <h1 className='text-white text-sm'>{year.name}</h1>
                <h2 className='mt-2 text-sm text-zinc-400 '>
                  {startYear} - {endYear}
                </h2>
              </div>
              <div className='flex mt-3'>
                <span
                  onClick={() => handleEditClick(year)}
                  className='text-white mr-3 cursor-pointer'
                >
                  <FiEdit style={{ fontSize: '1.2em' }} />
                </span>
                <span
                  onClick={() => handleDeleteClick(year)}
                  className='text-red-600 cursor-pointer'
                >
                  <RiDeleteBin5Fill style={{ fontSize: '1.2em' }} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {isDeleteOpen && selectedYear && (
        <DeleteCard
          yearId={selectedYear.id}
          onDelete={onDelete}
          handleClose={handleCloseDelete}
        />
      )}
    </div>
  );
};

export default AcademicCard;
