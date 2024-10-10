import { Button } from '@mui/material';
import { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectResult } from '../../store/slices/resultSlice';
import { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import { DATE_FORMAT } from '../../utils/usePrameter';
import { getFilterData, getHeaders, localeStringArray, roundArray } from './utils';
import ParamCollapsableTable from '../../components/FinStatements/StatementTable';
import DateRangePicker from '../../components/FinStatements/DateRangePicker';
import { selectParam } from './statementSlice';
import useParameter from '../../utils/usePrameter';
import { getProfitAndLossDataAsync } from '../../store/slices/parameterSlice';

interface BoxProps extends MuiBoxProps {
  open?: boolean;
}

export function ProfitAndLoss() {
  useParameter();
  const { currentParameterId, profitAndLossData } = useAppSelector(selectParam);
  const dispatch = useAppDispatch();
  const {
    constructionStartDate,
    calculationPeriod,
    decommissioningEndDate,
    modelingTimeInterval
  } = useAppSelector(selectResult)
  const { parameterInfos } = useAppSelector(selectParam);
  const [dateRange, setDateRange] = useState({
    from: '2023-01-01',
    to: '2024-01-01'
  });

  const [active, setActive] = useState('semi_annually');
  useEffect(() => {
    console.log("dec", modelingTimeInterval, calculationPeriod)
    if (active == 'monthly') {
      setDateRange({
        from: constructionStartDate,
        to: moment(constructionStartDate).add(19, 'month').format(DATE_FORMAT)
      });
    } else if (active == 'semi_annually') {
      setDateRange({
        from: constructionStartDate,
        to: moment(constructionStartDate)
          .add(20 * 6 - 5, 'month')
          .format(DATE_FORMAT)
      });

    } else {
      setDateRange({
        from: constructionStartDate,
        to: moment(constructionStartDate).add(19, 'year').format(DATE_FORMAT)
      });
    }

  }, [active, constructionStartDate, decommissioningEndDate]);
  const headers = useMemo(() => {
    const result = getHeaders(constructionStartDate, active, dateRange);
    return result;
  }, [constructionStartDate, calculationPeriod, active, dateRange]);

  const tableData = useMemo(() => {

    // const operating_cash_flow = calcOperatingCashFlow(payload);
    // const corporation_tax = calcCorporationTax(payload);
    // const ebit = calcEBIT(payload);
    // const gain_on_disposal = calcGainOnDisposal(payload);
    // const capital_expenditure = calcCapitalExpenditure(payload);
    // console.log(
    //   getFilterData(
    //     roundArray(cash_starting_balance, 1),
    //     modelStartDate,
    //     active,
    //     dateRange
    //   )
    // );
    const rlt = {
      id: 'profit_and_loss',
      title: 'Profit and Loss',
      data: [],
      children: [
        {
          id: 'total_revenue',
          title: 'Total Revenue',
          data: localeStringArray(
            roundArray(
              getFilterData(
                profitAndLossData?.revenue || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
          children: [
            {
              id: 'revenue_from_electricity_sale',
              title: 'Revenue from Electricity Sale',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    profitAndLossData?.electricitySoldRev || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
              children: [
                {
                  id: 'revenue_from_fit',
                  title: 'Revenue from FiT',
                  data: localeStringArray(
                    roundArray(
                      getFilterData(
                        profitAndLossData?.revFromFIT || new Array(calculationPeriod || 100).fill(0),
                        constructionStartDate,
                        active,
                        dateRange
                      ),
                      1
                    )
                  ),
                },
                {
                  id: 'revenue_from_merchant_price',
                  title: 'Revenue from Merchant Price',
                  data: localeStringArray(
                    roundArray(
                      getFilterData(
                        profitAndLossData?.revFromMerchant || new Array(calculationPeriod || 100).fill(0),
                        constructionStartDate,
                        active,
                        dateRange
                      ),
                      1
                    )
                  ),
                },
              ]
            },
            {
              id: 'revenue_for_others',
              title: 'Revenue for Others',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    profitAndLossData?.revenueFromOthers || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),

            },
          ]
        },
        {
          id: 'total_operating_cost',
          title: 'Total Opertaing Cost',
          data: localeStringArray(
            roundArray(
              getFilterData(
                profitAndLossData?.totalOperatingCost || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
          children: [
            {
              id: 'variable_o_m_cost',
              title: 'Variable O&M Cost',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    profitAndLossData?.totalVariableCost || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
              children: [
                {
                  id: 'staff_cost',
                  title: 'Staff Cost',
                  data: localeStringArray(
                    roundArray(
                      getFilterData(
                        profitAndLossData?.staffCost || new Array(calculationPeriod || 100).fill(0),
                        constructionStartDate,
                        active,
                        dateRange
                      ),
                      1
                    )
                  ),
                },
                {
                  id: 'equipment',
                  title: 'Equipment',
                  data: localeStringArray(
                    roundArray(
                      getFilterData(
                        profitAndLossData?.equipmentCost || new Array(calculationPeriod || 100).fill(0),
                        constructionStartDate,
                        active,
                        dateRange
                      ),
                      1
                    )
                  ),
                },
                {
                  id: 'consumables',
                  title: 'Consumables',
                  data: localeStringArray(
                    roundArray(
                      getFilterData(
                        profitAndLossData?.consumablesCost || new Array(calculationPeriod || 100).fill(0),
                        constructionStartDate,
                        active,
                        dateRange
                      ),
                      1
                    )
                  ),
                },
                {
                  id: 'fuel',
                  title: 'Fuel',
                  data: localeStringArray(
                    roundArray(
                      getFilterData(
                        profitAndLossData?.fuelCost || new Array(calculationPeriod || 100).fill(0),
                        constructionStartDate,
                        active,
                        dateRange
                      ),
                      1
                    )
                  ),
                },
                {
                  id: 'Transport',
                  title: 'Transport',
                  data: localeStringArray(
                    roundArray(
                      getFilterData(
                        profitAndLossData?.transportCost || new Array(calculationPeriod || 100).fill(0),
                        constructionStartDate,
                        active,
                        dateRange
                      ),
                      1
                    )
                  ),
                },
                {
                  id: 'maintenance',
                  title: 'Maintenance',
                  data: localeStringArray(
                    roundArray(
                      getFilterData(
                        profitAndLossData?.maintenanceCost || new Array(calculationPeriod || 100).fill(0),
                        constructionStartDate,
                        active,
                        dateRange
                      ),
                      1
                    )
                  ),
                },
              ]
            },
            {
              id: 'other_cost',
              title: 'Other Cost',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    profitAndLossData?.totalFixedCost || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
              children: [
                {
                  id: 'spv_costs',
                  title: 'SPV Costs',
                  data: localeStringArray(
                    roundArray(
                      getFilterData(
                        profitAndLossData?.spvCost || new Array(calculationPeriod || 100).fill(0),
                        constructionStartDate,
                        active,
                        dateRange
                      ),
                      1
                    )
                  ),
                },
                {
                  id: 'Insurance',
                  title: 'Insurance',
                  data: localeStringArray(
                    roundArray(
                      getFilterData(
                        profitAndLossData?.insruanaceCost || new Array(calculationPeriod || 100).fill(0),
                        constructionStartDate,
                        active,
                        dateRange
                      ),
                      1
                    )
                  ),
                },
                {
                  id: 'land_lease',
                  title: 'Land Lease',
                  data: localeStringArray(
                    roundArray(
                      getFilterData(
                        profitAndLossData?.landLeaseCost || new Array(calculationPeriod || 100).fill(0),
                        constructionStartDate,
                        active,
                        dateRange
                      ),
                      1
                    )
                  ),
                },
                {
                  id: 'security',
                  title: 'Security',
                  data: localeStringArray(
                    roundArray(
                      getFilterData(
                        profitAndLossData?.securityCost || new Array(calculationPeriod || 100).fill(0),
                        constructionStartDate,
                        active,
                        dateRange
                      ),
                      1
                    )
                  ),
                },
                {
                  id: 'community_payment',
                  title: 'Community Payment',
                  data: localeStringArray(
                    roundArray(
                      getFilterData(
                        profitAndLossData?.communityPaymentCost || new Array(calculationPeriod || 100).fill(0),
                        constructionStartDate,
                        active,
                        dateRange
                      ),
                      1
                    )
                  ),
                },
                {
                  id: 'management_fee',
                  title: 'Management Fee',
                  data: localeStringArray(
                    roundArray(
                      getFilterData(
                        profitAndLossData?.managementFee || new Array(calculationPeriod || 100).fill(0),
                        constructionStartDate,
                        active,
                        dateRange
                      ),
                      1
                    )
                  ),
                },
              ]
            },
          ]
        },
        {
          id: 'ebitda',
          title: 'EBITDA',
          data: localeStringArray(
            roundArray(
              getFilterData(
                profitAndLossData?.ebitda || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
          children: [{
            id: 'depreciation',
            title: 'Depreciation',
            data: localeStringArray(
              roundArray(
                getFilterData(
                  profitAndLossData?.depreciation || new Array(calculationPeriod || 100).fill(0),
                  constructionStartDate,
                  active,
                  dateRange
                ),
                1
              )
            ),
          },]
        },
        {
          id: 'ebit',
          title: 'EBIT',
          data: localeStringArray(
            roundArray(
              getFilterData(
                profitAndLossData?.ebit || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
          children: [
            {
              id: 'interest_expense',
              title: 'Interest Expense',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    profitAndLossData?.interestExpense || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },]
        },
        {
          id: 'pbt',
          title: 'Profit before Tax',
          data: localeStringArray(
            roundArray(
              getFilterData(
                profitAndLossData?.pbt || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
          children: [
            {
              id: 'tax',
              title: 'Tax',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    profitAndLossData?.tax || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },]
        },
        {
          id: 'net_income',
          title: 'Net Income',
          data: localeStringArray(
            roundArray(
              getFilterData(
                profitAndLossData?.netIncome || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
        },
      ]
    };
    return rlt;
  }, [constructionStartDate, active, profitAndLossData, dateRange]);
  const getData = () => {
    dispatch(getProfitAndLossDataAsync(currentParameterId as number));
  }
  return (
    <>
      <div style={{ flex: 1, padding: 5 }}>
        <div style={{ fontSize: 25, paddingBottom: 10, fontWeight: '900' }}>
          Profit and Loss Account
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            marginBottom: 10
          }}
        >
          {/* <TypeSelector active={monthly} setActive={setActive} /> */}
          <div style={{ marginLeft: 20 }}>
            <DateRangePicker
              value={dateRange}
              minDate={constructionStartDate}
              maxDate={decommissioningEndDate}
              onChange={(v) => {
                setDateRange(v);
              }}
            />
          </div>
          <Button
            onClick={getData}
          >Simulate</Button>
        </div>
        <ParamCollapsableTable headers={headers} itemList={tableData} />
      </div>

    </>
  );
}