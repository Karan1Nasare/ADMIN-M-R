import React from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import Button from '../../shared/buttons/Button';

const LanguageHeader = ({ setAddlanguageinput, handleaddLanguage }) => {
  return (
    <div className=' p-6 mt-2 rounded-xl h-32 border border-gray-700 border-solid bg-secondary__fill max-md:px-5 text-start'>
      <h1 className='text-sm text-white'>Language</h1>
      <div className='flex gap-5 items-center max-md:flex-wrap'>
        <div className='flex flex-1 gap-2 items-center max-md:max-w-full'>
          <input
            onChange={event => setAddlanguageinput(event.target.value)}
            type='text'
            placeholder='Enter Language'
            className='flex-1 justify-center items-start px-3 py-3.5 h-11 rounded border border-gray-700 border-solid text-stone-300 bg-transparent max-md:pr-5 max-md:max-w-full'
          />
          <Button
            startIcon={<IoMdAddCircleOutline style={{ fontSize: '1.5em' }} />}
            sx={{ color: 'black', bgcolor: 'white', p: 3, px: 6 }}
            onClick={handleaddLanguage}
          >
            Add
          </Button>
          {/* <button className='flex gap-1.5 items-center px-6 py-3.5 h-12 w-28 text-base text-center whitespace-nowrap bg-white rounded-lg text-secondary__fill max-md:px-5'>
            <IoMdAddCircleOutline style={{ fontSize: '1.5em' }} />
            <h1>Add</h1>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LanguageHeader;
