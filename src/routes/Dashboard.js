// import Splash from '../views/Splash/main';
// import Splash from '../views/Splash/main';
import Title from '../views/Title/Title';
import Crud from '../views/Crud/Crud';
import TrueFood from '../views/TrueFood';
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

    path: '/true-food',
    name: 'True Food',
    component: TrueFood,

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
