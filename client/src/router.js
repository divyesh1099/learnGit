import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import OrganisationUse from './components/OrganisationUse.vue';
import PersonalUse from './components/PersonalUse.vue';
import TeamUse from './components/TeamUse.vue';

// Define your routes
const routes = [
  { path: '/organisation', component: OrganisationUse },
  { path: '/personal-use', component: PersonalUse },
  { path: '/team', component: TeamUse },
  // ... other routes
];

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
