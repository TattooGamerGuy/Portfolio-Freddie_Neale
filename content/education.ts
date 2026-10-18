import type { EducationEntry } from "@/lib/types";

/** Curriculum sourced from Full Sail's published online B.S. Web Development course listing
 *  (fullsail.edu) plus skills and projects documented in github.com/TattooGamerGuy/Full-Sail-University.
 *  Catalog sequences can change; GPA is self-stated. */

export const education: EducationEntry[] = [
  {
    id: "full-sail-bs-web",
    degree: "Bachelor of Science, Web Development",
    institution: "Full Sail University",
    detail:
      "Online · project-based B.S. · GPA 4.0 (self-stated academic record)",
    summary:
      "Accelerated, project-based bachelor's focused on architecture, interactivity, and programming for modern websites and web applications — from front-end interfaces through server-side systems, databases, cloud deployment, and application security. Graduates exit with a portfolio of standards-based sites and apps suitable for employers and clients.",
    coursework: [
      "Introduction to Web Architecture",
      "Interfaces and Usability",
      "Introduction to Development I & II",
      "Application Development",
      "Programming for Web Applications",
      "Interface Programming",
      "Database Systems",
      "Server-Side Languages",
      "Advanced Server-Side Languages",
      "Deployment of Web Applications",
      "Cloud Application Development",
      "Application Integration and Security",
      "Web Application Integration",
      "Secure Application Development",
      "Content Management System Development",
      "Data Visualization",
      "Connected Devices and Applications",
      "Project and Portfolio I–VI: Web Development",
      "Professional Development Seminars I & II",
      "Career Readiness",
      "Creative Presentation · Technical Writing · Discrete Mathematics",
    ],
    skills: [
      "HTML5 semantics and CSS3 / responsive layout",
      "JavaScript (ES6+), async/await, Fetch API",
      "Front-end frameworks (React) and interface programming",
      "UI / UX and usability patterns",
      "Node.js and Express.js server-side development",
      "REST API design, documentation, and unit testing",
      "Relational and nonrelational databases (incl. MongoDB)",
      "Object-oriented programming and data structures",
      "Cloud-native application development and third-party service integration",
      "Web application deployment, scaling, and continuous delivery concepts",
      "Application security — access control, roles, logging, auditing, SSO",
      "Secure application development and protecting user data",
      "CMS development and content-driven sites",
      "Data visualization",
      "Connected devices / multi-endpoint web solutions",
      "Software development life cycle, feature branching, and code review",
      "Technical documentation, project plans, and client-ready portfolios",
      "Git / GitHub version control",
      "Industry tooling (VS Code, Postman, Figma)",
      "Responsible use of AI-assisted development tools",
      "Creative presentation and professional communication",
    ],
    experience: [
      "Built a multi-page portfolio site, responsive landing pages, and early HTML/CSS projects (including a Skyrim fan page) as foundations coursework",
      "Shipped advanced JavaScript apps: real-time weather client (OpenWeather API), interactive to-do with persistence, and a quiz game with live feedback",
      "Delivered full-stack projects: blogging platform with auth and CRUD; e-commerce cart/checkout/product management; social app with real-time chat",
      "Completed six Project and Portfolio courses — production workflows, dynamic user interactions, SDLC plans, peer presentations, and portfolio refinement",
      "Practiced professional development seminars: industry speakers, mentor strategy, career mapping, and personal brand maintenance",
      "Studied end-to-end delivery: server-side frameworks, cloud services, CMS, data visualization, secure apps, and deployment into production-style environments",
    ],
    href: "https://github.com/TattooGamerGuy/Full-Sail-University",
    hrefLabel: "View Full Sail coursework on GitHub",
  },
];
