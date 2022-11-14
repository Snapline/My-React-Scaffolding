export interface Route {
  path: string;
  element: JSX.Element;
  children?: Route[];
  meta?: {
    appLayout?: string;
    authRoute?: boolean;
    publicRoute?: boolean;
    className?: string;
    restricted?: boolean;
    action?: string;
    resource?: string;
  };
}
