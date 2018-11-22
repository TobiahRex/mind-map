// import Splash from '../views/Splash/main';
// import Splash from '../views/Splash/main';
import Title from '../views/Title/Title';
import Crud from '../views/Crud/Crud';
import Sankey from '../views/Sankey';
import Gateway from '../views/Gateway';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Home',
    component: Title
  },
  {
    path: '/crud',
    name: 'Crud',
    component: Crud
  },
  {
    path: '/gateway',
    name: 'Gateway',
    component: Gateway
  },
  {

    path: '/sankey',
    name: 'Sankey',
    component: Sankey,

  },
  {
    redirect: true,
    path: '/',
    to: '/dashboard',
    name: 'Dashboard',
    component: Title
  }
];

export default dashboardRoutes;
