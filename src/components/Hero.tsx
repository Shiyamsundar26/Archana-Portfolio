import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { useState } from 'react';
import { ResumeViewer } from './ResumeViewer';

interface HeroProps {
  mousePosition: { x: number; y: number };
}

export function Hero({ mousePosition }: HeroProps) {
  const [showResumeViewer, setShowResumeViewer] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* 3D Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
                transform: `translate(${mousePosition.x * (20 + i * 5)}px, ${mousePosition.y * (20 + i * 5)}px)`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-4 tracking-tight">
              <motion.span
                className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.2, duration: 0.8 }}
              >
                ARCHANA T P
              </motion.span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            UI/UX Designer & Frontend Developer
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.8, duration: 0.8 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12"
          >
            Transforming ideas into meaningful digital experiences through creative design thinking,
            empathy-driven solutions, and innovative problem-solving
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 overflow-hidden"
              style={{
                boxShadow: '0 0 40px rgba(147, 51, 234, 0.3)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              onClick={() => setShowResumeViewer(true)}
            >
              <span className="flex items-center gap-2">
                Download Resume
                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ height: ['20%', '80%', '20%'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resume Viewer Modal */}
      {showResumeViewer && <ResumeViewer onClose={() => setShowResumeViewer(false)} />}
    </>
  );
}