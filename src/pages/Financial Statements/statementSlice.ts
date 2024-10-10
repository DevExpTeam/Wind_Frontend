import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import financialStatementDataService from '../../services/fsData.service';

import {
  ParamState,
  UpdateParamInfo,
} from '../../store/types/types';
import { RootState } from '../../store/store';

const initialState: ParamState = {
  parameters: [],
  currentParameterId: null,
  parameterInfos: [],
  fixedParam: null,
  fixedParameterInfos: [],
  timingParam: null,
  timingParameterInfos: [],
  saveValue: true,
  cashflowData: {},
  cashWaterfallData: {},
  profitAndLossData: {},
  balanceSheetData: {},
  revenueData: {
    revFromFIT: [],
    revFromMerchant: [],
    revenueFromOthers: [],
  },
  costGraphData: {
    totalOperatingCost: [],
    totalVariableCost: [],
    totalFixedCost: [],
    staffCost: [],
    equipmentCost: [],
    consumablesCost: [],
    fuelCost: [],
    transportCost: [],
    maintenanceCost: [],
    spvCost: [],
    insruanaceCost: [],
    landLeaseCost: [],
    securityCost: [],
    communityPaymentCost: [],
    managementFee: [],
  }
};

// export const paramCreateAsync = createAsyncThunk<
//   {
//     params: Array<Parameter>;
//     param_setting: any;
//   },
//   CreateParam
// >('parameter/create', async (paramInfo: CreateParam, thunkApi) => {
//   try {
//     const response = await parameterService.create(
//       paramInfo.clone_id,
//       paramInfo.title,
//       paramInfo.description
//     );
//     return response;
//   } catch (_error) {
//     const error = _error as Error | AxiosError<any>;
//     if (axios.isAxiosError(error)) {
//       const resp = error.response?.data;
//       return thunkApi.rejectWithValue(resp?.detail?.message || resp?.detail);
//     }
//     return thunkApi.rejectWithValue(error.message);
//   }
// });
// export const paramDeleteAsync = createAsyncThunk<
//   {
//     params: Array<Parameter>;
//     param_setting: any;
//   },
//   DeleteParam
// >('parameter/delete', async (paramInfo: DeleteParam, thunkApi) => {
//   try {
//     const response = await parameterService.delete(
//       paramInfo.id
//       // paramInfo.user_id
//     );
//     return response;
//   } catch (_error) {
//     const error = _error as Error | AxiosError<any>;
//     if (axios.isAxiosError(error)) {
//       const resp = error.response?.data;
//       return thunkApi.rejectWithValue(resp?.detail?.message || resp?.detail);
//     }
//     return thunkApi.rejectWithValue(error.message);
//   }
// });

// export const paramUpdateAsync = createAsyncThunk<
//   {
//     params: Array<Parameter>;
//     param_setting: any;
//   },
//   IParameter
// >('parameter/update', async (paramInfo: IParameter, thunkApi) => {
//   try {
//     const response = await parameterService.update(
//       paramInfo.id as number,
//       paramInfo.title,
//       paramInfo.description as string
//     );
//     return response;
//   } catch (_error) {
//     const error = _error as Error | AxiosError<any>;
//     if (axios.isAxiosError(error)) {
//       const resp = error.response?.data;
//       return thunkApi.rejectWithValue(resp?.detail?.message || resp?.detail);
//     }
//     return thunkApi.rejectWithValue(error.message);
//   }
// });

// export const paramDeleteAsync = createAsyncThunk<
//   {
//     params: Array<Parameter>;
//     param_setting: any;
//   },
//   IParameter
// >('parameter/delete', async (paramInfo: IParameter, thunkApi) => {
//   try {
//     const response = await parameterService.update(
//       paramInfo.id as number,
//       paramInfo.title,
//       paramInfo.description as string
//     );
//     return response;
//   } catch (_error) {
//     const error = _error as Error | AxiosError<any>;
//     if (axios.isAxiosError(error)) {
//       const resp = error.response?.data;
//       return thunkApi.rejectWithValue(resp?.detail?.message || resp?.detail);
//     }
//     return thunkApi.rejectWithValue(error.message);
//   }
// });

// export const paramInfoCreateAsync = createAsyncThunk<
//   Array<UpdateParamInfo>,
//   CreateParamInfo
// >('parameter/info/create', async (paramInfo: CreateParamInfo, thunkApi) => {
//   try {
//     const response = await parameterService.createParamInfo(
//       paramInfo.parameter_id,
//       paramInfo.param_index,
//       paramInfo.value
//     );
//     return response;
//   } catch (_error) {
//     const error = _error as Error | AxiosError<any>;
//   }
// });

// export const paramInfoUpdateAsync = createAsyncThunk<
//   Array<UpdateParamInfo>,
//   UpdateParamInfo
// >('parameter/info/update', async (paramInfo: UpdateParamInfo, thunkApi) => {
//   try {
//     const response = await parameterService.updateParamInfo(
//       paramInfo.id,
//       paramInfo.parameter_id,
//       paramInfo.param_index,
//       paramInfo.value
//     );
//     return response;
//   } catch (_error) {
//     const error = _error as Error | AxiosError<any>;
//   }
// });

