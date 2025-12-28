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
    "https://drive.google.com/file/d/145Va0g5Q-GuhuHs-P4oaXzZKZ12vd9G7/view?usp=sharing",
  portfolio_repository: "https://github.com/livingforjesus/portfolio",
  githubProfile: "https://github.com/livingforjesus",
};

const socialMediaLinks = [
  {
    name: "GitHub",
    link: "https://github.com/livingforjesus",
    fontAwesomeIcon: "fab fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/vision-onyeaku-570b23262/",
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
        "⚡ Design and develop both the frontend and backend components of web applications, ensuring they function seamlessly together",
        "⚡ Collaborate with cross-functional teams to create user-friendly interfaces and robust server-side systems",
        "⚡ Troubleshoot and debug software issues across the entire technology stack, from databases to user interfaces, to maintain optimal performance",
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
      title: "Cloud Infrastructure",
      image: "cloud_infra",
      skills: [
        "⚡ Configure and manage cloud infrastructure to host and scale web applications, ensuring they are highly available and reliable",
        "⚡ Work with cloud service providers to optimize resource allocation, cost-effectiveness, and security of the infrastructure",
        "⚡ Monitor and fine-tune the cloud environment to meet the evolving needs of the applications, implementing scalability and disaster recovery strategies when necessary",
        "⚡ Using infrastructure as code tools like terraform to orchestrate cloud resources",
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
        "⚡ Design and develop the firmware and software for embedded systems and robotics, ensuring seamless integration of hardware and software components",
        "⚡ Collaborate with interdisciplinary teams to create autonomous robots and embedded devices with specific functionalities",
        "⚡ Debug and fine-tune embedded systems and robotics software to enhance performance, control, and adaptability",
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
      title: "Hands to Hold Academy",
      subtitle: "High School Degree (3.95/4.00 - Valedictorian)",
      logo_path: "hs.jpeg",
      alt_name: "H2H",
      duration: "2016 - 2021",
      descriptions: [
        "⚡ Graduated at the top of my class as valedictorian",
        "⚡ Participated in Robotics Club, Computer Science Club, and Math Club",
        "⚡ Was a member of the varsity football team and won a local tournament",
      ],
    },
    {
      title: "National Open University of Nigeria",
      subtitle: "B.Sc in Computer Science",
      logo_path: "noun.png",
      alt_name: "NOUN",
      duration: "2022 - 2025",
      descriptions: [
        "⚡ Graduated with a Second Class Upper Division",
        "⚡ Took courses on Operating Systems, Distributed Systems, Computer Networks, etc",
      ],
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
      location: "Miami, Florida",
      description: [
        "Working in a full-time capacity as a full-stack developer using TypeScript, Next.js, React, AWS, and more",
        "Created an uploads page that mimics Google Drive using AWS Lambda functions to upload files to S3",
        "Created an open source drag selection library",
        "Implementing the pricing logic for the entire product catalog",
        "Implemented a task queuing system to track failed webhook events in Vercel serverless functions",
        "Implemented a branding feature to allow users to add custom branding to their packages",
        "Implemented the storefront UI and e-commerce checkout flows with Stripe",
        "Implemented the backend API integrations to save data and publish listings to Etsy and Shopify",
        "Implemented serverless webhooks to send order data to our order management software",
        "Upgraded authentication system using next-auth",
        "Attend daily standup meetings",
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
        "Created the event management software, restaurant management solution, hotel management solution and payment gateway",
        "Helped with fundraising $30k in pre-seed funding",
        "Conducted interviews to hire talent across the entire organization",
        "Built and maintained the mobile and web applications using TypeScript, GraphQL, and Express",
        "Deployed and maintained the cloud infrastructure using AWS",
        "Built the company blog from scratch that peaked at over 1,000 daily page views",
        "Built the mobile app from scratch which yielded 20% more unique users",
        "Built a data pipeline to power a deep learning recommendation algorithm",
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
        "Deployed the microserviced application on AWS using Docker, multi-AZ and multi-region deployments",
        "Worked on various pages and components in the web application using React and Next.js",
        "Implemented API routes for authentication, payment, and more using TypeScript, Express, PHP, and Contentful",
        "Participated in daily scrum meetings",
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
        "Solely built and maintained the web application using React and Next.js",
        "Solely built and maintained the mobile application using React Native and C#",
        "Aided in maintaining the backend servers of the company using TypeScript",
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
        "Handled client projects myself from inception to closure",
        "Transitioned from part-time to full-time after graduating from high school",
        "Worked on backend API routes using Golang",
        "Built frontend UI from wireframes using React and Next.js",
        "Worked on the mobile app using C# and React Native",
        "Implemented data caching for server-state in the React application using react-query",
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
  contactPageData,
};
