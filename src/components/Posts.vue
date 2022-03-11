<script setup lang="ts" >
import axios from 'axios';
import {ref} from 'vue';

import { useRouter , useRoute } from 'vue-router';

const loading = ref(true)
const posts = ref([])

function getPosts(){
// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    // handle success
    posts.value = response.data;
    loading.value = false;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  
}
getPosts()
let Emad ="Emad";
const route =useRoute();
// v-if="route.params.id == undefined"
</script>

<template>
     <div>
     <router-link class="btn btn-dark" to="create">Create post</router-link>
     </div>
      <div v-if="loading" class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
       </div>
        <div v-else  class="col-md-3" v-for="post in posts" :key="post.id">
        <div class="card" style="width: 18rem;">
  <div class="card-header">
     <router-link :to="{ name: 'postId', params: { id: post.id }}" >
     {{post.title}}
    </router-link> 
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">body: {{post.body}}</li>
    
  </ul>
</div>
       
        </div>


</template>



