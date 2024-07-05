'use client';

import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';

const StyledDataGrid = styled(DataGrid)(() => ({
  '& .MuiDataGrid-columnHeader *': {
    color: '#fff',
  },
}));

export default StyledDataGrid;
