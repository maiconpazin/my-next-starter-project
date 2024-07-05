'use client';

import { Menu } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';

import { Logo, Navigation } from '@/components/molecules';

import { SITE_CONFIG } from '@/constants';

const Header: FC = () => {
  const { push } = useRouter();
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  const goHome = () => push('/');

  return (
    <>
      <Box id='header' sx={{ backgroundColor: 'background.default' }}>
        <Container sx={{ py: { xs: 1, md: 1 } }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Logo onClick={goHome} />
            <Box
              sx={{
                ml: 'auto',
                display: { xs: 'inline-flex', md: 'none' },
                ...(visibleMenu && {
                  zIndex: 1101,
                }),
              }}
            >
              <IconButton
                sx={{ color: 'text.disabled' }}
                onClick={() => setVisibleMenu(!visibleMenu)}
              >
                <Menu />
              </IconButton>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', md: 'row' },
                transition: (theme) => theme.transitions.create(['top']),
                ...(matchMobileView && {
                  py: 6,
                  backgroundColor: 'background.default',
                  zIndex: 'appBar',
                  position: 'fixed',
                  height: { xs: '90vh', md: 'auto' },
                  top: visibleMenu ? 0 : '-120vh',
                  left: 0,
                }),
              }}
            >
              <Box /> {/* Magic space */}
              <Navigation />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: 'secondary.light' }}>
        <Container sx={{ py: { xs: 1, md: 1 } }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant='body1' sx={{ color: 'white' }}>
              Brasil
            </Typography>
            <Box />
            <Box />
            <Typography variant='body1' sx={{ color: 'white' }}>
              {SITE_CONFIG.phone}
            </Typography>
            <Typography
              variant='body1'
              sx={{ color: 'white', display: { xs: 'none', sm: 'block' } }}
            >
              {SITE_CONFIG.email}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;
