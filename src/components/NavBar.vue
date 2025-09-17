<template>
    <nav class="navbar">
        <div class="navbar-menu">
            <ul>
                <a v-for="nav in navegacion" :key="nav.nombre" href="nav.enlace" class="nav-item"> {{ nav.nombre }}</a>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
const navegacion = ref([
    {id:1 , nombre:'Educacion', enlace: '#educacion'},
    {id:2 , nombre:'Experiencia', enlace: '#experiencia'},
    {id:3 , nombre:'Proyectos', enlace: '#proyectos'},
    {id:4 , nombre:'Habilidades', enlace: '#habilidades'},
])
</script>

<style scoped>
    /* Aca van los estilos del componente*/
</style>