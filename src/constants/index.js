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
    title: "Responsive Web Development",
    icon: web,
  },
  {
    title: "Full-Stack MERN Development",
    icon: mobile,
  },
  {
    title: "REST API Development",
    icon: backend,
  },
  {
    title: "Modern UI with React & Next.js",
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
    title: "Freelance Front-End Developer",
    company_name: "Self-Employed",
    icon: web,
    iconBg: "#383E56",
    date: "2024 - 2025",
    points: [
      "Built responsive and interactive user interfaces using React.js and Tailwind CSS.",
      "Converted Figma designs into pixel-perfect web applications.",
      "Optimized website performance and accessibility.",
      "Collaborated with clients to deliver clean and user-friendly solutions.",
    ],
  },
  {
    title: "Freelance MERN Stack Developer",
    company_name: "Self-Employed",
    icon: web,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Designed secure RESTful APIs with JWT authentication and role-based authorization.",
      "Integrated third-party APIs, cloud storage, and payment solutions.",
      "Deployed and maintained production-ready applications using Vercel and Render.",
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
    name: "AGenZ Website",
    description:
      "A modern digital marketing platform designed to showcase and promote marketing services, including branding, social media management, and online advertising solutions. The website focuses on clean UI, responsive design, and user-friendly navigation to enhance client engagement and conversion rates.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/ffvila4s/image/upload/v1784545042/Capture_mbuqau.png",
    source_code_link: "https://agenz.site/",
  },
  {
    name: "Restaurant Web Application",
    description:
      "A responsive food and restaurant web app with categorized menu items and interactive UI. Demonstrates frontend skills in layout design, responsiveness, and UI structuring.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/ffvila4s/image/upload/v1784545169/food_yrobcm.png",
    source_code_link: "https://40moaz.github.io/food/",
  },
  {
    name: "Book Store Web Application",
    description:
      "A responsive book store app with dynamic book listing and organized UI. Demonstrates reusable components, state handling, and clean frontend implementation.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/ffvila4s/image/upload/v1784545348/book_b1oqqz.png",
    source_code_link: "https://bookstore-five-xi.vercel.app/",
  },
  {
    name: "Learnify – Learning Management System (LMS)",
    description:
      "A production-ready LMS for structured courses and learning content with an intuitive UI. Focuses on scalable architecture, reusable components, and responsive design.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/ffvila4s/image/upload/v1784546087/learnify_hv5txt.png",
    source_code_link: "",
  },
  {
    name: "Notes app",
    description:
      "A notes management application that enables users to create, organize, and manage their notes efficiently with a clean and user-friendly interface.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: "https://moaz-a.surge.sh/assets/notes-app-BSShifFY.png",
    source_code_link: "https://40moaz.github.io/notes/",
  },
  {
    name: "Password Generator app",
    description:
      "A secure password generator that creates strong, customizable passwords with one click and allows instant copying for better user convenience and security.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: "https://moaz-a.surge.sh/assets/password-generator-C7ihbt3n.png",
    source_code_link: "https://password-generator-moaz.surge.sh/",
  },
];

export { services, technologies, experiences, testimonials, projects };
