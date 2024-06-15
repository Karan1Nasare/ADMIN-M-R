import { Stack, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Icon } from '@iconify/react';

import { useNavigate, useParams } from 'react-router-dom';
import TabTitle from '../../components/shared/TabTitle';
import Button from '../../components/shared/buttons/Button';
import ArrowRight from '../../assets/icon/Arrow Right.svg';
import PATH_DASHBOARD from '../../routes/path';
import AdminData from './AdminData';
import AdminDetailInfo from '../../components/Admins/AdminDetails/AdminDetailInfo';
import AdminAccountInfo from '../../components/Admins/AdminDetails/AdminAccountInfo';

const AdminDetailsPage = () => {
  const [Tabvalue, setTabValue] = useState('1');
  const [adminDetails, setAdminDetails] = useState();
  const { id } = useParams('id');
  const navigate = useNavigate();

  useEffect(() => {
    const admin = AdminData?.find(row => row?.id === id);
    if (admin) {
      setAdminDetails(admin);
    } else {
      navigate(PATH_DASHBOARD.Admins.adminList);
    }
  }, [id]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const AdminDetailsTabs = activeTab => {
    const TabsList = {
      1: <AdminDetailInfo admin={adminDetails} />,
      2: <AdminAccountInfo admin={adminDetails} />,
    };

    return TabsList[activeTab];
  };

  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <TabTitle title={'Admin'} />
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <Button
            sx={{ background: theme => theme.color.white, padding: '8px 16px' }}
          >
            Manage
          </Button>
          <Button
            sx={{ background: theme => theme.color.white, padding: '8px 16px' }}
          >
            Edit
          </Button>
          <Button
            sx={{
              background: 'rgba(255,102,146,0.2)',
              color: 'rgba(255, 102, 146, 1)',
              padding: '8px 16px',
            }}
            startIcon={
              <FiTrash2 className='text-[rgba(255, 102, 146, 1)] cursor-pointer' />
            }
          >
            Delete
          </Button>

          <Button
            type='button'
            variant='contained'
            color='primary'
            sx={{ background: 'white', color: '#', padding: '8px 16px' }}
            startIcon={
              <img src={ArrowRight} alt='next' className='rotate-180' />
            }
            onClick={() => navigate(PATH_DASHBOARD.Admins.adminList)}
          >
            Pervious
          </Button>
        </Stack>
      </Stack>

      <Stack sx={{ width: '100%', marginTop: '20px', paddingBottom: '150px' }}>
        <Tabs
          value={Tabvalue}
          onChange={handleChange}
          aria-label='icon position tabs example'
          sx={{ width: 'max-content' }}
        >
          <Tab
            icon={<Icon icon='gg:profile' width={25} />}
            iconPosition='start'
            label='Admin Details'
            sx={{ gap: '15px' }}
            value={'1'}
          />
          <Tab
            icon={<Icon icon={'hugeicons:information-diamond'} width={25} />}
            iconPosition='start'
            label='Account Info'
            sx={{ gap: '15px' }}
            value={'2'}
          />
        </Tabs>

        {AdminDetailsTabs(Tabvalue)}
      </Stack>
    </>
  );
};

export default AdminDetailsPage;
