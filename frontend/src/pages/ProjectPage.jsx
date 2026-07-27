import React, { useState } from 'react';
import Project from '../components/project.jsx';

const ProjectPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Cybersecurity", "Web Development", "Mobile Apps", "AI & ML"];

  const projectsData = [
    {
      title: "AegisSec – AI-Powered Red vs. Blue Threat Emulation Platform",
      description: "Designing and developing a large-scale, AI-driven cybersecurity orchestration platform that automates offensive threat emulation and defensive analysis. The offensive (Red Team) module performs autonomous subdomain discovery, identifies vulnerability surfaces, and maps target-specific attack vectors. The defensive (Blue Team) module conducts static application security testing (SAST) and aggregates log streams from network security monitoring tools like Wazuh SIEM and Suricata IDS, using AI reasoning for real-time alert triage.",
      status: "Ongoing",
      color: "#FF5722",
      categories: ["Cybersecurity", "AI & ML"],
      papers: [
        <img key="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-10 h-10" alt="Python / AI Engine" />,
        <img key="2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" alt="React" />,
        <img key="3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node" />,
        <img key="4" src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" className="w-10 h-10" alt="AI / LLM Agents" />,
        <img key="5" src="https://cdn-icons-png.flaticon.com/512/939/939268.png" className="w-10 h-10" alt="Incident Logs / SIEM" />,
      ]
    },
    {
      title: "Kurukshetra Cyberange – India's First Cyberange for Defence",
      description: "Led the engineering team in the design and development of India's first Cyberange dedicated to the Indian Air Force (IAF). The platform incorporates various core components including a custom Capture The Flag (CTF) training dashboard, Red Skill/Blue Skill portals, and a real-time collaborative Red vs. Blue cyber warfare simulator. Integrated MITRE Caldera for orchestrating automated adversary emulation scenarios and Nuclei for running fast, template-driven vulnerability scanning and network exploitation drills.",
      status: "Secure",
      note: "It was set up in a closed air-gapped environment so no live links or source code repositories can be provided.",
      color: "#c936ff",
      categories: ["Cybersecurity"],
      papers: [
        <img key="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" alt="React" />,
        <img key="2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node" />,
        <img key="3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-10 h-10" alt="MongoDB" />,
        <img key="4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-10 h-10" alt="Python" />,
      ]
    },
    {
      title: "CyberSim 3D – Gamified Open-World Cyber Warfare Simulator",
      description: "Designed and built a 3D open-world interactive learning simulator (comparable in structure to large-scale open-world games) dedicated to tactical cyber threat training. The simulation enables active scenario navigation, incident response drill executions, and physical threat containment exercises. The system was successfully deployed and utilized in two active cyber warfare training drills conducted by Indian Defence Organizations.",
      status: "Secure",
      note: "Deployed on secure military networks for national cyber defense exercises; links and repositories are restricted.",
      color: "#37474F",
      categories: ["Cybersecurity", "AI & ML"],
      papers: [
        <img key="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" className="w-10 h-10" alt="Unity" />,
        <img key="2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" className="w-10 h-10" alt="C#" />,
        <img key="3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className="w-10 h-10" alt="C++" />,
        <img key="4" src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" className="w-10 h-10" alt="AI Scenarios" />,
      ]
    },
    {
      title: "CLAWS Portal – Government of India Defense Think-Tank Web Platform",
      description: "Contributed to the full-cycle development, core architectural refactoring, and performance tuning of the official web portal for the Centre for Land Warfare Studies (CLAWS) — an autonomous national security think-tank under the Government of India. Developed on a customized, high-security WordPress core, engineered to distribute military research journals, defense papers, and strategic insights. Optimized database schema indexing and asset delivery to sustain high academic traffic loads while hardening the server interface against cyber threat footprints.",
      status: "Live",
      color: "#df3400",
      categories: ["Web Development"],
      live: [
        { label: "Live Website", url: "https://claws.co.in/" }
      ],
      papers: [
        <img key="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" className="w-10 h-10" alt="WordPress" />,
        <img key="2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="w-10 h-10" alt="PHP" />,
        <img key="3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-10 h-10" alt="MySQL" />,
        <img key="4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-10 h-10" alt="JavaScript" />,
      ]
    },
    {
      title: "W3CS – International Cyber Security Conference Platform",
      description: "Contributed to the design, frontend engineering, and release pipeline of the official platform for the World Cyber Security Summit (W3CS) — a premier global cybersecurity conference. Developed in direct coordination with the co-founder of BSides Bangalore and the founder of W3CS. Engineered the platform to support dynamic speaker onboarding workflows, session scheduling, attendee registrations, and seamless user experiences for thousands of global cybersecurity professionals.",
      status: "Live",
      color: "#00ACC1",
      categories: ["Cybersecurity", "Web Development"],
      live: [
        { label: "Live Website", url: "https://www.w3-cs.com/" }
      ],
      papers: [
        <img key="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" alt="React" />,
        <img key="2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node" />,
        <img key="3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-10 h-10" alt="JavaScript" />,
        <img key="4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-10 h-10" alt="HTML5" />,
      ]
    },
    {
      title: "Myskymate – Travel & Skymating Platform",
      description: "A travel and skymating mobile application developed using Flutter, Node.js, and Firebase. Features a comprehensive admin panel for content moderation, secure backend APIs, and real-time database syncing for Connecting Nearby Travellor with required Peers.",
      status: "Live",
      note: "Successfully published on the Google Play Store.",
      color: "#0288D1",
      categories: ["Mobile Apps"],
      live: [
        { label: "Live Website", url: "https://myskymate.com" },
        { label: "Web App", url: "https://web.myskymate.com/" },
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.myskymate.app&pcampaignid=web_share" }
      ],
      papers: [
        <img key="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className="w-10 h-10" alt="Flutter" />,
        <img key="2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" className="w-10 h-10" alt="Firebase" />,
        <img key="3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node" />,
        <img key="4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" className="w-10 h-10" alt="Android" />,
      ]
    },
    {
      title: "Wazebi – Food Saving Mobile Application",
      description: "A mobile application built using React Native to minimize food waste. Integrates separate dashboards for restaurants and super-admins, utilizes Stripe for secure payment gateways, and supports cart management, live order tracking, and push notifications. Published on the Google Play Store.",
      status: "Live",
      note: "Successfully published on the Google Play Store.",
      color: "#E91E63",
      categories: ["Mobile Apps"],
      live: [
        { label: "Live Website", url: "https://wazebi.com" },
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.wazebii&pli=1" }
      ],
      papers: [
        <img key="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" alt="React Native" />,
        <img key="2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node" />,
        <img key="3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-10 h-10" alt="MongoDB" />,
        <img key="4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" className="w-10 h-10" alt="Android" />,
      ]
    },
    {
      title: "AI WhatsApp Automation – Bulk Messaging & Lead Engagement",
      description: "An AI-powered WhatsApp automation tool that enables sending bulk customized marketing and icebreaking messages to collected leads. Integrated with Meta Cloud APIs for message transmission, Llama LLMs for custom icebreaker generation based on lead profiles, and MongoDB for scalable lead database storage.",
      status: "Live",
      color: "#25D366",
      categories: ["AI & ML", "Web Development"],
      github: "https://github.com/chinmay0910/Whatsapp-ChatBot",
      papers: [
        <img key="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node" />,
        <img key="2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-10 h-10" alt="MongoDB" />,
        <img key="3" src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" className="w-10 h-10" alt="AI / Llama" />,
        <img key="4" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-10 h-10" alt="WhatsApp Meta API" />,
      ]
    },
    {
      title: "PhishingDash – Cybersecurity Awareness & Simulation Platform",
      description: "A cybersecurity testing and awareness platform designed for organizations to run mock phishing campaigns on their employees. Built with Node.js, Express, and MongoDB, featuring full campaign tracking capabilities including real-time email open and link click activity logging.",
      status: "Live",
      color: "#EF5350",
      categories: ["Cybersecurity", "Web Development"],
      github: "https://github.com/chinmay0910/PhishingMails_Admin",
      papers: [
        <img key="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node.js" />,
        <img key="2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-10 h-10" alt="Express" />,
        <img key="3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-10 h-10" alt="MongoDB" />,
        <img key="4" src="https://cdn-icons-png.flaticon.com/512/939/939268.png" className="w-10 h-10" alt="Security Tracking" />,
      ]
    },
    {
      title: "Event Management System – Hackathon Winning Platform",
      description: "A complete event booking and organization platform developed during a 3-day hackathon, securing the first prize. Features real-time bookings, event hosting controls, and user registrations built using the MERN stack.",
      status: "Live",
      color: "#4CAF50",
      categories: ["Web Development"],
      github: "https://github.com/chinmay0910/Event-Management-System",
      live: [
        { label: "Live Website", url: "https://event-management-system-kalki.vercel.app/" }
      ],
      papers: [
        <img key="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" alt="React" />,
        <img key="2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node" />,
        <img key="3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-10 h-10" alt="Express" />,
        <img key="4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-10 h-10" alt="MongoDB" />,
      ]
    },
    {
      title: "Express Delivery Website – Logistics & Real-Time Tracking",
      description: "A logistics and shipping platform featuring end-to-end package tracking, user-friendly interfaces, and secure Razorpay payment gateway integration. Uses Leaflet, Mapbox, and OpenCage APIs for high-accuracy geocoding and real-time mapping.",
      status: "Live",
      color: "#FF9800",
      categories: ["Web Development"],
      github: "https://github.com/chinmay0910/ExpressDelivery",
      live: [
        { label: "Live Website", url: "https://express-delivery.vercel.app/" }
      ],
      papers: [
        <img key="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-10 h-10" alt="HTML5" />,
        <img key="2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-10 h-10" alt="CSS3" />,
        <img key="3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-10 h-10" alt="JavaScript" />,
        <img key="4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node" />,
      ]
    },
    {
      title: "SafeShare – AI Carpooling App with Violence Detection",
      description: "An AI-powered carpooling application designed to enhance passenger safety. Features a real-time violence detection system powered by a supervised Machine Learning model trained on violence image datasets. Integrated with the Google Maps API to track routes and automatically alert the nearest police station in the event of detected violence.",
      status: "Live",
      color: "#3F51B5",
      categories: ["AI & ML", "Mobile Apps"],
      github: "https://github.com/chinmay0910/CarpoolingApp",
      papers: [
        <img key="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-10 h-10" alt="Python / Machine Learning" />,
        <img key="2" src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" className="w-10 h-10" alt="AI / Supervised ML" />,
        <img key="3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" className="w-10 h-10" alt="Android" />,
        <img key="4" src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/map-location-dot.svg" className="w-10 h-10" alt="Google Maps API" style={{ filter: "invert(40%) sepia(80%) saturate(1000%) hue-rotate(180deg)" }} />,
      ]
    },
    {
      title: "Stock Price Prediction – Real-Time Machine Learning App",
      description: "A machine learning dashboard that predicts stock price movements in real-time. Built with Python and Streamlit, utilizing Long Short-Term Memory (LSTM) recurrent neural networks and BeautifulSoup for web scraping current market rates.",
      status: "Live",
      color: "#00BCD4",
      categories: ["AI & ML"],
      github: "https://github.com/chinmay0910/Stock-Price-Prediction",
      papers: [
        <img key="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-10 h-10" alt="Python" />,
        <img key="2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-10 h-10" alt="HTML5" />,
        <img key="3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-10 h-10" alt="CSS3" />,
      ]
    },
    {
      title: "Insurance Presentation Maker – Custom Document Generator",
      description: "A web application designed for insurance agents to auto-generate customized client presentations. Built with HTML, CSS, JavaScript, and Node/Express backend with MongoDB to store client templates and records.",
      status: "Live",
      color: "#9C27B0",
      categories: ["Web Development"],
      github: "https://github.com/chinmay0910/premiumCalculator",
      live: [
        { label: "Live Website", url: "https://premiumcalculator.vercel.app/" }
      ],
      papers: [
        <img key="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-10 h-10" alt="HTML5" />,
        <img key="2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-10 h-10" alt="CSS3" />,
        <img key="3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-10 h-10" alt="JavaScript" />,
        <img key="4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-10 h-10" alt="MongoDB" />,
      ]
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.categories.includes(activeCategory));

  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 py-12"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <div className="w-full max-w-5xl flex items-center justify-between mb-12 flex-wrap gap-4">
        <h1
          className="text-4xl font-extrabold tracking-tight text-left"
          style={{ color: 'var(--text-color)' }}
        >
          My Projects
        </h1>

        {/* Filter Dropdown */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <select
              id="category-select"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="appearance-none bg-gray-900 border border-gray-800 text-white px-6 py-2.5 pr-12 rounded-xl text-sm font-semibold tracking-wide cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-300"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-gray-950 text-white">
                  {category}
                </option>
              ))}
            </select>
            {/* Custom Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl w-full space-y-10">
        {filteredProjects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            status={project.status}
            note={project.note}
            live={project.live}
            github={project.github}
            papers={project.papers}
            color={project.color}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
