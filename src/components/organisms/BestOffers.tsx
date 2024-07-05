import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { StyledButton } from '@/components/atoms';
import { Card } from '@/components/atoms';
import { offers } from '@/components/data/offers.data';

import { TQuotaOffer } from '@/types/quota';

const HomeBestOffers: FC = () => {
  return (
    <Container sx={{ pl: 0, pr: 0 }}>
      <Box
        id='best-offers'
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
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant='h2'
            sx={{ fontSize: 40, mb: 2, textTransform: 'uppercase' }}
          >
            Melhores Ofertas
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {offers.map(({ title, description, cost }: TQuotaOffer, index) => (
            <Grid key={String(index)} item xs={12} sm={6} md={4}>
              <Card
                sx={{
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
                    <StyledButton
                      color='primary'
                      size='medium'
                      variant='contained'
                    >
                      Reservar
                    </StyledButton>
                  </Link>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomeBestOffers;
