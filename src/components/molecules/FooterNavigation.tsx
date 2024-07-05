import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FC } from 'react';

import { navigations } from '@/components/data/navigation.data';
import { SectionTitle, SocialLinks } from '@/components/molecules';

import { SITE_CONFIG } from '@/constants';

interface NavigationItemProps {
  label: string;
  path: string;
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <Typography
        sx={{
          position: 'relative',
          color: 'text.disabled',
          textDecoration: 'none',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        {label}
      </Typography>
    </Link>
  );
};

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
        <SectionTitle title='Informações' />
        <Typography>{SITE_CONFIG.company}</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <SectionTitle title='Menu' />
        {navigations.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <SectionTitle title='Contato' />
        <Typography>
          {SITE_CONFIG.phone} {SITE_CONFIG.email}
        </Typography>
        <SocialLinks />
      </Grid>
    </Grid>
  );
};

export default FooterNavigation;
