import React, { useState } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import Button from '../../../shared/buttons/Button';
import colors from '../../../../theme/colors';
import useLanguageManagement from '../../../Language/hooks/uselanguage2';

const EditDialog = ({
  heading,
  title,
  isOpen,
  onClose,
  id,
  updateLanguage,
}) => {
  const [edittitle, seteditTitle] = useState(title);
  if (!isOpen) {
    return null;
  }
  const EditLanguage = async () => {
    if (edittitle !== '') {
      await updateLanguage(id, edittitle);
      onClose();
    }
  };
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-70 text-start'>
      <div className='flex flex-col px-8 py-8 rounded-3xl border border-gray-700 border-solid bg-secondary__fill w-[30%] max-md:px-5'>
        <div className='flex gap-5 text-xl text-white max-md:flex-wrap max-md:max-w-full'>
          <div className='flex-auto my-auto text-start'>{heading}</div>
          <Icon
            icon={'material-symbols-light:close'}
            className='text-white'
            onClick={onClose}
          />
        </div>
        <div className='shrink-0 mt-5 h-px border border-solid bg-slate-500 border-slate-500 max-md:max-w-full' />
        <input
          type='text'
          placeholder='Language'
          value={edittitle}
          onChange={event => seteditTitle(event.target.value)}
          className='justify-center items-start px-3 py-3.5 mt-11 text-sm whitespace-nowrap rounded border border-gray-700 border-solid text-stone-300 bg-transparent max-md:pr-5 max-md:mt-10 max-md:max-w-full'
        />
        {/* <div className='justify-center self-center px-7 py-3 mt-14 text-base text-center whitespace-nowrap bg-white rounded-lg text-secondary__fill max-md:px-5 max-md:mt-10'>
          Update
        </div> */}
        <div className='flex flex-1 justify-center mt-14'>
          <Button
            sx={{
              color: colors?.secondary__fill,
              bgcolor: 'white',
              p: 3,
              px: 6,
              fontSize: '1rem',
              width: '25%',
              borderRadius: '0.5rem',
              fontWeight: 100,
            }}
            onClick={EditLanguage}
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditDialog;
