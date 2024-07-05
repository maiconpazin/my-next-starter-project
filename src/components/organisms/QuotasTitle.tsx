import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';

const QuotasTitle: FC = () => {
  return (
    <Box
      id='quotas-title'
      sx={{
        position: 'relative',
        py: 4,
      }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            textAlign: 'center',
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
              }}
            >
              Cotas Contempladas
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default QuotasTitle;
