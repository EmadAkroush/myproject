<script setup lang="ts" >
defineProps({
  user: Object,
})


</script>

<template>

<div class="card" style="width: 18rem;">
  <div class="card-header">
    {{user.name}}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Username: {{user.username}}</li>
    <li class="list-group-item">email:{{user.email}}</li>
    <li class="list-group-item">phone:{{user.phone}}</li>
  </ul>
</div>
</template>
<style>
.list-group-item{
  color:red;
}
</style>

