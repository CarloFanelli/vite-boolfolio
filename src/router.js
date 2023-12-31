import { createWebHashHistory, createRouter } from "vue-router";

import AppHome from './view/AppHome.vue';
import AppContacts from './view/AppContacts.vue';
import AppAbout from './view/AppAbout.vue';
import AppProjects from './view/AppProjects.vue';
import SingleProject from './view/SingleProject.vue';
import App404 from './view/App404.vue';

const routes = [
    { path: '/', name: 'Home', component: AppHome },
    { path: '/About', name: 'About', component: AppAbout },
    { path: '/Projects', name: 'Projects', component: AppProjects },
    { path: '/Contacts', name: 'Contacts', component: AppContacts },
    { path: '/Projects/:slug', name: 'Single-Project', component: SingleProject },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: App404 },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});


export { router };