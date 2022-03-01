import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Users from './components/Users.vue'
import Showuser from './components/Showuser.vue'
import Templateuser from './components/Templateuser.vue'
import { useRoute } from 'vue-router';




const routes = [
    { path: "/home", name: "home", component: Home },
    { path:  "/users", name: "user", component: Templateuser , children:[
      {path:  "", name: "user", component: Users},
      {path:  ":id", name: "userId", component: Showuser}
    ]}

    
 
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;