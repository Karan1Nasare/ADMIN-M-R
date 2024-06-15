import { useFormContext, Controller } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
import React from 'react';
import colors from '../../theme/colors';
import TextField from '../../components/shared/input/TextField';

// ----------------------------------------------------------------------

function RHFTextField({
  name,
  helperText,
  placeholder,
  sx,
  required = false,
  defaultValue,
  ...other
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: { value: required, message: `This field is required` },
      }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={
            typeof field.value === 'number' && field.value === 0
              ? ''
              : field.value
          }
          defaultValue={defaultValue}
          error={!!error}
          helperText={error ? error?.message : helperText}
          placeholder={placeholder}
          startAdornment={<InputAdornment position='start'>$</InputAdornment>}
          {...other}
        />
      )}
    />
  );
}

export default RHFTextField;
