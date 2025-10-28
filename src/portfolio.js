/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aniket's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Aniket Angre Portfolio",
    type: "website",
    url: "https://aniketangre95.web.app/home",
  },
};

//Home Page
const greeting = {
  title: "Aniket Angre",
  logo_name: "Aangre",
  nickname: "aangre",
  subTitle:
    "I am a programmer with a passion for developing new algorithms. " +
    "I enjoy exploring machine learning and data science, applying cutting-edge techniques to derive meaningful insights from data. " +
    "My goal is to create efficient, data-driven solutions for complex problems.",
  //resumeLink: "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://aniketangre95.web.app/home",
  githubProfile: "https://github.com/aniketangre",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/aniketangre",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gitlab",
    link: "https://gitlab.com/users/aangre/contributed", //"https://gitlab.com/aangre"
    fontAwesomeIcon: "fa-gitlab", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aniket-angre/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:aniketangre.edu@gmail.com",
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
        // "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        // "⚡ Experience of working with Computer Vision and NLP projects",
        // "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
        // "⚡ Creating AI-driven solutions for lightweight structural design and healthcare innovations",
        // "⚡ Experienced in applying machine learning and deep learning methodologies to solve complex problems",
        // "⚡ Proficient in crafting high-quality datasets, enhancing them through augmentation, extracting valuable insights via data mining, and presenting findings through impactful visualizations",
        "⚡ Designing AI-powered solutions for lightweight structural design and healthcare innovations",
        "⚡ Applying machine learning and deep learning to tackle complex engineering and biomedical challenges",
        "⚡ Developing and refining high-quality datasets, leveraging augmentation to boost model performance",
        "⚡ Creating impactful visualizations to communicate results with clarity and precision",
        "⚡ Integrating AI workflows seamlessly into design and simulation pipelines for enhanced efficiency",
      ],
      softwareSkills: [
        
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "R",
          imageSrc: "r_logo.png",
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
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          imageSrc: "pytorch_logo.png",
          // fontAwesomeClassname: "logos-pytorch",
          // style: {
          //   backgroundColor: "transparent",
          // },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_red_logo.png",
        },
      ],
    },
    {
      title: "Scientific Computing",
      fileName: "ScientificComputingImg",
      skills: [
        "⚡ Designing advanced algorithms to create efficient, high-performance solutions for industrial applications",
        "⚡ Skilled in numerical simulations and computational optimization",
        "⚡ Experienced in topology optimization and designing lightweight, high-strength structures",
        "⚡ Expertise in mathematical modeling, scientific computing, and data-driven analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Matlab",
          imageSrc: "matlab_logo.svg",
        },
        {
          skillName: "R",
          imageSrc: "r_logo.png",
        },
        {
          skillName: "Altair",
          imageSrc: "hyperworks_logo.svg",
        },
        {
          skillName: "Ansys",
          imageSrc: "ansys_logo.png",
        },
        {
          skillName: "Synera",
          imageSrc: "synera_logo_2.png",
        },
      ],
    },
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing AddIn packages in C# and .NET to automate bioinspired design workflows and integrate natural principles into engineering structures",
        "⚡ Building robust APIs with FastAPI for efficient data exchange and system integration",
        "⚡ Creating intuitive visual interfaces for streamlined data processing and user interaction",
        "⚡ Integrating databases into WPF and ASP.NET Core Razor Pages applications for seamless data management and retrieval",
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
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "C#",
          imageSrc: "c_sharp_logo.png",
        },
        {
          skillName: ".NET",
          imageSrc: "dot_net_logo2.png",
        },
        {
          skillName: "ASP.NET Core",
          imageSrc: "aspnetcore_logo.png",
        },
        {
          skillName: "FastAPI",
          imageSrc: "fastapi_logo.png",
        },
        {
          skillName: "SQLServer",
          imageSrc: "sql_server_logo.png",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
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
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        // {
        //   skillName: "JavaScript",
        //   fontAwesomeClassname: "simple-icons:javascript",
        //   style: {
        //     backgroundColor: "#000000",
        //     color: "#F7DF1E",
        //   },
        // },
        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "simple-icons:react",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Stuttgart",
      subtitle: "M.S. in Computational Mechanics",
      logo_path: "uni_stuttgart_logo.svg",
      alt_name: "Uni-Stuttgart",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ Grade: 1.7 / 4.0 (Best - 1.0)",
        "⚡ Simulation of advanced engineering problems using modeling techniques and computer implementation",
        "⚡ Composites Modeling, Coupled Problems, Machine Learning, Image & Data Processing",
      ],
      website_link: "https://www.uni-stuttgart.de/",
    },
    {
      title: "Sardar Patel College of Engineering",
      subtitle: "B.Tech. in Mechanical Engineering",
      logo_path: "spce_logo.png",
      alt_name: "SPCE",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ Grade: 9.44 / 10.0",
        "⚡ Machine Design, CAD/CAE, Strength of Materials, Numerical Computation",
        "⚡ Engineer Trainee | Dahanu Thermal Power Station with focus on Thermodynamics",
      ],
      website_link: "https://www.spce.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title:
        "Tensorflow Developer Specialization : Introduction to Tensorflow for ML and DL",
      subtitle: "- Lawrence Moroney",
      logo_path: "deeplearning_ai_red_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRUAHRAYFWSJ",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title:
        "Tensorflow Developer Specialization : Convolutional Neural Networks in TensorFlow",
      subtitle: "- Lawrence Moroney",
      logo_path: "deeplearning_ai_red_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/N3FAGTFBPX3U",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Deep Learning Specialization : Convolutional Neural Networks",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_red_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/FRYT7VKA36QJ",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title:
        "Deep Learning Specialization : Hyperparam Tuning, Regularization, Optimization",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_red_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NVJJTMAE7AZL",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title:
        "Deep Learning Specialization : Structuring Machine Learning Projects",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_red_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/YH5DK2VSMMYJ",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Deep Learning Specialization : Neural Networks and Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_red_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/KKGLMFHGH68S",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "IBM Data Science Specialization : What is Data Science",
      subtitle: "- Rav Ahuja",
      logo_path: "ibm_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/DK4AJM3MSNUY",
      alt_name: "IBM",
      color_code: "#00000099",
    },
    {
      title: "IBM Data Science Specialization : Tools for Data Science",
      subtitle: "- Lawrence Moroney",
      logo_path: "ibm_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/Z6V6NKBPEQWQ",
      alt_name: "IBM",
      color_code: "#00000099",
    },
    {
      title: "IBM Data Science Specialization : Data Science Methodology",
      subtitle: "- AlexAklson, Ph.D",
      logo_path: "ibm_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/46ES6CK8TD6K",
      alt_name: "IBM",
      color_code: "#00000099",
    },
    {
      title:
        "IBM Data Science Specialization : Python for Data Science, AI and Development",
      subtitle: "- Joseph Santarcangelo",
      logo_path: "ibm_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NMGCD4E7KZJS",
      alt_name: "IBM",
      color_code: "#00000099",
    },
    {
      title: "IBM Data Science Specialization : Database and SQL with Python",
      subtitle: "- Rav Ahuja",
      logo_path: "ibm_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/DBBHM65G9WL2",
      alt_name: "IBM",
      color_code: "#00000099",
    },
    {
      title:
        "IBM AI Engineering Professional Certificate : Machine Learning with Python",
      subtitle: "- Joseph Santarcangelo",
      logo_path: "ibm_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/E7QXF4K4BDPJ",
      alt_name: "IBM",
      color_code: "#00000099",
    },
    {
      title:
        "IBM AI Engineering Professional Certificate : Deep Learning and Neural Networks with Keras",
      subtitle: "- AlexAklson, Ph.D",
      logo_path: "ibm_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/GPSYAVT9NA7F",
      alt_name: "IBM",
      color_code: "#00000099",
    },
    {
      title:
        "IBM AI Engineering Professional Certificate : Deep Learning and Neural Networks with Keras",
      subtitle: "- AlexAklson, Ph.D",
      logo_path: "ibm_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/GPSYAVT9NA7F",
      alt_name: "IBM",
      color_code: "#00000099",
    },
    {
      title: "Python for Data Science and Machine Learning Bootcamp",
      subtitle: "- Jose Portilla",
      logo_path: "udemy_logo.svg",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-e1a9e32f-f153-4ec8-aabf-6ccf49978b3a.jpg?v=1618265569000",
      alt_name: "Udemy",
      color_code: "#00000099",
    },
    {
      title: "Python for Beginners",
      subtitle: "- Bharath Thippireddy",
      logo_path: "udemy_logo.svg",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-E7RJHF46.jpg?v=1574182805000",
      alt_name: "Udemy",
      color_code: "#00000099",
    },
    {
      title: "Master MATLAB through Guided Problem Solving",
      subtitle: "- Mike X Cohen",
      logo_path: "udemy_logo.svg",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-AK2DG5ZA.jpg?v=1567717648000",
      alt_name: "Udemy",
      color_code: "#00000099",
    },
    {
      title: "C++ Beginners",
      subtitle: "- John Purcell",
      logo_path: "udemy_logo.svg",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-KUNLXH1W.jpg?v=1571679195000",
      alt_name: "Udemy",
      color_code: "#00000099",
    },
    {
      title: "Design Thinking for Innovation",
      subtitle: "- Jeanne M. Liedtka",
      logo_path: "darden_uni_verginia_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/KQSUN6Z9B8KJ",
      alt_name: "Udemy",
      color_code: "#00000099",
    },
  ],

  projectCertifications : [
    {
      title: "Deep Learning with PyTorch : Neural Style Transfer",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/LMZEHKJLQWLN",
      alt_name: "Coursera",
      color_code: "#00000099",
    },
    {
      title: "Linear Regression with Numpy and Python",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/XUCUXGDP33UA",
      alt_name: "Coursera",
      color_code: "#00000099",
    },
    {
      title: "Basic Image Classification with TensorFlow",
      subtitle: "- Amit Yadav",
      logo_path: "coursera_projectnetwork_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/XUCUXGDP33UA",
      alt_name: "Coursera Project Network",
      color_code: "#00000099",
    },
    {
      title: "Transfer Learning for NLP with TensorFlow Hub",
      subtitle: "- Snehan Kekre",
      logo_path: "coursera_projectnetwork_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/9JEQHBR3HY72",
      alt_name: "Coursera Project Network",
      color_code: "#00000099",
    },
    {
      title: "Tweet Emotion Recognition with TensorFlow",
      subtitle: "- Amit Yadav",
      logo_path: "coursera_projectnetwork_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/WBZJF3YQRU7K",
      alt_name: "Coursera Project Network",
      color_code: "#00000099",
    },
    {
      title: "Hyperparameter Tuning with Keras Tuner",
      subtitle: "- Amit Yadav",
      logo_path: "coursera_projectnetwork_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/4QDCHU5PNF5U",
      alt_name: "Coursera Project Network",
      color_code: "#00000099",
    },
    {
      title: "Deep Learning with PyTorch : Image Segmentation",
      subtitle: "- Parth Dhameliya",
      logo_path: "coursera_projectnetwork_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/FK4Y6SDZCHAM",
      alt_name: "Coursera Project Network",
      color_code: "#00000099",
    },
    {
      title: "Deep Learning with PyTorch : Object Localization",
      subtitle: "- Parth Dhameliya",
      logo_path: "coursera_projectnetwork_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/L6K3WW646TTJ",
      alt_name: "Coursera Project Network",
      color_code: "#00000099",
    },
    {
      title: "Aerial Image Segmentation with PyTorch",
      subtitle: "- Parth Dhameliya",
      logo_path: "coursera_projectnetwork_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/FV7TGUQFRHT4",
      alt_name: "Coursera Project Network",
      color_code: "#00000099",
    },
    {
      title: "Visualizing Filters of a CNN using TensorFlow",
      subtitle: "- Amit Yadav",
      logo_path: "coursera_projectnetwork_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/87SCX7Q948LQ",
      alt_name: "Coursera Project Network",
      color_code: "#00000099",
    },
    {
      title: "Creating Multi Task Models With Keras",
      subtitle: "- Amit Yadav",
      logo_path: "coursera_projectnetwork_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/UAWHQXEUCCKY",
      alt_name: "Coursera Project Network",
      color_code: "#00000099",
    },
    {
      title: "Object Localization with TensorFlow",
      subtitle: "- Amit Yadav",
      logo_path: "coursera_projectnetwork_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/A2P5FVHLSL4F",
      alt_name: "Coursera Project Network",
      color_code: "#00000099",
    },
  ]
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description: 
    "I have worked professionally as a Software Developer and Data Scientist, delivering solutions across engineering and AI-driven applications. My experience includes internships focused on data processing and application development, as well as serving as a Research Assistant at the university, contributing to projects in computational engineering, machine learning, and scientific computing.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Developer / Data Scientist",
          company: "Alfred Wegener Institute",
          company_url: "https://www.awi.de/en/",
          logo_path: "awi_logo3.png",
          duration: "August 2022 - Present",
          location: "Bremerhaven, Germany",
          description: [
            "Contributed to the development of KIKI, an ML-based design tool for the individualisation of additively manufactured hip endoprostheses, developed using Python and leveraging Neural Networks (NNs) and Extremely Randomised Trees (Extra-Trees) to accelerate design cycles and enhance patient-specific solutions",
            "Leading WOBIS project to develop an AddIn package for Synera using C# and .NET, enabling automated bioinspired design workflows and seamless integration of natural principles into engineering structures",
          ],
          color: "#2596BE",
        },
        {
          title: "Computational Engineer",
          company: "Alfred Wegener Institute",
          company_url: "https://www.awi.de/en/",
          logo_path: "awi_logo3.png",
          duration: "December 2021 - July 2022",
          location: "Bremerhaven, Germany",
          description: [
            "Designed optimized endless fibre additive structures as part of the FIONA project to enhance lightweight component performance",
            "Contributed to the development of a multi-layer continuous carbon fiber pattern optimization algorithm with spline-based path planning",
          ],
          color: "#2596BE",
        },
        {
          title: "Master Thesis - Numerical Modeling",
          company: "Bosch Engineering GmbH",
          company_url: "https://www.bosch-engineering.com/",
          logo_path: "bosch_logo.png",
          duration: "Jan 2021 - Aug 2021",
          location: "Schwieberdingen, Germany",
          description: [
            "Developed ML models to accurately predict fuel mass sprayed by Bosch injectors in an optical chamber, enhancing combustion analysis and injector performance evaluation",
            "Developed an FDM-based numerical model in MATLAB to simulate fuel wallfilm evaporation",
          ],
          color: "#2596BE",
        },
        {
          title: "Graduate Engineering Trainee",
          company: "VA TECH WABAG LTD",
          company_url: "https://www.uni-stuttgart.de/en/",
          logo_path: "va_tech_wabag_logo.png",
          duration: "Jul 2017 - Sep 2018",
          location: "Stuttgart, Germany",
          description: [
            "Executed project work plans in alignment with Standard Industrial Processes (SIP), ensuring compliance and operational efficiency",
            "Conducted vendor evaluation and selection based on equipment cost, installation feasibility, and warranty provisions to optimize value and reliability",
          ],
          color: "#2596BE",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Intern - Data Processing",
          company: "Bosch Engineering GmbH",
          company_url: "https://www.bosch-engineering.com/",
          logo_path: "bosch_logo.png",
          duration: "July 2020 - Dec 2020",
          location: "Schwieberdingen, Germany",
          description: [
            "Developed MATLAB applications to process and analyze high-speed camera data for experimental investigations",
            "Created CFD models in ANSYS FLUENT to simulate heat transfer within a specialized testing setup, supporting performance optimization and design validation",
          ],
          color: "#0071C5",
        },
        {
          title: "Research Assistant",
          company: "University of Stuttgart",
          company_url: "https://www.uni-stuttgart.de/en/",
          logo_path: "uni_stuttgart_logo.svg",
          duration: "Nov 2019 - Mar 2020",
          location: "Stuttgart, Germany",
          description: [
            "Implemented Finite Element (FEM) and Finite Volume Methods (FVM) in C++ to simulate complex groundwater flow dynamics",
          ],
          color: "#2596BE",
        },
        {
          title: "Research Assistant",
          company: "University of Stuttgart",
          company_url: "https://www.uni-stuttgart.de/en/",
          logo_path: "uni_stuttgart_logo.svg",
          duration: "Apr 2019 - Dec 2019",
          location: "Stuttgart, Germany",
          description: [
            "Optimized routing of electrical wiring harnesses and fluid pipelines for a research vehicle, enhancing efficiency and spatial integration",
            "Designed and assembled mechanical components using CATIA V5, ensuring precision and manufacturability",
          ],
          color: "#2596BE",
        },
      ],
    },
    // ,
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I work on data science projects and enjoy transforming them into powerful desktop applications. My projects combine advanced analytical methods with modern software tools, creating intuitive and efficient solutions that bring data-driven insights directly to users’ fingertips.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles and Research.",
  avatar_image_path: "projects_image.svg",
};

