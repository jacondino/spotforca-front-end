import Home from '../../views/Home.vue';
import Game from '../../views/Game.vue';
import Ranking from '../../views/Ranking.vue';

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
];

export default routes;
