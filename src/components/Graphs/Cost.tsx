import React, { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Box, BoxProps, Button, styled } from '@mui/material';
import CustomGraph from '../../components/Graphs/CustomGraph';
import { getCostGraphData, getRevenueGraphData, selectParam } from '../../store/slices/parameterSlice';
import moment from 'moment';
import { selectResult } from '../../store/slices/resultSlice';

interface CBoxProps extends BoxProps {
    open?: boolean;
}

const TopContent = styled(Box)<BoxProps>(({ theme }) => ({
    width: '100%',
    minHeight: 150,
    backgroundColor: '#093939f0'
}));

const Content = styled(Box)<CBoxProps>(({ theme, open }) => ({
    width: '100%',
    backgroundColor: '#eee',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
}));

export function CostGraphPage() {
    const dispatch = useAppDispatch();

    const { currentParameterId, costGraphData } = useAppSelector(selectParam);
    const { constructionStartDate, modelingTimeInterval } = useAppSelector(selectResult);

    const revenueGraphData = useMemo(() => {
        const result = [
            {
                name: 'Staff Cost',
                data: costGraphData?.staffCost?.map((r, index) => ({
                    x: moment(constructionStartDate)
                        .add(index * modelingTimeInterval, 'months')
                        .startOf('month')
                        .format('YYYY-MM-DD'),
                    y: r,
                })) || []
            },
            {
                name: 'Equipment Cost',
                data: costGraphData?.equipmentCost?.map((r, index) => ({
                    x: moment(constructionStartDate)
                        .add(index * modelingTimeInterval, 'months')
                        .startOf('month')
                        .format('YYYY-MM-DD'),
                    y: r,
                })) || []
            },
            {
                name: 'Consumables',
                data: costGraphData?.consumablesCost?.map((r, index) => ({
                    x: moment(constructionStartDate)
                        .add(index * modelingTimeInterval, 'months')
                        .startOf('month')
                        .format('YYYY-MM-DD'),
                    y: r,
                })) || []
            },
            {
                name: 'Fuel Cost',
                data: costGraphData?.fuelCost?.map((r, index) => ({
                    x: moment(constructionStartDate)
                        .add(index * modelingTimeInterval, 'months')
                        .startOf('month')
                        .format('YYYY-MM-DD'),
                    y: r,
                })) || []
            },
            {
                name: 'Transport',
                data: costGraphData?.transportCost?.map((r, index) => ({
                    x: moment(constructionStartDate)
                        .add(index * modelingTimeInterval, 'months')
                        .startOf('month')
                        .format('YYYY-MM-DD'),
                    y: r,
                })) || []
            }, {
                name: 'Maintenance',
                data: costGraphData?.maintenanceCost?.map((r, index) => ({
                    x: moment(constructionStartDate)
                        .add(index * modelingTimeInterval, 'months')
                        .startOf('month')
                        .format('YYYY-MM-DD'),
                    y: r,
                })) || []
            }, {
                name: 'SPV Cost',
                data: costGraphData?.spvCost?.map((r, index) => ({
                    x: moment(constructionStartDate)
                        .add(index * modelingTimeInterval, 'months')
                        .startOf('month')
                        .format('YYYY-MM-DD'),
                    y: r,
                })) || []
            }, {
                name: 'Insurance Cost',
                data: costGraphData?.insruanaceCost?.map((r, index) => ({
                    x: moment(constructionStartDate)
                        .add(index * modelingTimeInterval, 'months')
                        .startOf('month')
                        .format('YYYY-MM-DD'),
                    y: r,
                })) || []
            },
            {
                name: 'Land Lease Cost',
                data: costGraphData?.landLeaseCost?.map((r, index) => ({
                    x: moment(constructionStartDate)
                        .add(index * modelingTimeInterval, 'months')
                        .startOf('month')
                        .format('YYYY-MM-DD'),
                    y: r,
                })) || []
            }, {
                name: 'Security Cost',
                data: costGraphData?.securityCost?.map((r, index) => ({
                    x: moment(constructionStartDate)
                        .add(index * modelingTimeInterval, 'months')
                        .startOf('month')
                        .format('YYYY-MM-DD'),
                    y: r,
                })) || []
            },
            {
                name: 'Community Payment Cost',
                data: costGraphData?.communityPaymentCost?.map((r, index) => ({
                    x: moment(constructionStartDate)
                        .add(index * modelingTimeInterval, 'months')
                        .startOf('month')
                        .format('YYYY-MM-DD'),
                    y: r,
                })) || []
            }, {
                name: 'Management Fee',
                data: costGraphData?.managementFee?.map((r, index) => ({
                    x: moment(constructionStartDate)
                        .add(index * modelingTimeInterval, 'months')
                        .startOf('month')
                        .format('YYYY-MM-DD'),
                    y: r,
                })) || []
            },
        ];
        return result;
    }, [costGraphData, constructionStartDate]);

    const getData = () => {
        dispatch(getCostGraphData(currentParameterId as number));
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
            }}
        >
            <TopContent />
            <Content>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <CustomGraph
                        datum={revenueGraphData}
                        option={{
                            chart: {
                                id: 'apexchart-example',
                                stacked: true,
                                width: '100%',
                                animations: {
                                    enabled: true,
                                },
                            },
                            title: {
                                text: 'Revenue stack across time',
                            },
                        }}
                    />
                    <Button style={{ width: '100px', height: '50px', marginTop: '10px' }} onClick={getData}>
                        Simulate
                    </Button>
                </div>
            </Content>
        </div>
    );
}
