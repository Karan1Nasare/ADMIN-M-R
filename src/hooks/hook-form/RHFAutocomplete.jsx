import { useForm, Controller } from 'react-hook-form';
import { Autocomplete, Chip, TextField } from '@mui/material';
import React from 'react';

export default function RHFAutocomplete({ name, label, helperText, ...other }) {
  const { control, setValue } = useForm();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          options={[]}
          {...field}
          onChange={(event, newValue) =>
            setValue(name, newValue, { shouldValidate: true })
          }
          renderInput={params => (
            <TextField
              label={label}
              error={!!error}
              helperText={error ? error?.message : helperText}
              {...params}
            />
          )}
          {...other}
        />
      )}
    />
  );
}
