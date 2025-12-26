import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Download, Eye, FileText, Sparkles } from 'lucide-react';
import { ResumeViewer } from './ResumeViewer';

interface ResumeProps {
  mousePosition: { x: number; y: number };
}

export function Resume({ mousePosition }: ResumeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showResumeViewer, setShowResumeViewer] = useState(false);

  const handleViewResume = () => {
    setShowResumeViewer(true);
  };

  const handleDownloadResume = () => {
    setShowResumeViewer(true);
  };

  return (
    <>
      <section id="resume" className="relative py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-600/20 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10" ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-400 text-sm mb-4">
              Download Resume
            </span>
            <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Get My Resume
            </h2>
            <p className="text-xl text-white/60">
              Complete overview of my experience, skills, and achievements
            </p>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
            style={{
              transform: `perspective(1500px) rotateY(${mousePosition.x * 3}deg) rotateX(${-mousePosition.y * 3}deg)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            {/* Outer Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl opacity-30 blur-3xl group-hover:opacity-50 transition-opacity" />

            {/* Main Card */}
            <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden">
              {/* Header Section */}
              <div className="relative h-64 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 flex items-center justify-center overflow-hidden">
                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                  }} />
                </div>

                {/* Floating Icons */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      {i % 3 === 0 && <FileText size={28} className="text-white/80" />}
                      {i % 3 === 1 && <Sparkles size={28} className="text-white/80" />}
                      {i % 3 === 2 && <Download size={28} className="text-white/80" />}
                    </div>
                  </motion.div>
                ))}

                {/* Center Icon */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <FileText size={48} className="text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-12">
                <div className="text-center mb-10">
                  <h3 className="text-3xl mb-4 text-white">Professional Resume</h3>
                  <p className="text-white/70 max-w-2xl mx-auto">
                    Detailed CV including my complete work experience, education, technical skills,
                    design expertise, and notable achievements in UI/UX and frontend development.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                  <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-3xl mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      3+
                    </div>
                    <p className="text-sm text-white/60">Years Learning</p>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-3xl mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      15+
                    </div>
                    <p className="text-sm text-white/60">Projects Designed</p>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-3xl mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      100%
                    </div>
                    <p className="text-sm text-white/60">Dedication</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={handleViewResume}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 group/btn relative px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 overflow-hidden"
                    style={{
                      boxShadow: '0 0 40px rgba(147, 51, 234, 0.3)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    <span className="relative flex items-center justify-center gap-2 text-lg">
                      <Eye size={20} />
                      View Resume
                    </span>
                  </motion.button>

                  <motion.button
                    onClick={handleDownloadResume}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <span className="flex items-center justify-center gap-2 text-lg">
                      <Download size={20} />
                      Download PDF
                    </span>
                  </motion.button>
                </div>

                {/* Additional Info */}
                <div className="mt-8 p-4 rounded-xl bg-purple-600/10 border border-purple-600/20">
                  <p className="text-sm text-center text-purple-300">
                    💡 Updated December 2024 • PDF Format • Professional Resume
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-white/60 mb-4">Connect with me on</p>
            <div className="flex items-center justify-center gap-4">
              <motion.a
                href="https://linkedin.com/in/archana-t-p-b7b8b127a"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/archanasunilkumar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
              >
                GitHub
              </motion.a>
              <motion.a
                href="mailto:achuhhhh1324@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
              >
                Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Viewer */}
      {showResumeViewer && (
        <ResumeViewer onClose={() => setShowResumeViewer(false)} />
      )}
    </>
  );
}