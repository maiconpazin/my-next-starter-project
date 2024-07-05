import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { StyledButton } from '@/components/atoms';

interface Props {
  title: string;
  description: string;
  cost: string;
}

const OfferItem: FC<Props> = ({ title, description, cost }) => {
  return (
    <Box
      sx={{
        px: 2,
        py: 1.5,
        boxShadow: 1,
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Image
          alt='SóContemplados'
          src='https://dummyimage.com/317x184/ddd/fff'
          width={317}
          height={184}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <Typography
          variant='h3'
          sx={{ fontSize: '1rem', color: 'text.primary' }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ lineHeight: 1.3, my: 2, color: 'text.secondary' }}
          variant='subtitle1'
        >
          {description} {cost}
        </Typography>
        <Link href='/contemplados?cota=1'>
          <StyledButton color='primary' size='medium' variant='contained'>
            Reservar
          </StyledButton>
        </Link>
      </Box>
    </Box>
  );
};

export default OfferItem;
