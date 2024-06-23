/* eslint-disable import/no-cycle */
import { Tab, Tabs } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import OrganizationDetailsForm from '../../components/Organization/Form/OrganizationDetailsForm';
import { FormProvider } from '../../hooks/hook-form';
import Button from '../../components/shared/buttons/Button';
import useOrganizationManagement from '../../components/Admins/hooks/useorganization';
import { getRouteByName } from '../../App.routes';

const AddOrganization = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addOrganization, error, updateOrganization } =
    useOrganizationManagement();
  const [Tabvalue, setTabValue] = useState('1');
  const [statesOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [formcomplete, setformcomplete] = useState({});
  const [profilePicture, setProfilePicture] = useState();
  const [selectedCard, setselectedCard] = useState([]);

  const token =
    JSON.parse(window.localStorage.getItem('last_state'))?.user?.token || '';

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const onSubmit = async data => {
    try {
      console.log('formData :: ', data);
      const {
        OrgName,
        AdminEmail,
        OrgPhoneNumber,
        OrgPersonName,
        OrgPersonNumber,
        GSTNumber,
        AlternativePhoneNumber,
        AdminAddress,
        Website,
        State,
        City,
        OrgAddress,
        Pincode,
      } = data;
      const formData = new FormData();
      formData.append('full_name', OrgName);
      formData.append('email', AdminEmail);
      formData.append('phone_number', OrgPhoneNumber);
      formData.append('alternative_phone_number', AlternativePhoneNumber);
      formData.append('website', Website);
      formData.append('address', OrgAddress);
      formData.append('state_id', State);
      formData.append('city_id', City);
      formData.append('org_person_name', OrgPersonName);
      formData.append('org_person_number', OrgPersonNumber);
      formData.append('pincode', Pincode);
      formData.append('gst_number', GSTNumber);
      formData.append('image', formData.profilePicture);
      let resdata;
      if (location.state) {
        formData.append('_method', 'PUT');
        resdata = await updateOrganization(location.state.editId, formData);
      } else {
        resdata = await addOrganization(formData);
      }
      console.log('resdata', resdata, getRouteByName('organization')?.route);
      if (resdata.status === 200) {
        navigate(getRouteByName('organization')?.route);
      }
      // setformcomplete({ [Tabvalue]: true });
      // setTabValue(prv => `${parseInt(prv, 10) + 1}`);
    } catch (err) {
      // console.log(err);
    }
  };
  const methods = useForm();
  const {
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { isSubmitting },
  } = methods;
  const selectedState = watch('State');
  console.log('state :::', selectedState);
  function handlebackbtn() {
    setTabValue(prv => `${prv - 1}`);
  }

  const fetchStates = async () => {
    const response = await axios.get(
      `https://superadmin.mandreducation.in/api/v1/states`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    setStateOptions(
      response.data.data.map(e => ({ label: e.name, value: e.id })),
    );
  };

  const fetchCities = async id => {
    const response = await axios.get(
      `https://superadmin.mandreducation.in/api/v1/cities?state_id=${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    setCityOptions(
      response.data.data.map(e => ({ label: e.name, value: e.id })),
    );
  };

  const fetchOrganization = async () => {
    try {
      const data = await axios.get(
        `https://superadmin.mandreducation.in/api/v1/organizations/${location.state.editId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (data.data.status) {
        const {
          full_name,
          email,
          phone_number,
          alternative_phone_number,
          website,
          address,
          org_person_name,
          org_person_number,
          pincode,
          state_id,
          city_id,
          gst_number,
        } = data.data.data;

        const initialData = {
          OrgName: full_name,
          AdminEmail: email,
          OrgPhoneNumber: phone_number,
          OrgPersonName: org_person_name,
          OrgPersonNumber: org_person_number,
          GSTNumber: gst_number,
          AlternativePhoneNumber: alternative_phone_number,
          AdminAddress: address,
          Website: website,
          State: state_id,
          OrgAddress: address,
          Pincode: pincode,
        };
        await fetchStates(); // Fetch states before setting values
        // setValue('State', `2`);
        setValue('profilePicture', data.data.data.image.url);
        // fetchCities(state_id);
        // Setting initial form values
        Object.entries(initialData).forEach(([key, value]) => {
          console.log(key, value, 'values');
          setValue(key, value);
        });
        fetchCities(state_id); // Fetch cities after setting state
      }
    } catch (err) {
      // console.log(err);
    }
  };

  // useEffect(() => {

  // }, [location.state]);

  // useEffect(() => {
  //   fetchStates();
  //   if (location.state) {
  //     fetchOrganization();
  //   }
  // }, []);

  useEffect(() => {
    const initializeForm = async () => {
      await fetchStates();
      if (location.state) {
        await fetchOrganization();
      }
    };
    initializeForm();
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetchCities(selectedState);
    }
  }, [selectedState]);

  const AdminTabs = activeTab => {
    const TabsList = {
      1: (
        <OrganizationDetailsForm
          setValue={setValue}
          control={control}
          statesOptions={statesOptions}
          cityOptions={cityOptions}
        />
      ),
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
