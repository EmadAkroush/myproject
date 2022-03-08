import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Users from './components/Users.vue'
import Showuser from './components/Showuser.vue'
import Templateuser from './components/Templateuser.vue'
import Posts from './components/Posts.vue'
import Showpost from './components/Showpost.vue'
import TemplatePost from './components/TemplatePost.vue'


import { useRoute } from 'vue-router';




const routes = [
    { path: "/home", name: "home", component: Home },
    { path:  "/users", name: "userTemplate", component: Templateuser , children:[
      {path:  "", name: "user", component: Users},
      {path:  ":id", name: "userId", component: Showuser}
    ]},
    { path:  "/posts", name: "postTemplate", component: TemplatePost , children:[
      {path:  "", name: "Post", component: Posts},
      {path:  ":id", name: "postId", component: Showpost}
    ]},
    

    
 
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;