<script setup>

defineProps(['imgsrc', 'title', 'para'])

</script>

<template>
    <div class="bg-white shadow-lg sm:skew-y-6">
        <img :src="imgsrc" :alt="title" class="w-full object-cover h-[200px]">
    <div class="text p-9">
    <h2 class="text-slave-900 py-1 font-medium text-lg">{{ title }}</h2>
    <p class="text-slave-600 py-1 font-medium text-base">{{ para }}</p>
    <button class="bg-blue-600 hover:bg-blue-700 outline-none px-12 py-4 rounded-full mt-3 text-white text-xl font-medium">Go Somewhere</button>
</div>
</div>
</template>


<style scoped>


</style>