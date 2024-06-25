import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import BannerHeader from './bannerHeader';
import UploadImage from '../shared/uploadImage/uploadImage';
import BannerForm from './bannerForm';
import AdminImageSelect from '../Organization/Form/AdminImageSelect';
import { FormProvider } from '../../hooks/hook-form';
import useFetcher from '../../hooks/useFetcher';
import { addbanner } from '../../service/banner';
// import { useDropzone } from "react-dropzone";

const AddBanner = ({ Bannertype }) => {
  const schema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    button_link: Yup.string().url('Enter a valid URL'),
    description: Yup.string().required('Description is required'),
    image: Yup.mixed().required('Banner picture is required'),
  });
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      button_link: '',
      description: '',
      image: '',
      type: Bannertype,
    },
  });
  const {
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = methods;
  const [file, setFile] = useState();
  const { fetcher, getExecutorState } = useFetcher();
  const { isLoading } = getExecutorState('banner');
  useEffect(() => {
    if (file && file.length > 0) {
      setValue('image', file[0]);
      clearErrors('image');
    } else {
      setValue('image', null);
    }
  }, [file]);
  const onsubmit = data => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetcher({
      key: 'banner',
      executer: () => addbanner(formData),
      onSuccess: res => {
        reset();
        setValue('image', null);
      },
      showErrorToast: true,
    });
    console.log(data, 'asxbahslakmslxkm');
  };
  return (
    <FormProvider onSubmit={handleSubmit(onsubmit)} methods={methods}>
      <div className='text-start flex items-center'>
        <BannerHeader bannerTitle='Add Banner' />
      </div>
      <div className='w-full mt-8'>
        <AdminImageSelect
          file={file}
          setFile={setFile}
          errors={errors?.image}
          label='Banner'
        />
        <BannerForm Bannertype={Bannertype} />
        <div className='flex justify-end mt-6'>
          <Button
            disabled={isLoading}
            type='submit'
            variant='contained'
            startIcon={<AddCircleIcon />}
            className={`bg-white text-black ${isLoading ? 'cursor-not-allowed' : ''}`}
            sx={{
              backgroundColor: 'white',
              color: 'black',
            }}
          >
            Add Banner
          </Button>
        </div>
      </div>
    </FormProvider>
  );
};

export default AddBanner;
