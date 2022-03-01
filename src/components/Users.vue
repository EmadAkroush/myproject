<script setup lang="ts" >
import axios from 'axios';
import {ref} from 'vue';
import Cardview from './Cardview.vue';
import ShowUser from './ShowUser.vue';
import { useRouter , useRoute } from 'vue-router';

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
const route =useRoute();
// v-if="route.params.id == undefined"
</script>

<template>

      <div v-if="loading" class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
       </div>
        <div v-else  class="col-md-3" v-for="user in users">
        <Cardview :user="user"/>
       
        </div>


</template>



