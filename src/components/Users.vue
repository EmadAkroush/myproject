<script setup lang="ts" >
import axios from 'axios';
import {ref} from 'vue';
import Cardview from './Cardview.vue';
const loading = ref(true)
const users = ref([])

function getUsers(){
// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    // handle success
    users.value = response.data;
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
getUsers()
let Emad ="Emad";
</script>

<template>
<div class="container">
    
    <div class="row g-3">
      <div v-if="loading" class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
       </div>
        <div v-else  class="col-md-3" v-for="user in users">
        <Cardview :user="user"/>
       
        </div>
    </div>
    
</div>

</template>



