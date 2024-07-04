import { Typography, Button } from '@mui/material';
import React, { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BannerHeader from './bannerHeader';
import CardCarousel from '../shared/Carousel/cardCarousel';
import { getbanners } from '../../service/banner';
import useFetcher from '../../hooks/useFetcher';
import AddBanner from './addBanner';

const Banner = ({ bannerTitle }) => {
  const { fetcher, getExecutorState } = useFetcher();
  const [bannerlist, setBannerList] = React.useState([]);
  const [IsaddBanner, setIsAddBanner] = React.useState({
    open: false,
    type: '',
  });
  const StudentBanner =
    (bannerlist && bannerlist?.filter(item => item?.type === 'Student')) || [];
  const StaffBanner =
    (bannerlist && bannerlist?.filter(item => item?.type === 'Staff')) || [];
  console.log('🚀 ~ Banner ~ StaffBanner:', StudentBanner, bannerlist);

  const navigate = useNavigate();
  const handleOnClick = slug => {
    setIsAddBanner({ open: true, type: slug });
    // navigate(`/addBanner?type=${slug.toLowerCase()}`);
  };
  const handleDelete = async bannerId => {
    setBannerList(prevBanner =>
      prevBanner.filter(banner => banner?.id !== bannerId),
    );
  };

  const banner = [
    { buttonTitle: 'Student', bannerTitle: 'Student Banner' },
    { buttonTitle: 'Staff', bannerTitle: 'Staff Banner' },
  ];
  useEffect(() => {
    fetcher({
      key: 'banner',
      executer: () => getbanners(),
      onSuccess: res => {
        setBannerList(res?.data?.data || []);
      },
      onFailure: error => {
        console.log(error);
      },
      showErrorToast: true,
      showSuccessToast: false,
    });
  }, []);
  const { isLoading } = getExecutorState('banner');
  return (
    <>
      {IsaddBanner.open ? (
        <AddBanner Bannertype={IsaddBanner.type} />
      ) : (
        <div>
          <Typography variant='h2' className='text-start text-white'>
            Banners
          </Typography>
          {banner &&
            banner?.map((section, index) => (
              <div key={index} className='text-start'>
                <div className='flex justify-between'>
                  <BannerHeader bannerTitle={section?.bannerTitle} />

                  <Button
                    onClick={() => handleOnClick(section?.buttonTitle)}
                    variant='contained'
                    sx={{
                      color: 'black',
                      backgroundColor: 'white',
                      border: '1px solid rgba(0, 0, 0, 0.25)',
                      height: '2.75rem',
                      width: '13.4rem',
                      fontSize: '0.875rem',
                      fontWeight: 300,
                    }}
                  >
                    <AddCircleIcon
                      className='mr-1'
                      style={{ fontSize: '1rem' }}
                    />
                    Add Banner for {section?.buttonTitle}
                  </Button>
                </div>

                {/* <Cards1 key={index} /> */}
                <CardCarousel
                  onDelete={handleDelete}
                  BannerData={
                    section.buttonTitle === 'Student'
                      ? StudentBanner
                      : StaffBanner
                  }
                />
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default memo(Banner);
