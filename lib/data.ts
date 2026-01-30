export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  highlights: string[];
  impact?: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const experiences: Experience[] = [
  {
    company: "UL Solutions",
    role: "Senior Software Engineer",
    period: "2022 - Present",
    location: "San Antonio, TX",
    achievements: [
      "Led a team of 8 engineers, overseeing development of mission-critical applications, ensuring timely delivery, and maintaining high-quality standards",
      "Architected and implemented scalable, cloud-native solutions using React.js, Node.js, and AWS services, enabling the platform to handle a 200% increase in user traffic",
      "Conducted in-depth system analysis and introduced performance optimization techniques, improving application response times by 40%",
      "Designed and implemented CI/CD pipelines, reducing deployment times from hours to minutes",
      "Used the Redux toolkit for global state management over the whole web app",
      "Mentored junior and mid-level developers through code reviews, training sessions, and one-on-one coaching, fostering a collaborative and growth-oriented team culture",
      "Spearheaded the migration of monolithic legacy systems to a microservices-based architecture, enhancing modularity and scalability",
      "Collaborated with stakeholders to define project requirements, create roadmaps, and prioritize features",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Redux Toolkit",
      "TypeScript",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Microservices",
    ],
  },
  {
    company: "BuzzFeed",
    role: "Software Engineer",
    period: "2020 - 2022",
    location: "Remote",
    achievements: [
      "Contributed to the design and development of full-stack solutions for clients in various sectors, including healthcare, finance, and e-commerce",
      "Designed and implemented RESTful APIs, enabling seamless integration with third-party services and improving interoperability",
      "Created reusable React and Vue components, accelerating frontend development workflows by 25% and ensuring consistency across projects",
      "Enhanced database query performance by optimizing SQL queries and implementing indexing strategies",
      "Led the implementation of agile development practices, including daily standups, sprint planning, and retrospectives, resulting in a 15% increase in team productivity",
      "Collaborated closely with UX/UI designers to create user-friendly and visually appealing interfaces",
      "Conducted regular security audits to identify vulnerabilities and ensure compliance with industry standards",
    ],
    technologies: [
      "React.js",
      "Vue.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "RESTful APIs",
      "Agile",
      "Jest",
      "Cypress",
    ],
  },
  {
    company: "Interbrand",
    role: "Associate Software Engineer",
    period: "2018 - 2020",
    location: "New York, NY",
    achievements: [
      "Worked as part of a cross-functional team to develop dynamic, user-centric applications using modern frontend and backend frameworks",
      "Assisted in building responsive user interfaces with React.js and Vue.js, ensuring compatibility across devices and browsers",
      "Designed and deployed server-side logic with Node.js and Express.js, ensuring reliable and scalable backend operations",
      "Developed unit and integration tests, improving code coverage and application stability",
      "Supported deployment of applications on AWS, ensuring high availability and minimal downtime",
      "Researched and implemented emerging technologies to improve application performance and functionality",
    ],
    technologies: [
      "React.js",
      "Vue.js",
      "Node.js",
      "Express.js",
      "AWS",
      "MySQL",
      "Jest",
      "Mocha",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Fullsoon",
    description:
      "AI-powered solution to minimize food waste and maximize profitability through intelligent inventory management",
    longDescription:
      "Led a team of six in developing Fullsoon, an innovative AI-powered solution designed to minimize food waste and maximize profitability through intelligent inventory management. Spearheaded the project from concept to deployment, leveraging React.js, Node.js, MySQL, and AWS to deliver a robust and scalable platform.",
    technologies: [
      "React.js",
      "Node.js",
      "MySQL",
      "AWS",
      "TypeScript",
      "Redux Toolkit",
      "Docker",
    ],
    highlights: [
      "Led team of 6 engineers from concept to deployment",
      "AI-powered inventory management system",
      "Scalable cloud-native architecture",
      "Real-time analytics and reporting",
    ],
    impact: [
      "Reduced food waste by 35% for partner restaurants",
      "Increased profitability through optimized inventory management",
      "Scaled to handle 10,000+ daily transactions",
    ],
  },
  {
    name: "Emeezo",
    description:
      "SaaS product capable of generating thousands of custom videos on demand using serverless architecture",
    longDescription:
      "Engineered a SaaS product capable of generating thousands of custom videos on demand, utilizing serverless architecture and optimized API integrations. Built a bespoke customer relationship management tool, streamlining internal operations and improving customer satisfaction by 25%.",
    technologies: [
      "React.js",
      "Node.js",
      "Serverless",
      "AWS Lambda",
      "PostgreSQL",
      "GraphQL",
      "Docker",
    ],
    highlights: [
      "Serverless architecture for cost efficiency",
      "Custom CRM solution integrated",
      "High-volume video generation pipeline",
      "Optimized API integrations",
    ],
    impact: [
      "Generated 50,000+ custom videos monthly",
      "Improved customer satisfaction by 25%",
      "Reduced infrastructure costs by 40% through serverless architecture",
    ],
  },
  {
    name: "ThePart",
    description:
      "Token-based property-sharing platform with seamless user experience, secure payment gateways, and advanced reporting dashboards",
    longDescription:
      "Developed a token-based property-sharing platform with seamless user experience, including secure payment gateways and advanced reporting dashboards. Built with modern web technologies and focus on security and scalability.",
    technologies: [
      "React.js",
      "Vue.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Stripe API",
      "JWT",
    ],
    highlights: [
      "Token-based property sharing system",
      "Secure payment gateway integration",
      "Advanced analytics and reporting",
      "Real-time booking system",
    ],
    impact: [
      "Processed $2M+ in transactions",
      "Achieved 99.9% uptime",
      "Reduced booking processing time by 60%",
    ],
  },
  {
    name: "Broke & Abroad",
    description:
      "Travel platform aimed at inclusivity and accessibility, featuring itinerary planning and cost-saving tools for underserved audiences",
    longDescription:
      "Designed a travel platform aimed at inclusivity and accessibility, featuring itinerary planning and cost-saving tools for underserved audiences. Focused on creating an intuitive user experience that makes travel accessible to everyone.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "RESTful APIs",
      "Tailwind CSS",
    ],
    highlights: [
      "Inclusive and accessible design",
      "Intelligent itinerary planning",
      "Cost-saving recommendations",
      "Multi-language support",
    ],
    impact: [
      "Served 15,000+ active users",
      "Helped users save average of $300 per trip",
      "Achieved 4.8/5 user rating",
    ],
  },
  {
    name: "Data Analytics Dashboard",
    description:
      "Interactive dashboard for financial services client, enabling real-time insights and predictive analytics",
    longDescription:
      "Built an interactive dashboard for a financial services client, enabling real-time insights and predictive analytics. Implemented complex data visualization and real-time data processing capabilities.",
    technologies: [
      "React.js",
      "D3.js",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
      "Chart.js",
    ],
    highlights: [
      "Real-time data visualization",
      "Predictive analytics engine",
      "Interactive charts and graphs",
      "Secure data handling",
    ],
    impact: [
      "Reduced data analysis time by 70%",
      "Enabled real-time decision making",
      "Improved client satisfaction scores",
    ],
  },
  {
    name: "Amoxt",
    description:
      "Dynamic web platform for e-commerce clients, featuring advanced search capabilities and personalized product recommendations",
    longDescription:
      "Delivered a dynamic web platform for e-commerce clients, featuring advanced search capabilities and personalized product recommendations. Built with focus on performance and user experience.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Elasticsearch",
      "PostgreSQL",
      "Redis",
    ],
    highlights: [
      "Advanced search with Elasticsearch",
      "AI-powered product recommendations",
      "High-performance caching",
      "Responsive design",
    ],
    impact: [
      "Increased conversion rate by 28%",
      "Improved search relevance by 45%",
      "Reduced page load time by 50%",
    ],
  },
  {
    name: "XDaysWeb",
    description:
      "Scheduling and resource management tool for small businesses, enabling streamlined workflows and enhanced productivity",
    longDescription:
      "Built a scheduling and resource management tool for small businesses, enabling streamlined workflows and enhanced productivity. Focused on simplicity and ease of use.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.io",
      "Calendar API",
    ],
    highlights: [
      "Real-time scheduling system",
      "Resource management",
      "Team collaboration features",
      "Mobile-responsive design",
    ],
    impact: [
      "Improved scheduling efficiency by 40%",
      "Reduced double-bookings by 95%",
      "Served 500+ small businesses",
    ],
  },
  {
    name: "Internal Inventory System",
    description:
      "Internal tool for managing inventory, automating manual processes, and reducing errors",
    longDescription:
      "Developed an internal tool for managing inventory, automating manual processes, and reducing errors by 30%. Streamlined operations and improved accuracy across the organization.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Barcode API",
      "Reporting Tools",
    ],
    highlights: [
      "Automated inventory tracking",
      "Barcode scanning integration",
      "Real-time inventory updates",
      "Comprehensive reporting",
    ],
    impact: [
      "Reduced errors by 30%",
      "Automated 80% of manual processes",
      "Improved inventory accuracy to 99.5%",
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend Technologies",
    items: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Angular",
      "Svelte",
      "Redux Toolkit",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    category: "Backend Technologies",
    items: [
      "Node.js",
      "Nest.js",
      "Express.js",
      "Laravel",
      "PHP",
      "RESTful APIs",
      "GraphQL",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git/GitHub",
      "CI/CD pipelines",
      "Serverless",
    ],
  },
  {
    category: "Testing",
    items: ["Jest", "Mocha", "Cypress", "Selenium", "Puppeteer"],
  },
  {
    category: "Other Tools",
    items: [
      "Figma",
      "Postman",
      "Prisma",
      "Webflow",
      "Bubble.io",
      "Server Load Testing",
    ],
  },
];

export const certifications = [
  "AWS Certified Solutions Architect - Associate",
  "Microsoft Certified: Azure Developer Associate",
  "Certified Scrum Master (CSM)",
];

export const softSkills = [
  "Project Management",
  "Public Relations",
  "Teamwork",
  "Time Management",
  "Leadership",
  "Effective Communication",
  "Critical Thinking",
];

export const personalInfo = {
  name: "Zaheer Afkar",
  title: "Senior Full-Stack Software Engineer",
  location: "San Antonio, TX",
  email: "zaheerahmed.dev50@gmail.com",
  phone: "(469) 312-6969",
  summary:
    "Experienced Senior Software Engineer with 8 years of expertise in full-stack development, leading teams, and delivering high-quality, scalable solutions. Proficient in modern web technologies, cloud platforms, and agile methodologies. Adept at mentoring teams, driving innovation, and ensuring project success.",
  education: {
    degree: "Bachelor of Computer Science",
    institution: "Princeton University",
    year: "2017",
  },
};

