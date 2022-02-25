import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Users from './components/Users.vue'


const routes = [
    { path: "/home", name: "home", component: Home },
    { path:  "/users", name: "users", component: Users},
    
 
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;