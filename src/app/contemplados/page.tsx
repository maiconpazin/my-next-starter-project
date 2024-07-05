'use client';

import Quotas from '@/components/pages/Quotas';

import { ReduxProvider } from '@/providers';

const AppQuotas = () => {
  return (
    <ReduxProvider>
      <Quotas />
    </ReduxProvider>
  );
};

export default AppQuotas;
