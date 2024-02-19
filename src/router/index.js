// /src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
// Import other pages you create

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/originals',
        name: 'Originals',
        component: () => import('../views/OriginalMusic.vue'),
    },
    {
        path: '/remixes',
        name: 'Remixes',
        component: () => import('../views/RemixMusic.vue'),
    }
    // Add other route objects here
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
