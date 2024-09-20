import React from 'react';

const experience = [
  {
    company: 'Polytechnic Institute of Viseu',
    role: 'Invited Assistant',
    date: 'February 2023 - Present',
    details: 'Programming and Algorithms, Software Engineering I, Database Management, and NoSQL courses.\nDeveloped course materials and provided academic support to students.',
  },
  {
    company: 'Bitsight',
    role: 'Software Engineer',
    date: 'July 2024 - August 2024',
    details: 'Contribute to scale SaaS product during a time of rapid user growth. Maintain, build, and optimize REST APIs with a particular focus on making existing APIs scale to handle large amounts of data.',
  },
  {
    company: 'Capgemini',
    role: 'Lead Software Engineer',
    date: 'July 2022 - June 2024',
    details: 'Design and develop applications using Outsystems platform.\nDevelopment of new functionalities for Automatic Payment Terminals Management Web App for the banking sector.\nMentor junior developers and review code to ensure best practices.',
  },
  {
    company: 'Softinsa',
    role: 'Software Developer',
    date: 'September 2020 - June 2022',
    details: 'Developed web applications using OutSystems for the banking sector.\nCreated and developed a Reactive Web app for Vaults Management.\nDeveloped new functionalities for a Traditional Web app responsible for Disinvestment Properties Management.',
  },
  {
    company: 'Softinsa',
    role: 'Trainee',
    date: 'February 2020 - June 2020',
    details: 'Developed a comprehensive mobile (online and offline) and web application for managing projects and the respective hours claimed by each company collaborator.',
  },
];

const Experience = () => {
  return (
    <div className="p-12 bg-gray-800 text-white">
      <h2 className="text-5xl font-bold mb-8 text-center">Experience</h2>
      <div className="relative">
        <div className="absolute left-1/2 w-1 bg-blue-500 h-full"></div>
        <div className="space-y-12 max-w-3xl mx-auto">
          {experience.map((exp, idx) => (
            <div key={exp.company} className={`relative flex items-center ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-1/2 p-6 bg-gray-900 rounded-lg shadow-lg`}>
                <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                <p className="text-lg text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.date}</p>
                <p className="text-gray-400">{exp.details}</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 h-8 w-8 bg-blue-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
