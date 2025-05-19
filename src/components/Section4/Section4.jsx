import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Section4.scss';

const Section4 = () => {
  const experiences = [
    {
      title: "RPA y desarrollador de IA",
      company: "Viewnext",
      location: "Málaga",
      date: "2025 - Actualidad",
      description: "Desarrollo de agentes para automatización de tareas repetitivas y creación de IA para mejorar la experiencia del usuario.",
      technologies: ["Python", "Langchain", "Langgraph", "OpenAI", "Azure", "FastAPI", "Git", "PostgreSQL"],
      icon: <FaBriefcase />,
      iconBackground: "#0ebeff"
    },
    {
      title: "Software Developer",
      company: "Surbans",
      location: "Málaga",
      date: "2024-2025",
      description: "Desarrollo integral de la aplicación SURBANS, trabajando en soluciones escalables de Front-End y Back-End con tecnologías modernas.",
      technologies: ["Javascript", "React", "React Native", "Google Cloud", "MongoDB", "Node.js", "Express.js"],
      icon: <FaBriefcase />,
      iconBackground: "#0ebeff"
    },
    {
      title: "Curso de Especialización de IA y Big Data",
      company: "IES Portada Alta",
      location: "Málaga",
      date: "2024 - 2025",
      description: "Formación reglada en IA y Big Data.",
      technologies: ["Python", "Colab", "TensorFlow", "Numpy", "Pandas", "Scikit-learn", "Streamlit", "PowerBI", "Stark", "MongoDB", "GraphQl", "Git"],
      icon: <FaGraduationCap />,
      iconBackground: "#8780d9"
    },
    {
      title: "Formación Profesional Superior en Desarrollo de Aplicacione Web",
      company: "CPIFP Alan Turing",
      location: "Málaga",
      date: "2022 - 2024",
      description: "Formación en desarrollo web con tecnologías modernas.",
      technologies: ["HTML", "CSS", "JavaScript", "Angular", "Sass", "PHP", "Laravel", "Git", "AWS"],
      icon: <FaGraduationCap />,
      iconBackground: "#ff42b3"
    }
  ];

  return (
    <section className="experience-section" id="section4">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      >
        Experiencia
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
