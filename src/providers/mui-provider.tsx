import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import React, { FC, ReactNode } from 'react';

import theme from '@/config/theme';

interface Props {
  children: ReactNode;
}

const MUIProvider: FC<Props> = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default MUIProvider;
