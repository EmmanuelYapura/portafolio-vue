export const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "proyectos", label: "Proyectos" },
  { id: "estudios", label: "Estudios" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "contacto", label: "Contacto" },
]

export const projects = [
  {
    title: "Registro de nombres para bebes",
    description:
      "Aplicación SPA desarrollada con Vue y Firebase que permite a cada usuario administrar de forma privada una lista personalizada de nombres mediante autenticación y almacenamiento en la nube.",
    image: "/img-listanombres.png",
    demo: "https://registro-nombres.netlify.app/",
    repo: "https://github.com/EmmanuelYapura/registro-nombres",
    stack: ["Vue 3", "Firebase Auth", "Cloud Firestore", "Vou Router", "Composition API", "Netlify"],
    features: ["Registro usuarios", "Inicio de sesion", "Autenticacion firebase", "CRUD completo", "Datos privados por usuario", "Firestore Database"]
  },
  {
    title: "Explorador de películas",
    description:
      "Aplicación SPA desarrollada con React que consume la API de TMDB para explorar películas populares, buscar títulos, navegar por diferentes categorías y guardar favoritos sincronizados mediante Firebase.",
    image: "/img-peliculas.jpg",
    demo: "https://apipeliculastmdb.netlify.app/",
    repo: "https://github.com/EmmanuelYapura/API_peliculas",
    stack: ["React","React Router","Axios","Firebase","Cloud Firestore","Tailwind CSS","TMDB API"],
    features:["Busqueda de peliculas", "Favoritos persistentes", "Slider principal", "Carruseles por categoria", "Paginacion", "Consumo de API REST", "Navegacion SPA"]
  },
  {
    title: "Musimundo Data Scraper",
    description:
      "Aplicación backend desarrollada con FastAPI que automatiza la extracción de productos desde Musimundo, almacena la información en MySQL y expone una API para consultar el catálogo obtenido.",
    image: "/img-musimundo.jpg",
    repo: "https://github.com/EmmanuelYapura/scraping-musimundo",
    stack: ["Python","FastAPI","Requests","BeautifulSoup","SQLAlchemy","MySQL","Docker"],
    features: ["Scraping automatizado", "API REST", "Persistencia en MySQL", "Paginacion", "Organizacion por categorias"]
  },
  {
    title: "DeVivoBus Data Scraper",
    description:
      "Aplicación backend desarrollada con FastAPI que automatiza la obtención del inventario de DeVivoBus utilizando Selenium Driverless para superar el captcha y la API interna del sitio para extraer información detallada de cada vehículo.",
    image: "/img-bus.jpg",
    repo: "https://github.com/EmmanuelYapura/bus-scraper",
    stack: ["Python","FastAPI","Requests","Selenium Driverless","REST API","Docker"],
    features: ["Automatizacion del captcha", "Consumo de API interna", "Extraccion del inventario", "API REST con FastAPI", "Datos estructurados"]
  }
]

export const studies = [
  { title: "Tec. Universitaria en Programacion", place: "UTN - Facultad Regional San Rafael, Mendoza, Argentina ", status: "En curso" },
  { title: "Curso Python Avanzado", place: "Instituto IITA - Sede Centro, Salta - Virtual - 2025", status: "Completado" },
  { title: "Curso Python Basico", place: "Instituto IITA - Sede Centro, Salta - Presencial - 2024", status: "Completado" },
  { title: "Programa Codo a Codo 4.0", place: "React JS - 2023", status: "Completado" },
  { title: "Programa Codo a Codo 4.0", place: "FullStack - Desarrollo web - 2021", status: "Completado" },
  { title: "Programa Digit@lers Telecom", place: "Desarrollador Fullstack con Node JS - 2021", status: "Completado" },
]

export const skills = [
  { group: "Frontend", items: ["HTML", "CSS", "Javascript", "React"] },
  { group: "Backend", items: ["FastAPI", "REST APIs", "Web Scraping", "Python", "Java"] },
  { group: "Base de datos", items: ["MySQL", "MongoDB", "Firebase"] },
  { group: "Herramientas", items: ["Git", "GitHub", "Docker"] },
]

export const contact = [
  { label: "Email", value: "eyapura96@gmail.com", href: "mailto:eyapura96@gmail.com" },
  { label: "GitHub", value: "github.com/EmmanuelYapura", href: "https://github.com/EmmanuelYapura" },
  { label: "LinkedIn", value: "linkedin.com/in/emmanuelyapura", href: "https://www.linkedin.com/in/emmanuelyapura/" },
]
