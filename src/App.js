import './App.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Footer from './layout/Footer';
import NavBar from './layout/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Footer /> */}
    </>
  );
}

export default App;
