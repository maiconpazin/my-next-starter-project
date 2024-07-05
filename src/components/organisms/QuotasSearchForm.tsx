'use client';

import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Container,
  FormHelperText,
  Grid,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';
import { Control, Controller, SubmitHandler, useForm } from 'react-hook-form';
import { InferType, number, object } from 'yup';

import { StyledButton, StyledTextField } from '@/components/atoms';

import quotaService from '@/services/quotas.service';

const StyledForm = styled.form`
  .MuiFormHelperText-root {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const formSchema = object({
  entry_val_min: number().typeError('Digite apenas números').nullable(),
  entry_val_max: number().typeError('Digite apenas números').nullable(),
  credit_value_val_min: number().typeError('Digite apenas números').nullable(),
  credit_value_val_max: number().typeError('Digite apenas números').nullable(),
  installments_val_min: number().typeError('Digite apenas números').nullable(),
  installments_val_max: number().typeError('Digite apenas números').nullable(),
  installment_value_val_min: number()
    .typeError('Digite apenas números')
    .nullable(),
  installment_value_val_max: number()
    .typeError('Digite apenas números')
    .nullable(),
});

interface FormFieldProps {
  title?: string;
  label: string;
  field:
    | 'entry_val_min'
    | 'entry_val_max'
    | 'credit_value_val_min'
    | 'credit_value_val_max'
    | 'installments_val_min'
    | 'installments_val_max'
    | 'installment_value_val_min'
    | 'installment_value_val_max';
  type?: string;
  control: Control<FormValues>;
  errorMessage?: string;
}

const FormField: FC<FormFieldProps> = ({
  title,
  label,
  field,
  type,
  control,
  errorMessage,
}) => {
  return (
    <Box>
      <Box sx={{ py: 3, mr: 2 }}>
        {(title && (
          <Typography variant='body1' sx={{ float: 'left', color: 'white' }}>
            {title}
          </Typography>
        )) || (
          <Box sx={{ float: 'right' }}>
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2 4C2 3.17157 2.67157 2.5 3.5 2.5C4.32843 2.5 5 3.17157 5 4C5 4.82843 4.32843 5.5 3.5 5.5C2.67157 5.5 2 4.82843 2 4ZM3.5 0.5C1.567 0.5 0 2.067 0 4C0 5.933 1.567 7.5 3.5 7.5C5.433 7.5 7 5.933 7 4C7 2.067 5.433 0.5 3.5 0.5ZM9 5H17V3H9V5ZM13 14C13 13.1716 13.6716 12.5 14.5 12.5C15.3284 12.5 16 13.1716 16 14C16 14.8284 15.3284 15.5 14.5 15.5C13.6716 15.5 13 14.8284 13 14ZM14.5 10.5C12.567 10.5 11 12.067 11 14C11 15.933 12.567 17.5 14.5 17.5C16.433 17.5 18 15.933 18 14C18 12.067 16.433 10.5 14.5 10.5ZM1 13V15H9V13H1Z'
                fill='white'
              />
            </svg>
          </Box>
        )}
      </Box>
      <Box sx={{ mt: 2, mr: 2 }}>
        <Controller
          name={field}
          control={control}
          render={({ field }) => (
            <StyledTextField
              label={label}
              type={type || 'number'}
              {...field}
              size='small'
              sx={{ color: '#fff' }}
            />
          )}
        />
        {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
      </Box>
    </Box>
  );
};

type FormValues = InferType<typeof formSchema>;

const QuotasSearchForm: FC = () => {
  const [loading, setLoading] = React.useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data, event) => {
    event && event.stopPropagation();

    setLoading(true);

    await quotaService
      .filter()
      .then(() => {
        // TODO Update data grid items
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('Quotas Filter Error', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box id='quotas-search-form'>
      <Box
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
            <Typography variant='h2' sx={{ fontSize: 20, color: '#fff' }}>
              Filtros
            </Typography>
          </Box>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={9} sx={{}}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6} lg={3} sx={{}}>
                    <FormField
                      title='Entrada'
                      label='Valor Mínimo'
                      field='entry_val_min'
                      control={control}
                      errorMessage={errors?.entry_val_min?.message}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} lg={3} sx={{}}>
                    <FormField
                      title=''
                      label='Valor Máximo'
                      field='entry_val_max'
                      control={control}
                      errorMessage={errors?.entry_val_max?.message}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} lg={3} sx={{}}>
                    <FormField
                      title='Valor de Crédito'
                      label='Valor Mínimo'
                      field='credit_value_val_min'
                      control={control}
                      errorMessage={errors?.credit_value_val_min?.message}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} lg={3} sx={{}}>
                    <FormField
                      title=''
                      label='Valor Máximo'
                      field='credit_value_val_max'
                      control={control}
                      errorMessage={errors?.credit_value_val_max?.message}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} lg={3} sx={{}}>
                    <FormField
                      title='Nº de Parcelas'
                      label='Valor Mínimo'
                      field='installments_val_min'
                      control={control}
                      errorMessage={errors?.installments_val_min?.message}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} lg={3} sx={{}}>
                    <FormField
                      title=''
                      label='Valor Máximo'
                      field='installments_val_max'
                      control={control}
                      errorMessage={errors?.installments_val_max?.message}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} lg={3} sx={{}}>
                    <FormField
                      title='Valor da Parcela'
                      label='Valor Mínimo'
                      field='installment_value_val_min'
                      control={control}
                      errorMessage={errors?.installment_value_val_min?.message}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} lg={3} sx={{}}>
                    <FormField
                      title=''
                      label='Valor Máximo'
                      field='installment_value_val_max'
                      control={control}
                      errorMessage={errors?.installment_value_val_max?.message}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  display: 'flex',
                  flexDirection: { sx: 'row-reverse', md: 'column-reverse' },
                  justifyContent: { sx: 'space-between', md: null },
                  alignItems: { sx: null, md: 'flex-start' },
                }}
              >
                <StyledButton color='light' size='large' variant='contained'>
                  {loading ? 'Aguarde...' : 'Pesquisar'}
                </StyledButton>
                <Box sx={{ height: '20px' }} />
                <StyledButton color='dark' size='medium' variant='contained'>
                  Limpar Filtros
                </StyledButton>
              </Grid>
            </Grid>
          </StyledForm>
        </Container>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ m: 2 }}>
          <StyledButton color='primary' size='large' variant='contained'>
            Imóvel
          </StyledButton>
        </Box>
        <Box sx={{ m: 2 }}>
          <StyledButton color='dark' size='large' variant='outlined'>
            Veículo
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};

export default QuotasSearchForm;
