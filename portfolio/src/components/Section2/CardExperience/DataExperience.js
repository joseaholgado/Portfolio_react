import { faReact, faAngular, faHtml5, faCss3Alt, faJs, faSass, faJava, faPython, faPhp, faLaravel, faNodeJs,
         faGithub,  faJenkins, faGitlab, faDocker, faAws, faFigma,  faTelegram
 } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt, faDatabase, faFire, faCodeBranch, faSwatchbook,faVectorSquare, faShip, faTerminal,
         faFileAlt, faA,faCloud, faCubes, faCog, faEnvelope
         } from '@fortawesome/free-solid-svg-icons'

import frontEnd from "../../../assets/images/Front-end.jpg"
import backEnd from "../../../assets/images/Back-end.png"
import devOps from "../../../assets/images/DevOps.png"
import database from "../../../assets/images/Database.jpg"
import ai from "../../../assets/images/Ai.jpg"
import ciberseguridad from "../../../assets/images/Ciberseguridad.jpeg"
import cloudServer from "../../../assets/images/CloudServer.jpg"
import hDisenio from "../../../assets/images/HerramientasDisenio.png"
import tecnologias from "../../../assets/images/Tecnologias.jpg"


export const dataExperience = [{

    title: "Frontend Developer",
    text: "Tengo expereciencia con la siguientes tecnologías:",
    image: frontEnd,
    technologies: [
        { name: 'JavaScript y TypeScript', icon: faJs }, 
        { name: 'HTML5', icon: faHtml5 },
        { name: 'CSS3', icon: faCss3Alt },
        { name: 'Sass', icon: faSass },
        { name: 'React', icon: faReact },
        { name: 'React Native', icon: faMobileAlt }, 
        { name: 'Angular', icon: faAngular },
      ]
},
{
    title: "Backend Developer",
    text: "I have experience with the following technologies: ",
    image: backEnd,
    technologies: [
        { name: 'Java', icon: faJava }, 
        { name: 'Python', icon: faPython }, 
        { name: 'PHP', icon: faPhp }, 
        { name: 'Node.js', icon: faNodeJs }, 
        { name: 'Laravel', icon: faLaravel }, 
        
      ]
    
},
{
    title: "Bases de datos",
    text: "I have experience with the following technologies:",
    image: database,
    technologies: [
        { name: 'MySQL', icon: faDatabase }, 
        { name: 'MongoDB', icon: faDatabase }, 
        { name: 'Supabase', icon: faDatabase }, 
        { name: 'Firebase', icon: faFire }, 
        
      ]
    
},
{
   
    title: "DevOps y Automatización",
    text: "I have experience with the following technologies: Docker, Kubernetes, Jenkins, Google Cloud, AWS, and Linux.",
    image: devOps,
    technologies: [
        { name: 'Git', icon: faCodeBranch },
        { name: 'GitFlow', icon: faCodeBranch },
        { name: 'GitHub', icon: faGithub },
        { name: 'Docker', icon: faDocker },
        { name: 'Bash', icon: faTerminal },
        { name: 'Makefile', icon: faFileAlt },
        { name: 'Kubernetes', icon: faShip }, 
        { name: 'GitLaps', icon: faGitlab }, 
        { name: 'Jenkins', icon: faJenkins },
        { name: 'Ansible', icon: faA },
        { name: 'AWS', icon: faAws },
        { name: 'Google Cloud', icon: faCloud },
      ]
    
},
{
    title: "Servidores y Nube",
    text: "I have experience with the following technologies:",
    image: cloudServer,
    technologies: [
        { name: 'AWS', icon: faCodeBranch },
        { name: 'Google Cloud', icon: faCodeBranch },
        { name: 'GitHub', icon: faGithub },
        { name: 'Docker', icon: faDocker },
        { name: 'Bash', icon: faTerminal },
        { name: 'Makefile', icon: faFileAlt },
        { name: 'Kubernetes', icon: faShip }, 
        { name: 'GitLaps', icon: faGitlab }, 
        { name: 'Jenkins', icon: faJenkins },
        { name: 'Ansible', icon: faA },
      ]
},
{
    title: "Automatización e IA",
    text: "I have experience with the following technologies: Windows and Linux.",
    image: ai,
    technologies: [
       
      ]
},
{
    title: "Ciberseguridad",
    text: "I have experience with the following technologies: Windows and Linux.",
    image: ciberseguridad,
    technologies: [
        
      ]
},
{
    title: "Herramientas de Diseño",
    text: "I have experience with the following technologies: Postman, Figma, and.",
    image: hDisenio,
    technologies: [
        { name: 'GIMP', icon: faSwatchbook },
        { name: 'Inkscape', icon: faVectorSquare },
        { name: 'Blender', icon: faCubes },
        { name: 'Figma', icon: faFigma },
        
      ]
},


{
    title: "Otras tecnologías",
    text: "I have experience with the following technologies: Postman, Figma, and.",
    image: tecnologias,
    technologies: [
        { name: 'Thunderbird', icon: faEnvelope },
        { name: 'Jitsi', icon: faCog },
        { name: 'Mattermost', icon: faCog },
        { name: 'Grafana', icon: faCog },
        { name: 'Joplin', icon: faCog },
        { name: 'Postman', icon: faCog },
        { name: 'Telegram', icon: faTelegram },
        
      ]
}

]