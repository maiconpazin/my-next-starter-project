'use client'; // Error components must be Client Components

import WarningIcon from '@mui/icons-material/Warning';
import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ocorreu um erro',
};

export default function Error() {
  return (
    <main>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '70vh',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <WarningIcon />
          <Typography variant='h1'>Oops, alguma coisa deu errado!</Typography>
          <Typography variant='h5'>
            Infelizmente não foi possível continuar com a operação.
          </Typography>
          <Link href='/'>
            <Typography variant='subtitle1'>Voltar para a home</Typography>
          </Link>
        </Box>
      </Box>
    </main>
  );
}
