'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';

import { testimonials } from '@/components/data/testimonial.data';
import { TestimonialItem } from '@/components/molecules';

import { ITestimonial } from '@/types/testimonial';

const HomeTestimonials: FC = () => {
  return (
    <Box
      id='testimonials'
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: {
          xs: 8,
          md: 12,
        },
        backgroundColor: '#ecf3f3',
      }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant='h2'
            sx={{ fontSize: 40, mb: 2, textTransform: 'uppercase' }}
          >
            Opniões dos Clientes
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', overflow: 'hidden', flexDirection: 'row' }}>
          {testimonials.map((item: ITestimonial) => (
            <TestimonialItem key={String(item.id)} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HomeTestimonials;
