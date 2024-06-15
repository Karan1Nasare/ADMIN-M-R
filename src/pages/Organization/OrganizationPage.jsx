import { Grid, Pagination, PaginationItem, Stack } from '@mui/material';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/buttons/Button';
import colors from '../../theme/colors';
import OrganizationCard from '../../components/Organization/OrganizationCard';
import PATH_DASHBOARD from '../../routes/path';
import OrganizationData from './OrganizationData';
import TextField from '../../components/shared/input/TextField';

const OrganizationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const navigate = useNavigate();

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const filteredItems = OrganizationData.filter(
    key =>
      key.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      key.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      key.phone.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const paginatedItems = filteredItems.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div
      className='w-full'
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'hidden',
      }}
    >
      <div className='w-max mb-6'>
        <h2 className="text-white text-[32px] font-normal font-['Helvetica'] text-left">
          Organization
        </h2>
      </div>
      <div className='text-sm w-full p-7 font-medium text-center bg-secondary__fill text-gray-500 border-gray-700 border rounded-md flex flex-row items-center justify-between'>
        <Stack direction={'row'} alignItems={'center'} spacing={3}>
          <div className='bg-secondary__fill__dark'>
            <TextField
              sx={{
                minWidth: '300px',
                background: theme => theme.color.secondary__fill,
              }}
              onChange={handleSearchChange}
              placeholder='Search Name, Inrollment, Standerd'
            />
          </div>
          <div className='bg-secondary__fill__dark border border-gray-700 border-opacity-20 rounded w-11 p-2 h-11'>
            <Icon
              icon={'octicon:filter-16'}
              className='text-white'
              width={25}
            />
          </div>
        </Stack>

        <Button
          sx={{ padding: '8px 16px', background: colors.white }}
          startIcon={<Icon icon={'gala:add'} />}
          onClick={() => navigate(PATH_DASHBOARD.organization.addOrganization)}
        >
          Add Organization
        </Button>
      </div>
      <Stack
        sx={{ width: '100%', marginTop: '20px', paddingBottom: '150px' }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <div className='xl:grid xl:grid-cols-3 xl:gap-7 lg:grid lg:grid-cols-2 lg:gap-7 md:grid md:grid-cols-1 md:gap-7 w-full max-w-screen mx-auto'>
          {paginatedItems.map((Organization, index) => (
            <div
              className='bg-secondary__fill rounded-md h-44 p-7 border border-gray-700'
              key={Organization.id}
            >
              <OrganizationCard key={index} Organization={Organization} />
            </div>
          ))}
        </div>

        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          renderItem={item => <PaginationItem {...item} />}
          sx={{
            mt: '25px',
            '& .MuiPaginationItem-root': {
              color: 'rgba(125, 143, 179, 1)',
              '&.Mui-selected': {
                color: colors.white,
              },
              '&:hover': {
                backgroundColor: colors.secondary__fill__dark,
                color: colors.white,
              },
            },
            '& .MuiPaginationItem-previousNext': {
              backgroundColor: colors.white,
              color: colors.black,
            },
          }}
        />
      </Stack>
    </div>
  );
};

export default OrganizationPage;
