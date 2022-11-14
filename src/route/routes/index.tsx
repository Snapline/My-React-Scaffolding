import { Route } from '@interfaces/route.interfaces';
import { adminRoutes } from './adminRoutes';
import { customerRoutes } from './customerRoutes';

const routes: Route[] = [...adminRoutes, ...customerRoutes];

const getRoutes = () => {
  return routes;
};

export { routes, getRoutes };
