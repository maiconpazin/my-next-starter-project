import { Box, Container, Grid, Typography } from '@mui/material';

import { StyledButton } from '@/components/atoms';

import { setQuotasState } from '@/store/cartSlice';
import { RootState, useAppDispatch, useAppSelector } from '@/store/store';

const CartFooter = () => {
  const dispatch = useAppDispatch();

  const quotasState = useAppSelector(
    (state: RootState) => state.cart.quotasState
  );

  const cleanCart = () => {
    dispatch(setQuotasState([]));
  };

  return (
    <Box
      id='cart-footer'
      sx={{
        backgroundColor: '#f8f8f8',
        py: { xs: 1 },
        width: '100%',
        color: 'primary.light',
        position: 'fixed',
        bottom: '0px',
        zIndex: 1200,
      }}
    >
      <Container>
        <Grid container sx={{ alignItems: 'center' }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={7}
            sx={{ my: { xs: 2, sm: 0 } }}
          >
            <Typography>
              Selecione{' '}
              <strong>duas ou mais cotas da mesma Administradora</strong> para
              ver a simulação das cotas unificadas.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={2} sx={{ my: { xs: 2, lg: 0 } }}>
            <Typography variant='h5'>
              {quotasState.length} Cotas Selecionadas
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: { xs: 'flex-start', sm: 'flex-end' },
                alignItems: 'center',
              }}
            >
              <Box sx={{ mb: { xs: 2, sm: 0 } }}>
                <StyledButton
                  onClick={cleanCart}
                  color='dark'
                  size='medium'
                  variant='outlined'
                >
                  Descartar
                </StyledButton>
              </Box>
              <Box sx={{ ml: 2, mb: { xs: 2, sm: 0 } }}>
                <StyledButton
                  color='primary'
                  size='medium'
                  variant='contained'
                  startIcon=''
                >
                  Somar Cotas
                </StyledButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CartFooter;
