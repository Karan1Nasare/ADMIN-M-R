import React from 'react';
import Dropdown from '../../shared/DropDown';
import SelectAdminDialog from './dialog/selectAdmin';
import useAddNotification from '../hooks/useAddNotification';
import SelectAdminCard from './selectedAdminCard';
import { RHFSelect } from '../../../hooks/hook-form/RHFSelect';

const Header = () => {
  const {
    data,
    isEditOpen,
    hasCheckedAdmins,
    searchInputValue,
    selectAllAdmin,
    openAdminDialog,
    closeAdminDialog,
    handleSearchClick,
    handleSearchInputChange,
  } = useAddNotification();

  return (
    <>
      {!hasCheckedAdmins ? (
        <div className='select mt-6'>
          <div className='flex justify-end'>
            <div className='border  rounded-md  text-white border-gray-700 border-solid bg-secondary__fill  w-7.25 '>
              <RHFSelect
                size='small'
                name='admin'
                options={[
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 2', value: 'Option 2' },
                ]}
              />
              {/* <Dropdown className='h-full w-full' /> */}
            </div>

            <button
              onClick={openAdminDialog}
              className='bg-white ml-4 w-28 rounded-md p-1 h-10 text-sm'
            >
              Select Admin
            </button>
          </div>
          <SelectAdminDialog
            data={data}
            isOpen={isEditOpen}
            searchInputValue={searchInputValue}
            onClose={closeAdminDialog}
            selectAllAdmin={selectAllAdmin}
            handleSearchClick={handleSearchClick}
            handleSearchInputChange={handleSearchInputChange}
          />
        </div>
      ) : (
        <div className='overflow-x-hidden'>
          <div className='w-screen overflow-x-scroll'>
            <div className='w-[120%] flex'>
              <SelectAdminCard />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
