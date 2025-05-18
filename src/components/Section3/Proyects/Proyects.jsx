import React from 'react';
import { motion } from 'framer-motion';
import makinonBikesImg from '../../../assets/images/makinonBikes.gif';
import clasificadorImg from '../../../assets/images/clasificadorDigitosMNIST.jpeg';
import scrapyImg from '../../../assets/images/scrapy.jpeg';
import botImg from '../../../assets/images/botTelegram.jpeg';
import entrenamientoImg from '../../../assets/images/AppEntreno.jpeg';
import rickAndMortyImg from '../../../assets/images/rickAndMorty.jpeg';
import papaFilmsImg from '../../../assets/images/Papafilms.png';
import githubImg from '../../../assets/images/github.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Proyects.scss';

const Proyects = () => {
  const projects = [
    {
      title: "MakinonBikes",
      description: "Tienda de bicicletas Ecommerce con app de gestión de citas para el taller",
      image: makinonBikesImg,
      technologies: ["Laravel", "Angular", "MySQL", "CSS", "Tailwind", "Sass", "Bootstrap", "AWS", "Vite", "Netlify"],
      link: "https://github.com/AlbertoMorenoFdez/Makinon-Bikes"
    },
    {
      title: "Clasificador de Dígitos MNIST",
      description: "Clasificador de dígitos MNIST con Red Neuronal",
      image: clasificadorImg,
      technologies: ["streamlit", "Python", "TensorFlow", "Numpy", "pillow"],
      link: "https://github.com/joseaholgado/redes_neuronales_numeros_mnist"
    },
    {
      title: "Scrapy FilmAffinity",
      description: "Scraping de películas de FilmAffinity",
      image: scrapyImg,
      technologies: ["Python", "Scrapy", "Pandas", "Numpy", "Ipywidgets", "ydata-profiling"],
      link: "https://github.com/joseaholgado/Scrapy_filmaffinity/tree/main"
    },
    {
      title: "Proyecto de Entrenamiento Java",
      description: "Es un proyecto de gestión de entrenamientos desarrollado en Java, que permite administrar rutinas de ejercicios, usuarios y planes de entrenamiento.",
      image: entrenamientoImg,
      technologies: ["Java", "MySQL"],
      link: "https://github.com/joseaholgado/Proyecto_Entrenamiento_Java"
    },
    {
      title: "Cards Rick and Morty",
      description: "Página web que muestra una serie de tarjetas con imágenes aleatorias de la serie animada Rick and Morty usando su API oficial.",
      image: rickAndMortyImg,
      technologies: ["JavaScript", "HTML5", "CSS3", "API-RickAndMorty" ],
      link: "https://github.com/joseaholgado/Fotos_RickAndMoty_Api"
    },
    {
      title: "PapaFilms: Aplicación de Cartelera de Cine",
      description: "Aplicación web que permite a los usuarios explorar una amplia selección de películas, buscar títulos específicos, y guardar sus películas favoritas para un acceso rápido. Además, utiliza la API de TMDb",
      image: botImg,
      technologies: ["JavaScript", "HTML5", "CSS3", "API-TMDb",],
      link: "https://github.com/joseaholgado/Cartelera_Api"
    },
    {
      title: "PapaFilms: Aplicación de Cartelera de Cine",
      description: "Aplicación web que permite a los usuarios explorar una amplia selección de películas, buscar títulos específicos, y guardar sus películas favoritas para un acceso rápido. Además, utiliza la API de TMDb",
      image: papaFilmsImg,
      technologies: ["JavaScript", "HTML5", "CSS3", "API-TMDb",],
      link: "https://github.com/joseaholgado/Cartelera_Api"
    }
    ,
    {
      title: "Más Proyectos",
      description: "Si deseas ver más proyectos visita mi GitHub",
      technologies: [""],
      image: githubImg,
      link: "https://github.com/joseaholgado"
    }
  ];

  return (
    <section className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      >
        Mis Proyectos
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              centeredSlides: true
            },
            1024: {
              slidesPerView: 2.5,
              centeredSlides: true
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="project-card">
                  <img src={project.image} alt={project.title} />
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="technologies">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      Ver proyecto
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Proyects;
