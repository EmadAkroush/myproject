<script  setup lang="ts">

import { useRouter , useRoute } from 'vue-router';

</script>
<template>

<div class="container">
    
    <div class="row">
        <div class="col-md-6">
         
        </div>
    </div>
    
</div>

<router-view></router-view>
<router-link class="btn btn-dark" :to="{name:'Post'}" >posts</router-link>
</template>
<style>

</style>