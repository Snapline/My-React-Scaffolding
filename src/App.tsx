import { Route } from '@interfaces/route.interfaces';
import React, { Suspense, useEffect, useState } from 'react';
import { Router } from './route';
import { getRoutes } from './route/routes';

export const App: React.FC = () => {
  const [allRoutes, setAllRoutes] = useState<Route[]>([]);
  useEffect(() => {
    setAllRoutes(getRoutes());
  }, []);
  return (
    <Suspense fallback={null}>
      <Router allRoutes={allRoutes} />
    </Suspense>
  );
};
