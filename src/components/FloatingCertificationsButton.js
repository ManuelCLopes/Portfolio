import React, { useState } from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    name: 'Architecture Specialist',
    issuer: 'OutSystems',
    date: 'September 2022',
    badgeUrl: 'https://example.com/path-to-architecture-specialist-badge.png',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'AWS',
    date: 'September 2022',
    badgeUrl: 'https://example.com/path-to-aws-cloud-practitioner-badge.png',
  },
  // Add more certifications...
];

const FloatingCertificationsButton = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="fixed bottom-12 left-4 z-50">
      {/* Floating Button */}
      <motion.div
        className="flex flex-col items-center justify-center p-4 bg-blue-600 text-white rounded-full shadow-lg cursor-pointer"
        whileHover={{ scale: 1.1 }} // Button scales up slightly on hover
        onClick={toggleExpanded} // Toggle the expanded state on click
      >
        {/* Certification Icon (Centered Trophy Icon) */}
        <i className="fas fa-trophy text-2xl mb-1"></i> {/* Larger trophy icon */}
      </motion.div>

      {/* Expanded List of Certifications */}
      {expanded && (
        <motion.div
          className="mt-4 p-4 bg-gray-800 rounded-lg shadow-lg"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* List of Certifications */}
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center space-x-4 mb-4">
              {/* Badge Image */}
              <img
                src={cert.badgeUrl}
                alt={`${cert.name} badge`}
                className="w-12 h-12"
              />
              {/* Certification Info */}
              <div>
                <p className="text-lg font-semibold text-blue-400">
                  {cert.name}
                </p>
                <p className="text-gray-400">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default FloatingCertificationsButton;
