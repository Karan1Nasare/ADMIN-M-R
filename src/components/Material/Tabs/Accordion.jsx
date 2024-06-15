/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { FiLock, FiUnlock, FiTrash2, FiPlus } from 'react-icons/fi';

const Accordion = ({ chapter, subtopics, locked }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  let lockText;
  if (isOpen) {
    lockText = 'Unlocked';
  } else {
    lockText = 'Lock';
  }

  const backgroundColor = isOpen ? 'bg-unlocked' : 'bg-locked';

  return (
    <div className='mb-4 shadow-lg'>
      <div
        className={`flex justify-between items-center p-4 cursor-pointer text-white ${backgroundColor}`}
        onClick={toggleAccordion}
      >
        <div className='flex items-center space-x-3'>
          <div className='bg-[#F49B36] rounded-full h-8 w-8 flex items-center justify-center'>
            <span>1</span>
          </div>
          <span className='text-lg text-[15px]'>{chapter}</span>
        </div>
        <div className='flex items-center space-x-2'>
          <button className='flex items-center space-x-1 text-[#F49B36] text-base'>
            <FiPlus className='text-[#F49B36] text-base' />
            <span>Add Subtopic</span>
          </button>

          <div
            className='flex flex-row items-center justify-center gap-1 mx-2 bg-opacity-20 bg-white py-1 px-2 rounded-full'
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '4px 10px',
              borderRadius: '19px',
            }}
          >
            {locked ? (
              <FiLock className='text-white text-sm cursor-pointer' />
            ) : (
              <FiUnlock className='text-white text-sm cursor-pointer' />
            )}
            <span className='text-white text-sm'>{lockText}</span>
          </div>

          <FaRegEdit className='text-white' />
          <FiTrash2 className='text-white' />
          <Icon
            icon={!isOpen ? 'ep:arrow-down-bold' : 'ep:arrow-up-bold'}
            color='white'
          />
        </div>
      </div>
      {isOpen && (
        <div className='p-4 rounded-b-lg'>
          {subtopics.map((subtopic, index) => (
            <div
              key={index}
              className='flex items-center justify-between bg-[#0A1330] border border-[#343B4F] rounded-md p-1 pr-2 mb-2'
            >
              <input
                type='text'
                name='price'
                id='price'
                className='focus:outline-none text-white block w-full rounded-md border-0 bg-transparent shadow-none py-1.5 pl-7 pr-2 placeholder:text-gray-400 sm:text-sm sm:leading-6'
                placeholder='0.00'
                defaultValue={subtopic}
              />
              {!locked && (
                <div className='flex space-x-2'>
                  <FaRegEdit className='text-white cursor-pointer' />
                  <FiTrash2 className='text-red-600 cursor-pointer' />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
