import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;
