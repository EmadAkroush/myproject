<script setup lang="ts">
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRouter , useRoute } from 'vue-router';
   const form:any =  reactive({
     title: "",
     titleErorrText: "",
     body: "",
     bodyErrorText: ""
   })
   const loading = ref(false);
   function validate(){
     if(form.title === ""){
         form.titleErorrText = "title is requred ";
     }else{
         form.titleErorrText = "";
     }
       if(form.body === ""){
         form.bodyErorrText = "body is requred ";
     }else{
         form.bodyErorrText = "";
     }
     if(form.title !== "" && form.body !== ""){
       loading.value = true;
       createpost();

     }
   }
   function createpost(){
     axios.post('https://jsonplaceholder.typicode.com/posts',{
        title: form.title,
        body: form.body,
        userId: 1,
     }).then(function (response) {
       loading.value = false;
      console.log(response.data)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
   }
   
</script>
<template>
 <h2> Creat the post </h2>

 <div class="col-md-6">
   
 <form  @submit.prevent="validate">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" class="form-control" v-model.lazy="form.title">
    <small  class="form-text text-danger">
      {{ form.titleErorrText}}
    </small>
  </div>
  <textarea class="form-control" v-model.lazy="form.body">
      
  </textarea>
   <small  class="form-text text-danger">
    <p>  {{ form.bodyErorrText}} </p>
    </small>
  
  <button type="submit" class="btn btn-primary" :disabled="loading">
    Creatpost
    <div class="spinner-border spinner-border-sm" v-if="loading" role="status">
      
</div>
  </button>
</form>

</div>

</template>
<style>

</style>