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
  itSchool,
  wa,
  orange,
  spark,
  django,
  trello,
  reactDjango,
  projectBurger,
  pigGame,
  card,
  threejs,
  gitHub,
  location,
  linkedIn,
  mail,
  tel,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS/TS",
    icon: mobile,
  },
  {
    title: "Python/Django",
    icon: backend,
  },
  {
    title: "Design",
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
    name: "React",
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
    name: "R",
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
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "General Manager, Owner, Graphic Designer",
    company_name: "'West Avenue' Advertising Agency",
    icon: wa,
    iconBg: "#191e31",
    date: "December 2009 - April 2016",
    points: [
      "Developing visual assets to support a marketing campaign.",
      "Designing a graphic overlay for social media posts.",
      "Formalizing the layout for a print ad.",
      "Creating company logos.",
      "Retouching photos for digital signage."
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Orange Moldova",
    icon: orange,
    iconBg: "#E6DEDD",
    date: "April 2016 - July 2021",
    points: [
      "Design and produce digital and print materials.",
      "Manage multiple projects, working within design specifications and guidelines.",
      "Advise best practices and optimizations throughout design projects.",
      "Support digital and print ads.",
      "Participate in organizational planning, staff meetings, and activities.",
    ],
  },
  {
    title: "Online course Python Developer",
    company_name: "IT SCHOOL Romania",
    icon: itSchool,
    iconBg: "#191e31",
    date: "August 2022 - February 2023",
    points: [
      "Learn to read, write, and understand Python code..",
      "Understand the basics of object-oriented programming (OOP).",
      "Utilize Python as a primary language for tooling.",
      "Develop Python projects from start to finish.",
    ],
  },
  {
    title: "Offline course Front End Developer",
    company_name: "Spark Solutions",
    icon: spark,
    iconBg: "#A437DB",
    date: "July 2023 - March 2024",
    points: [
      "Create a responsive website using HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences.",
      "Use React in relation to Javascript libraries and frameworks.",
      "Bootstrap CSS Framework to create webpages and work with GitHub repositories and version control.",
    ],
  },
];

const projects = [
  {
    name: "Clone Burger page",
    description:
      "A clone of a web page of an existing service with interesting functionality. You can chouse your extra toppings, souces and other burger parts wich comes with greate animations and give you the full price of you burger.",
    tags: [
      {
        name: "alexsirbud.github.io/Mentor_project_Burger/",
        color: "pink-text-gradient",
      },

    ],
    image: projectBurger,
    source_code_link: "https://github.com/AlexSirbuD/Mentor_project_Burger",
  },
  {
    name: "Pig Game",
    description:
      "A fairly simple game created in Java Script. Players take turns to roll a single dice as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1.",
    tags: [
      {
        name: "https://alexsirbud.github.io/Pig-Game/",
        color: "pink-text-gradient",
      },

    ],
    image: pigGame,
    source_code_link: "github.com/AlexSirbuD/Pig-Game",
  },
  {
    name: "Card",
    description:
      "Dynamic and beautiful visualization of a bank card, where you can write the card number, name, expiration date and CVC.",
    tags: [
      {
        name: "https://alexsirbud.github.io/Mentor_Project1/",
        color: "pink-text-gradient",
      },

    ],
    image: card,
    source_code_link: "github.com/AlexSirbuD/Mentor_Project1",
  },
  {
    name: "E-commerce",
    description:
      "Furniture e-commerce application that allows visitors to discover a vast range of products, search for them, create accounts, add or remove products and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "djangoRestFramework",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: reactDjango,
    source_code_link: "https://github.com/AlexSirbuD/DRF-React/tree/main",
  },
  {
    name: "Trello clone",
    description:
      "This project is a Trello clone using react, typescript, REST Api, Django with PostreSQL where users can manage tasks using Trello clone.",
    tags: [
      {
        name: "react/typescript",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: trello,
    source_code_link: "https://github.com/",
  },
  {
    name: "Furniture online store",
    description:
      "An example CRUD e-commerce web page where you can create, delete and update posts. The application is built using Python/Django and templates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: django,
    source_code_link: "https://github.com/AlexSirbuD/Django-project/tree/master",
  },

];

const contacts =
{
  adress: [
    {
      title: "+373 690 99 459",
      icon: tel,
    },
    {
      title: "sirbu.alexandr.dev@gmail.com",
      icon: mail,
    },
    {
      title: "Republic of Moldova, Chisinau",
      icon: location,
    },
  ],
  social: [

    {
      title: "linkedin.com/in/alexandr-sirbu/",
      icon: linkedIn,
    },

    {
      title: "github.com/AlexSirbuD",
      icon: gitHub,
    },
  ]
}






export { services, technologies, experiences, projects, contacts };