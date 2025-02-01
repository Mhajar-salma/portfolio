import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProjectsPage from '@/views/ProjectsPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import NotFound from '@/views/NotFound.vue';
import CatalogueProject from '@/views/Catalogue/CatalogueProject.vue';
import VitrineProject from '@/views/Catalogue/VitrineProject.vue';
import VueAppProject from '@/views/Catalogue/VueAppProject.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/projects',
    name: 'ProjectsPage',
    component: ProjectsPage,
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage,
  },
  {
    path: '/projects/catalogue',
    name: 'CatalogueProject',
    component: CatalogueProject,
  },
  {
    path: '/projects/vitrine',
    name: 'VitrineProject',
    component: VitrineProject,
  },
  {
    path: '/projects/vue-app',
    name: 'VueAppProject',
    component: VueAppProject,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
