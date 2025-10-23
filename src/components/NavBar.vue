<template>
    <header>
        <div class="header-content">

            <h3> {{ "< Portafolio />" }}</h3>
            <nav class="navbar">
                <ul>
                    <li v-for="nav in navegacion" :key="nav.nombre"><a :href="nav.enlace" class="nav-item" >{{ nav.nombre }} </a></li>
                </ul>
            </nav>
            
        </div>
    </header>
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
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    background-color: #101821;

    h3{
        color: #EEEEEE;
        padding-left: 2rem;
    }
}

ul{
    display: flex;
    justify-content: space-around;
    padding: 0;
}

li{
    list-style: none;
    padding-right: 1.2rem;
}

.header-content {
    width: 100%;   
    max-width: 1420px;    
    margin: 0 auto;    
    padding: 1.8rem 0;   
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
}

.navbar{
    padding-right: 0.5rem;
}

.nav-item{
    text-decoration: none;
    color: #EEEEEE;
}

@media (min-width: 992px ){
ul{
    justify-content: space-evenly;
}

.nav-item{
    font-size: 1.15rem;
} 
}

@media (max-width: 545px) {
    
    header h3{
        padding-left: 0;
        margin-bottom: 1rem;
    }
    
    .header-content{
        flex-direction: column;
    }

    .navbar{
        padding-right: 0;
    }
}


</style>