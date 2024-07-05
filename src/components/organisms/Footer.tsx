import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { FooterNavigation, SectionTitle } from '@/components/molecules';

const Footer: FC = () => {
  return (
    <Box
      id='footer'
      component='footer'
      sx={{
        backgroundColor: 'primary.main',
        py: { xs: 6, md: 9 },
        color: 'primary.contrastText',
      }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <SectionTitle title='Faça sua busca' />
              <Typography variant='subtitle1' sx={{ letterSpacing: 1, mb: 2 }}>
                Clique no icone abaixo para buscar a melhor carta de crédito
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
