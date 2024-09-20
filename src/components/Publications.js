import React from 'react';

const publications = [
  {
    title: 'On the use of Message Brokers for Real-Time Monitoring Systems',
    date: 'DiTTEt 2024',
    link: '#',
    description: 'Research on using message brokers for real-time system monitoring.',
  },
  {
    title: 'An Audit Framework for Civil Construction Safety Management and Supervision',
    date: 'DiTTEt 2024',
    link: '#',
    description: 'A framework for ensuring safety in civil construction projects.',
  },
  {
    title: 'Database Performance on Android Devices: A Comparative Analysis',
    date: 'Marketing and Smart Technologies 2023',
    link: '#',
    description: 'Comparative analysis of database performance in Android environments.',
  },
  {
    title: 'Mobile Optical Character Recognition',
    date: 'IBIMA 2022',
    link: '#',
    description: 'Research on mobile OCR technology and its applications.',
  },
  {
    title: 'An Intelligent and Scalable IoT Monitoring Framework for Civil Construction Workspaces',
    date: 'DiTTEt 2022',
    link: '#',
    description: 'A scalable IoT framework for safety monitoring in construction sites.',
  },
];

const Publications = () => {
  return (
    <div className="p-12 bg-gray-900 text-white">
      <h2 className="text-5xl font-bold mb-8 text-center">Publications</h2>
      <ul className="space-y-6 max-w-2xl mx-auto">
        {publications.map((pub) => (
          <li key={pub.title} className="border-b border-gray-700 pb-4">
            <a
              href={pub.link}
              className="text-2xl font-semibold hover:text-blue-400 transition-colors"
            >
              {pub.title}
            </a>
            <p className="text-gray-500 text-sm">{pub.date}</p>
            <p className="text-gray-400">{pub.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
