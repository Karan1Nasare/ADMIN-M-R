import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { FormProvider, useForm } from 'react-hook-form';
import { Tab, Tabs } from '@mui/material';
import { Icon } from '@iconify/react';

import ProfileDetails from './profileDetails';
import OrgAccountInfo from './orgAccountInfo';
import PlanFeatures from './planFeatures';
import useProfile from '../../hooks/useProfile';

const ProfileTab = () => {
  const [Tabvalue, setTabValue] = useState('1');
  const [formcomplete, setformcomplete] = useState({});
  const [profilePicture, setProfilePicture] = useState();
  const [selectedCard, setselectedCard] = useState([]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const ProfilerTabs = activeTab => {
    const TabsList = {
      1: <ProfileDetails />,
      2: <OrgAccountInfo />,
      3: <PlanFeatures />,
    };

    return TabsList[activeTab];
  };

  return (
    <div className=''>
      <Tabs
        value={Tabvalue}
        onChange={handleChange}
        aria-label='icon position tabs example'
        variant='scrollable'
        scrollButtons
      >
        <Tab
          icon={<Icon icon='gg:profile' width={25} />}
          iconPosition='start'
          label='Profile Details'
          sx={{ gap: '15px' }}
          value={'1'}
        />
        <Tab
          icon={<Icon icon={'flowbite:user-add-solid'} width={25} />}
          iconPosition='start'
          label='Admin Account Info'
          sx={{ gap: '15px' }}
          value={'2'}
        />
        <Tab
          icon={<Icon icon={'oui:page-select'} width={25} />}
          iconPosition='start'
          label='Plan & Features'
          sx={{ gap: '15px' }}
          value={'3'}
        />
      </Tabs>
      <div>{ProfilerTabs(Tabvalue)}</div>
    </div>
  );
};

export default ProfileTab;
