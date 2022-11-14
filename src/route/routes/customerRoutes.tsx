import { Routers } from '@enum/route.enum';
import { Route } from '@interfaces/route.interfaces';
import { lazy } from 'react';

const CustomerHome = lazy(() => import('@pages/customer'));

export const customerRoutes: Route[] = [
  {
    path: Routers.CUSTOMER_HOME,
    element: <CustomerHome />
  }
];
