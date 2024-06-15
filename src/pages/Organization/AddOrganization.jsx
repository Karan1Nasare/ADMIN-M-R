import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import OrganizationDetailsForm from '../../components/Organization/Form/OrganizationDetailsForm';
import { FormProvider } from '../../hooks/hook-form';
import Button from '../../components/shared/buttons/Button';

const AddOrganization = () => {
  const [Tabvalue, setTabValue] = useState('1');
  const [formcomplete, setformcomplete] = useState({});
  const [profilePicture, setProfilePicture] = useState();
  const [selectedCard, setselectedCard] = useState([]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const onSubmit = async data => {
    setformcomplete({ [Tabvalue]: true });
    setTabValue(prv => `${parseInt(prv, 10) + 1}`);
  };
  const methods = useForm();
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
  } = methods;
  const values = watch();
  function handlebackbtn() {
    setTabValue(prv => `${prv - 1}`);
  }

  const AdminTabs = activeTab => {
    const TabsList = {
      1: <OrganizationDetailsForm setValue={setValue} />,
    };

    return TabsList[activeTab];
  };

  return (
    <div>
      <Tabs
        sx={{ bgcolor: 'transparent', p: 0, m: 0 }}
        value={Tabvalue}
        onChange={handleChange}
        aria-label='icon position tabs example'
        variant='scrollable'
        scrollButtons
      >
        <Tab
          sx={{
            p: 0,
            m: 0,
          }}
          icon={<Icon icon='gg:profile' width={25} />}
          iconPosition='start'
          label='Profile Details'
          value={'1'}
        />
      </Tabs>
      <div>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          {AdminTabs(Tabvalue)}
          <div className={`flex  justify-end`}>
            {Tabvalue !== 1 && (
              <Button
                type='submit'
                variant='contained'
                color='primary'
                disabled={isSubmitting}
                sx={{ mt: 3, mr: 3, background: 'white', color: '#000' }}
              >
                Save
              </Button>
            )}
            <Button
              type='button'
              variant='contained'
              color='primary'
              disabled={isSubmitting}
              sx={{
                mt: 3,
                background: '#FFE5ED',
                color: 'custome.delete',
              }}
            >
              Cancel
            </Button>
          </div>
        </FormProvider>
      </div>
    </div>
  );
};

export default AddOrganization;
