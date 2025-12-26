import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-purple-600/20 via-transparent to-transparent blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-cyan-600/20 via-transparent to-transparent blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-600/10 via-transparent to-transparent blur-3xl"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x * 20}px), calc(-50% + ${mousePosition.y * 20}px))`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      <Navbar />
      
      <main>
        <Hero mousePosition={mousePosition} />
        <About mousePosition={mousePosition} />
        <Skills mousePosition={mousePosition} />
        <Projects mousePosition={mousePosition} />
        <Experience mousePosition={mousePosition} />
        <Resume mousePosition={mousePosition} />
        <Contact mousePosition={mousePosition} />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2024 ARCHANA T P. Crafted with passion & creativity
          </p>
        </div>
      </footer>
    </div>
  );
}