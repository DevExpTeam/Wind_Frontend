import React, { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Box, BoxProps, Button, styled } from '@mui/material';
import CustomGraph from '../../components/Graphs/CustomGraph';
import { getRevenueGraphData, selectParam } from '../../store/slices/parameterSlice';
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

export function RevenueGraphPage() {
    const dispatch = useAppDispatch();

    const { currentParameterId, revenueData } = useAppSelector(selectParam);
    const { constructionStartDate, modelingTimeInterval } = useAppSelector(selectResult);

    const revenueGraphData = useMemo(() => {
        console.log(modelingTimeInterval)
        const result = [
            {
                name: 'Revenue from FiT',
                data: revenueData?.revFromFIT?.map((r, index) => ({
                    x: moment(constructionStartDate)
                        .add(index * modelingTimeInterval, 'months')
                        .startOf('month')
                        .format('YYYY-MM-DD'),
                    y: r,
                })) || []
            },
            {
                name: 'Revenue from Merchant Price',
                data: revenueData?.revFromMerchant?.map((r, index) => ({
                    x: moment(constructionStartDate)
                        .add(index * modelingTimeInterval, 'months')
                        .startOf('month')
                        .format('YYYY-MM-DD'),
                    y: r,
                })) || []
            },
            {
                name: 'Revenue from Others',
                data: revenueData?.revenueFromOthers?.map((r, index) => ({
                    x: moment(constructionStartDate)
                        .add(index * modelingTimeInterval, 'months')
                        .startOf('month')
                        .format('YYYY-MM-DD'),
                    y: r,
                })) || []
            },
        ];
        return result;
    }, [revenueData, constructionStartDate]);

    const getData = () => {
        dispatch(getRevenueGraphData(currentParameterId as number));
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
