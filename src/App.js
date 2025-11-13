import './App.css';

// Components
import Navbar from './components/Navbar';
import Banner from './components/banner';
import About from './components/aboutus';
import Projects from './components/Projects';

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
    </>
  );
}

export default App;