import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React, { FC } from 'react';

const HomeWhyUs: FC = () => {
  return (
    <Box
      id='why-us'
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
          <Typography
            variant='h2'
            sx={{
              fontSize: 40,
              textTransform: 'uppercase',
              color: '#fff',
              mb: 2,
            }}
          >
            Porque Escolher Nós
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {[
            {
              id: 1,
              icon: 'icon1.png',
              title: 'Segurança',
              description:
                'Muitos clientes já compraram nossas cartas e tiveram seus objetivos conquistados',
            },
            {
              id: 2,
              icon: 'icon2.png',
              title: 'Pesquisa Rápida',
              description:
                'Encontre inúmeras possibilidades em nossa função criação de cotas',
            },
            {
              id: 3,
              icon: 'icon3.png',
              title: 'Melhores Cartas',
              description:
                'Trabalhamos com as melhores empresas de cartas de crédito',
            },
          ].map((item) => (
            <Grid key={String(item.id)} item xs={12} sm={12} md={4}>
              <Image
                alt='SóContemplados'
                src={`/images/icons/${item.icon}`}
                width={32}
                height={40}
                style={{
                  width: '32px',
                  height: 'auto',
                }}
              />
              <Typography
                variant='h4'
                sx={{ fontSize: 16, color: '#fff', my: 2 }}
              >
                {item.title}
              </Typography>
              <Typography
                variant='subtitle1'
                sx={{ fontSize: 16, color: '#fff' }}
              >
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeWhyUs;
