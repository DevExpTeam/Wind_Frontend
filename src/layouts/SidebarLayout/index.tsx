import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { SidebarContext } from '../../contexts/SidebarContext';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  paramGetAsync,
  paramInfoGetAsync,
  selectParam
} from '../../store/slices/parameterSlice';
import useParameter from '../../utils/usePrameter';

const openedMixin = (theme: Theme): CSSObject => ({
  width: theme.sidebar.width,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `0px`,
  [theme.breakpoints.up('sm')]: {
    width: `0px)`
  }
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface BoxProps extends MuiBoxProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + (open ? -1 : 1) * 1,
  backgroundColor: `${theme.header.background}`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: theme.sidebar.width,
    width: `calc(100% - ${theme.sidebar.width}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const AppContent = styled(Box)<BoxProps>(({ theme, open }) => ({
  width: `calc(100vw - ${open ? theme.sidebar.width : '0px'})`,
  marginTop: `calc(${theme.header.height})`,
  height: `calc(100vh - ${theme.header.height})`
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  width: theme.sidebar.width,
  flexShrink: 0,
  overflowX: 'hidden',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}));

export default function SidebarLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const { currentParameterId } = useAppSelector(selectParam);
  useParameter();

  const { sidebarToggle, toggleSidebar } = React.useContext(SidebarContext);

  React.useEffect(() => {
    dispatch(paramGetAsync());
    console.log('loading sidebarlayout');
  }, []);

  React.useEffect(() => {
    if (currentParameterId)
      dispatch(paramInfoGetAsync(currentParameterId as number));
  }, [currentParameterId]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={sidebarToggle}>
        <Header />
      </AppBar>
      <Drawer variant="permanent" open={sidebarToggle}>
        <Sidebar />
      </Drawer>
      <AppContent theme={theme} open={sidebarToggle}>
        <Outlet />
      </AppContent>
    </Box>
  );
}