export const plAccountGetAsync = createAsyncThunk<
  Array<UpdateParamInfo>,
  number
>('fsData/plAccount', async (parameter_id: number, thunkApi) => {
  try {
    const response = await financialStatementDataService.getPLAccountData(
      parameter_id
    );
    return response;
  } catch (_error) {
    const error = _error as Error | AxiosError<any>;
  }
});
// export const paramGetAsync = createAsyncThunk<{
//   params: Array<Parameter>;
//   param_setting: any;
// }>('parameter/get-by-user-id', async (thunkApi) => {
//   try {
//     const response = await parameterService.getByUserId();
//     return response;
//   } catch (_error) {
//     const error = _error as Error | AxiosError<any>;
//   }
// });

// export const paramSettingUpdateAsync = createAsyncThunk<
//   UserParamSetting,
//   UserParamSetting
// >('parameter/update-user', async (paramInfo: UserParamSetting, thunkApi) => {
//   try {
//     const response = await parameterService.updateUserParamSetting(
//       paramInfo.parameter_id
//     );
//     return response;
//   } catch (_error) {
//     const error = _error as Error | AxiosError<any>;
//     if (axios.isAxiosError(error)) {
//       const resp = error.response?.data;
//       if (error.response?.status == 403) {
//         thunkApi.dispatch(logoutAsync());
//       }
//       return thunkApi.rejectWithValue(resp?.detail?.message || resp?.detail);
//     }
//     return thunkApi.rejectWithValue(error.message);
//   }
// });

export const paramSlice = createSlice({
  name: 'fsData',
  initialState,
  reducers: {
    setFixedParam: (state, action: PayloadAction<number>) => {
      state.fixedParam = action.payload;
    },
    setSaveValue: (state, action: PayloadAction<any>) => {
      state.saveValue = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      //   .addCase(paramCreateAsync.fulfilled, (state, { payload }) => {
      //     state.parameters = payload.params;
      //     state.currentParameterId = payload.param_setting;
      //   })
      //   .addCase(paramCreateAsync.rejected, (state, { payload }) => {
      //     console.log('param create reject', payload);
      //   })
      //   .addCase(paramUpdateAsync.fulfilled, (state, { payload }) => {
      //     state.parameters = payload.params;
      //     state.currentParameterId = payload.param_setting;
      //   })

      //   .addCase(paramUpdateAsync.rejected, (state, { payload }) => {
      //     console.log('param update reject', payload);
      //   })
      //   .addCase(paramGetAsync.fulfilled, (state, { payload }) => {
      //     state.parameters = payload?.params;
      //     state.currentParameterId = payload?.param_setting;
      //   })
      //   //   .addCase(paramDeleteAsync.fulfilled, (state, { payload }) => {
      //   //     state.parameters = payload.params;
      //   //     state.saveValue = true;
      //   //     payload.params.length
      //   //       ? (state.currentParameterId = payload.param_setting)
      //   //       : (state.currentParameterId = 0);
      //   //     state.currentParameterId = payload.param_setting;
      //   //   })
      //   .addCase(paramGetAsync.rejected, (state) => {
      //     state.parameters = [];
      //   })
      //   .addCase(paramSettingUpdateAsync.fulfilled, (state, { payload }) => {
      //     state.currentParameterId = payload.parameter_id;
      //   })
      //   .addCase(paramSettingUpdateAsync.rejected, (state) => {
      //     state.currentParameterId = null;
      //   })
      .addCase(plAccountGetAsync.fulfilled, (state, { payload }) => {
        state.parameterInfos = payload;
      })
      .addCase(plAccountGetAsync.rejected, (state) => {
        state.parameterInfos = [];
      });
    // .addCase(paramDeleteAsync.rejected, (state) => {
    //   state.parameterInfos = [];
    // })
    // .addCase(paramUpdateAsync.rejected, (state) => {
    //   state.parameterInfos = [];
    // })
    //   .addCase(paramInfoUpdateAsync.fulfilled, (state, { payload }) => {
    //     state.parameterInfos = payload;
    //     state.saveValue = true;
    //     toast.success('Parameter saved');
    //   })
    //   .addCase(paramInfoUpdateAsync.rejected, (state, { payload }) => {
    //     state.parameterInfos = [];
    //   })
    //   .addCase(paramInfoCreateAsync.fulfilled, (state, { payload }) => {
    //     state.parameterInfos = payload;
    //     state.saveValue = true;
    //   })
    //   .addCase(paramInfoCreateAsync.rejected, (state, { payload }) => {
    //     console.log('create error', payload);

    //     state.parameterInfos = [];
    //   });
  }
});

export const { setFixedParam, setSaveValue } = paramSlice.actions;
export const selectParam = (state: RootState) => state.param;

export default paramSlice.reducer;
