<script setup>

import TwoinOne from '../components/TwoinOne.vue'
import home from '../assets/images/main.png'
import Page from '../components/Page.vue'
</script>

<template>
 <TwoinOne :name="'This is About Page'" :imgsrc="home" :visit="'/services'" :btnName="'About'"/>
 <Page/>
</template>

<style>



</style>