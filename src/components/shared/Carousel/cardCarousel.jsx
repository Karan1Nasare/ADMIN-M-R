import React, { memo } from 'react';
import { Card } from '@mui/material';
import { Carousel } from 'primereact/carousel';
import CarouselItem from './carouselItem';
import './cardCarousel.css';
import CardBg from './cardbg.png';

const CardCarousel = ({ BannerData }) => {
  const items = [
    { imageUrl: 'https://via.placeholder.com/300x150' },
    { imageUrl: 'https://via.placeholder.com/300x150' },
    { imageUrl: 'https://via.placeholder.com/300x150' },
    { imageUrl: 'https://via.placeholder.com/300x150' },
    { imageUrl: 'https://via.placeholder.com/300x150' },
  ];

  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const itemTemplate = item => {
    console.log('🚀 ~ CardCarousel ~ item:', item);
    return (
      <Card className='w-96 ml-4'>
        <div className='App bg-darkBlue flex items-center justify-center h-60'>
          <CarouselItem
            backgroundImage={CardBg}
            image={item?.image?.url}
            item={item}
          />
        </div>
      </Card>
    );
  };

  return (
    <div className='relative mb-10 mt-8 w-full card pr-0'>
      <Carousel
        value={BannerData}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={itemTemplate}
      />
    </div>
  );
};

export default memo(CardCarousel);
