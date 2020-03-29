import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Congress from './components/Congress';
import Footer from './components/Footer';
import Projects from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className=''>
      <Header />
      <Hero />
      <Projects />
      <Congress />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;