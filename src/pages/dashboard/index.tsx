import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectAuth } from '../../store/slices/authSlice';
import styles from './dashboard.module.scss';

import { BoxProps as MuiBoxProps } from '@mui/material/Box';
interface BoxProps extends MuiBoxProps {
  open?: boolean;
}

export function Dashboard() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { error } = useAppSelector(selectAuth);

  const onClickButton = () => {
    console.log('test');
  };

  return <Button>Test</Button>;
}
