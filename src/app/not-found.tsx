'use client';

import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';
import Link from 'next/link';
import { RiAlarmWarningFill } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
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
          <RiAlarmWarningFill
            size={60}
            className='drop-shadow-glow animate-flicker text-red-500'
          />
          <Typography variant='h1'>Página Não Encontrada!</Typography>
          <Typography variant='h5'>
            Verifique se você acessou o endereço corretamente.
          </Typography>
          <Link href='/'>
            <Typography variant='subtitle1'>Voltar para a home</Typography>
          </Link>
        </Box>
      </Box>
    </main>
  );
}
