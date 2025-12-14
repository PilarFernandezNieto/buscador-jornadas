import { createRouter, createWebHistory } from 'vue-router';
import JornadasView from '@/views/JornadasView.vue';
import JornadaView from '@/views/JornadaView.vue';

const routes = [
    { path: '/', name: 'Jornadas', component: JornadasView },
    { path: '/jornada/:id', name: 'Jornada', component: JornadaView, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
