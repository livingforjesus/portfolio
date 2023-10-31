/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vision's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Vision Onyeaku Portfolio",
    type: "website",
    url: "http://visiononyeaku.com/",
  },
};

//Home Page
const greeting = {
  title: "Vision Onyeaku",
  logo_name: "VisionOnyeaku",
  nickname: "roboboy",
  subTitle:
    "A creative software engineer and problem solver using code to shape the world.",
  resumeLink:
    "https://drive.google.com/file/d/1L2CkfRCPP-B7H2j_NhjblHEGGgoodR_1/view?usp=sharing",
  portfolio_repository: "https://github.com/livingforjesus/portfolio",
  githubProfile: "https://github.com/livingforjesus",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/livingforjesus",
    fontAwesomeIcon: "fab fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/vision-onyeaku-b51a98201/",
    fontAwesomeIcon: "fab fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:visiondaniels32@gmail.com",
    fontAwesomeIcon: "fas fa-envelope",
    backgroundColor: "#D14836",
  },
  {
    name: "Whatsapp",
    link:
      "https://api.whatsapp.com/send?phone=2348112907883&text=Hi%20Vision%2C%20I%20got%20your%20contact%20from%20your%20portfolio.%20I%20would%20like%20to%20talk%20to%20you%20about",
    fontAwesomeIcon: "fab fa-whatsapp",
    backgroundColor: "#669c35",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      image: "full_stack_img",
      skills: [
        "⚡ Design and develop both the frontend and backend components of web applications, ensuring they function seamlessly together.",
        "⚡ Collaborate with cross-functional teams to create user-friendly interfaces and robust server-side systems.",
        "⚡ Troubleshoot and debug software issues across the entire technology stack, from databases to user interfaces, to maintain optimal performance.",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Golang",
          fontAwesomeClassname: "simple-icons:goland",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      image: "cloud_infra",
      skills: [
        "⚡ Configure and manage cloud infrastructure to host and scale web applications, ensuring they are highly available and reliable.",
        "⚡ Work with cloud service providers to optimize resource allocation, cost-effectiveness, and security of the infrastructure.",
        "⚡ Monitor and fine-tune the cloud environment to meet the evolving needs of the applications, implementing scalability and disaster recovery strategies when necessary.",
        "⚡ Using infrastructure as code tools like terraform to orchestrate cloud resources.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Embedded Systems",
      image: "design",
      skills: [
        "⚡ Design and develop the firmware and software for embedded systems and robotics, ensuring seamless integration of hardware and software components.",
        "⚡ Collaborate with interdisciplinary teams to create autonomous robots and embedded devices with specific functionalities.",
        "⚡ Debug and fine-tune embedded systems and robotics software to enhance performance, control, and adaptability.",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "skill-icons:cpp",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Arduino",
          fontAwesomeClassname: "logos:arduino",
          style: {
            color: "#0089D6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National Open University of Nigeria",
      subtitle: "College degree",
      logo_path: "noun.jpeg",
      alt_name: "NOUN",
      duration: "2022 - Present",
      descriptions: [
        "⚡ I am currently studying computer science here",
        "⚡ Taking courses on operating systems, embedded systems, Networks, Data structures etc.",
        "⚡ Created a study group for other course mates studying CS.",
      ],
      website_link: "https://nou.edu.ng/",
    },
    {
      title: "Hands to Hold Academy",
      subtitle: "High school degree",
      logo_path: "hs.jpeg",
      alt_name: "H2H",
      duration: "2016 - 2021",
      descriptions: [
        "⚡ I studied and got my high school degree",
        "⚡ Was involved in robotics club, computer science club and math club",
        "⚡ Was part of the varsity football(soccer) team. Won a local football tournament",
        "⚡ Graduated top of my class and valedictorian",
      ],
      website_link: "#",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Sololearn",
      logo_path: "sololearn_logo.png",
      certificate_link: "https://www.sololearn.com/certificates/CT-1QRC3BJA",
      alt_name: "Sololearn",
      color_code: "#fff",
    },
    {
      title: "Javascript",
      subtitle: "- Sololearn",
      logo_path: "sololearn_logo.png",
      certificate_link: "https://www.sololearn.com/certificates/CT-QRM63JEP",
      alt_name: "Sololearn",
      color_code: "#00000099",
    },
    {
      title: "HTML",
      subtitle: "- Sololearn",
      logo_path: "sololearn_logo.png",
      certificate_link: "https://www.sololearn.com/certificates/CT-SIVONBRX",
      alt_name: "Sololearn",
      color_code: "#0C9D5899",
    },
    {
      title: "CSS",
      subtitle: "- Sololearn",
      logo_path: "sololearn_logo.png",
      certificate_link: "https://www.sololearn.com/certificates/CT-62XSHWZ4",
      alt_name: "Sololearn",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  description:
    "I’ve worked with many startups in a variety of software engineering roles ranging from full-stack development, mobile app development, data science, and more.",
  header_image_path: "experience.svg",
  experiences: [
    {
      title: "Software Engineer",
      company: "Rip Technologies",
      company_url: "http://riptechnologies.com",
      logo_path: "riptech.png",
      duration: "March 2023 - Present",
      location: "Miami Florida, US",
      description: [
        "I am working on a print on demand software that is used by designers to start a print on demand business",
        "Maintained ecommerce accounting software",
        "Upgraded authentication system to use next-auth",
        "Worked on uploads and branding features of the application",
        "Utilized Etsy and Shopify APIs to implement key features of the application",
        "Was key in developing of MVP of their print on demand software",
      ],
      color: "#0879bf",
    },
    {
      title: "Chief Technology Officer",
      company: "Hightable Africa",
      company_url: "https://farmily.africa",
      logo_path: "farmily.svg",
      duration: "July 2022 - May 2023",
      location: "Lagos, Nigeria",
      description: [
        "I helped them create their event management software, restaurant management solution, hotel management solution and payment gateway. I was also involved in fundraising and hiring talent",
        "I was in charge of building and maintaining the mobile and web apps of the company. I also aided in maintaining the servers of the company.",
        "Built the blog entirely from scratch with the deployment model which had a traffic of about 1k page views per day.",
        "Leveraged AWS, Azure, GCP to optimize various aspects of the application. Built the mobile app from scratch which gathered many downloads and had 20% more traction for hightable.",
        "Built entire data infrastructure which powers the deep learning recommendation algorithm which accounts for 70% of Hightable’s revenue.",
        "Helped the company raise $30k pre-seed funding",
        "Helped in hiring new talent and managing our entire infrastructure",
      ],
      color: "#9b1578",
    },
    {
      title: "Software Developer",
      company: "The Chum Effect",
      company_url: "http://thechumeffect.com",
      logo_path: "tce.webp",
      duration: "May 2022 - April 2023",
      location: "Austin, Texas",
      description: [
        "Actively engage in Agile methods such as daily scrum updates to increase team efficiency and communication.",
        "Deploying of website/ web application on AWS (Multi-AZ & Multi-Region) to ensure high availability and low latency.",
        "Created API’s for authentication, payment and more.",
      ],
      color: "#fc1f20",
    },
    {
      title: "Mobile Developer",
      company: "Lectie",
      company_url: "https://www.lectie.com",
      logo_path: "lectie.svg",
      duration: "May 2022 - Sep 2022",
      location: "Queensland, Australia",
      description: [
        "I developed the events management mobile app for consumers.",
        "I  was in charge of building and maintaining the mobile and web apps of the company.",
        "I also aided in maintaining the servers of the company",
        "Built the mobile application using world class technology which brought in over $10,000 income for the startup",
      ],
      color: "#fc1f20",
    },
    {
      title: "Software Engineer",
      company: "Deep Technologies",
      company_url: "https://www.verydeeptech.com",
      logo_path: "deeptech.jpeg",
      duration: "Jan 2020 - April 2022",
      location: "Abuja, Nigeria",
      description: [
        "Started off part time and became fulltime after I graduated from HS. Developed web, mobile applications for various clients",
        "Implemented data caching for server-state in the React-js Application using React-query, resulting in a 30% reduction in time for adding features and debugging.",
        "Developed backend applications using various programming languages",
        "Took charge of clients projects from inception to closure which brought in 30% of the organization's income during my tenure",
        "During this period I worked on multiple web and mobile projects for different clients. I worked on frontend, backend and cloud. I was also in charge of devops. I used various technologies from HTML to react native, AWS etc.",
      ],
      color: "#fc1f20",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Personal Projects",
  description:
    "My projects use a vast range of the latest technology tools. I have a breadth of experience with full-stack web development and data science projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "creating-a-real-time-chat-app-using-firebase-and-solid-js",
      name: "Creating a Real-time Chat App using Firebase and Solid Js",
      createdAt: "2023-01-16T16:26:54Z",
      description:
        "How to create a chat app with firebase and solid.js. Step by step guide to creating the project and the application",
      url:
        "https://visiondaniels32.hashnode.dev/creating-a-real-time-chat-app-using-firebase-and-solid-js",
    },
    {
      id: "backend-web-development-trends-for-2023",
      name: "Backend Web Development Trends for 2023",
      createdAt: "2023-01-17T16:26:54Z",
      description:
        "Analysis, based on past years, of current trends we're noticing in the backend web development space in 2023",
      url:
        "https://visiondaniels32.hashnode.dev/backend-web-development-trends-for-2023",
    },
    {
      id: "backend-web-development-trends-for-2023",
      name: "Step 1: Introduction to Quantum Computing",
      createdAt: "2032-01-19T16:26:54Z",
      description:
        "The first episode in my journey to understanding more about quantum computing, learning and sharing more about it",
      url:
        "https://visiondaniels32.hashnode.dev/episode-0-introduction-to-quantum-computing",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vision_pic.jpeg",
    description: "",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "http://visiondaniels32.hashnode.dev",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "No 3 Kingdom Worship Avenue",
    locality: "Karu",
    country: "NGN",
    region: "FCT",
    postalCode: "385520",
    streetAddress: "Kingdom Worship Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/gUAA5W9fHQ7xSqsMA",
  },
  phoneSection: {
    title: "Contact me on whatsapp",
    subtitle: "+2348112907883",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
