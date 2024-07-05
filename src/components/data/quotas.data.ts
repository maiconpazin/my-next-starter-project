import { GridColDef } from '@mui/x-data-grid';

import { TQuota } from '@/types';

export const quotasColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Código',
    headerClassName: 'super-app-theme--header',
    width: 10,
  },
  {
    field: 'credit',
    headerName: 'Crédito',
    headerClassName: 'super-app-theme--header',
    width: 120,
  },
  {
    field: 'input',
    headerName: 'Entrada',
    headerClassName: 'super-app-theme--header',
    width: 120,
  },
  {
    field: 'total_portion',
    headerName: 'Nº Parcelas',
    type: 'number',
    headerClassName: 'super-app-theme--header',
    width: 210,
  },
  {
    field: 'value_portion',
    headerName: 'Valor Parcelas',
    headerClassName: 'super-app-theme--header',
    width: 150,
  },
  {
    field: 'admin',
    headerName: 'Administradora',
    headerClassName: 'super-app-theme--header',
    width: 150,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    headerClassName: 'super-app-theme--header',
    /*
    valueGetter: (_value: any, row: any): string =>
      `${row.firstName || ''} ${row.lastName || ''}`,
    */
    width: 150,
  },
  {
    field: 'actions',
    headerName: 'Ações',
    headerClassName: 'super-app-theme--header',
    width: 150,
  },
];

export const quotasRows: TQuota[] = [
  {
    id: 1,
    credit: 'R$ 52.000',
    input: 'R$ 20.000',
    total_portion: 163,
    value_portion: 'R$ 540',
    admin: 'Servopa',
    status: 'Disponível',
    actions: null,
  },
  {
    id: 2,
    credit: 'R$ 52.000',
    input: 'R$ 20.000',
    total_portion: 163,
    value_portion: 'R$ 540',
    admin: 'Servopa',
    status: 'Disponível',
    actions: null,
  },
  {
    id: 3,
    credit: 'R$ 52.000',
    input: 'R$ 20.000',
    total_portion: 163,
    value_portion: 'R$ 540',
    admin: 'Servopa',
    status: 'Disponível',
    actions: null,
  },
];
