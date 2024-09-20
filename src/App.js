import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import OtherTechnologies from './components/OtherTechnologies';

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <OtherTechnologies />
      <Publications />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
