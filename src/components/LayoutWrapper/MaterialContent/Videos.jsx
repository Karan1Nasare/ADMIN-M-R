/*   import/no-named-as-default */
import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MrDropzone from './tools/MrDropzone';
import HeadSection from './tools/HeadSection';
import AddVideoCard from './tools/AddVideoCard/AddVideoCard';
import { videoState } from './constant/defaultState';
import MaterialContentHelper from './utils/common';
import UploadVideo from '../shared/UploadVideo';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#F6B336',
}));

const Videos = () => {
  const theme = useTheme();
  const videoHelper = MaterialContentHelper();
  const [video, setVideo] = useState(videoHelper.generateVideoCard(3));
  const addVideoCard = () => {
    setVideo(prevValues => [
      ...prevValues,
      ...videoHelper.generateVideoCard(1),
    ]);
  };
  console.log('video', video);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeadSection title={'Videos'} />
      <Grid container spacing={2}>
        {video.map((videItem, idx) => {
          return (
            <Grid item xs={6} key={idx}>
              <Item>
                <UploadVideo />
              </Item>
            </Grid>
          );
        })}
        <Grid item xs={6}>
          <Item>
            <AddVideoCard title='Add Video' onSubmit={addVideoCard} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Videos;
