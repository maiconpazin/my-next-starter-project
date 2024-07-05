'use client';

import { styled, TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';

const CustomTextField = styled(TextField)<TextFieldProps>(() => ({
  '& .MuiInputBase-root:hover': {
    color: '#fff',
    borderColor: '#fff',
  },
  '& .MuiInputBase-input': {
    color: '#fff',
    borderColor: '#fff',
  },
  '& .MuiInputLabel-shrink': {
    color: '#fff',
  },
  '& label': {
    color: '#fff',
  },
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .MuiOutlinedInput': {
    borderColor: '#fff',
  },
  '& .MuiOutlinedInput.Mui-focused': {
    borderColor: '#fff',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#fff',
  },
}));

const StyledTextField: FC<TextFieldProps> = (props) => {
  return <CustomTextField {...props} color='primary' />;
};

export default StyledTextField;
