import { Route } from '@interfaces/route.interfaces';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

export const Router: React.FC<{ allRoutes: Route[] }> = ({ allRoutes }) => {
  const element = useRoutes([...routes, ...allRoutes]);

  return element;
};
