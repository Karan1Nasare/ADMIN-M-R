/*   import/no-extraneous-dependencies */
import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Stack } from '@mui/material';

function Image({ src, alt, className }) {
  return <img loading='lazy' src={src} alt={alt} className={className} />;
}

const ContentCard = props => {
  const { data, editHandler, deleteHandler, viewHandler } = props;
  return (
    <>
      <Stack
        sx={{ width: '100%' }}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Stack direction={'row'} spacing={3}>
          <img
            loading='lazy'
            src={data?.image || 'https://via.placeholder.com/150'}
            alt={data?.title}
            className='shrink-0 aspect-square w-[60px] rounded-md'
          />
          <Stack direction={'column'}>
            <h1 className='text-lg text-left font-semibold text-white'>
              {data?.title}
            </h1>
            <time className='flex  text-sm leading-5 text-gray-400'>
              <Icon icon='ph:calendar-bold' width={20} />
              <span>{data?.date}</span>
            </time>
          </Stack>
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <Icon
            icon='mdi:eye'
            width={20}
            onClick={() => viewHandler(data)}
            className='text-white cursor-pointer'
          />
          <FaRegEdit
            className='text-white cursor-pointer shrink-0 self-start w-5 aspect-square'
            onClick={() => editHandler(data)}
          />
          <FiTrash2
            className='text-red-600 cursor-pointer shrink-0 self-start w-5 aspect-square'
            onClick={() => deleteHandler(data)}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default ContentCard;
