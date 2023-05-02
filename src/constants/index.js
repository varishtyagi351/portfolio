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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "B.Tech CSE",
      company_name: "@Meerut",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2021 - 2025",
      points: [
        "College Of Engineering And Rural Technology From Meerut Uttar Pradesh.",
        "Affilated From AKTU Lucknow.",
        "7.7 CGPA upto 1st Year.",
        "Participated in several hackathons and coding competitions.",
        "Completed a series of courses that provided a solid foundation in computer science, including programming fundamentals, data structures, and algorithms.",
      ],
    },
    {
      title: "12th Standard",
      company_name: "@Dola",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2018 - 2020",
      points: [
        "Aadarsh Inter College Dola (Baghpat).",
        "UP Board.",
        "Completed the science stream with a focus on physics, chemistry, and mathematics, achieving an overall %Ge of 75 on a 100 scale.",
        "Developed strong analytical and critical thinking skills, which are valuable in a wide range of careers in science, technology, engineering, and mathematics (STEM).",
      ],
    },
    {
      title: "Web Development",
      company_name: "@Code With Harry",
      icon: shopify,
      iconBg: "#383E56",
      date: "2022 - Present",
      points: [
        "Start with the basics: Learn HTML, CSS, and JavaScript, the three core languages used for building websites.",
        "Take online classes or tutorials: There are many free and paid resources available online that can help you learn web development, such as Codecademy, Udemy, and W3Schools.",
        "Practice, practice, practice: The best way to improve your web development skills is to build your own projects and practice coding regularly.",
        "Learn from others: Join online communities, attend meetups, and connect with other web developers to learn from their experiences and get feedback on your own work.",
      ],
    },
    {
      title: "Data Structure & Algorithms",
      company_name: "@College Wallah",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "2022 - Present",
      points: [
        "Start with the basics: Learn the fundamental concepts of data structures and algorithms, such as arrays, linked lists, stacks, queues, trees, and graphs.",
        "I Pick a programming language and I am comfortable with, C++ for DSA, and learn how to implement data structures and algorithms in that language.",
        "Practice: The best way to improve my DSA skills is to solve problems regularly. Join coding communities like LeetCode and Geegsforgeeks problems to solve.",
        "Analyze time and space complexity: Learn how to analyze the efficiency of your algorithms in terms of time and space complexity, and how to optimize them for better performance.",
      
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Varish proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Varish does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Varish optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };