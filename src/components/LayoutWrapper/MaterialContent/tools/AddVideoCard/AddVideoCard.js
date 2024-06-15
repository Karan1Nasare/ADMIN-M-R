import React from 'react';
import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';

const AddVideoCard = ({ title, onSubmit }) => {
  return (
    <div
      className='h-[235px] border-dashed rounded-md border-white border-2 cursor-pointer bg-transparent flex justify-center flex-col items-center'
      onClick={onSubmit}
    >
      <div className='flex justify-center flex-col items-center'>
        <Icon
          icon='material-symbols:add-circle-rounded'
          fontSize={40}
          style={{ marginBottom: '20px' }}
        ></Icon>

        <p>
          <Typography variant='materialAddContentPlaceholder'>
            {title}
          </Typography>
        </p>
      </div>
    </div>
  );
};

export default AddVideoCard;
