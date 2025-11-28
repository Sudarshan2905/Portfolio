import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  krushisetu,
  bloodshare,
  wanderlust,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud & Microservices Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FrontEnd Developer",
    company_name: "MySoftWay",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2023 - Jully 2023",
    points: [
      "Built and styled responsive web interfaces using HTML, CSS, and Bootstrap while following modern UI/UX standards.",
      "Developed dynamic web functionality using PHP and AngularJS under the guidance of senior developers.",
      "Worked with MySQL for database operations including data handling, queries, and CRUD functionality.",
      "Received hands-on exposure to IT consultancy practices and collaborated in understanding real-world client requirements..",
    ],
  },
  {
    title: "Cyber Security Virtual Intern",
    company_name: "Cisco",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "June 2025 - Aug 2025",
    points: [
      "Applied core cybersecurity principles by identifying system vulnerabilities, analyzing threats, and practicing secure configuration techniques.",
      "Conducted hands-on ethical hacking labs and performed vulnerability assessments to evaluate system weaknesses and improve security posture.",
      "Configured secure network settings and practiced defense techniques.",
      "Improved understanding of network security through simulations and practical exercises.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "KrushiSetu",
    description:
      "AI-powered web application that helps farmers access marketplaces, government schemes, real-time weather updates, and personalized crop guidance. Includes an intelligent chatbot, real-time farmer communication, and multilingual PWA features for improved rural connectivity and agricultural support.",
    tags: [
  {
    name: "expressjs",
    color: "blue-text-gradient",
  },
  {
    name: "nodejs",
    color: "green-text-gradient",
  },
  {
    name: "firebase",
    color: "pink-text-gradient",
  },

  {
    name: "pwa",
    color: "orange-text-gradient",
  },


    ],
    image: krushisetu,
    source_code_link: "https://github.com/Sudarshan2905/KrushiSetu",
  },
  {
    name: "BloodShare",
    description:
      "A secure blockchain-based platform that connects blood donors and recipients in real time. It ensures transparency through smart contracts, predicts blood demand using AI models, and provides a scalable full-stack solution with automated donor verification and efficient emergency response workflows for improved healthcare reliability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: bloodshare,
    source_code_link: "https://github.com/Sudarshan2905/BloodShare",
  },
  {
    name: "Wanderlust",
    description:
      "A full-stack travel listing platform that lets users explore destinations, create listings, and share reviews with ease. It provides secure role-based authentication, optimized media uploads via Cloudinary, and interactive Mapbox mapping while delivering a smooth, responsive user experience across devices..",
    tags: [
      {
        name: "cloudinary",
        color: "blue-text-gradient",
      },
      {
        name: "mapbox",
        color: "green-text-gradient",
      },
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
    ],
    image: wanderlust,
    source_code_link: "https://github.com/sudarshan2905/wanderlust",
  },
];

export { services, technologies, experiences, testimonials, projects };
