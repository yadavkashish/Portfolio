import React from 'react';
import Header from './components/Header';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import AmoraProject from "./pages/AmoraProject";


function App() {
  return (
    <div className="scroll-smooth">
      <Header />

      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"> <AmoraProject /></section>
        
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
