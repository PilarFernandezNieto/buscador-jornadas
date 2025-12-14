<script setup>
import { useRouter } from 'vue-router';
 

const router = useRouter();

const props = defineProps({
    restaurante: {
        type: Object,
        required: true
    }
})


</script>
<template>
    <div class="col-4">
        <h2>{{ restaurante.nombre }}</h2>
        <div>
            <p> {{ restaurante.descripcion }}</p>
            <p>{{ restaurante.localidad }}</p>
        </div>
    </div>
</template>



<style scoped>
li {
    cursor: pointer;
}
</style>