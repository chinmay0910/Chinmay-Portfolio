import React from "react";
import Experience from "../components/exp.jsx";

const ExperiencePage = () => {
  return (
    <section
      className="py-16 px-4 flex justify-center"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="w-full max-w-5xl">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-12">
          Professional Experience
        </h2>

        {/* ===== HACKTIFY CYBERSECURITY ===== */}
        <Experience
          title={
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛡️</span>
              <span
                className="font-bold tracking-wide"
                style={{ color: "#3B82F6" }}
              >
                Hacktify Cybersecurity
              </span>
            </div>
          }
          role="Software Engineer"
          timeline="Mar 2024 – Present · Mumbai"
          description={
            <>
              Working as a Software Engineer developing secure, scalable web systems and threat-simulation products.
              <br /><br />
              Key Achievements & Focus:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>AegisSec (AI Red vs. Blue Platform)</strong> — Lead developer for an automated threat emulation platform, utilizing Python and AI agents to scan subdomains, map vulnerability surfaces, and correlate SIEM alerts (Wazuh/Suricata) via LLMs.</li>
                <li><strong>Kurukshetra Cyberange</strong> — Led the engineering team in developing India's first Cyberange for the Indian Air Force (IAF), integrating custom CTF training modules, Red/Blue skill portals, and secure air-gapped simulations.</li>
                <li><strong>CyberSim 3D (Tactical Simulator)</strong> — Designed and built an open-world 3D cyber warfare simulator (similar to GTA mechanics) deployed in two active cyber exercises conducted by Indian Defence Organizations.</li>
                <li><strong>AI WhatsApp Automation</strong> — Engineered custom bulk WhatsApp campaigns using Meta Cloud APIs and Llama LLM models for automated context-aware lead icebreaking and dynamic messaging.</li>
              </ul>
            </>
          }
        />

        {/* ===== VIT INTERNSHIP ===== */}
        <Experience
          title={
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              <span
                className="font-bold tracking-wide"
                style={{ color: "#EF4444" }}
              >
                Vidyalankar Institute of Technology
              </span>
            </div>
          }
          role="Web Development Intern"
          timeline="Dec 2023 – Feb 2024 · Mumbai"
          description={
            <>
              Gained hands-on experience in web portal design, internal tool development, and hardware interfaces.
              <br /><br />
              Key Achievements & Focus:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Designed and developed an automated announcement dashboard for campus communication.</li>
                <li>Gained practical deployment experience with Raspberry Pi local hosting and general web server administration.</li>
              </ul>
            </>
          }
        />

      </div>
    </section>
  );
};

export default ExperiencePage;
