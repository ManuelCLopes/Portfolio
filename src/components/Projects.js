import React from 'react';
import { motion } from 'framer-motion';
import Tippy from '@tippyjs/react'; // Tooltip library
import 'tippy.js/dist/tippy.css'; // Tooltip styles

const projects = [
  {
    name: 'API Service',
    description: 'A RESTful API built with Node.js and Express.',
    github: 'https://github.com/your-repo',
    technologies: ['nodejs', 'express', 'mongodb', 'docker'],
  },
  {
    name: 'Authentication System',
    description: 'A user authentication system with JWT and OAuth.',
    github: 'https://github.com/your-repo',
    technologies: ['jwt', 'oauth', 'react', 'postgresql'],
  },
];

const techLogos = {
  nodejs: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/node-dot-js.svg', label: 'Node.js' },
  express: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/express.svg', label: 'Express' },
  mongodb: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/mongodb.svg', label: 'MongoDB' },
  jwt: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/jsonwebtokens.svg', label: 'JWT' },
  oauth: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/oauth.svg', label: 'OAuth' },
  react: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/react.svg', label: 'React' },
  docker: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/docker.svg', label: 'Docker' },
  postgresql: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/postgresql.svg', label: 'PostgreSQL' },
};

const Projects = () => {
  return (
    <div className="p-12 bg-gray-900 text-white">
      <h2 className="text-5xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            whileHover={{ scale: 1.05 }}
            className="relative p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-blue-400"
          >
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex space-x-4 mb-4">
              {project.technologies.map((tech) => (
                <Tippy key={tech} content={techLogos[tech].label}>
                  <img
                    src={techLogos[tech].url}
                    alt={techLogos[tech].label}
                    className="w-8 h-8 hover:scale-110 transition-transform"
                  />
                </Tippy>
              ))}
            </div>
            <a
              href={project.github}
              className="text-blue-400 hover:text-blue-600 transition-colors"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
