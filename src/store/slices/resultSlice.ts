import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: any = {
  constructionStartDate: '2025-01-01',
  modelingTimeInterval: 6,
  operationPeriod: 40,
  decommissioningPeriod: 3,
  constructionPeriodInMonth: 24,
  decommissioningEndDate: '2063-03-31',
  calculationPeriod: 100,

};

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setConstructionStartDate: (state, action: PayloadAction<any>) => {
      state.constructionStartDate = action.payload;
    },
    setCalculationPeriod: (state, action: PayloadAction<any>) => {
      state.calculationPeriod = action.payload;
    },
    setModelingTimeInterval: (state, action: PayloadAction<any>) => {
      state.modelingTimeInterval = action.payload;
    },
    setOperationPeriod: (state, action: PayloadAction<any>) => {
      state.operationPeriod = action.payload;
    },
    setDecommissioningPeriod: (state, action: PayloadAction<any>) => {
      state.decommissioningPeriod = action.payload;
    },
    setConstructionPeriodInMonth: (state, action: PayloadAction<any>) => {
      state.constructionPeriodInMonth = action.payload;
    },
    setDecommissioningEndDate: (state, action: PayloadAction<any>) => {
      state.decommissioningEndDate = action.payload;
    },
  }
});

export const {
  setConstructionStartDate,
  setCalculationPeriod,
  setDecommissioningEndDate,
  setDecommissioningPeriod,
  setConstructionPeriodInMonth,
  setOperationPeriod,
  setModelingTimeInterval
} =
  resultSlice.actions;
export const selectResult = (state: RootState) => state.result;

export default resultSlice.reducer;
