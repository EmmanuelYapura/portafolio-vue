<template>
    <section>
        <div class="section-container">
            <h2>Proyectos</h2>
            <p class="text">Algunos de los proyectos en los que he trabajado durante mi formacion.</p>
            <div class="cards">
                <article v-for="proyecto in proyectos" :key="proyecto.id"
                    :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${proyecto.imgUrl})` }">
                    <h3>{{ proyecto.nombre }}</h3>
                    <p>{{ proyecto.descripcion }}</p>
                    <button>
                        <a target="_blank" :href="proyecto.enlaceCodigo"> <svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg> Codigo</a>
                    </button>
                    <button v-if="proyecto.enlaceDemo">
                        <a target="_blank" :href="proyecto.enlaceDemo"> <svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-external-link">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                <path d="M11 13l9 -9" />
                                <path d="M15 4h5v5" />
                            </svg> Demo</a>
                    </button>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
const proyectos = ref([
    { id: 1, nombre: "App lista nombres", descripcion: "Este proyecto te permite guardas, editar y eliminar nombres para tu niña en camino, utilizalo como agenda.", enlaceCodigo: "https://github.com/EmmanuelYapura/registro-nombres", enlaceDemo: "https://registro-nombres.netlify.app/", imgUrl: "/proyectos/img-listanombres.png" },
    { id: 2, nombre: "Peliculas (TMDB API)", descripcion: "App para visualizar peliculas de TMDB API, cuenta con un buscador y la opcion de agregar a favoritos las peliculas que gustes.", enlaceCodigo: "https://github.com/EmmanuelYapura/API_peliculas", enlaceDemo: "https://apipeliculastmdb.netlify.app/", imgUrl: "/proyectos/img-peliculas.jpg" },
    { id: 3, nombre: "Scraper Musimundo", descripcion: "Este script extrae datos de la tienda de tecnologia Musimundo, con una base de datos para almacenar las productos deseados.", enlaceCodigo: "https://github.com/EmmanuelYapura/scraping-musimundo", imgUrl: "/proyectos/img-musimundo.jpg" },
    { id: 4, nombre: "Bus Scraper", descripcion: "Este script recopila datos de la pagina devivobus, utilizando Fast API para visualizarlos mediante endpoints", enlaceCodigo: "https://github.com/EmmanuelYapura/bus-scraper", imgUrl: "/proyectos/img-bus.jpg" }
]);
</script>

<style scoped>
section {
    background-color: #F8F8F8;
    padding-bottom: 5rem;
}

.section-container {
    max-width: 1420px;
    margin: 0 auto;

    h2 {
        font-size: 2rem;
        padding: 5rem 3rem 1rem;
        color: #121E2C;
    }

    p.text {
        font-size: 1.1rem;
        padding: 0 3rem 2rem;
        color: #888888;
    }
}

.cards {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 4rem;
    margin-top: 1rem;
    padding: 0 1rem;
}

article {
    border-radius: 15px;
    padding: 1.5rem;
    max-width: 520px;
    color: #DDDDDD;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px) scale(1.01);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }

    h3 {
        padding-top: 5rem;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
        color: #fff;
        font-weight: 700;
    }

    p {
        text-align: justify;
        margin-bottom: 1.5rem;
        color: #f1f1f1;
        font-weight: 400;
        line-height: 20px;
    }
}

svg {
    vertical-align: middle;
    margin-right: 0.5rem;
}

button {
    margin-right: 0.5rem;
    padding: 0.3rem 1rem;
    border-radius: 8px;
    border: none;
    background-color: #101821;
    cursor: pointer;

    &:hover {
        background-color: #007BFF;
    }

    a {
        text-decoration: none;
        color: #EEEEEE;
        font-size: 0.875rem;
    }
}

@media (max-width: 768px) {
    .section-container {
        h2 {
            padding: 4rem 1rem 1rem;
            text-align: center;
        }

        p.text {
            padding: 0 1rem 2rem;
            text-align: center;
        }
    }

    .cards {
        grid-template-columns: auto;
        gap: 2rem;
        margin-top: 0.5rem;
    }
}

@media (min-width: 769px) and (max-width: 992px) {
    .cards {
        gap: 1rem;
        margin-top: 0rem;
        padding: 1rem;
    }

    .section-container h2,
    p {
        padding-bottom: 0;
    }
}
</style>