import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import PATH_DASHBOARD from '../../routes/path';

const OrganizationCard = ({ Organization }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex justify-between'>
        <div className='flex'>
          <img
            className='h-16 w-16 rounded-full'
            src={Organization.profileImage}
            alt=''
          />
          <div className='text-white ml-3 text-left '>
            <h2 className='text-sm mb-1'>{Organization.name}</h2>
            <h2 className='text-xs mb-1'>{Organization.email}</h2>
            <h2 className='text-xs mb-1 '>{Organization.phone}</h2>
          </div>
        </div>
        <span></span>
        <Icon
          icon={'mdi:eye'}
          className='text-white'
          width={25}
          onClick={() => {
            navigate(PATH_DASHBOARD.organization.view(Organization?.id));
          }}
        />
      </div>
      <div className='flex mt-3 justify-between'>
        <div className='text-left'>
          <h2 className='text-grey__primary__light text-sm'>Active staff</h2>
          <h2 className='bg-tealGreen__opacity h-5 text-xs w-11 mt-2 text-center text-tealGreen rounded-full p-1 bg-opacity-25'>
            {Organization.activeOrgCount}
          </h2>
        </div>
        <div className=' flex justify-center items-center flex-col text-right'>
          <h2 className='text-grey__primary__light w-full text-sm '>
            Active students
          </h2>

          <div className='bg-success w-11 text-righ h-5 text-success rounded-full mt-2 bg-opacity-25 text-xs p-1  text-center '>
            200
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationCard;
