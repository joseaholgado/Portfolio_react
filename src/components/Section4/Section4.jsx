import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Section4.scss';

const Section4 = () => {
  const experiences = [
    {
      title: "Desarrollador Full Stack",
      company: "Makinon Bikes",
      location: "Sevilla",
      date: "2023 - 2024",
      description: "Desarrollo de una aplicación web completa para una tienda de bicicletas, incluyendo sistema de gestión de citas para taller.",
      technologies: ["Laravel", "Angular", "MySQL", "AWS"],
      icon: <FaBriefcase />,
      iconBackground: "#0ebeff"
    },
    {
      title: "Grado Superior en Desarrollo de Aplicaciones Web",
      company: "IES Polígono Sur",
      location: "Sevilla",
      date: "2022 - 2024",
      description: "Formación en desarrollo web full stack, incluyendo tecnologías front-end y back-end.",
      technologies: ["Java", "JavaScript", "PHP", "MySQL", "HTML/CSS"],
      icon: <FaGraduationCap />,
      iconBackground: "#8780d9"
    },
    {
      title: "Grado en Ingeniería Informática",
      company: "Universidad de Sevilla",
      location: "Sevilla",
      date: "2018 - 2022",
      description: "Formación en fundamentos de la informática, algoritmos, estructuras de datos y desarrollo de software.",
      technologies: ["Python", "Java", "C++", "SQL"],
      icon: <FaGraduationCap />,
      iconBackground: "#ff42b3"
    }
  ];

  return (
    <section className="experience-section">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      >
        Mi Experiencia
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            date={experience.date}
            iconStyle={{ background: experience.iconBackground, color: '#fff' }}
            icon={experience.icon}
          >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {experience.company} - {experience.location}
            </h4>
            <p className="timeline-description">{experience.description}</p>
            <div className="timeline-technologies">
              {experience.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};

export default Section4;
