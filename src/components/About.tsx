import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Heart, Lightbulb, Target, Zap } from 'lucide-react';
import profileImage from 'figma:asset/2eab3e2b79632f53d76f35057198dd53799a5241.png';

interface AboutProps {
  mousePosition: { x: number; y: number };
}

const values = [
  {
    icon: Heart,
    title: 'Empathy-Driven',
    description: 'User-centered design that truly understands human needs',
  },
  {
    icon: Lightbulb,
    title: 'Creative Innovation',
    description: 'Pushing boundaries with fresh, bold design solutions',
  },
  {
    icon: Target,
    title: 'Problem Solving',
    description: 'Transforming complex challenges into elegant experiences',
  },
  {
    icon: Zap,
    title: 'Pixel Perfect',
    description: 'Obsessive attention to detail in every interaction',
  },
];

export function About({ mousePosition }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-400 text-sm mb-4">
            About Me
          </span>
          <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Design Philosophy
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
            
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Glassmorphic Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                <p className="text-sm text-white/90">
                  Passionate about creating meaningful digital experiences
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-4 shadow-lg shadow-purple-600/50"
            >
              <p className="text-3xl">✨</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-xl text-white/80 leading-relaxed">
                I'm ARCHANA T P, a passionate UI/UX Designer and Frontend Developer who believes in the power of
                creative and curious thinking. I thrive on solving real-world problems through the perfect blend of
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text"> design and technology</span>.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                My approach is rooted in empathy-driven, user-centered design. I don't just create interfaces—I craft
                experiences that resonate with people, solve meaningful problems, and make a lasting impact. Every project
                is an opportunity to innovate and push creative boundaries.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-600/50 transition-all cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all" />
                  
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <value.icon size={24} className="text-purple-400" />
                    </div>
                    <h3 className="mb-2 text-white">{value.title}</h3>
                    <p className="text-sm text-white/60">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}