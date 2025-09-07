import Hero from '@/components/hero/hero';
import About from '@/components/about/about';
import Projects from '@/components/projects/projects';
import Experience from '@/components/experience/experience';
import Contact from '@/components/contact/contact';
import Navigation from '@/components/navigation/navigation';
import AnimatedCursor from '@/components/animated-cursor';
import PerformanceOptimizer from '@/components/performance-optimizer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <PerformanceOptimizer />
      <Navigation />
      <AnimatedCursor />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
