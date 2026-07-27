import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import profile from '../assets/profile.jpg';
import RotatingText from '../components/text.jsx';

const Home = () => {
  const navigate = useNavigate();

  const techStackIcons = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", alt: "Kubernetes" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", alt: "Redis" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", alt: "Flutter" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", alt: "Unity" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
  ];

  return (
    <div className="min-h-screen z-10 font-sans" style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}>
      <main className="flex flex-col items-center justify-center py-20 px-4 text-center space-y-12">
        <div className="relative mb-10 w-40 h-40">
          <div className="absolute inset-0 rounded-full overflow-hidden z-10">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover border-4 rounded-full z-10"
              style={{ borderColor: "#155DFC" }} 
              // # B96DF6
            />
          </div>
        </div>

      <h1
  className="
    text-4xl sm:text-5xl md:text-6xl 
    font-bold leading-tight 
    text-center 
    flex flex-col items-center justify-center 
    w-full px-4
  "
>
  <span className="whitespace-nowrap">
    hi, I'm <span className="text-blue-500">Chinmay</span>
  </span>

  {/* Rotating Text Section */}
  <div
    className="
      relative 
      h-16 sm:h-20 md:h-24 
      overflow-hidden 
      mt-4 
      w-full 
      flex justify-center
    "
  >
    <RotatingText
      texts={["Sr. Software Engineer", "Full-Stack Developer", "Cybersecurity Developer"]}
      mainClassName="
        rotating-text
        inline-flex 
        px-4 sm:px-6 md:px-8  /* ⬆ more padding = thicker blue box */
        bg-blue-600 text-white 
        whitespace-nowrap 
        overflow-hidden 
        py-2 sm:py-2.5 md:py-3 /* ⬆ a bit taller for balance */
        justify-center items-center 
        rounded-xl shadow-md  /* ⬆ subtle glow */
        max-w-fit
        text-2xl sm:text-3xl md:text-4xl /* ⬆ bigger font */
        font-extrabold tracking-wide 
      "
      staggerFrom="last"
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '-120%' }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
      transition={{ type: 'spring', damping: 30, stiffness: 400 }}
      rotationInterval={2000}
    />
  </div>
</h1>

<p
  className="text-lg italic max-w-2xl mb-8 leading-relaxed"
  style={{ color: "var(--link-text)" }}
>
  “ To me, engineering isn’t a skill. It’s a way of thinking. ”
</p>


       <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mb-16">
  <button
    onClick={() => navigate('/contact')}
    className="px-8 py-3 rounded-full font-semibold hover:opacity-80 transition-all duration-300"
    style={{ backgroundColor: "#f8f5f0", color: "#000" }} // same soft/off-white background
  >
    Get in touch
  </button>
  
  <div
    className="flex items-center px-8 py-3 rounded-full font-semibold hover:opacity-80 transition-all duration-300"
    style={{ backgroundColor: "#f8f5f0", color: "#00C853" }} // same background, green text
  >
    <span className="w-3 h-3 rounded-full glow-dot mr-2" style={{ backgroundColor: "#00C853" }}></span>
    Available for collaborations
  </div>
</div>

        <section className="mt-20 max-w-4xl text-left px-4 w-full">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--text-color)" }}>Tech I Use ⚡</h2>
          <div className="relative overflow-hidden w-full">
            <div className="flex gap-6 animate-infinite-scroll">
              {[...techStackIcons, ...techStackIcons].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg p-4 min-w-[80px] hover:opacity-70 transition-colors duration-300"
                  style={{ backgroundColor: "var(--link-bg-hover)" }}
                >
                  <img
                    src={tech.src}
                    alt={tech.alt}
                    className="w-14 h-14 filter grayscale hover:grayscale-0 hover:contrast-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
<section className="mt-20 max-w-4xl text-left px-4">
  <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--text-color)" }}>
    About Me
  </h2>
  <p
    className="text-base sm:text-lg mb-4 leading-relaxed"
    style={{ color: "var(--link-text)" }}
  >
    I’m <span className="font-semibold" style={{ color: "var(--text-color)" }}>
      Chinmay Mhatre
    </span>, a <span className="font-semibold" style={{ color: "var(--text-color)" }}>
      Sr. Software Engineer
    </span> experienced in building scalable web apps, containerized systems, and cybersecurity platforms.
  </p>
  <p
    className="text-base sm:text-lg mb-4 leading-relaxed"
    style={{ color: "var(--link-text)" }}
  >
    From designing dynamic cyber-attack simulations and secure container challenge hosting to orchestrating real-time communication protocols, I focus on building high-performance, robust software.
  </p>
  <p
    className="text-base sm:text-lg mb-4 leading-relaxed"
    style={{ color: "var(--link-text)" }}
  >
    When I’m not coding, you’ll find me leading engineering event groups, configuring local DevOps build flows, or designing user-centric application UI prototypes.
  </p>
  <p className="text-base sm:text-lg mb-4 leading-relaxed">
    Connect with me on{" "}
    <a
      href="https://www.linkedin.com/in/chinmay-mhatre-a361601aa"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline font-medium"
      style={{ color: "#0A66C2" }}
    >
      LinkedIn
    </a>{" "}
    and{" "}
    <a
      href="https://www.instagram.com/chinmay7543"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline font-medium"
      style={{ color: "#E4405F" }}
    >
      Instagram
    </a>
    .
  </p>
 <p
  className="text-sm sm:text-base italic mt-6"
  style={{ color: "var(--muted-text)" }}
>
  Curious about my education, certs, and scholastic achievements?{" "}
  <Link
    to="/more"
    className="hover:underline"
    style={{ color: "var(--text-color)" }}
  >
    Discover my Education & Achievements →
  </Link>
</p>
</section>


        {/* Testimonials removed to exclude previous owner data */}
      </main>

      <style>
        {`
        .glow-dot {
          animation: glowOnOff 1.8s infinite alternate;
        }

        @keyframes glowOnOff {
          from { opacity: 1; filter: brightness(1.5); }
          to { opacity: 0.3; filter: brightness(0.5); }
        }

        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infiniteScroll 25s linear infinite;
        }

        .transition-none {
          transition: none !important;
        }
        `}
      </style>
    </div>
  );
};

export default Home;
