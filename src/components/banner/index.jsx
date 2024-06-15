import { Typography, Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Cards1 from './cards1';
import BannerHeader from './bannerHeader';
import CardCarousel from '../shared/Carousel/cardCarousel';

const Banner = ({ bannerTitle }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/addBanner');
  };
  const banner = [
    { buttonTitle: 'Student', bannerTitle: 'Student Banner' },
    { buttonTitle: 'Staff', bannerTitle: 'Staff Banner' },
  ];
  return (
    <div>
      <Typography variant='h2' className='text-start text-white'>
        Banners
      </Typography>
      {banner &&
        banner?.map((section, index) => (
          <div key={index} className='text-start'>
            <div className='flex justify-between'>
              <BannerHeader bannerTitle={section?.bannerTitle} />

              <Button
                onClick={handleOnClick}
                variant='contained'
                sx={{
                  color: 'black',
                  backgroundColor: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.25)',
                  height: '2.75rem',
                  width: '13.4rem',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                }}
              >
                <AddCircleIcon className='mr-1' style={{ fontSize: '1rem' }} />
                Add Banner for {section?.buttonTitle}
              </Button>
            </div>

            {/* <Cards1 key={index} /> */}
            <CardCarousel />
          </div>
        ))}
    </div>
  );
};

export default Banner;
