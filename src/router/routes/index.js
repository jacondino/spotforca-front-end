import Home from '../../views/Home.vue';
import Game from '../../views/Game.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/game',
    name: 'game',
    component: Game,
  },
];

export default routes;
