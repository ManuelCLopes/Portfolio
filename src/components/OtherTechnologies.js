import React from 'react';
import { motion } from 'framer-motion';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

const extraTechnologies = [
    { name: 'HTML', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Android', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
    { name: 'iOS', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/505px-Apple_logo_grey.svg.png?20220821122206' },
  
    { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'OutSystems', url: 'https://www.outsystems.com/-/media/images/homepage/2024/hero/ring-hero.svg' },
    { name: 'Kubernetes', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },

    { name: 'mySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Oracle', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },

    { name: 'jMeter',  url: 'https://jmeter.apache.org/images/jmeter_square.svg'},
    { name: 'JUnit', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Postman', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  
    { name: 'Github', url: 'https://static-00.iconduck.com/assets.00/github-light-icon-512x500-vr2mc3wu.png' },
    { name: 'Gitlab', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
    { name: 'Jira', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
  ];
  

  const OtherTechnologies = () => {
    return (
      <div className="bg-gray-900 text-white">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Other technologies I've worked with, but weren't mentioned above
        </h3>
        {/* Wrapper with overflow-hidden and max-width */}
        <div className="overflow-hidden w-full max-w-full mx-auto py-4">
          <motion.div
            className="flex space-x-8"
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              ease: 'linear',
              duration: 20,
              repeat: Infinity,
              onRepeat: (animation) => {
                animation.set({ x: '100%' });
              },
            }}
          >
            {/* Duplicate the technologies to create smooth infinite scrolling */}
            {extraTechnologies.map((tech, index) => (
              <Tippy key={index} content={tech.name}>
                <img
                  src={tech.url}
                  alt={tech.name}
                  className="w-12 h-12"
                />
              </Tippy>
            ))}
          </motion.div>
        </div>
      </div>
    );
};

export default OtherTechnologies;