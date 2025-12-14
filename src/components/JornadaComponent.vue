<script setup>
import { useRouter } from 'vue-router';
 

const router = useRouter();

const props = defineProps({
    jornada: {
        type: Object,
        required: true
    }
})

const verJornada = () => {
    router.push({name: "Jornada", params: {id: props.jornada.id}})
}

</script>
<template>
    <div @click="verJornada" class="jornada">
        {{ jornada.nombre }}
    </div>
</template>



<style scoped>
.jornada {
    padding: 1rem;
    border: 1px solid green;
    margin: 0.2rem 0;
    background-color: green;
    color: white;
    font-weight: 600;
    cursor:pointer;
    transition: all 300ms ease-in;
}
.jornada:hover {
    background-color: white;
    color: green;
}
</style>