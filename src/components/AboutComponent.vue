<template>
    <section>
        <div class="section-container">
            <h2>Sobre mi</h2>
            <article>
                <img src="/src/assets/caricatura.png" class="img-ey" width="230" height="300" alt="sobre-mi">
                <div class="text-abme">
                    <p>
                        Soy desarrollador enfocado en backend y automatización, con experiencia en Python, desarrollo de APIs y técnicas de web scraping. Disfruto crear soluciones que automatizan tareas y conectan servicios de forma eficiente.
                    </p>
                    <p>
                        Empecé con el desarrollo web aprendiendo HTML, CSS y JavaScript, y luego profundicé en herramientas como FastAPI y Selenium. Actualmente curso la carrera de Lic. en Análisis de Sistemas, y busco integrarme a un equipo donde pueda crecer profesionalmente y seguir aprendiendo de forma constante.
                    </p>
                </div>
            </article>
            <h2>Habilidades</h2>
            <article class="skills-article">
                    <div v-for="skill in skills" :key="skill.id" class="skills-container">
                        <img :src="skill.icon" alt="icon"> <span>{{ skill.seccion }}</span>
                        <div class="items">
                            <small v-for="tecnologia in skill.tecnologias" :key="tecnologia"> {{ tecnologia }}</small>
                        </div> 
                    </div>
            </article>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref([
    {id:1, seccion: "Frontend", tecnologias:["HTML", "CSS", "JavaScript", "React"], icon: "/icons/world.svg"},
    {id:2, seccion: "Backend", tecnologias:["Python", "API REST", "Node JS"], icon: "/icons/code.svg"},
    {id:3, seccion: "Base de datos", tecnologias:["MySQL", "MondoDB", "Firebase"], icon: "/icons/database.svg"},
    {id:4, seccion: "Herramientas", tecnologias:["Git", "GitHub", "Docker"], icon: "/icons/tool.svg"},
])
</script>

<style scoped>

    section{
        background-color: #f8f8f8;
        margin-bottom: 1rem;
    }

    .section-container{
        max-width: 1420px;
        margin: 0 auto;
        padding: 3rem 0;

        h2{
            padding: 1rem 3rem 0.5rem;
            font-size: 1.9rem;
        }
    }

    article{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
    }

    .img-ey{
        mix-blend-mode: multiply;
    }

    .text-abme{
        max-width: 600px;
        padding: 1rem;
        margin-left: 3rem;

        p{
            font-size: 1.1rem;
            line-height: 28px;
            padding: 0.6rem 0;
            text-align: justify;
        }
    }

    .skills-container{
        border: 1px solid gray;
        border-radius: 15px;
        padding: 1rem;
        padding-right: 3rem;
        margin: 0.5rem;

        img{
            vertical-align: middle;
            padding-right: 0.2rem;
        }
        
        .items{
            padding: 0.5rem 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        small{
            padding: 0.2rem 0.5rem;
            background-color: #e0e5eb;
            color: #16225f;
            border-radius: 5px;
            margin-right: 0.5rem;
        }
    }

    @media(max-width: 768px){
        h2{
            text-align: center;
        }

        article{
            flex-direction: column;
        }

        .text-abme{
            max-width: 520px;
            margin-left: 0;

            p{
                font-size: 1rem;
            }
        }

        .skills-container{
            min-width: 400px;
            margin: 1rem;

            img{
                padding-right: 0.5rem;
            }
            
            .items{
                padding: 1rem 0 0 0;
            }

            small{
                padding: 0.2rem 0.8rem;
                margin-right: 0;
            }
         }
    }

     @media (min-width: 769px) and (max-width: 1200px){
        article{
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .skills-article{
            display: grid;
            grid-template-columns: auto auto;            
        }
     }
</style>