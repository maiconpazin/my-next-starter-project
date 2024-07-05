import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { StyledButton } from '@/components/atoms';

interface Props {
  title?: string;
}

const HomeContact: FC<Props> = ({ title = 'Entre em contato' }) => {
  return (
    <Box
      id='contact'
      sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}
    >
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 2,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography
            variant='h1'
            component='h2'
            sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}
          >
            {title}
          </Typography>
          <Typography sx={{ mb: 6 }}>
            Clique no botão abaixo para conversar com nosso time de
            especialistas.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          >
            <Box>
              <StyledButton disableHoverEffect size='large'>
                Entrar em contato
              </StyledButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeContact;
