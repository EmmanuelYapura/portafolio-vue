<template>
    <section>
        <div class="section-container">
            <h2>Mis estudios</h2>
            <div class="cards">
                <article v-for="curso in cursos" :key="curso.id">
                    <div class="title-cards">
                        <h3> {{ curso.nombre }}</h3> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-school"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" /><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" /></svg>
                    </div>
                        
                        <p>{{ curso.descripcion }} - {{ curso.fecha }}</p>
                </article>
            </div>
        </div>
        
    </section>
</template>

<script setup>
import { ref } from 'vue';
const cursos = ref([
    {id:1, nombre: "Programa Digit@lers Telecom", descripcion:"Desarrollador Fullstack con Node JS", fecha: "2021"},
    {id:2, nombre: "Programa Codo a Codo 4.0", descripcion: "FullStack - Desarrollo Web", fecha: "2021"},
    {id:3, nombre: "Programa Codo a Codo 4.0", descripcion: "React JS", fecha: "2023"},
    {id: 4, nombre: "Curso Python Basico", descripcion:"Instituto IITA - Sede Centro, Salta - Presencial", fecha: "2024"},
    {id: 5, nombre: "Curso Python Avanzado", descripcion:"Instituto IITA - Sede Centro, Salta - Virtual", fecha: "2025"},
    {id: 6, nombre: "Lic. en Analisis de Sistemas", descripcion:"UTN - Facultad Regional San Rafael, Mendoza, Argentina", fecha: "En curso"}
])
</script>

<style scoped>
    section{
        background-color: #121E2C;
    }

    .section-container{
        max-width: 1420px;
        margin: 0 auto;
        padding: 4rem 0 3rem;
        
        h2{
            color: #F5F5F5;
            font-size: 2rem;
            padding: 2rem 4rem;
        }
    }

    .cards{
        display: grid;
        grid-template-columns: auto auto;
        justify-content: center;
        gap: 4rem;
        margin-top: 2rem;
        margin-bottom: 3rem;
        padding: 0 1rem;
    }

    article{
        border: 1px solid white;
        padding: 1.5rem;
        max-width: 520px;
        color: #DDDDDD;
        border-radius: 15px;
        
        .title-cards{
            display: flex;
            justify-content: space-between;
        }

        h3{
            padding-bottom: 1rem;
            font-size: 1.1rem;
        }

        p{
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 545px) {

        .section-container{
            h2{
                text-align: center;
            }
        }

        .cards{
            grid-template-columns: auto;
            gap: 2rem;
            margin: 0 1rem;
        }
    }
</style>