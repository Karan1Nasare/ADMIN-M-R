import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './styles/dropzone.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { RiImageAddLine } from 'react-icons/ri';
import { Typography } from '@mui/material';

const MrDropzone = ({
  onDrop,
  files,
  onRemoveThumbnail,
  imgIcon,
  uploadMetadata,
}) => {
  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
    onDrop,
    accept: {
      ...uploadMetadata?.mimeType,
    },
    multiple: false,
  });
  const styles = {
    dropzone: {
      // border: '1px dashed #FFFFFF',
      // borderRadius: '10px',
      ...(!files?.src ? { padding: '20px' } : { padding: '10px' }),
      // flexDirection: 'column',
      // justifyContent: 'center',
      // alignItems: 'center',
      // cursor: 'pointer',
      // color: '#F6B336',
      // backgroundColor: 'transpernt',
      // // maxWidth: '510px',
      // height: '200px',
      // position: 'relative',
    },
  };

  return (
    <div
      style={styles.dropzone}
      className='h-[235px] border-dashed rounded-md border-white border-2 cursor-pointer bg-transparent justify-center flex-col items-center relative'
    >
      {files?.src ? (
        <>
          <img src={files?.src} className='drop-img' />
          <div className='alter-section'>
            <span onClick={() => {}}>
              <div {...getRootProps()} className='h-full'>
                <input {...getInputProps()} />
                <EditIcon />
              </div>
            </span>
            <span onClick={onRemoveThumbnail}>
              <DeleteIcon style={{ marginLeft: '3px' }} />
            </span>
          </div>
        </>
      ) : (
        <div {...getRootProps()} className='h-full'>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <div className='flex flex-col items-center justify-center h-full'>
              {imgIcon}
              <p>
                <Typography variant='thumbnailContentPlaceholder'>
                  {uploadMetadata?.title}
                </Typography>
              </p>
              <Typography variant='thumbnailContentPlaceholder'>
                {uploadMetadata?.description}
              </Typography>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MrDropzone;
