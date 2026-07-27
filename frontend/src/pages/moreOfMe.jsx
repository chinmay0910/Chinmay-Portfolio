import React from "react";

function MoreOfMe() {
  const galleryItems = [
    {
      title: "Volunteered CTF event held in BSides 2026",
      description: "Assisted in coordinating, building, and executing the Capture The Flag (CTF) challenges for BSides Bangalore 2026.",
      src: "/bsides.jpeg"
    },
    {
      title: "First Prize — Team Kalki",
      description: "Designed and developed an award-winning event management system during a 3-day hackathon, securing the first prize.",
      src: "/kalki-price.jpg"
    },
    {
      title: "Rajasthan Police Hackathon Finalist",
      description: "Selected as national finalists at the Rajasthan Police Hackathon for designing predictive intelligence software.",
      src: "/rajasthan-police.jpg"
    },
    {
      title: "AI Made Me Rich Hackathon — 1st Prize Winners",
      description: "Won the first prize at the national-level AI hackathon for building custom financial intelligence dashboards.",
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section
      className="min-h-screen px-6 py-12 font-sans transition-colors duration-500 flex justify-center"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="max-w-5xl w-full text-left">
        <h1
          className="text-4xl font-extrabold mb-4 tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Education & Achievements
        </h1>

        <p
          className="text-lg mb-12 leading-relaxed"
          style={{ color: "var(--text-color)", opacity: 0.8 }}
        >
          An overview of my academic background, technical training, leadership positions, and scholastic honors.
        </p>

        <div className="space-y-12">

          {/* --- Section 1: Education --- */}
          <article
            className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              backgroundColor: "var(--button-bg)",
              border: "1px solid var(--link-bg-hover)",
              color: "var(--text-color)",
            }}
          >
            <h2
              className="text-2xl font-bold mb-6 flex items-center gap-2"
              style={{ color: "var(--text-color)" }}
            >
              <span>🎓</span> Education
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg" style={{ color: "var(--text-color)" }}>
                  Bachelor of Computer Engineering
                </h3>
                <p className="text-sm font-medium" style={{ opacity: 0.9 }}>Vidyalankar Institute of Technology, Mumbai</p>
                <p className="text-xs mt-1" style={{ opacity: 0.75 }}>2022 – 2025 · CGPA: 9.87</p>
              </div>

              <div className="border-l-2 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg" style={{ color: "var(--text-color)" }}>
                  Diploma in Civil Engineering
                </h3>
                <p className="text-sm font-medium" style={{ opacity: 0.9 }}>Government Polytechnic Mumbai</p>
                <p className="text-xs mt-1" style={{ opacity: 0.75 }}>2019 – 2022 · Percentage: 93.13%</p>
              </div>

              <div className="border-l-2 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg" style={{ color: "var(--text-color)" }}>
                  SSC (Secondary School Certificate)
                </h3>
                <p className="text-sm font-medium" style={{ opacity: 0.9 }}>Rita Memorial School · Maharashtra Board</p>
                <p className="text-xs mt-1" style={{ opacity: 0.75 }}>2018 – 2019 · Percentage: 87.60%</p>
              </div>
            </div>
          </article>

          {/* --- Section 2: Positions of Responsibility --- */}
          <article
            className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              backgroundColor: "var(--button-bg)",
              border: "1px solid var(--link-bg-hover)",
              color: "var(--text-color)",
            }}
          >
            <h2
              className="text-2xl font-bold mb-6 flex items-center gap-2"
              style={{ color: "var(--text-color)" }}
            >
              <span>👥</span> Positions of Responsibility
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-purple-500 pl-4">
                <h3 className="font-semibold text-lg" style={{ color: "var(--text-color)" }}>
                  Web-Head
                </h3>
                <p className="text-sm font-medium" style={{ opacity: 0.9 }}>CESAVIT — Vidyalankar Institute of Technology</p>
                <p className="text-xs mt-1" style={{ opacity: 0.75 }}>July 2023</p>
                <p className="mt-2 text-sm" style={{ opacity: 0.85 }}>
                  Led a web team of 4 developers to build, enhance, and optimize the society website. Collaborated on planning and organizing campus technical events.
                </p>
              </div>

              <div className="border-l-2 border-purple-500 pl-4">
                <h3 className="font-semibold text-lg" style={{ color: "var(--text-color)" }}>
                  Head
                </h3>
                <p className="text-sm font-medium" style={{ opacity: 0.9 }}>Nirmaan — Government Polytechnic Mumbai</p>
                <p className="text-xs mt-1" style={{ opacity: 0.75 }}>January 2021</p>
                <p className="mt-2 text-sm" style={{ opacity: 0.85 }}>
                  Led a college event team of 18 students to successfully organize, market, and execute various inter-college and intra-college events.
                </p>
              </div>
            </div>
          </article>

          {/* --- Section 3: Training & Certifications --- */}
          <article
            className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              backgroundColor: "var(--button-bg)",
              border: "1px solid var(--link-bg-hover)",
              color: "var(--text-color)",
            }}
          >
            <h2
              className="text-2xl font-bold mb-6 flex items-center gap-2"
              style={{ color: "var(--text-color)" }}
            >
              <span>📜</span> Training & Certifications
            </h2>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-2">
                <span className="text-blue-500">✔</span>
                <div>
                  <span className="font-semibold" style={{ color: "var(--text-color)" }}>AWS Academy Cloud Foundations</span>
                  <span className="mx-2 text-xs">·</span>
                  <span className="text-xs opacity-75">AWS Academy [March 2024]</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">✔</span>
                <div>
                  <span className="font-semibold" style={{ color: "var(--text-color)" }}>Prompt Engineering</span>
                  <span className="mx-2 text-xs">·</span>
                  <span className="text-xs opacity-75">Vanderbilt University via Coursera [October 2023]</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">✔</span>
                <div>
                  <span className="font-semibold" style={{ color: "var(--text-color)" }}>Agile Scrum Master (ASM®)</span>
                  <span className="mx-2 text-xs">·</span>
                  <span className="text-xs opacity-75">SimpliLearn [October 2023]</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">✔</span>
                <div>
                  <span className="font-semibold" style={{ color: "var(--text-color)" }}>Python for Data Science</span>
                  <span className="mx-2 text-xs">·</span>
                  <span className="text-xs opacity-75">Infosys [April 2023]</span>
                </div>
              </li>
            </ul>
          </article>

          {/* --- Section 4: Scholastic Achievements --- */}
          <article
            className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              backgroundColor: "var(--button-bg)",
              border: "1px solid var(--link-bg-hover)",
              color: "var(--text-color)",
            }}
          >
            <h2
              className="text-2xl font-bold mb-6 flex items-center gap-2"
              style={{ color: "var(--text-color)" }}
            >
              <span>🏆</span> Scholastic Achievements
            </h2>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">🥇</span>
                <div>
                  <span className="font-semibold" style={{ color: "var(--text-color)" }}>First Prize — AI Made Me Rich Hackathon</span>
                  <p className="text-xs opacity-75 mt-0.5">VIT, Mumbai [April 2024]</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">🥇</span>
                <div>
                  <span className="font-semibold" style={{ color: "var(--text-color)" }}>First Prize — Fr. Agnel College of Engineering Hackathon</span>
                  <p className="text-xs opacity-75 mt-0.5">Navi Mumbai [March 2024]</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">⭐</span>
                <div>
                  <span className="font-semibold" style={{ color: "var(--text-color)" }}>Finalist — Rajasthan Police Hackathon</span>
                  <p className="text-xs opacity-75 mt-0.5">Jaipur [January 2024]</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">🥇</span>
                <div>
                  <span className="font-semibold" style={{ color: "var(--text-color)" }}>First Prize — Tech-Talk Competition</span>
                  <p className="text-xs opacity-75 mt-0.5">Universal College of Engineering [August 2021]</p>
                </div>
              </li>
            </ul>
          </article>

          {/* --- Section 5: Gallery / Media --- */}
          <article
            className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              backgroundColor: "var(--button-bg)",
              border: "1px solid var(--link-bg-hover)",
              color: "var(--text-color)",
            }}
          >
            <h2
              className="text-2xl font-bold mb-6 flex items-center gap-2"
              style={{ color: "var(--text-color)" }}
            >
              <span>🖼️</span> Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {galleryItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                  style={{
                    backgroundColor: "var(--bg-color)",
                    border: "1px solid var(--link-bg-hover)",
                  }}
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-lg mb-2" style={{ color: "var(--text-color)" }}>
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-color)", opacity: 0.8 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default MoreOfMe;
