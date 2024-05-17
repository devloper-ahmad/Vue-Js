<script setup>
import Serdata from '../router/SerData';
import Card from './Card.vue';
</script>

          <template>
               <div class="container mx-auto px-5 xl:px-24 mt-12 my-10">
                    <div class="text">
          <h1 class="text-blue-700 text-4xl font-bold text-center mb-12">Our Services</h1>

          
                    </div>
                    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-14">
          <div v-for="data in Serdata" :key="data">

          <Card :imgsrc="data.imgsrc" :title="data.title" :para="data.para"/>
          </div>

                    </div>
               </div>
          </template>

<style>



</style>