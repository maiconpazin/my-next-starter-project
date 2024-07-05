'use client';

import { Container } from '@mui/material';
import { GridRowId, GridRowSelectionModel } from '@mui/x-data-grid';
import { ptBR } from '@mui/x-data-grid/locales';

import { StyledDataGrid } from '@/components/atoms';
import { quotasColumns, quotasRows } from '@/components/data/quotas.data';

import { setQuotasState } from '@/store/cartSlice';
import { useAppDispatch } from '@/store/store';

import { TQuota } from '@/types';

export default function QuotasTable() {
  const dispatch = useAppDispatch();

  const onSelection = (rowSelectionModel: GridRowSelectionModel) => {
    const selectedQuotas: TQuota[] = [];
    let item: TQuota | undefined;
    rowSelectionModel.map((id: GridRowId) => {
      item = quotasRows.find((item) => item.id === id);
      item && selectedQuotas.push(item);
    });
    dispatch(setQuotasState(selectedQuotas));
  };

  return (
    <Container id='quotas-table'>
      <StyledDataGrid
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        columns={quotasColumns}
        rows={quotasRows}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        pageSizeOptions={[10, 20, 50, 100]}
        checkboxSelection
        onRowSelectionModelChange={onSelection}
      />
    </Container>
  );
}
