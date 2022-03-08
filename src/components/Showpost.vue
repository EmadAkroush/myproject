<script setup lang="ts" >
import axios from 'axios';
import {ref} from 'vue';
import ShowUser from './Showuser.vue';
import { useRouter , useRoute } from 'vue-router';

const loading = ref(true)
const post = ref({})
const route =useRoute();
function getPost(){
// Make a request for a user with a given ID
axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
  .then(function (response) {
    // handle success
    post.value = response.data;
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
getPost()
let Emad ="Emad";

// v-if="route.params.id == undefined"
</script>

<template>

      <div v-if="loading" class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
       </div>
        <div v-else  class="col-md-3">
        <div class="card" style="width: 18rem;">
  <div class="card-header">
  
     {{post.title}}
    
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">body: {{post.body}}</li>
    
  </ul>
  <div class="card-footer">
    <button class="btn btn-sm btn-danger me-4">Delete</button>
    <button class="btn btn-sm btn-dark">Edit</button>
  </div>
</div>
       
        </div>


</template>



