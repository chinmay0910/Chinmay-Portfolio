import React from 'react';
import PropTypes from 'prop-types';
import Folder from './Folder.jsx';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Project = ({
  title,
  description,
  color = '#5227FF',
  papers = [],
  status = 'Live',
  github,
  live,
  note,
  bgImage
}) => {

  const [highlight, ...rest] = title.split('–');
  const restTitle = rest.join('–').trim();

  // NEW compact style colors
  const isLive = status.toLowerCase() === "live";

  const dotColor = isLive ? "#00C853" : "#D50000";  // green / red
  const textColor = dotColor;

  return (
    <div
      className="group relative overflow-hidden mb-10 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start justify-between transition-all duration-300 hover:shadow-xl"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      {/* Background Image subtle gradient-masked overlay */}
      {bgImage && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-right pointer-events-none transition-all duration-500 transform group-hover:scale-[1.03] opacity-10 group-hover:opacity-15"
          style={{
            backgroundImage: `url(${bgImage})`,
            maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
          }}
        />
      )}

      {/* LEFT */}
      <div className="w-full md:w-2/3 md:pr-6 relative z-10">
        <h2 className="text-2xl font-bold mb-2">
          <span style={{ color: color, fontWeight: 'bold' }} className="mr-1">
            {highlight.trim()} –
          </span>
          <span style={{ color: 'var(--text-color)' }}>{restTitle}</span>
        </h2>

        <p className="mb-2">{description}</p>

        {/* NEW — Subheading NOTE */}
        {note && (
          <p className="mb-4 text-sm italic" style={{ opacity: 0.7 }}>
            {note}
          </p>
        )}

        <div className="flex flex-wrap gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View project on GitHub"
              className="inline-flex items-center font-medium mb-2 px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition"
              style={{ color: '#0366d6' }}
            >
              <FaGithub className="mr-2" />
              View on GitHub
            </a>
          )}

          {live && (
            Array.isArray(live) ? (
              live.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label || "View live project"}
                  className="inline-flex items-center font-medium mb-2 px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 hover:text-white transition"
                  style={{ color: '#0366d6' }}
                >
                  <FaExternalLinkAlt className="mr-2" />
                  {link.label || "Live Demo"}
                </a>
              ))
            ) : (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live project"
                className="inline-flex items-center font-medium mb-2 px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 hover:text-white transition"
                style={{ color: '#0366d6' }}
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </a>
            )
          )}
        </div>
      </div>

      {/* RIGHT — Compact Badge */}
      <div className="w-full md:w-1/3 flex flex-col items-center md:items-end mt-6 md:mt-0 relative z-10">

        <div
          className="flex items-center px-3 py-1.5 rounded-full font-medium mb-4"
          style={{
            backgroundColor: "#f8f5f0",
            color: textColor,
            fontSize: "0.75rem"
          }}
        >
          {/* Dot */}
          <span
            className="rounded-full mr-2"
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: dotColor,
              boxShadow: `0 0 4px ${dotColor}`
            }}
          ></span>

          {/* Status text with reduced opacity */}
          <span style={{ opacity: 0.6 }}>
            {status}
          </span>
        </div>

        <Folder color={color} items={papers} size={1} />
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string,
  papers: PropTypes.array,
  status: PropTypes.string,
  github: PropTypes.string,
  live: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string.isRequired
      })
    )
  ]),
  note: PropTypes.string,
  bgImage: PropTypes.string
};

export default Project;
