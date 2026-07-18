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
import useTheme from 'hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        Aller au contenu principal
      </a>
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
