import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TQuota } from '@/types';

export interface ICartState {
  quotasState: TQuota[];
}

const initialState: ICartState = {
  quotasState: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setQuotasState: (state, action: PayloadAction<TQuota[]>) => {
      state.quotasState = action.payload;
    },
    addQuotaState: (state, action: PayloadAction<TQuota>) => {
      state.quotasState.push(action.payload);
    },
  },
});

export const { setQuotasState, addQuotaState } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
