import React from 'react';
import { Typography } from '@mui/material';
import totalOrganizationsIcon from '../../assets/icon/totalOrganizationsIcon.svg';
import totalContentsIcon from '../../assets/icon/totalContentsIcon.svg';
import totalQuestionBank from '../../assets/icon/totalQuestionBank.svg';
import totalActiveStudentsIcon from '../../assets/icon/totalActiveStudentsIcon.svg';

const DashboardCards = () => {
  console.log('dashboard cards');
  const card = [
    {
      icon: totalOrganizationsIcon,
      title: 'Total Students',
      count: '245',
      color_from: 'rgba(31, 64, 238, 0.15)',
      color_to: 'rgba(31, 64, 238, 0.035)',
    },
    {
      icon: totalContentsIcon,
      title: 'Total Exam',
      count: '1834',
      color_from: 'rgba(248, 194, 9, 0.15)',
      color_to: 'rgba(248, 194, 9, 0.035)',
    },
    {
      icon: totalQuestionBank,
      title: 'Total Question Bank',
      count: '800',
      color_from: 'rgba(22, 205, 199, 0.15)',
      color_to: 'rgba(22, 205, 199, 0.035)',
    },
    {
      icon: totalActiveStudentsIcon,
      title: 'Total Question Bank',
      count: '800',
      color_from: 'rgba(0, 245, 134, 0.15)',
      color_to: 'rgba(0, 245, 134, 0.035)',
    },
  ];
  return (
    <div className='grid grid-cols-3 gap-8 mx-4'>
      {card.map((item, index) => (
        <div
          key={index}
          className={`relative rounded-xl text-white h-11.5 flex flex-col justify-center items-center overflow-hidden `}
          style={{
            background: `linear-gradient(to bottom, ${item.color_from}, ${item.color_to})`,
          }}
        >
          <div className='absolute '>
            <div className='flex items-center justify-center'>
              <img className='p-2' src={item.icon} alt='icon' />
            </div>
            <div className='text-center mt-2'>
              <Typography variant='h6'>{item.title}</Typography>
              <Typography variant='body1'>{item.count}</Typography>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default DashboardCards;
