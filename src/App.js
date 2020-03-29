import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Congress from './components/Congress';
import Footer from './components/Footer';
import Projects from './components/Project';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className=''>
      <Header />
      <Hero />
      <Projects />
      <Congress />
      <Skill />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;