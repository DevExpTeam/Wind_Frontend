import { FC, useEffect, useMemo } from 'react';
import { PARAM_TYPE, PARAM_UNIT } from '../../utils/constant';
import { Input, InputAdornment } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ChoiceComponent from './ChoiceComponent';
import SwitchComponent from './SwitchComponent';
import TableComponent from './TableComponent';

interface CardItemProps {
  item: any;
  value: Record<string, any>;
  disabled?: boolean;
  onChange: (name: string, value: any) => void;
}
const CardItem: FC<CardItemProps> = ({
  item,
  value,
  disabled = false,
  onChange
}) => {
  const type = useMemo(() => {
    return item.type;
  }, [item]);

  useEffect(() => {
    // if (typeof value !== 'object' || !Object.keys(value).includes(item?.id)) {
    //   console.log('change item', value, item);
    //   // onChange(item.id, item.defaultValue);
    // }
  }, [value, item]);

  const customValue = useMemo(() => {
    if (typeof value === 'object' && Object.keys(value).includes(item?.id)) {
      return value[item?.id];
    }
    return '';
  }, [value, item]);

  return (
    <div className="flex flex-row justify-between items-center py-1">
      {type == PARAM_TYPE.TABLE ? (
        <TableComponent
          tableData={item}
          value={customValue}
          onSave={(value: any) => {
            onChange(item.id || item.title, value);
          }}
        />
      ) : (
        <>
          <div className={'px-5 pr-10 text-left'}>{item.title}</div>
          <div className="px-5">
            {typeof type !== 'string' ? (
              <></>
            ) : type.startsWith('choice') ? (
              <ChoiceComponent
                type={type}
                value={customValue || item?.defaultValue}
                onChange={(v: any) => {
                  onChange(item.id || item.title, v);
                }}
              />
            ) : type.startsWith('switch') ? (
              <SwitchComponent
                type={type}
                value={customValue || item?.defaultValue}
                onChange={(v: any) => {
                  onChange(item.id || item.title, v);
                }}
              />
            ) : type == PARAM_TYPE.NUMBER ? (
              <Input
                type="number"
                inputProps={{ min: 0 }}
                endAdornment={
                  <InputAdornment position="end">
                    {item?.unit?.label}
                  </InputAdornment>
                }
                defaultValue={item?.defaultValue}
                value={customValue || item?.defaultValue}
                disabled={disabled}
                onChange={(v: any) => {
                  let min = null,
                    max = null;
                  if (item?.unit == PARAM_UNIT.PERCENTAGE) {
                    (min = 0), (max = 100);
                  }
                  if (item?.maxValue) max = item?.maxValue;
                  if (item?.minValue) min = item?.minValue;
                  let value = v.target.value.replace(/[^0-9.]/, '');
                  if (max && max < value) value = max;
                  if (min && min > value) value = min;
                  onChange(item.id || item.title, value);
                }}
              />
            ) : type == PARAM_TYPE.INTEGER ? (
              <Input
                type="number"
                inputProps={{ min: 0 }}
                endAdornment={
                  <InputAdornment position="end">
                    {item?.unit?.label}
                  </InputAdornment>
                }
                defaultValue={item?.defaultValue}
                value={customValue ? customValue : item?.defaultValue}
                disabled={disabled}
                onChange={(v: any) => {
                  let min = null,
                    max = null;
                  if (item?.unit == PARAM_UNIT.PERCENTAGE) {
                    (min = 0), (max = 100);
                  }
                  if (item?.maxValue) max = item?.maxValue;
                  if (item?.minValue) min = item?.minValue;
                  let value = v.target.value.replace(/[^0-9]/, '');
                  if (max && max < value) value = max;
                  if (min && min > value) value = min;
                  onChange(item.id || item.title, value);
                }}
              />
            ) : type == PARAM_TYPE.TEXT ? (
              <Input
                type="text"
                inputProps={{ min: 0 }}
                endAdornment={
                  <InputAdornment position="end">
                    {item?.unit?.label}
                  </InputAdornment>
                }
                defaultValue={item?.defaultValue}
                value={customValue ? customValue : item?.defaultValue}
                disabled={disabled}
                onChange={(v: any) => {
                  const value = v.target.value.replace(/[^A-Za-z ]/, '');
                  onChange(item.id || item.title, value);
                }}
              />
            ) : type == PARAM_TYPE.DATE ? (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{
                    '& .MuiInputBase-root': {
                      height: '40px'
                    }
                  }}
                  slotProps={{
                    field: {
                      clearable: customValue != null,
                      onClear: () => {
                        onChange(item.id || item.title, null);
                      }
                    }
                  }}
                  disabled={disabled}
                  value={dayjs(customValue ? customValue : item?.defaultValue)}
                  onChange={(v: any) => {
                    onChange(item.id || item.title, v.format('YYYY-MM-DD'));
                  }}
                />
              </LocalizationProvider>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CardItem;
