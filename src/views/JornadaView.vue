<script setup>

import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import RestauranteComponent from '@/components/RestauranteComponent.vue';

const route = useRoute();
const router = useRouter();

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const jornada = ref([]);
const restaurantes = ref([]);
const etiquetas = ref([]);
const localidades = ref([])
const filtroEtiqueta = ref("")
const filtroLocalidad = ref("")
const terminoBusqueda = ref("")

// 🔹 Cada cambio de query → nueva petición
watch(
  () => route.query,
  () => {
    getJornada()
  }
)

const getJornada = async () => {
  try {
    const response = await axios.get('/src/data/jornadas.json');
    const index = parseInt(props.id);
    jornada.value = response.data.find(jornada => jornada.id === index)
    restaurantes.value = jornada.value.restaurantes
    etiquetas.value = jornada.value.etiquetas
    localidades.value = jornada.value.localidades

  } catch (error) {
    console.log("Error cargando jornada: ", error);

  }
}

const buscar = () => {
  const query = {}
  query.etiqueta = filtroEtiqueta.value,
    query.localidad = filtroLocalidad.value,
    query.bsq = terminoBusqueda.value
  router.push({ name: "Jornada", query })

}

onMounted(() => {
  getJornada();
})

</script>
<template>
  <div class="container mt-5">
    <h1 class="text-center text-uppercase mb-5">{{ jornada.nombre }}</h1>
    <!-- Buscador -->
    <div class="row mb-5 g-2">
      <div class="col-12 col-md-3 col-xl-2">
        <label class="form-label">Etiqueta</label>
        <select v-model="filtroEtiqueta" class="form-select">
          <option value="">-- Seleccione etiqueta --</option>
          <option v-for="(etiqueta, index) in etiquetas" :key="index" :value="etiqueta">
            {{ etiqueta }}
          </option>
        </select>
      </div>

      <div class="col-12 col-md-3 col-xl-2">
        <label class="form-label">Localidad</label>
        <select v-model="filtroLocalidad" class="form-select">
          <option value="">-- Seleccione localidad --</option>
          <option v-for="(localidad, index) in localidades" :key="index" :value="localidad">
            {{ localidad }}
          </option>
        </select>
      </div>

      <div class="col-12 col-md-4 col-xl-6">
        <label class="form-label">Búsqueda</label>
        <input type="text" class="form-control" placeholder="Buscar por nombre de jornada o restaurante..."
          v-model="terminoBusqueda" />
      </div>

      <div class="col-12 col-md-2 col-xl-2 d-flex align-items-end">
        <button class="btn btn-primary w-100" @click="buscar">
          Buscar
        </button>
      </div>
    </div>

    <!-- Resultados de restaurantes -->
    <div class="row g-3">
      <RestauranteComponent v-for="restaurante in restaurantes" :key="restaurante.id" :restaurante="restaurante">
        {{ restaurante.nombre }}
      </RestauranteComponent>
    </div>
  </div>
</template>




<style lang="scss" scoped></style>