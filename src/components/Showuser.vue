<script setup lang="ts" >
import axios from 'axios';
import {ref} from 'vue';
import Cardview from './Cardview.vue';
import { useRouter , useRoute } from 'vue-router';
import '../../src/main.ts';
const loading = ref(true);




const route = useRoute()
const user = ref({});
function getUser(){
// Make a request for a user with a given ID
axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
  .then(function (response) {
    // handle success
    user.value = response.data;
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
getUser()
let Emad ="Emad";
</script>

<template>
<div class="container">
    
    <div class="row g-3">
      <div v-if="loading" class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
       </div>
        <div v-else  class="col-md-3" >
        <Cardview :user="user"/>
      
        </div>
    </div>
  
</div>
 
</template>



