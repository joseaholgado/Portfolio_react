import React from 'react';
import makinonBikesImg from '../../../assets/images/makinonBikes.gif';
import clasificadorImg from '../../../assets/images/clasificadorDigitosMNIST.jpeg';
import scrapyImg from '../../../assets/images/scrapy.jpeg';
import botImg from '../../../assets/images/botTelegram.jpeg';
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
      title: "Bot Telegram",
      description: "Bot de Telegram que permite interactuar con tu computadora y obtener información de canales terceros",
      image: botImg,
      technologies: ["Python", "Telegram", "Node.js", "Extensión Chrome", "bash"],
      link: "https://github.com/joseaholgado/Bot_Telegram"
    }
  ];

  return (
    <section className="projects-section">
      <h2>Mis Proyectos</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Proyects;
