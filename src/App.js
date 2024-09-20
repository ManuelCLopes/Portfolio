import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Publications />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
