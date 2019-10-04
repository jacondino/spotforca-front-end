import Home from '../../views/Home.vue';
import Game from '../../views/Game.vue';
import Ranking from '../../views/Ranking.vue';
import Admin from '../../views/Admin.vue';

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
  {
    path: '/ranking',
    name: 'ranking',
    component: Ranking,
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
  },
];

export default routes;
