export type TQuota = {
  id: number | string;
  credit: string;
  input: string;
  total_portion: number | string;
  value_portion: number | string;
  admin: string;
  status: string;
  actions: null;
};

export type TQuotaOffer = {
  id: number | string;
  title: string;
  description: string;
  cost: number | string;
};

export interface IQuotasListFilter {
  entry_val_min: number;
  entry_val_max: number;
  credit_value_val_min: number;
  credit_value_val_max: number;
  installments_val_min: number;
  installments_val_max: number;
  installment_value_val_min: number;
  installment_value_val_max: number;
}
