import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import createMatch from './components/createMatch.vue'
import matchRoom from './components/matchRoom.vue'

const routes = [
  // Define your routes here
  {
  path: '/',
  component: App,
  },
  {
    path: '/createMatch',
    component: createMatch,
    children: [
      {
        path: 'matchRoom',
        component: matchRoom,
      },
      {
        path: 'join/:matchId', 
        component: matchRoom
      },
    ],
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
