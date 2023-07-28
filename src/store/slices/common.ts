import { createSlice } from '@reduxjs/toolkit';

export interface CommonState {
  loading: boolean;
}

const initialState: CommonState = {
  loading: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    init() {
      console.info('init common');
    },
  },
});

export const commonReducer = commonSlice.reducer;

export const commonActions = commonSlice.actions;
