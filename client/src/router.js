import { createRouter, createWebHistory } from 'vue-router';
import OrganisationUse from './views/OrganisationUse.vue';
import PersonalUse from './views/PersonalUse.vue';
import TeamUse from './views/TeamUse.vue';
import HomeView from './views/HomeView.vue';
import GitTest from './views/GitTest.vue';
import MotionPathExample from './views/MotionPathExample.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/git-testing',
    name: 'GitTesting',
    component: GitTest,
  },
  {
    path: '/organisation',
    name: 'Organisation',
    component: OrganisationUse,
  },
  {
    path: '/personal-use',
    name: 'PersonalUse',
    component: PersonalUse,
  },
  {
    path: '/team',
    name: 'TeamUse',
    component: TeamUse,
  },
  {
    path: '/motion-path',
    name: 'MotionPathExample',
    component: MotionPathExample,
  }
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
