import './App.css';

// Components
import Navbar from './components/Navbar';
import Banner from './components/banner';
import About from './components/aboutus';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';


function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar title="Resume" />

      {/* Hero Banner */}
      <Banner />

      {/* About Me Section */}
      <About />

      {/* Projects / Portfolio Section */}
      <Projects />
       <SkillsSection />
       <Footer />
    </>
  );
}

export default App;