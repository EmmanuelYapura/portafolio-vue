<template>
    <section>
        <div class="section-container">
            <h2>Experiencia</h2>
            <ul>
                <li v-for="item in arreglo" :key="item.id">
                    <div class="titulo">{{ item.titulo }}</div>
                    <div class="fecha">{{ item.fecha }}</div>
                    <div class="descripcion">{{ item.descripcion }}</div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
const arreglo = ref([
    {
        id: 1, fecha: 'MangoDesk (SaaS de atención al cliente), Remoto, AR Mar 2023 – Ago 2023', titulo: 'Freelance Frontend Dev(React + Tailwind)', descripcion: 'Implemente  la landing y el panel de tickets en React 18 con Vite y Tailwind CSS, creando componentes reutilizables (Navbar, Tabs, Cards, Modal). Maqueté vistas responsive (desktop/tablet/móvil) y mejoré la accesibilidad (semántica). Integré fetch a una API REST para listar/filtrar tickets y ver detalles; manejo de loading/errores y paginación simple. Configuré React Router con rutas públicas/privadas y guardas por rol (agente/admin).'
    },
    {
        id: 2, fecha: 'Retail AR – Remoto, AR Feb 2025 - Jun 2025', titulo: 'Freelance Web Scraper', descripcion: 'Cliente necesitaba monitorear precios/stock de competidores semanalmente; diseñar scrapers y entregar datos para negocio y devs, construí crawler por categorías (requests/BS4 + fallback Selenium/Playwright) y normalicé con pandas. Entregables: dataset.xlsx, dataset.json. Sitios con contenido dinámico y antibots; garantizar extracción estable; implementé rotación de user-agents, delays aleatorios, reintentos exponenciales y soporte de proxies.',
    },
])
</script>

<style scoped>
section {
    padding: 4rem 0;
    background-color: #121E2C;
    margin-bottom: 0.1rem;
}

.section-container {
    max-width: 1420px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        align-self: start;
        font-size: 2rem;
        padding: 2rem 4rem;
        color: #ddd;
    }
}

ul {
    border-left: 3px solid #007BFF;
    max-width: 750px;
}

li {
    padding-bottom: 3rem;
    padding-left: 1rem;
    list-style: url('/src/assets/code-time.svg');
    color: #f5f5f5;
}

.fecha {
    padding: 0.5rem 0;
    color: #ada7a7;
    font-size: 0.9rem;
}

.titulo {
    display: flex;
    font-size: 1.1rem;
}

.descripcion {
    padding: 1rem 1.5rem;
    margin: 1.5rem 0;
    font-size: 0.9rem;
    text-align: justify;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    max-width: 800px;
    background-color: #2a2f3a;
    color: #ddd;
}

@media(max-width: 768px) {
    .section-container {
        padding: 0 1rem;
        
        h2 {
            align-self: center;
        }
    }

    ul {
        max-width: 600px;
        padding: 0 1rem;
    }

    li{
        padding: 0.5rem;
    }

    .fecha {
        font-size: 0.8rem;
    }

    .titulo {
        font-size: 1rem;
    }

    .descripcion {
        max-width: 650px;
    }
}

@media (min-width: 769px) and (max-width: 992px) {
    ul {
        min-width: 600px;
    }

    .descripcion {
        max-width: 650px;
    }
}
</style>
