<template>
    <section>
        <h1>Hola, soy Emmanuel Yapura</h1>
        <p>Estudiante de Tecnicatura en Sistemas con pasion por el desarrollo backend y la programacion. Busco oportunidades para aplicar mis conocimientos y crecer profesionalmente.</p>
        <div>
            <a href="#contacto"><button class="btn-contact">Contactame</button></a>
            <a href="#proyectos"><button class="btn-projects">Ver Proyectos</button></a>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
    section{
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        height: auto;
        background-image: linear-gradient(to bottom, rgba(16, 25, 34, 0.8) 0%, rgba(16, 25, 34, 0.2) 50%, rgba(16, 25, 34, 0) 100%), url('/src/assets/img-hero2.avif');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom center;        
    }

    h1{
        font-size: 3.5rem;
        color: #F5F5F5;
        margin-bottom: 0.5rem;
        text-align: center;
    } 

    p{
        font-size: 1.25rem;
        text-align: center;
        max-width: 700px;
        line-height: 25px;
        margin-bottom: 2.5rem;
        color: #414141;
    }

    button{
        margin: 0 1rem;
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;

        a{
            text-decoration: none;
        }
    }

    .btn-projects{
        background-color: #101821;
        color: #007BFF;
    }

    .btn-contact{
        background-color: #007BFF;
        color: #FFFFFF;
    }

    @media (max-width: 545px) {
        h1{
            font-size: 2.5rem;
        }

        p{
            font-size: 1.1rem;
            padding: 0 1rem;
        }

        button{
            margin: 0 0.5rem;
            padding: 0.7rem 1rem;
            font-size: 0.9rem;
        }
    }
</style>