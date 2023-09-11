import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    flutter,
    mysql,
    dart,
    html,
    css,
    reactjs,
    youtube,
    gym,
    blog,
    clubss,
    tailwind,
    nodejs,
    mongodb,
    git,   
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "App developer",
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
      name: "React JS",
      icon: reactjs,
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
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Dart",
      icon: dart,
    },
    {
      name: "MySQL",
      icon: mysql,
    }
    
  ];
 
  
  
  const projects = [
    {
      name: "Blogs page",
      description:
      "Explore my engaging blogs page website, your gateway to a world of insightful content and thought-provoking articles that cater to your interests and passions.",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Css,Html",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/",
      source_code_links: "https://blogsapp-r88g.onrender.com",
    },
    {
      name: "Youtube Clone",
      description:
        "Discover the next-generation of video-sharing and entertainment with our YouTube clone, where creativity knows no bounds and content reigns supreme.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: youtube,
      source_code_link: "https://github.com/",
      source_code_links: "https://sumanths-youtube.netlify.app",
    },
    {
      name: "Gym Site",
      description:
      "Step into a world of fitness and wellness with our gym website, where health meets technology to empower your journey towards a stronger, healthier you.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/",
      source_code_links: "https://sumanth-gym.netlify.app",
    },
    {
      name: "Amrita Blockchain site",
      description:
        "An online platform designed to facilitate seamless connections between students and clubs, providing a user-friendly experience that encourages participation and engagement.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwindcss,CSS,Html",
          color: "green-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "pink-text-gradient",
        },
      ],
      image: clubss,
      source_code_link: "https://github.com/",
      source_code_links: "https://amrita-blockchain-club.netlify.app/",
    },
  ];
  
  export { services, technologies, projects };
  