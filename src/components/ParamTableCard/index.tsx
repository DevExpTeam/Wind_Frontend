import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { UpdateParamInfo } from '../../store/types/types';
import {} from 'material-react-table';
import { PARAM_TYPE } from '../../utils/constant';
import TimingTable from './TimingTable';

interface ParamTableCardProps {
  sub_category: any;
  value: UpdateParamInfo | null;
  onSave: (
    sub_category: string,
    value: Record<string, any>,
    isNew: boolean
  ) => void;
}
const ParamTableCard: FC<ParamTableCardProps> = ({
  sub_category,
  value,
  onSave
}) => {
  const valueRef = useRef<UpdateParamInfo>();
  const [currentValue, setCurrentValue] = useState<UpdateParamInfo>();

  useEffect(() => {
    valueRef.current = value as UpdateParamInfo;
    setCurrentValue(value as UpdateParamInfo);
  }, [value]);
  const items = useMemo(() => {
    return sub_category.values;
  }, [sub_category, value]);

  const handleSave = (item: any, value: any) => {
    const newVal = { ...currentValue };
    newVal.value = {
      ...newVal.value,
      [item.title]: value
    };
    setCurrentValue(newVal as UpdateParamInfo);
    if (currentValue != undefined && currentValue?.id) {
      onSave(sub_category.title as string, newVal, false);
    } else onSave(sub_category.title as string, newVal, true);
  };

  return (
    <>
      {items.map((item: any, index: number) => {
        if (item?.type == PARAM_TYPE.TABLE)
          return (
            <TimingTable
              key={index}
              tableData={item}
              value={currentValue?.value[item.title]}
              onSave={(value: any) => {
                handleSave(item, value);
              }}
            />
          );
      })}
    </>
  );
};

export default ParamTableCard;
