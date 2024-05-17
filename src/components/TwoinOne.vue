<script setup>
import {defineProps } from 'vue'
const props = defineProps(['name','imgsrc','visit','btnName'])
</script>

<template>
    <div class="container mx-auto px-5 lg:px-20 h-[100vh] md:h-[80vh] flex flex-col-reverse md:flex-row justify-center md:justify-between
    items-center gap-10 bg-blue-100 rounded-lg">

<div class="w-full flex items-center flex-col md:items-start">
<h1 class="text-2xl md:text-4xl text-slate-700">{{ name }} <br> <strong class="text-blue-700 text-5xl lg:text-6xl font-bold">Rigex Team</strong></h1>
<p class="text-2xl md:text-4xl text-slate-700">We are the team of talented developers</p>
<router-link :to="visit" class="bg-blue-600 hover:bg-blue-700 outline-none px-12 py-4 rounded-full mt-3 text-white text-xl font-medium">{{ btnName }}</router-link>
    </div>
    <div class="home">
      <img :src="imgsrc" alt="team-img" class="w-[100%] h-[100%] sm:w-[45%] sm:h-[45%] items-center md:ml-96  mt-5 sm:ml-11">
    </div>
  </div>

  

</template>

<style scoped>

.home{
  animation: up-down 1s alternate infinite;
}
@keyframes up-down{
  0%{

    transform: translateY(10px);
  }
  100%{
    transform: translateY(-10px);
  }
}


</style>