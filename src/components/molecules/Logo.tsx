import { Box } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  onClick?: () => void;
}

const Logo: FC<Props> = ({ onClick }) => {
  return (
    <Box onClick={onClick} sx={{ cursor: 'pointer' }}>
      <Image
        alt='SóContemplados'
        src='/images/logo.png'
        width={341}
        height={47}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </Box>
  );
};

export default Logo;
