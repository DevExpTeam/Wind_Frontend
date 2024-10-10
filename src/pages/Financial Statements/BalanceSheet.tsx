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
import { getbalanceSheetDataAsync } from '../../store/slices/parameterSlice';

interface BoxProps extends MuiBoxProps {
  open?: boolean;
}

export function BalanceSheet() {
  useParameter();
  const { currentParameterId, balanceSheetData } = useAppSelector(selectParam);
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
      id: 'balance_sheet',
      title: 'Balance Sheet',
      data: [],
      children: [
        {
          id: 'total_current_assets',
          title: 'Total Current Assets',
          data: localeStringArray(
            roundArray(
              getFilterData(
                balanceSheetData?.totalCurrentAssets || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
          children: [
            {
              id: 'cash_and_equivalents',
              title: 'Cash & Cash Equivalents',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    balanceSheetData?.cashAndEquivalents || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },
            {
              id: 'accounts_receivables',
              title: 'Accounts Receivables',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    balanceSheetData?.accountsReceiviables || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),

            },
            {
              id: 'vat_receivable',
              title: 'VAT Receivable',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    balanceSheetData?.vatReceivables || new Array(calculationPeriod || 100).fill(0),
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
          id: 'total_non_current_assets',
          title: 'Total Non Current Assets',
          data: localeStringArray(
            roundArray(
              getFilterData(
                balanceSheetData?.totalNonCurrentAssets || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
          children: [
            {
              id: 'fixed_assets',
              title: 'Fixed Assets',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    balanceSheetData?.fixedAssets || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },
            {
              id: 'dsra',
              title: 'DSRA',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    balanceSheetData?.dsra || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),

            },
            {
              id: 'decommissioning_reserve',
              title: 'Decommissioning Reserve',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    balanceSheetData?.decommissioningReserve || new Array(calculationPeriod || 100).fill(0),
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
          id: 'total_current_liabilities',
          title: 'Total Current Liabilities',
          data: localeStringArray(
            roundArray(
              getFilterData(
                balanceSheetData?.totalCurrentLiabilites || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
          children: [
            {
              id: 'account_payable',
              title: 'Accounts Payables',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    balanceSheetData?.accountsPayables || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },
            {
              id: 'vat_payable',
              title: 'VAT Payable',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    balanceSheetData?.vatPayable || new Array(calculationPeriod || 100).fill(0),
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
          id: 'total_non_current_liabilities',
          title: 'Total Non Current Liabilities',
          data: localeStringArray(
            roundArray(
              getFilterData(
                balanceSheetData?.totalNonCurrentLiabilites || new Array(calculationPeriod || 100).fill(0),
                constructionStartDate,
                active,
                dateRange
              ),
              1
            )
          ),
          children: [
            {
              id: 'bank_debt',
              title: 'Bank Debt',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    balanceSheetData?.bankDebt || new Array(calculationPeriod || 100).fill(0),
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
          id: 'total_equity',
          title: 'Total Equity',
          data: localeStringArray(
            roundArray(
              getFilterData(
                balanceSheetData?.totalEquity || new Array(calculationPeriod || 100).fill(0),
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
                    balanceSheetData?.equityInvestedClosingBalance || new Array(calculationPeriod || 100).fill(0),
                    constructionStartDate,
                    active,
                    dateRange
                  ),
                  1
                )
              ),
            },
            {
              id: 'retained_earnings',
              title: 'Retained Earnings',
              data: localeStringArray(
                roundArray(
                  getFilterData(
                    balanceSheetData?.retainedEarnings || new Array(calculationPeriod || 100).fill(0),
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
  }, [constructionStartDate, active, balanceSheetData, dateRange]);
  const getData = () => {
    dispatch(getbalanceSheetDataAsync(currentParameterId as number));
  }
  return (
    <>
      <div style={{ flex: 1, padding: 5 }}>
        <div style={{ fontSize: 25, paddingBottom: 10, fontWeight: '900' }}>
          Balance Sheet
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