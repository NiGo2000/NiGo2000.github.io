/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nick's Portfolio",
  description:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "NicK Göhlert Portfolio",
    type: "website",
    url: "hhathttp://NiGo2000.github.io",
  },
};

//Home Page
const greeting = {
  title: "Nick Göhlert",
  logo_name: "Nick Göhlert",
  nickname: "NiGo",
  subTitle:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/17kNwSbk8-jAzLQWRXbZ0znvWkwsYeBLv/view?usp=sharing",
  portfolio_repository: "https://github.com/NiGo2000/",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/NiGo2000",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // e-mail: "nick.goehlert@web.de",

  {
    name: "Github",
    link: "https://github.com/NiGo2000",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "E-mail",
    link: "mailto:nick.goehlert@web.de",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis with Matplotlib",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building website using HTML, CSS and JavaScript",
        "⚡ Developing applications using Python, Java and C#",
        "⚡ Creating mobile application with Flutter",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "logos:c-sharp",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    /*
    {
    siteName: "Site Name",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/",
    },
    */
  ],
};

const degrees = {
  degrees: [
    {
      title: "Hochschule Mittweida, University of Applied Sciences",
      subtitle: "B.Sc. Computer Engineering - Software Development ",
      logo_path: "hsmw_logo.jpg",
      alt_name: "Hochschule Mittweida",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Algorithms, IT-Secruity etc.",
        "⚡ Apart from this, I have done courses on Deep Learning and Blockchain.",
      ],
      website_link: "https://www.hs-mittweida.de/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Blockchain",
      subtitle: "- Hochschule Mittweida",
      logo_path: "hsmw_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1CSWPDtL2TcDRO0El7m1x-TpWjyf5Gfbc/view?usp=sharing",
      alt_name: "Hochschule Mittweida",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Hasso-Plattner-Institut",
      logo_path: "hpi_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Ufwpbo25DC-8mjWc66zZdxrTnsuuQ-gU/view?usp=sharing",
      alt_name: "Hasso-Plattner-Institut",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description: "On this page you can see my past internships and jobs.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        /*
        {
          title: "Job",
          company: "Company Name",
          company_url: "url",
          logo_path: "logo.png",
          duration: "June 2020 - PRESENT",
          location: "Germany, Chemnitz",
          description:
            "",
          color: "#0879bf",
        },
        */
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Quality Management Intern",
          company: "Anchor Lamina GmbH",
          company_url: "https://anchor-lamina.de/",
          logo_path: "anchor_lamina_logo.png",
          duration: "Jan 2018 - April 2018",
          location: "Germany, Chemnitz",
          description:
            "I helped to create a database for documents (e.g. contracts). Another task was the input of data (e.g. tool condition) into a database.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Sozialamt Chemnitz",
          company_url: "https://www.chemnitz.de/",
          logo_path: "chemnitz_logo.png",
          duration: "Aug 2017 - Nov 2017",
          location: "Germany, Chemnitz",
          description:
            "My duties were mainly archiving files, creating repair orders, processing medical expenses, and compiling accommodation statistics",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hot nick.png",
    description: "I can be reached via e-mail or mobile phone.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Nixenweg 4, 09224 Chemnitz,  Germany",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/PTGvBNVG7FL9qDDW6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+49 1739357051",
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
