import React from 'react';

const education = [
  {
    institution: 'Instituto Politécnico de Viseu',
    degree: 'Master of Computer Science and Engineering (17/20)',
    date: 'October 2021 - April 2024',
    details: 'Focus: Information Systems, research in real-time monitoring and IoT frameworks.',
  },
  {
    institution: 'Instituto Politécnico de Viseu',
    degree: 'Bachelor of Computer Science and Engineering (14/20)',
    date: 'September 2017 - July 2020',
    details: 'Focus on software engineering and distributed systems.',
  },
];

const Education = () => {
  return (
    <div className="p-12 bg-gray-800 text-white">
      <h2 className="text-5xl font-bold mb-8 text-center">Education</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {education.map((edu) => (
          <div key={edu.institution} className="border-b border-gray-700 pb-4">
            <h3 className="text-2xl font-semibold">{edu.degree}</h3>
            <p className="text-xl text-gray-400">{edu.institution}</p>
            <p className="text-sm text-gray-500">{edu.date}</p>
            <p className="text-gray-400">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
