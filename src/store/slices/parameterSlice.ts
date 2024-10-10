import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import parameterService from "../../services/parameter.service";
import { RootState } from "../store";
import {
  CreateParam,
  CreateParamInfo,
  DeleteParam,
  Parameter,
  ParamState,
  UpdateParam,
  UpdateParamInfo,
  UserParamSetting,
} from "../types/types";
import { IParameter } from "../../utils/types";
import { logoutAsync } from "./authSlice";
import { bool, string } from "prop-types";
import { toast } from "react-toastify";

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

export const paramCreateAsync = createAsyncThunk<
  {
    params: Array<Parameter>;
    param_setting: any;
  },
  CreateParam
>("parameter/create", async (paramInfo: CreateParam, thunkApi) => {
  try {
    const response = await parameterService.create(
      paramInfo.clone_id,
      paramInfo.title,
      paramInfo.description
    );
    return response;
  } catch (_error) {
    const error = _error as Error | AxiosError<any>;
    if (axios.isAxiosError(error)) {
      const resp = error.response?.data;
      return thunkApi.rejectWithValue(
        resp?.detail?.message || resp?.detail
      );
    }
    return thunkApi.rejectWithValue(error.message);
  }
});
export const paramDeleteAsync = createAsyncThunk<
  {
    params: Array<Parameter>;
    param_setting: any;
  },
  DeleteParam
>("parameter/delete", async (paramInfo: DeleteParam, thunkApi) => {
  try {
    const response = await parameterService.delete(
      paramInfo.id
      // paramInfo.user_id
    );
    return response;
  } catch (_error) {
    const error = _error as Error | AxiosError<any>;
    if (axios.isAxiosError(error)) {
      const resp = error.response?.data;
      return thunkApi.rejectWithValue(
        resp?.detail?.message || resp?.detail
      );
    }
    return thunkApi.rejectWithValue(error.message);
  }
});

export const paramUpdateAsync = createAsyncThunk<
  {
    params: Array<Parameter>;
    param_setting: any;
  },
  IParameter
>("parameter/update", async (paramInfo: IParameter, thunkApi) => {
  try {
    const response = await parameterService.update(
      paramInfo.id as number,
      paramInfo.title,
      paramInfo.description as string
    );
    return response;
  } catch (_error) {
    const error = _error as Error | AxiosError<any>;
    if (axios.isAxiosError(error)) {
      const resp = error.response?.data;
      return thunkApi.rejectWithValue(
        resp?.detail?.message || resp?.detail
      );
    }
    return thunkApi.rejectWithValue(error.message);
  }
});

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

export const paramInfoCreateAsync = createAsyncThunk<
  Array<UpdateParamInfo>,
  CreateParamInfo
>(
  "parameter/info/create",
  async (paramInfo: CreateParamInfo, thunkApi) => {
    try {
      const response = await parameterService.createParamInfo(
        paramInfo.parameter_id,
        paramInfo.param_index,
        paramInfo.value
      );
      return response;
    } catch (_error) {
      const error = _error as Error | AxiosError<any>;
    }
  }
);

export const paramInfoUpdateAsync = createAsyncThunk<
  Array<UpdateParamInfo>,
  UpdateParamInfo
>(
  "parameter/info/update",
  async (paramInfo: UpdateParamInfo, thunkApi) => {
    try {
      const response = await parameterService.updateParamInfo(
        paramInfo.id,
        paramInfo.parameter_id,
        paramInfo.param_index,
        paramInfo.value
      );
      return response;
    } catch (_error) {
      const error = _error as Error | AxiosError<any>;
    }
  }
);

export const paramInfoGetAsync = createAsyncThunk<
  Array<UpdateParamInfo>,
  number
>(
  "parameter/info/get-all",
  async (parameter_id: number, thunkApi) => {
    try {
      const response = await parameterService.getParamInfo(
        parameter_id
      );
      return response;
    } catch (_error) {
      const error = _error as Error | AxiosError<any>;
    }
  }
);
export const getCashWaterfallDataAsync = createAsyncThunk<
  any,
  number
>(
  "calculator/getWaterfall",
  async (parameter_id: number, thunkApi) => {
    try {
      const response = await parameterService.getWaterfallData(
        parameter_id
      );
      return response;
    } catch (_error) {
      const error = _error as Error | AxiosError<any>;
    }
  }
);
export const getProfitAndLossDataAsync = createAsyncThunk<
  any,
  number
>(
  "calculator/profitAndLoss",
  async (parameter_id: number, thunkApi) => {
    try {
      const response = await parameterService.getProfitAndLossData(
        parameter_id
      );
      return response;
    } catch (_error) {
      const error = _error as Error | AxiosError<any>;
    }
  }
);
export const getbalanceSheetDataAsync = createAsyncThunk<
  any,
  number
>(
  "calculator/balanceSheet",
  async (parameter_id: number, thunkApi) => {
    try {
      const response = await parameterService.getBalanceSheetData(
        parameter_id
      );
      return response;
    } catch (_error) {
      const error = _error as Error | AxiosError<any>;
    }
  }
);
export const getCashflowDataAsync = createAsyncThunk<
  any,
  number
>(
  "calculator/cashflow",
  async (parameter_id: number, thunkApi) => {
    try {
      const response = await parameterService.getCashflowData(
        parameter_id
      );
      return response;
    } catch (_error) {
      const error = _error as Error | AxiosError<any>;
    }
  }
);
export const getRevenueGraphData = createAsyncThunk<
  any,
  number
