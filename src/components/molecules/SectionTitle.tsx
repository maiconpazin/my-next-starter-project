import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';

interface Props {
  title: string;
}

const SectionTitle: FC<Props> = ({ title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: 2,
      }}
    >
      <Typography
        component='p'
        variant='h5'
        sx={{ color: 'primary.contrastText', fontWeight: '700' }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
