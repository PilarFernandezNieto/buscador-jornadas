<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import JornadaComponent from '@/components/JornadaComponent.vue';
import { useRouter } from 'vue-router';


const jornadas = ref([]);
const etiquetas = ref([])
const router = useRouter();

const getJornadas = async () => {
  try {
    const response = await axios.get("/src/data/jornadas.json");
    jornadas.value = response.data;
    console.log(jornadas.value)
    
  } catch (error) {
    console.error(error);
  }
};
onMounted(() => getJornadas());
</script>

<template>
  
    <h1>Jornadas</h1>



    <div class="row">
      <JornadaComponent
        v-for="jornada in jornadas"
        :key="jornada.id"
        :jornada="jornada"
      >
        
      </JornadaComponent>
    </div>
  
</template>
