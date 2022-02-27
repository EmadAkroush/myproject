import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Users from './components/Users.vue'
import Showuser from './components/Showuser.vue'
import { useRoute } from 'vue-router';



const routes = [
    { path: "/home", name: "home", component: Home },
    { path:  "/users", name: "users", component: Users , children:[
      {path:  ":id", name: "usersId", component: Showuser}
    ]},
    
 
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;