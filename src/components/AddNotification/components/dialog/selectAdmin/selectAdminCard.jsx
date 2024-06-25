import React from 'react';
import AdminProfile from '../../../../../assets/adminProfile.png';

const SelectAdminCard = ({ data, toggleChecked }) => {
  console.log('🚀 ~ SelectAdminCard ~ data:', data);
  return (
    <>
      {/* Render all cards if data is provided */}
      {data && data.length > 0 ? (
        data.map((card, index) => (
          <div
            key={index}
            className='bg-secondary__fill mt-2 h-36 w-[38.5%] border border-gray-700 p-2 mr-2 rounded-md'
          >
            <div className='flex text-white justify-between'>
              <div className='flex mx-2'>
                <img
                  className='h-12 mt-1 w-12 rounded-full'
                  src={card.image?.url || AdminProfile}
                  alt=''
                />
                <div className='text-xs text-left mx-2 mt-1 '>
                  <h2>{card?.full_name}</h2>
                  <h3>{card.email}</h3>
                  <h3>{card?.phone_number || 'N/A'}</h3>
                </div>
              </div>
              <input
                className='-mt-4 bg-secondary__fill border border-gray-700 mr-2 opacity-30'
                type='checkbox'
                onChange={e => toggleChecked(index, e.target.checked)} // Call toggleChecked from props with index
                checked={card.isChecked || false} // Reflect the isChecked state from data
              />
            </div>
            <div className='flex mt-2 px-2 justify-between'>
              <div>
                <h3 className='text-grey__primary__light text-sm'>
                  Active Staff
                </h3>
                <div className='mt-1 bg-tealGreen bg-opacity-20 justify-center flex w-12 rounded-full'>
                  <h3 className='text-tealGreen text-sm truncate'>
                    {card?.active_org || 'N/A'}
                  </h3>
                </div>
              </div>
              <div className=''>
                <h3 className='text-grey__primary__light float-right text-sm'>
                  Active Student
                </h3>
                <div className='mt-6 bg-success bg-opacity-20 w-32 h-6 pl-2 rounded-full'>
                  <h3 className='text-success pt-[2%] mr-2 text-sm truncate'>
                    {card?.user_details?.website || 'N/A'}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className='text-white'>No cards found.</p>
      )}
    </>
  );
};

export default SelectAdminCard;
