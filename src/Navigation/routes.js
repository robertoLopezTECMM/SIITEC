import { lazy } from 'react';

const routes = [
  {
    path: 'home',
    component: lazy(() => import('../Screens/Home/index')),
    exact: true
  },
  /*{
    path: 'users',
    component: lazy(() => import('components/Users')),
    exact: true
  }*/
];

export default routes;