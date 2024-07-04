import React, { memo } from 'react';
import { Carousel } from 'primereact/carousel';
import CarouselItem from './carouselItem';
import './cardCarousel.css';
import CardBg from './cardbg.png';

const CardCarousel = ({ BannerData }) => {
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
    return (
      <div className='w-full px-2'>
        <div className='bg-darkBlue rounded-xl flex items-center justify-center h-60'>
          <CarouselItem
            backgroundImage={CardBg}
            image={item?.image?.url}
            item={item}
          />
        </div>
      </div>
    );
  };

  return (
    <div className='relative mb-10 mt-8 w-full overflow-hidden'>
      <Carousel
        value={BannerData}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={itemTemplate}
        className='w-full'
      />
    </div>
  );
};

export default memo(CardCarousel);
