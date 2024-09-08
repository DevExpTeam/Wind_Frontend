import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectParam } from '../store/slices/parameterSlice';
import moment from 'moment';
import { selectResult } from '../store/slices/resultSlice';

export const DATE_FORMAT = 'YYYY-MM-DD';

const useParameter = () => {
  const dispatch = useAppDispatch();
  const { parameterInfos } = useAppSelector(selectParam);
  const { setConstructionStartDate, setCalculationPeriod } =
    useAppSelector(selectResult);
  const getParameter = useCallback(
    (param_index: string) => {
      return parameterInfos?.find((p) => p?.param_index == param_index);
    },
    [parameterInfos]
  );

  useEffect(() => {
    const res = parameterInfos?.find(
      (p) => p?.param_index == 'basic_project_inputs'
    )?.value;
    dispatch(setConstructionStartDate(res?.construction_start_date));
  });

  return {
    ok: 'ok'
  };
};

export default useParameter;
