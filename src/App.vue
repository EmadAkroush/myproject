<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue';
import { useRouter , useRoute } from 'vue-router';
import '../src/main.ts';
</script>

<template>

<Header>

</Header>


     
       <router-view></router-view>
</template>

<style>

</style>
