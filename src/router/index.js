import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/project/:id', name: ProjectsView, component: ProjectsView, props:true },
  { path: '/contact', component: ContactView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;