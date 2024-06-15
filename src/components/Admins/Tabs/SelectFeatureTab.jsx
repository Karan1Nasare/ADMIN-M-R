import React from 'react';
import {
  Card,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify';
import { RHFTextField } from '../../../hooks/hook-form';
import colors from '../../../theme/colors';
import FeatureCard from '../../shared/FeatureCard';
import AnouncementImage from '../../../assets/announcement_card.png';

const data = Array.from({ length: 6 }, (_, index) => ({
  title: `Feature ${index}`,
  descriptionTitle: 'Total Amount:',
  descriptionMetaData: '600',
  image: AnouncementImage,
  id: index + 1,
}));
function SelectFeatureTab({ selectedCard, setselectedCard }) {
  const [checkedAll, setCheckedAll] = React.useState(false);
  const [DeSelectAll, setDeSelectAll] = React.useState(false);
  const handleSelectAll = (_, checked) => {
    setCheckedAll(checked);
    setDeSelectAll(false);
    if (checked) {
      setselectedCard(data.map(item => item.id));
    }
  };
  const onChnageCardChekbox = id => {
    setDeSelectAll(false);
    setCheckedAll(false);
    if (selectedCard.includes(id)) {
      setselectedCard(selectedCard.filter(item => item !== id));
    } else {
      setselectedCard([...selectedCard, id]);
    }
  };
  const handleDeselectAll = (_, checked) => {
    setDeSelectAll(checked);
    if (checked) {
      setCheckedAll(false);
      setselectedCard([]);
    }
  };
  return (
    <>
      <Card
        sx={{
          borderRadius: '12px',
          width: '100%',
          color: 'black',
          backgroundColor: colors.secondary__fill,
          padding: '30px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Box
            sx={{
              px: '10px',
              py: '3px',
              bgcolor: colors.secondary__fill__dark,
              border: `1px solid ${colors.blue__gray}`,
              borderRadius: '6px',
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedAll}
                    onChange={handleSelectAll}
                    icon={
                      <Icon
                        icon='ic:round-check-box-outline-blank'
                        color='white'
                        fontSize={20}
                      />
                    }
                    checkedIcon={
                      <Icon icon='ic:round-check-box' fontSize={20} />
                    }
                  />
                }
                label='Select All'
              />
            </FormGroup>
          </Box>
          <Box
            sx={{
              px: '10px',
              py: '3px',
              bgcolor: colors.secondary__fill__dark,
              border: `1px solid ${colors.blue__gray}`,
              borderRadius: '6px',
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleDeselectAll}
                    checked={DeSelectAll}
                    icon={
                      <Icon
                        icon='ic:round-check-box-outline-blank'
                        color='white'
                        fontSize={20}
                      />
                    }
                    checkedIcon={
                      <Icon icon='ic:round-check-box' fontSize={20} />
                    }
                  />
                }
                label='Deselect All'
              />
            </FormGroup>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                p: '10px',
                pr: '5px',
                color: 'white',
              }}
            >
              {selectedCard.length} Selected
            </Box>
          </Box>
        </Box>
      </Card>
      <Grid container spacing={2}>
        {data.map(item => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <FeatureCard
              title={item.title}
              image={item.image}
              descriptionMetaData={item.descriptionMetaData}
              descriptionTitle={item.descriptionTitle}
              id={item.id}
              adminPage={{
                show: true,
                Ischecked: selectedCard.includes(item.id),
                onChnageCardChekbox,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default SelectFeatureTab;
