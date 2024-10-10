import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import { Login } from './pages/auth/login';
import { Register } from './pages/auth/register';
import SidebarLayout from './layouts/SidebarLayout';
import BaseLayout from './layouts/BaseLayout';
import PrivateRoute from './components/privateRoute';
import { InputParameter } from './pages/parameter/input';
import { ParameterSetting } from './pages/parameter/setting';
import { INPUT_PARAMS } from './utils/constant';
import { element } from 'prop-types';
import { propsToClassKey } from '@mui/styles';
import { Dashboard } from './pages/dashboard';
import { BalanceSheet } from './pages/Financial Statements/BalanceSheet';
import { ProfitAndLoss } from './pages/Financial Statements/PLAccount';
import { CashWaterfall } from './pages/Financial Statements/CashWaterfall';
import { Cashflow } from './pages/Financial Statements/Cashflow';
import { RevenueGraphPage } from './components/Graphs/Revenue';
import { CostGraphPage } from './components/Graphs/Cost';

// import SidebarLayout from 'src/layouts/SidebarLayout';
// import BaseLayout from 'src/layouts/BaseLayout';

// import SuspenseLoader from 'src/components/SuspenseLoader';
// import LogIn from './content/auth/login';
// import Register from './content/auth/register';

// const Loader = (Component) => (props) =>
//   (
//     <Suspense fallback={<SuspenseLoader />}>
//       <Component {...props} />
//     </Suspense>
//   );

// // Pages

// const Overview = Loader(lazy(() => import('src/content/overview')));

// // Dashboards

// const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));

// // Applications

// const Messenger = Loader(
//   lazy(() => import('src/content/applications/Messenger'))
// );
// const Transactions = Loader(
//   lazy(() => import('src/content/applications/Transactions'))
// );
// const UserProfile = Loader(
//   lazy(() => import('src/content/applications/Users/profile'))
// );
// const UserSettings = Loader(
//   lazy(() => import('src/content/applications/Users/settings'))
// );

// // Components

// const Buttons = Loader(
//   lazy(() => import('src/content/pages/Components/Buttons'))
// );
// const Modals = Loader(
//   lazy(() => import('src/content/pages/Components/Modals'))
// );
// const Accordions = Loader(
//   lazy(() => import('src/content/pages/Components/Accordions'))
// );
// const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs')));
// const Badges = Loader(
//   lazy(() => import('src/content/pages/Components/Badges'))
// );
// const Tooltips = Loader(
//   lazy(() => import('src/content/pages/Components/Tooltips'))
// );
// const Avatars = Loader(
//   lazy(() => import('src/content/pages/Components/Avatars'))
// );
// const Cards = Loader(lazy(() => import('src/content/pages/Components/Cards')));
// const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms')));

// // Status

// const Status404 = Loader(
//   lazy(() => import('src/content/pages/Status/Status404'))
// );
// const Status500 = Loader(
//   lazy(() => import('src/content/pages/Status/Status500'))
// );
// const StatusComingSoon = Loader(
//   lazy(() => import('src/content/pages/Status/ComingSoon'))
// );
// const StatusMaintenance = Loader(
//   lazy(() => import('src/content/pages/Status/Maintenance'))
// );

const routes: RouteObject[] = [
  {
    path: 'auth',
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> }
    ]
  },
  {
    path: '',
    element: (
      <PrivateRoute>
        <SidebarLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <Navigate to="dashboard" replace />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'parameters',
        children: [
          {
            path: '',
            element: <Navigate to="setting" replace />
          },
          {
            path: 'dashboard',
            element: <Dashboard />
          },
          {
            path: 'setting',
            element: <ParameterSetting />
          },
          ...INPUT_PARAMS.map((param) => ({
            path: param.id,
            element: <InputParameter param={param} />
          }))
        ]
      },
      {
        path: 'financial_statements',
        children: [
          {
            path: 'balance_sheet',
            element: <BalanceSheet />
          },
          {
            path: 'profit_loss_account',
            element: <ProfitAndLoss />
          },
          {
            path: 'cash_waterfall',
            element: <CashWaterfall />
          },
          {
            path: 'cashflow',
            element: <Cashflow />
          }
        ]
      },
      {
        path: 'graphs',
        children: [
          {
            path: 'revenue',
            element: <RevenueGraphPage />
          },
          {
            path: 'cost',
            element: <CostGraphPage />
          },
        ]
      }
    ]
  }
];

export default routes;
