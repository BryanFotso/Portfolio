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
import { useLanguage } from 'i18n/LanguageContext';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        {t.skipLink}
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
