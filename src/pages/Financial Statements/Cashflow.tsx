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
import { getCashflowDataAsync, paramInfoGetAsync } from '../../store/slices/parameterSlice';
import useParameter from '../../utils/usePrameter';

interface BoxProps extends MuiBoxProps {
    open?: boolean;
}

export function Cashflow() {
    useParameter();
    const { currentParameterId, cashflowData } = useAppSelector(selectParam);
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
            id: 'cashflow',
            title: 'Cashflow',
            data: [],
            children: [
                {
                    id: 'cash_from_operations',
                    title: 'Cash From Operations',
                    data: localeStringArray(
                        roundArray(
                            getFilterData(
                                cashflowData?.cashflowFromOperations || new Array(calculationPeriod || 100).fill(0),
                                constructionStartDate,
                                active,
                                dateRange
                            ),
                            1
                        )
                    ),
                    children: [
                        {
                            id: 'ebit',
                            title: 'EBIT',
                            data: localeStringArray(
                                roundArray(
                                    getFilterData(
                                        cashflowData?.ebit || new Array(calculationPeriod || 100).fill(0),
                                        constructionStartDate,
                                        active,
                                        dateRange
                                    ),
                                    1
                                )
                            ),
                        },
                        {
                            id: 'dep_and_amortization',
                            title: 'Depreciation and Amortization',
                            data: localeStringArray(
                                roundArray(
                                    getFilterData(
                                        cashflowData?.depreciation || new Array(calculationPeriod || 100).fill(0),
                                        constructionStartDate,
                                        active,
                                        dateRange
                                    ),
                                    1
                                )
                            ),
                        },
                        {
                            id: 'change_in_receivables',
                            title: 'Change in Account Receivables',
                            data: localeStringArray(
                                roundArray(
                                    getFilterData(
                                        cashflowData?.changeInReceivables || new Array(calculationPeriod || 100).fill(0),
                                        constructionStartDate,
                                        active,
                                        dateRange
                                    ),
                                    1
                                )
                            ),
                        },
                        {
                            id: 'change_in_payables',
                            title: 'Change in Account Payables',
                            data: localeStringArray(
                                roundArray(
                                    getFilterData(
                                        cashflowData?.changeInPayables || new Array(calculationPeriod || 100).fill(0),
                                        constructionStartDate,
                                        active,
                                        dateRange
                                    ),
                                    1
                                )
                            ),
                        },
                        {
                            id: 'change_in_vat_during_operations',
                            title: 'Change in VAT during Operations',
                            data: localeStringArray(
                                roundArray(
                                    getFilterData(
                                        cashflowData?.changeInVatDuringOperations || new Array(calculationPeriod || 100).fill(0),
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
                                        cashflowData?.taxPaid || new Array(calculationPeriod || 100).fill(0),
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
                                        cashflowData?.decommissioningCost || new Array(calculationPeriod || 100).fill(0),
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
                    id: 'cashflow_from_investing',
                    title: 'Cashflow from Investing',
                    data: localeStringArray(
                        roundArray(
                            getFilterData(
                                cashflowData?.cashflowFromInvesting || new Array(calculationPeriod || 100).fill(0),
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
                                        cashflowData?.constructionCapex || new Array(calculationPeriod || 100).fill(0),
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
                                        cashflowData?.interestDuringConsAndFees || new Array(calculationPeriod || 100).fill(0),
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
                                        cashflowData?.dsraFunding || new Array(calculationPeriod || 100).fill(0),
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
                                        cashflowData?.vatOnConstruction || new Array(calculationPeriod || 100).fill(0),
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
                                        cashflowData?.decommissioningReserve || new Array(calculationPeriod || 100).fill(0),
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
                    id: 'cashflow_from_financing',
                    title: 'Cashflow From Financing',
                    data: localeStringArray(
                        roundArray(
                            getFilterData(
                                cashflowData?.cashflowFromFinancing || new Array(calculationPeriod || 100).fill(0),
                                constructionStartDate,
                                active,
                                dateRange
                            ),
                            1
                        )
                    ),
                    children: [
                        {
                            id: 'bank_debt_drawdown',
                            title: 'Bank Debt Drawdown',
                            data: localeStringArray(
                                roundArray(
                                    getFilterData(
                                        cashflowData?.bankDebtDrawdown || new Array(calculationPeriod || 100).fill(0),
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
                                        cashflowData?.bankDebtRepayment || new Array(calculationPeriod || 100).fill(0),
                                        constructionStartDate,
                                        active,
                                        dateRange
                                    ),
                                    1
                                )
                            ),
                        },
                        {
                            id: 'bank_debt_interest_paid',
                            title: 'Bank Debt Interest Paid',
                            data: localeStringArray(
                                roundArray(
                                    getFilterData(
                                        cashflowData?.bankDebtInterestPaid || new Array(calculationPeriod || 100).fill(0),
                                        constructionStartDate,
                                        active,
                                        dateRange
                                    ),
                                    1
                                )
                            ),
                        },
                        {
                            id: 'equity_invested',
                            title: 'Equity Invested',
                            data: localeStringArray(
                                roundArray(
                                    getFilterData(
                                        cashflowData?.equityInvested || new Array(calculationPeriod || 100).fill(0),
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
                                        cashflowData?.dsra || new Array(calculationPeriod || 100).fill(0),
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
                    id: 'change_in_cash_during_the_year',
                    title: 'Change in Cash During the Year',
                    data: localeStringArray(
                        roundArray(
                            getFilterData(
                                cashflowData?.changeInCashDuringTheYear || new Array(calculationPeriod || 100).fill(0),
                                constructionStartDate,
                                active,
                                dateRange
                            ),
                            1
                        )
                    ),
                },
                {
                    id: 'closing_cash_balance',
                    title: 'Closing Cash Balance',
                    data: localeStringArray(
                        roundArray(
                            getFilterData(
                                cashflowData?.closingCashBalance || new Array(calculationPeriod || 100).fill(0),
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
    }, [constructionStartDate, active, cashflowData, dateRange]);
    const getData = () => {
        dispatch(getCashflowDataAsync(currentParameterId as number));
    }
    return (
        <>
            <div style={{ flex: 1, padding: 5 }}>
                <div style={{ fontSize: 25, paddingBottom: 10, fontWeight: '900' }}>
                    Cashflow Statement
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