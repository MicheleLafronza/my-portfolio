import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/projects/:slug', name: 'projectsview', component: ProjectsView, props: true },
  { path: '/contact', component: ContactView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(tp, from, savedPosition){
    return { top: 0, behavior: 'smooth'};
  }
});

export default router;