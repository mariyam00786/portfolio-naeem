import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Showreel from './sections/Showreel';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Brands from './sections/Brands';
import Frames from './sections/Frames';
import Art from './sections/Art';
import BTS from './sections/BTS';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bgDark">
      <Navbar />
      <main>
        <Hero />
        <Showreel />
        <Services />
        <Projects />
        <Brands />
        <Frames />
        <Art />
        <BTS />
        <About />
      </main>
      <Contact />
    </div>
  );
}

export default App;
