import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { StyledButton } from '@/components/atoms';

const HomeAboutUs: FC = () => {
  return (
    <Box
      id='about-us'
      sx={{
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
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Image
              alt='SóContemplados'
              src='https://dummyimage.com/500x500/ddd/fff'
              width={500}
              height={500}
              style={{
                width: '100%',
                maxWidth: '500px',
                height: 'auto',
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ textAlign: 'left' }}>
              <Typography
                variant='h2'
                sx={{ fontSize: 40, color: 'text.primary' }}
              >
                Sobre Nós
              </Typography>
            </Box>
            <Typography
              variant='subtitle1'
              sx={{ fontSize: 16, color: 'text.primary', my: 2 }}
            >
              Empresa que comercializa as melhores cartas contempladas para
              viabilizar a conquista dos sonhos de nossos clientes. Atendimento
              personalizado, rápido e seguro, trabalhando com as melhores
              Administradoras do mercado.
            </Typography>
            <Link href='/contemplados?cota=1'>
              <StyledButton color='secondary' size='medium' variant='contained'>
                Saiba Mais
              </StyledButton>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeAboutUs;
