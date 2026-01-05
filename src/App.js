import Footer from 'components/layout/Footer';
import Navbar from 'components/layout/Navbar';
import About from 'sections/About';
import Certifications from 'sections/Certifications';
import Contact from 'sections/Contact';
import Education from 'sections/Education';
import Experience from 'sections/Experience';
import Hero from 'sections/Hero';
import Projects from 'sections/Projects';
import Skills from 'sections/Skills';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f5f7 0%, #ffffff 50%, #f0f0f0 100%)',
        color: '#1d1d1f',
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
