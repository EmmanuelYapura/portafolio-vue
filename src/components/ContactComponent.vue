<template>
    <section>
        <div class="section-container">
            <h2>Contacto</h2>
            <p class="text">Siempre estoy abierto a conversar sobre nuevos proyectos, ideas creativas y oportunidades. ¡No dudes en contactarme!</p>
            <div class="info-container">
                <article class="info-article">
                    <h3 class="info-title">Informacion de contacto</h3>
                    <p class="info-p">Podes contactarme a traves de cualquiera de estos medios</p>
                    <address>
                        <ul>
                            <li v-for="dato in datos" :key="dato.id">
                                <img :src="dato.icon" alt="icon">
                                 <div class="data-container">
                                     <h5>{{ dato.medio }}</h5>
                                     <p> {{ dato.link }}</p>
                                 </div>
                            </li>
                        </ul>
                    </address>
                </article>
                <article class="form-article">
                    <h3>Enviame un mensaje</h3>
                    <p>Completa el formulario y te respondere lo antes posible</p>
                    <form>
                        <div class="form-group">
                            <label for="name">Nombre</label>
                            <input type="text" placeholder="ej: Mario Gomez" id="name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" placeholder="tu_email@ejemplo.com" id="email">
                        </div>
                        <div class="form-group">
                            <label for="msg">Mensaje</label>
                            <textarea id="msg" placeholder="Cuentame sobre la oportunidad o proyecto..."></textarea>
                        </div>
                        <button type="submit">Enviar Mensaje</button>
                    </form>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
const datos = ref([
    {id:1, medio: "Email", link:"eyapura96@gmail.com", icon: "/src/assets/mail.svg"},
    {id:2, medio: "LinkedIn", link:"https://www.linkedin.com/in/emmanuelyapura/", icon: "/src/assets/linkedin.svg"},
    {id:3, medio: "GitHub", link:"https://github.com/EmmanuelYapura", icon: "/src/assets/github.svg"},
    {id:4, medio: "Ubicacion", link:"Argentina, Buenos Aires", icon: "/src/assets/pin.svg"}
])
</script>

<style scoped>
    section{
        background-color: #f8f8f8;
        padding-bottom: 4rem;
    }

    .section-container{
        max-width: 1420px;
        margin: 0 auto;

        h2{
            font-size: 2rem;
            padding: 4rem 3rem 1rem;
        }

        .text{
            font-size: 1.05rem;
            padding: 0 3rem 2rem;
        }
    }

    .info-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    article{
        border: none;
        border-radius: 15px;
        padding: 1.5rem;
        margin: 1rem 2rem;
        background-color: #ffffff;
    }
    
    address{
        margin-top: 1rem;

        li{
            display: flex;
            list-style: none;
            padding: 0.7rem 0;

            img{
                border: none;
                border-radius: 5px;
                padding: 0.5rem;
                background-color: #e5f0fa;
                margin-right: 0.5rem;
            }

            h5{
                font-size: 0.9rem;
            }
        }

        .data-container p{
            font-size: 0.8rem;
        }
    }

    .info-article{
        padding-right: 5rem;

        .info-p{
            padding-top: 0.3rem;
        }
    }

    .form-article{
        padding: 2rem 3rem 3rem;
    }

    form, .form-group{
        display: flex;
        flex-direction: column;
        padding-top: 0.6rem;
    }

    .form-group, button{
        padding: 0.5rem 0;
    }

    button{
        background-color: #007BFF;
        border: none;
        border-radius: 10px;
        margin-top: 0.5rem;
        color: #fff;
    }

    textarea, input{
        border-radius: 10px;
        padding: 0.5rem 0;
        padding-left: 0.5rem;
        margin-top: 0.2rem;
        border: 1px solid gray;
    }

    @media(max-width: 992px){
    .info-container{
        flex-direction: column;
    }

    .section-container{
        h2, .text{
            text-align: center;
        }
    }

    .info-article{
        padding: 2rem 3rem;
    }

    }

</style>