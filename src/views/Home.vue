<script setup>

import TwoinOne from '../components/TwoinOne.vue'
import home from '../assets/images/main.png';
import Services from '../components/Services.vue'
import Page from '../components/Page.vue'

</script>

<template>
  
    <TwoinOne :name="'Grow Your Bussines'" :imgsrc="home" :visit="'/about'" :btnName="'Get Started'"/>
   
    <Page/>
    <Services/>
    
</template>
    
<style>

</style>