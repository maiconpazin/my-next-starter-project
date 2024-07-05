import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React, { FC } from 'react';

import { StyledButton } from '@/components/atoms';

const HomeFindQuotes: FC = () => {
  return (
    <Box
      id='find-quotes'
      sx={{
        backgroundColor: 'background.default',
        pt: {
          xs: 6,
          md: 8,
        },
        pb: {
          xs: 8,
          md: 12,
        },
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant='h2' sx={{ fontSize: 40, color: '#fff' }}>
            Procurar Cotas
          </Typography>
        </Box>
        <Typography
          variant='subtitle1'
          sx={{ fontSize: 16, color: '#fff', my: 2 }}
        >
          Faça a pesquisa de cotas usando nosso filtro abaixo.
        </Typography>
        <Link href='/contemplados?cota=1'>
          <StyledButton color='secondary' size='medium' variant='contained'>
            Pesquisar cotas
          </StyledButton>
        </Link>
      </Container>
    </Box>
  );
};

export default HomeFindQuotes;
