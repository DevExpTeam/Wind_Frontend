import { useCallback, useEffect, } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectParam } from '../store/slices/parameterSlice';
import moment from 'moment';
import { selectResult, setCalculationPeriod, setConstructionPeriodInMonth, setConstructionStartDate, setDecommissioningEndDate, setDecommissioningPeriod, setModelingTimeInterval, setOperationPeriod } from '../store/slices/resultSlice';
import { CHOICE_DATA, PARAM_TYPE } from './constant';
import { roundNumber } from '../pages/Financial Statements/utils';

export const DATE_FORMAT = 'YYYY-MM-DD';

const useParameter = () => {
  const dispatch = useAppDispatch();
  const { parameterInfos } = useAppSelector(selectParam);
  const { constructionStartDate, operationPeriod, constructionPeriodInMonth, decommissioningPeriod, modelingTimeInterval } = useAppSelector(selectResult)
  // const { setConstructionStartDate, setCalculationPeriod, setModelingTimeInterval, setOperationPeriod, setConstructionPeriodInMonth, setDecommissioningEndDate, setDecommissioningPeriod } =
  //   useAppSelector(selectResult);
  const getParameter = useCallback(
    (param_index: string) => {
      return parameterInfos?.find((p) => p?.param_index == param_index);
    },
    [parameterInfos]
  );
  useEffect(() => {
    console.log("con", parameterInfos)
  }, [parameterInfos])
  useEffect(() => {
    const res = getParameter(
      'basic_project_inputs'
    )?.value;
    dispatch(setConstructionStartDate(parameterInfos?.find((p) => p?.param_index == 'basic_project_inputs')?.value.construction_start_date));
  }, [parameterInfos]);
  useEffect(() => {
    const res = getParameter(
      'basic_project_inputs'
    )?.value;
    dispatch(setModelingTimeInterval(CHOICE_DATA[PARAM_TYPE.CHOICE.MODEL_TIME_INTERVAL][res?.modeling_time_interval - 1]));
  }, [parameterInfos]);

  useEffect(() => {
    const res = getParameter(
      'basic_project_inputs'
    )?.value;
    dispatch(setOperationPeriod(res?.operation_period));
  }, [parameterInfos]);
  useEffect(() => {
    const res = getParameter(
      'basic_project_inputs'
    )?.value;
    dispatch(setConstructionPeriodInMonth(res?.construction_period_in_months));
  }, [parameterInfos]);
  useEffect(() => {
    const res = getParameter(
      'basic_project_inputs'
    )?.value;
    dispatch(setDecommissioningPeriod(res?.decommissioning_period));
  }, [parameterInfos]);
  useEffect(() => {
    dispatch(setDecommissioningEndDate(moment(constructionStartDate)
      .add(operationPeriod * 12 + constructionPeriodInMonth * 1 + decommissioningPeriod * 1, "month")
      .format(DATE_FORMAT)));
  }, [operationPeriod, constructionPeriodInMonth, decommissioningPeriod]);
  useEffect(() => {
    const res = getParameter(
      'basic_project_inputs'
    )?.value;
    const data = CHOICE_DATA[PARAM_TYPE.CHOICE.MODEL_TIME_INTERVAL]?.find((p) => p?.id == res?.modeling_time_interval)
    dispatch(setModelingTimeInterval(data?.label));
  }, [parameterInfos]);
  useEffect(() => {
    const res = getParameter(
      'basic_project_inputs'
    )?.value;
    dispatch(setCalculationPeriod(Math.floor((operationPeriod * 12 + decommissioningPeriod * 1 + constructionPeriodInMonth * 1) / modelingTimeInterval) + 1));
  }, [operationPeriod, decommissioningPeriod, constructionPeriodInMonth]);

  return {
    ok: 'ok'
  };
};

export default useParameter;
