import { Stack, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Icon } from '@iconify/react';
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';
import TabTitle from '../../components/shared/TabTitle';
import Button from '../../components/shared/buttons/Button';

import PATH_DASHBOARD from '../../routes/path';
import OrganizationData from './OrganizationData';
import ArrowRight from '../../components/icon/ArrowRight';
import OrganizationDetailInfo from '../../components/Organization/OrganizationDetails/OrganizationDetailInfo';
import OrganizationAccountInfo from '../../components/Organization/OrganizationDetails/OrganizationAccountInfo';
import DeleteOrgDialog from './DeleteDialog';
import useOrganizationManagement from '../../components/Admins/hooks/useorganization';
import axiosInstance from '../../utilities/axios-client';

const OrganizationViewPage = () => {
  const [Tabvalue, setTabValue] = useState('1');
  const [organizationDetails, setorganizationDetails] = useState({});
  const [openDelete, setOpenDelete] = useState(false);
  const { id } = useParams('id');
  const navigate = useNavigate();

  const fetchOrganization = async () => {
    try {
      const data = await axiosInstance.get(`/organizations/${id}`);
      setorganizationDetails(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // const admin = OrganizationData?.find(row => row?.id === id);
    // if (admin) {
    fetchOrganization();
    // } else {
    // navigate(PATH_DASHBOARD.Admins.adminList);
    // }
  }, []);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const confirmDeleteHandler = () => {
    setOpenDelete(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
    // navigate('/');
  };

  const openDeleteDialog = () => {
    setOpenDelete(true);
  };

  const AdminDetailsTabs = activeTab => {
    const TabsList = {
      1: <OrganizationDetailInfo organization={organizationDetails} />,
      2: <OrganizationAccountInfo organization={organizationDetails} />,
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
        <TabTitle title={'Abc org '} />
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <Button
            sx={{ background: theme => theme.color.white, padding: '8px 16px' }}
          >
            Manage
          </Button>
          <Button
            sx={{ background: theme => theme.color.white, padding: '8px 16px' }}
            startIcon={<Icon icon='basil:edit-outline' />}
            onClick={() => {
              navigate(PATH_DASHBOARD.organization.addOrganization, {
                state: { editId: id },
              });
            }}
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
            onClick={openDeleteDialog}
          >
            Delete
          </Button>

          <Button
            type='button'
            variant='contained'
            sx={{
              background: 'transparent',
              color: 'white',
              padding: '8px 16px',
            }}
            startIcon={<ArrowRight className='rotate-180' />}
            onClick={() =>
              navigate(PATH_DASHBOARD.organization.organizationList)
            }
          >
            Back
          </Button>
        </Stack>
      </Stack>

      <DeleteOrgDialog
        id={id}
        fullMessage={'Are you sure want to Delete Organization ?'}
        title={`Delete organization`}
        handleClose={handleCloseDelete}
        deleteHandler={confirmDeleteHandler}
        open={openDelete}
      />
      <Stack
        sx={{
          width: '100%',
          marginTop: '20px',
          paddingBottom: '150px',
        }}
      >
        <Tabs
          value={Tabvalue}
          onChange={handleChange}
          aria-label='icon position tabs example'
          sx={{ width: 'max-content', bgcolor: 'transparent', mb: 4 }}
        >
          <Tab
            icon={<Icon icon='gg:profile' width={25} />}
            iconPosition='start'
            label='Profile Details'
            sx={{ gap: '15px' }}
            value={'1'}
          />
          <Tab
            icon={<Icon icon={'hugeicons:information-diamond'} width={25} />}
            iconPosition='start'
            label='Org Account Info'
            sx={{ gap: '15px' }}
            value={'2'}
          />
        </Tabs>
        {AdminDetailsTabs(Tabvalue)}
      </Stack>
    </>
  );
};

export default OrganizationViewPage;
