import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React, { FC } from 'react';

import { Card } from '@/components/atoms';

import { ITestimonial } from '@/types/testimonial';

interface Props {
  item: ITestimonial;
}

const TestimonialItem: FC<Props> = ({ item }) => {
  return (
    <Card
      sx={{
        maxWidth: '300px',
        backgroundColor: 'background.paper',
        m: 2,
      }}
    >
      <Box>
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            height: 200,
            mb: 2,
          }}
        >
          <Image
            src={item.photo as string}
            width={570}
            height={427}
            alt={'Mentor ' + item.id}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component='h2' variant='h4' sx={{ fontSize: '1.4rem' }}>
            {item.name}
          </Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }}>
            {item.company}
          </Typography>
          <Typography sx={{ mb: 2, color: 'text.primary' }} variant='subtitle1'>
            "{item.testimonial}"
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
export default TestimonialItem;
