// /src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import NotFound from "@/views/NotFound.vue";
// Import other pages you create

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: {
            title: 'hTrap Music',
        },
    },
    {
        path: '/originals',
        name: 'Originals',
        component: () => import('../views/OriginalMusic.vue'),
        meta: {
            title: 'Original Music | hTrap',
        },
    },
    {
        path: '/remixes',
        name: 'Remixes',
        component: () => import('../views/RemixMusic.vue'),
        meta: {
            title: 'Remix Music | hTrap',
        },
    },
    {
        path: '/colophon',
        name: 'Colophon',
        component: () => import('../views/ColophonPage.vue'),
        meta: {
            title: 'Colophon | hTrap',
        },
    },
    {
        path: '/wip',
        name: 'WIP',
        component: () => import('../views/WorkInProgress.vue'),
        meta: {
            title: 'Work in Progress | hTrap',
        },
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutPage.vue'),
        meta: {
            title: 'About | hTrap',
        },
    },
    {
        path: '/:catchAll(.*)*', // This will match all routes that are not matched by other route records
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: 'Oops! Page not found | hTrap',
        },
    }
    // Add other route objects here
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.afterEach((to) => {
    // Use next tick to handle router history correctly
    let Vue = require('vue');
    Vue.nextTick(() => {
        document.title = to.meta.title || 'hTrap Music'; // Set the page title using the route meta
    }).then(r => r);
});

export default router;
