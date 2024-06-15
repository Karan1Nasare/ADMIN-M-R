// import React from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import { Carousel } from 'primereact/carousel';

// import VisibilityIcon from '@mui/icons-material/Visibility';
// // import CardBgImage from '../../assets/images/cardbg.png';

// const CarouselItem = ({ backgroundImage, image }) => (
//   <div className='carousel-item bg-blue-900 rounded-xl overflow-hidden shadow-lg p-8'>
//     <div className='relative rounded-xl group'>
//       <img
//         className='w-full h-48 object-cover rounded-lg'
//         src={backgroundImage}
//         alt='University'
//       />
//       <div className='absolute inset-0 bg-black opacity-50 rounded-lg group-hover:opacity-75 transition-opacity'></div>
//       <div className='absolute inset-0 flex flex-col justify-center items-start p-4 rounded-lg group-hover:opacity-75 transition-opacity'>
//         <img
//           className='w-12 h-12 mb-4 rounded-full object-cover'
//           src={image}
//           alt='University Logo'
//         />
//         <Typography variant='body2' className='text-start text-white'>
//           The Gujarat University is a public state university located at
//           Ahmedabad, Gujarat, India.
//         </Typography>
//         <Button
//           variant='contained'
//           className='bg-white text-black mt-2'
//           sx={{
//             fontSize: '0.65rem',
//             backgroundColor: 'white',
//             color: 'black',
//             '&:hover': { backgroundColor: 'primary.main', color: 'white' },
//           }}
//         >
//           Know More
//         </Button>
//       </div>
//       <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity'>
//         <VisibilityIcon className='text-white' style={{ fontSize: '3rem' }} />
//       </div>
//     </div>
//   </div>
// );

// const Cards1 = () => {
//   const cards = [
//     {
//       backgroundImage: CardBgImage,
//       image: CardBgImage,
//     },
//     {
//       backgroundImage: CardBgImage,
//       image: CardBgImage,
//     },
//     {
//       backgroundImage: CardBgImage,
//       image: CardBgImage,
//     },
//   ];

//   const responsiveOptions = [
//     {
//       breakpoint: '1024px',
//       numVisible: 3,
//       numScroll: 3,
//     },
//     {
//       breakpoint: '768px',
//       numVisible: 2,
//       numScroll: 2,
//     },
//     {
//       breakpoint: '560px',
//       numVisible: 1,
//       numScroll: 1,
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         my: 2,
//       }}
//     >
//       <Typography variant='h2' className='text-start text-white'>
//         Banners
//       </Typography>
//       <Typography variant='h4' className='text-start text-white'>
//         Student Banner
//       </Typography>
//       <Carousel
//         value={cards}
//         numVisible={3}
//         numScroll={1}
//         responsiveOptions={responsiveOptions}
//         itemTemplate={card => <CarouselItem {...card} />}
//         className='custom-carousel'
//         circular
//       />
//       <Typography variant='h4' className='text-start text-white'>
//         Staff Banner
//       </Typography>
//       <Carousel
//         value={cards}
//         numVisible={3}
//         numScroll={1}
//         responsiveOptions={responsiveOptions}
//         itemTemplate={card => <CarouselItem {...card} />}
//         className='custom-carousel'
//         circular
//       />
//     </Box>
//   );
// };

// export default Cards1;
