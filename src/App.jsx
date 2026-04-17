import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="app-container">
      {/* Background animated blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>

      <footer style={{ textAlign: 'center', padding: '24px', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
        <p>Built with React & Vite.</p>
        <p>&copy; {new Date().getFullYear()} Muhamad Rifat Kautsar</p>
      </footer>
    </div>
  );
}

export default App;
