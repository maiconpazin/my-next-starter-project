import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  sx: SxProps;
}

const Card: FC<Props> = ({ children, sx }) => {
  return (
    <Box
      sx={{
        px: 2,
        py: 1.5,
        boxShadow: 1,
        borderRadius: 2,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
