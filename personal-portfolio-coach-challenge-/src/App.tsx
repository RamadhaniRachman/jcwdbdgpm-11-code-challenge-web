import Navigation from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { Experience } from "./components/Experience";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="text-dark font-sans">
      <Navigation />

      <Hero />

      <About />

      <Skills />

      <Portfolio />

      <Experience />

      <Testimonial />

      <Contact />

      <Footer />
    </div>
  );
}
