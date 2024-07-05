'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React, { FC } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import { navigations } from '@/components/data/navigation.data';

interface ICustomLinkProps {
  destination: string;
  children: React.ReactElement<unknown>;
}

const CustomLink: FC<ICustomLinkProps> = ({ destination, children }) => {
  return destination?.includes('/') ? (
    <Link href={destination}>{children}</Link>
  ) : (
    <ScrollLink
      {...{
        activeClass: 'current',
        to: destination,
        spy: true,
        smooth: true,
        duration: 350,
      }}
    >
      {children}
    </ScrollLink>
  );
};

const Navigation: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => (
        <CustomLink key={destination} destination={destination}>
          <Typography
            sx={{
              position: 'relative',
              color: 'text.disabled',
              textDecoration: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: { xs: 0, md: 3 },
              mb: { xs: 3, md: 0 },
              fontSize: { xs: '1.2rem', md: 'inherit' },
              ...(destination === '/' && {
                color: 'text.disabled',
              }),
              '&:hover': {
                // color: 'primary.main',
                textDecoration: 'underline',
              },
            }}
          >
            {label}
          </Typography>
        </CustomLink>
      ))}
    </Box>
  );
};

export default Navigation;
