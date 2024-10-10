import { Button } from '@mui/material';
import { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectResult } from '../../store/slices/resultSlice';
import { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import { DATE_FORMAT } from '../../utils/usePrameter';
import { getFilterData, getHeaders, localeStringArray, roundArray } from './utils';
import ParamCollapsableTable from '../../components/FinStatements/StatementTable';
import TypeSelector from '../../components/FinStatements/TypeSelector';
import DateRangePicker from '../../components/FinStatements/DateRangePicker';
import { selectParam } from './statementSlice';
import { getCashWaterfallDataAsync } from '../../store/slices/parameterSlice';
import { array } from 'prop-types';
import useParameter from '../../utils/usePrameter';

interface BoxProps extends MuiBoxProps {
  open?: boolean;
}

export function CashWaterfall() {
  useParameter();
  const { currentParameterId, cashWaterfallData } = useAppSelector(selectParam);
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
      id: 'cash_waterfall',
      title: 'Cash Waterfall',
      data: [],
      children: [
        {
          id: 'cash_from_operations',
          title: 'Cash From Operations',
          data: localeStringArray(
            roundArray(
              getFilterData(
                cashWaterfallData?.cashflowFromOpertaions || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
          children: [
            {
              id: 'collections',
              title: 'Collections',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.collections || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },
            {
              id: 'operating_cost_paid',
              title: 'Operating Cost Paid',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.operationCostPaid || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },
            {
              id: 'decommissioning_cost',
              title: 'Decommissioning Cost',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.decommissioningCost || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },
            {
              id: 'tax_paid',
              title: 'Tax Paid',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.taxPaid || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },
            {
              id: 'vat_during_operations',
              title: 'VAT during Operations',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.vatDuringOperations || new Array(calculationPeriod || 100).fill(0),
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
          id: 'cashflow_before_funding',
          title: 'Cashflow Before Funding',
          data: localeStringArray(
            roundArray(
              getFilterData(
                cashWaterfallData?.cashflowBeforeFunding || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
          children: [
            {
              id: 'construction_capex',
              title: 'Construction Capex',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.constructionCapex || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },
            {
              id: 'idc_and_bank_fee',
              title: 'IDC and Bank Fee',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.interestDuringConsAndFees || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },
            {
              id: 'dsra_funding',
              title: 'DSRA Funding',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.dsraFunding || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },
            {
              id: 'vat_on_construction',
              title: 'VAT on Construction',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.vatOnConstruction || new Array(calculationPeriod || 100).fill(0),
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
          id: 'cashflow_after_funding',
          title: 'Cashflow After Funding',
          data: localeStringArray(
            roundArray(
              getFilterData(
                cashWaterfallData?.cashflowAfterFunding || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
          children: [
            {
              id: 'equity_invested',
              title: 'Equity Invested',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.equityInvested || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },
            {
              id: 'bank_debt_drawdown',
              title: 'Bank Debt Drawdown',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.bankDebtDrawdown || new Array(calculationPeriod || 100).fill(0),
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
          id: 'cfads',
          title: 'CFADS',
          data: localeStringArray(
            roundArray(
              getFilterData(
                cashWaterfallData?.cfads || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
        },
        {
          id: 'cashflow_before_dsra_release',
          title: 'Cashflow Before DSRA Release',
          data: localeStringArray(
            roundArray(
              getFilterData(
                cashWaterfallData?.cashflowBeforeDSRArelease || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
          children: [
            {
              id: 'bank_debt_interest_paid',
              title: 'Bank Debt - Interest Paid',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.bankDebtInterestPaid || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },
            {
              id: 'bank_debt_repayment',
              title: 'Bank Debt Repayment',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.bankDebtRepayment || new Array(calculationPeriod || 100).fill(0),
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
          id: 'cash_avaiable_for_equity_before_excess_dsra_cash',
          title: 'Cash Availabel for Equity before Excess DSRA Cash',
          data: localeStringArray(
            roundArray(
              getFilterData(
                cashWaterfallData?.cashAvailableForEquityBeforeExcessDSRAcash || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
          children: [
            {
              id: 'funds_release_to_meet_cfads_shortfall',
              title: 'Funds Release to Meet CFADS Shortfall',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.fundsReleaseToMeetCFADSshortfall || new Array(calculationPeriod || 100).fill(0),
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
          id: 'cash_available_for_equity_holders',
          title: 'Cash Availabel for Equity Holders',
          data: localeStringArray(
            roundArray(
              getFilterData(
                cashWaterfallData?.cashAvailableForEquityHolders || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
          children: [
            {
              id: 'additions_to_maintain_min_dsra_balance',
              title: 'Additions to maintain Min. DSRA Bal',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.additionsToMaintainMinDSRAbalance || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },
            {
              id: 'excess_funds_released_from_dsra',
              title: 'Excess Funds released from DSRA',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.excessFundsReleasedFromDSRA || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },
            {
              id: 'decommission_reserve',
              title: 'Decommission Reserve',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    cashWaterfallData?.decommissioningReserve || new Array(calculationPeriod || 100).fill(0),
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
    };
    return rlt;
  }, [constructionStartDate, active, cashWaterfallData, dateRange]);
  const getData = () => {
    dispatch(getCashWaterfallDataAsync(currentParameterId as number));
  }
  return (
    <>
      <div style={{ flex: 1, padding: 5 }}>
        <div style={{ fontSize: 25, paddingBottom: 10, fontWeight: '900' }}>
          Cash Waterfall Statement
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
  return <Button>Cashflow</Button>;
}