import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import parameterService from '../../services/parameter.service';
import { RootState } from '../store';
import {
  CreateParam,
  CreateParamInfo,
  Parameter,
  ParamState,
  UpdateParam,
  UpdateParamInfo,
  UserParamSetting
} from '../types/types';
import { IParameter } from '../../utils/types';
import { logoutAsync } from './authSlice';

const initialState: any = {
  modelStartDate: '2023-01-01'
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
    }
  }
});

export const { setConstructionStartDate, setCalculationPeriod } =
  resultSlice.actions;
export const selectResult = (state: RootState) => state.result;

export default resultSlice.reducer;
