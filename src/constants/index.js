import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    ecmascript,
    html,
    css,
    reactjs,
    ajax,
    tailwind,
    nodejs,
    jquery,
    git,
    bootstrap,
    promineotech,
    carenavigators,
    selfemployed,
    carekaraoke,
    moviereview,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "projects",
      title: "Projects",
    },
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
      backText: "2 years + Web Development experience. Skilled in creating user-friendly and visually appealing interfaces. Strong understanding of cross-browser compatibility and web accessibility standards.",
    },
    {
      title: "React Javascript Developer",
      icon: mobile,
      backText: "Completed courses in Introduction to JavaScript, Basic programming in JavaScript (ES6), and Web App Design with ReactJS.",
    },
    {
      title: "Front End Technologies",
      icon: backend,
      backText: "Proficient in various front-end technologies including JavaScript (ES6), HTML, CSS, Bootstrap, JQuery, AJAX, and ReactJS.",
    },
    {
      title: "Object Oriented Programming",
      icon: creator,
      backText: "Experience designing and implementing object-oriented solutions for complex software systems.",
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
      name: "ECMAScript",
      icon: ecmascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Ajax",
      icon: ajax,
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
      name: "Jquery",
      icon: jquery,
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
      name: "bootstrap",
      icon: bootstrap,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Self-Employed",
      icon: selfemployed,
      iconBg: "#383E56",
      date: "Jan 2021 - Jan 2022",
      points: [
        "Demonstrated initiative and self-motivation by pursuing independent study of software development concepts and technologies outside of work hours.",
        "Enhanced technical skills and knowledge through completion of online courses and personal projects in software development.",
      ],
    },
    {
      title: "Promineo Tech Student",
      company_name: "Promineo Tech",
      icon: promineotech,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Mar 2023",
      points: [
        "In the 18-week, Front End Software Development program, students take three courses to learn the skills and technologies necessary to enter the industry as a Front End Software Developer: Introduction to JavaScript, Front End Technologies, and Web App Design with React.",
        "Skills and technologies learned include JavaScript, Algorithms, OOP, Design Patterns, Unit Testing, HTML, CSS, JQuery, Bootstrap, AJAX, React, JSX, REST, NPM, AWS, and more.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Contractor",
      icon: carenavigators,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "2 Years + Web Development experience.",
        "Developing a website for Care Karaoke, a business founded by Jean Llamas, President of Care Navigators.",
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
      name: "Care Karaoke",
      description:
        "Web-based platform that allows users to learn about the karoake services as well as allows the user to contact Care Karaoke through their Social Media.",
      tags: [
        {
          name: "reactJS",
          color: "blue-text-gradient",
        },
        {
          name: "sass",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carekaraoke,
      source_code_link: "https://github.com/care-navigators/care-karaoke.git",
    },
    {
      name: "Movie Review",
      description:
        "Web browser app that allow the user to review a movie by adding comments and stars",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: moviereview,
      source_code_link: "https://github.com/Dariansingh/14.Movie-Review-Webpage.git",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };