<script setup lang="ts">
import { useRouter , useRoute } from 'vue-router';
</script>
<template>
<header>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to='/home'>home</router-link>
        </li>
      
        <li class="nav-item">
         <router-link class="nav-link" to='/users'>users</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to='/post'>post</router-link>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
</header>
</template>
<style>

</style>