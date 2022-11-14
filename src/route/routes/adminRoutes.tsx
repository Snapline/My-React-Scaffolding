import { Routers } from '@enum/route.enum';
import { Route } from '@interfaces/route.interfaces';
import { lazy } from 'react';

const Home = lazy(() => import('@pages/home'));
const ReduxExample = lazy(() => import('@pages/reduxExample'));

export const adminRoutes: Route[] = [
  {
    path: Routers.HOME,
    element: <Home />
  },
  {
    path: Routers.REDUX_EXAMPLE,
    element: <ReduxExample />
  }
];
