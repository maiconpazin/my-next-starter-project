import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React, { FC } from 'react';

import { StyledButton } from '@/components/atoms';

const HomeHero: FC = () => {
  return (
    <Box
      id='hero'
      sx={{
        background: {
          sm: 'none',
          md: "url('/images/banner.jpg') no-repeat right",
        },
        backgroundPositionY: '0px',
        position: 'relative',
        pb: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={0}
          sx={{ flexDirection: { xs: 'column', md: 'unset' } }}
        >
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component='h2'
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 40, md: 72 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                    mt: 2,
                  }}
                >
                  <Typography
                    component='mark'
                    sx={{
                      position: 'relative',
                      color: 'primary.main',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    Adquira seu{' '}
                  </Typography>
                  <Typography
                    component='span'
                    sx={{
                      color: 'text.secondary',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                    }}
                  >
                    Consórcio
                  </Typography>
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: 'text.primary', lineHeight: 1.6 }}>
                  Compre um Consórcio já Contemplado!
                  <br />
                  Entre já em contato.
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }}>
                <Link href='/contemplados'>
                  <StyledButton
                    color='primary'
                    size='large'
                    variant='contained'
                  >
                    Ver Cotas
                  </StyledButton>
                </Link>
                <Link href='/#sobre-nos'>
                  <StyledButton color='primary' size='large' variant='outlined'>
                    Sobre Nós
                  </StyledButton>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            <Box />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeHero;