>(
  "calculator/getRevenueGraphData",
  async (parameter_id: number, thunkApi) => {
    try {
      const response = await parameterService.getRevenueGraphData(
        parameter_id
      );
      return response;
    } catch (_error) {
      const error = _error as Error | AxiosError<any>;
    }
  }
);
export const getCostGraphData = createAsyncThunk<
  any,
  number
>(
  "calculator/getCostGraphData",
  async (parameter_id: number, thunkApi) => {
    try {
      const response = await parameterService.getCostGraphData(
        parameter_id
      );
      return response;
    } catch (_error) {
      const error = _error as Error | AxiosError<any>;
    }
  }
);
export const paramGetAsync = createAsyncThunk<{
  params: Array<Parameter>;
  param_setting: any;
}>("parameter/get-by-user-id", async (thunkApi) => {
  try {
    const response = await parameterService.getByUserId();
    return response;
  } catch (_error) {
    const error = _error as Error | AxiosError<any>;
  }
});

export const paramSettingUpdateAsync = createAsyncThunk<
  UserParamSetting,
  UserParamSetting
>(
  "parameter/update-user",
  async (paramInfo: UserParamSetting, thunkApi) => {
    try {
      const response = await parameterService.updateUserParamSetting(
        paramInfo.parameter_id
      );
      return response;
    } catch (_error) {
      const error = _error as Error | AxiosError<any>;
      if (axios.isAxiosError(error)) {
        const resp = error.response?.data;
        if (error.response?.status == 403) {
          thunkApi.dispatch(logoutAsync());
        }
        return thunkApi.rejectWithValue(
          resp?.detail?.message || resp?.detail
        );
      }
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const paramSlice = createSlice({
  name: "parameter",
  initialState,
  reducers: {
    setFixedParam: (state, action: PayloadAction<number>) => {
      state.fixedParam = action.payload;
    },
    setSaveValue: (state, action: PayloadAction<any>) => {
      state.saveValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(paramCreateAsync.fulfilled, (state, { payload }) => {
        state.parameters = payload.params;
        state.currentParameterId = payload.param_setting;
        toast.success("New parameter created!");
      })
      // .addCase(paramCreateAsync.rejected, (state, { payload }) => {
      // 	toast.error("Error!");
      // })
      .addCase(paramUpdateAsync.fulfilled, (state, { payload }) => {
        state.parameters = payload.params;
        state.currentParameterId = payload.param_setting;
        toast.success("Parameter information updated successfully!");
      })

      .addCase(paramUpdateAsync.rejected, (state, { payload }) => {
        console.log("param update reject", payload);
      })
      .addCase(paramGetAsync.fulfilled, (state, { payload }) => {
        state.parameters = payload?.params;
        state.currentParameterId = payload?.param_setting;
      })
      .addCase(paramDeleteAsync.fulfilled, (state, { payload }) => {
        state.parameters = payload.params;
        state.saveValue = true;
        payload.params.length
          ? (state.currentParameterId = payload.param_setting)
          : (state.currentParameterId = 0);
        state.currentParameterId = payload.param_setting;
        toast.success("Parameter deleted successfully!");
      })
      .addCase(paramGetAsync.rejected, (state) => {
        state.parameters = [];
      })
      .addCase(
        paramSettingUpdateAsync.fulfilled,
        (state, { payload }) => {
          state.currentParameterId = payload.parameter_id;
          toast.success("Selected parameter is available for use!");
        }
      )
      .addCase(paramSettingUpdateAsync.rejected, (state) => {
        state.currentParameterId = null;
      })
      .addCase(paramInfoGetAsync.fulfilled, (state, { payload }) => {
        state.parameterInfos = payload;
      })
      .addCase(getCashflowDataAsync.fulfilled, (state, { payload }) => {
        state.cashflowData = payload;
      })
      .addCase(getCashWaterfallDataAsync.fulfilled, (state, { payload }) => {
        state.cashWaterfallData = payload;
      })
      .addCase(getProfitAndLossDataAsync.fulfilled, (state, { payload }) => {
        state.profitAndLossData = payload;
      })
      .addCase(getbalanceSheetDataAsync.fulfilled, (state, { payload }) => {
        state.balanceSheetData = payload;
      })
      .addCase(getRevenueGraphData.fulfilled, (state, { payload }) => {
        state.revenueData = payload;
      })
      .addCase(getCostGraphData.fulfilled, (state, { payload }) => {
        state.costGraphData = payload;
      })
      .addCase(paramInfoGetAsync.rejected, (state) => {
        state.parameterInfos = [];
      })
      // .addCase(paramDeleteAsync.rejected, (state) => {
      //   state.parameterInfos = [];
      // })
      // .addCase(paramUpdateAsync.rejected, (state) => {
      //   state.parameterInfos = [];
      // })
      .addCase(
        paramInfoUpdateAsync.fulfilled,
        (state, { payload }) => {
          state.parameterInfos = payload;
          state.saveValue = true;
          toast.success("Inputs updated successfully!");
        }
      )
      .addCase(
        paramInfoUpdateAsync.rejected,
        (state, { payload }) => {
          state.parameterInfos = [];
        }
      )
      .addCase(
        paramInfoCreateAsync.fulfilled,
        (state, { payload }) => {
          state.parameterInfos = payload;
          state.saveValue = true;
          toast.success("Inputs newly created successfully!");
        }
      )
      .addCase(
        paramInfoCreateAsync.rejected,
        (state, { payload }) => {
          console.log("create error", payload);

          state.parameterInfos = [];
        }
      );
  },
});

export const { setFixedParam, setSaveValue } = paramSlice.actions;
export const selectParam = (state: RootState) => state.param;

export default paramSlice.reducer;
