import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PATH_DASHBOARD from '../../../routes/path';

const CourseFilterApply = () => {
  const [filters, setFilters] = useState({
    name: '',
    Chapter: '',
    Subject: '',
    Standard: '',
  });
  const navigate = useNavigate();

  return (
    <div className='flex justify-between gap-5 p-5 rounded-xl border border-gray-700 border-solid bg-[#0B1739]  max-md:flex-wrap max-md:px-5'>
      {/* <div className='flex items-center bg-[#0B1739] p-4 space-x-4 justify-between'> */}
      <div className='flex flex-row gap-2 items-center flex-1'>
        <div className='flex items-center gap-4'>
          <div>
            <input
              type='text'
              placeholder='Search Name, Enrollment, Standard'
              className='justify-center items-start self-start px-3 py-3   bg-secondary__fill__dark   text-white w-72 rounded-md'
            />
          </div>
          <button className='bg-[#0A1330] rounded-md w-9 h-9 flex items-center justify-center'>
            <Icon
              icon={'octicon:filter-16'}
              className='text-white'
              width={25}
            />
          </button>
        </div>
      </div>

      <Link to={PATH_DASHBOARD.Material['add-course']}>
        <div>
          <button
            className='bg-white text-[#0E1736]rounded-md flex items-center h-[44px] text-base  flex-row gap-2'
            style={{
              padding: '10px 16px',
              borderRadius: '6px',
            }}
          >
            <Icon icon={'simple-line-icons:plus'} /> Add Course
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CourseFilterApply;