const githubProjectsHeader = {
  title: "Github Projects",
  description: "Some of my hands on projects.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "kiki",
      name: "Development of an ML-Based Design Tool for Predicting Optimal Lattice Configurations for Patient-Specific Endoprostheses",
      createdAt: "2025-10-08T00:00:00Z",
      description: "Project funded by AI Center for Health Care",
      //url: "https://www.bremen-research.de/aktivitaeten/kuenstliche-intelligenz/ai-center/kiki",
      url: "https://doi.org/10.1177/09544062251367618",
    },
    {
      id: "fiona",
      name: "Multi-layer continuous carbon fiber pattern optimization and a spline based path planning interpretation",
      createdAt: "2025-15-02T00:00:00Z",
      description: "Project funded by German Federal Ministry for Economic Affairs and Climate Actions (BMWK)",
      url: "https://www.sciencedirect.com/science/article/pii/S1526612525000441",
    },
    {
      id: "kiki-conference",
      name: "Helmholtz AI Conference - Poster Presentation",
      createdAt: "2024-13-06T00:00:00Z",
      description: "Project funded by AI Center for Health Care",
      url: "https://www.awi.de/fileadmin/user_upload/AWI/Forschung/Besondere_Gruppen/Bionik_Leichtbau/Dateien/2024_AI_Conference_PosterHelmholtzAI.pdf",
    },
    {
      id: "kiki-symposium",
      name: "Bremer Symposium AI in Health - Flash Talk and Poster Presentation",
      createdAt: "2024-13-06T00:00:00Z",
      description: "Project funded by AI Center for Health Care",
      url: "https://www.bremen-research.de/aktivitaeten/kuenstliche-intelligenz/ai-center/kiki",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_aniket.png",
    description:
      "I’m always open to connecting and exploring new opportunities. Feel free to reach out if you’d like to discuss ideas, collaborate on projects, or simply have a conversation.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    // link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bussestraße 27, 27570 Bremerhaven",
    locality: "Bremerhaven",
    country: "Germany",
    region: "Bremen",
    postalCode: "27568",
    streetAddress: "Bussestrasse 27",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/ewYVHTGb6xHrfuMi9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
  githubProjectsHeader,
  publications,
  contactPageData,
};
