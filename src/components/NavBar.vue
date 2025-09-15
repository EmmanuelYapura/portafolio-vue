<template>
    <nav class="navbar">
        <ul>
            <li v-for="nav in navegacion" :key="nav.nombre"><a :href="nav.enlace" class="nav-item" >{{ nav.nombre }} </a></li>
        </ul>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
const navegacion = ref([
    {id:1, nombre: "Educacion", enlace: "#educacion"},
    {id:2, nombre: "Experiencia", enlace: "#experiencia"},
    {id:3, nombre: "Proyectos", enlace: "#proyectos"},
    {id:4, nombre: "Habilidades", enlace: "#habilidades"}
])
</script>

<style scoped>
ul{
    display: flex;
    justify-content: space-around;
    padding: 0;
}

li{
    list-style: none;
}
/* Esta clase se puede poner en todos los contenedores hijos de app! o para una clase especial solo para centrar en desk */
.navbar{
    max-width: 1280px;
    margin: 0 auto;
    border: 1px solid black;
    padding: 1rem;
}

.nav-item{
    text-decoration: none;
    color: black;
}

@media (min-width: 992px ){
ul{
    justify-content: space-evenly;
}

.nav-item{
    font-size: 1.15rem;
} 
}


</style>