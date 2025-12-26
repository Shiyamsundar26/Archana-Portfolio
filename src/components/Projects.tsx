import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { Sparkles, X } from 'lucide-react';

interface ProjectsProps {
  mousePosition: { x: number; y: number };
}

const projects = [
  {
    title: 'Smart Healthcare Platform',
    category: 'UI/UX Design',
    description: 'Designed an intuitive healthcare management platform focusing on patient experience and accessibility.',
    fullDescription: 'A comprehensive healthcare platform that streamlines patient-doctor interactions, appointment scheduling, and health records management. The design focuses on accessibility, ease of use, and creating a calming user experience for patients dealing with health concerns. Features include telemedicine integration, medication reminders, and personalized health insights.',
    tags: ['Figma', 'User Research', 'Prototyping', 'Accessibility'],
    gradient: 'from-purple-600 to-blue-600',
    image: 'https://images.unsplash.com/photo-1761305135372-bc5c84c402d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbW9iaWxlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2Njc1NDg5NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Financial Dashboard Analytics',
    category: 'Web Application',
    description: 'Interactive financial dashboard with real-time data visualization and insights.',
    fullDescription: 'A modern financial analytics dashboard designed for investors and financial advisors. The interface provides real-time market data, portfolio tracking, and predictive analytics through intuitive visualizations. The design emphasizes clarity, quick decision-making, and customizable views for different user needs.',
    tags: ['React', 'Data Visualization', 'Design System', 'Responsive'],
    gradient: 'from-cyan-600 to-teal-600',
    image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzY2NzU0ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Creative Studio Portfolio',
    category: 'Website Design',
    description: 'Minimalist portfolio showcasing creative work with immersive animations.',
    fullDescription: 'A portfolio website designed for a creative agency, featuring smooth page transitions, interactive project galleries, and micro-animations that enhance the browsing experience. The design philosophy centers on letting the work speak for itself while providing an engaging, memorable user journey.',
    tags: ['Web Design', 'Animation', 'Typography', 'Branding'],
    gradient: 'from-green-600 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1615220367990-1940567341f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjY2MzQ3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'E-Learning Platform',
    category: 'EdTech',
    description: 'Interactive learning platform with gamification and progress tracking.',
    fullDescription: 'An educational platform designed to make learning engaging and effective through gamification, personalized learning paths, and collaborative features. The interface includes interactive quizzes, progress dashboards, and social learning components that motivate students and track their growth over time.',
    tags: ['UX Design', 'Wireframing', 'User Testing', 'Figma'],
    gradient: 'from-orange-600 to-red-600',
    image: 'https://images.unsplash.com/photo-1762690717850-d006c1416a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdXNlciUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjY3NTQ4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Smart City Mobile App',
    category: 'Mobile Design',
    description: 'Urban management app connecting citizens with city services seamlessly.',
    fullDescription: 'A mobile application that bridges the gap between citizens and city services, enabling easy reporting of issues, bill payments, event discovery, and real-time updates on city initiatives. The design focuses on simplicity, quick task completion, and building trust between government and citizens.',
    tags: ['Mobile UI', 'Design System', 'Prototyping', 'User Flow'],
    gradient: 'from-pink-600 to-rose-600',
    image: 'https://images.unsplash.com/photo-1760655487414-458e27965e89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGNvbmNlcHR8ZW58MXx8fHwxNzY2NzU0ODk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Meditation & Wellness App',
    category: 'Mobile App',
    description: 'Calming wellness app focused on mental health and mindfulness practices.',
    fullDescription: 'A mindfulness and meditation app designed to help users manage stress, improve sleep, and build healthy mental habits. Features guided meditations, breathing exercises, mood tracking, and personalized wellness recommendations. The visual design uses calming colors, gentle animations, and intuitive navigation.',
    tags: ['UI Design', 'Health Tech', 'Animation', 'Accessibility'],
    gradient: 'from-indigo-600 to-purple-600',
    image: 'https://images.unsplash.com/photo-1759185422905-57572ad69125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBkZXNpZ258ZW58MXx8fHwxNzY2NzE5NjYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Projects({ mousePosition }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-600/10 border border-cyan-600/20 text-cyan-400 text-sm mb-4">
            Featured Work
          </span>
          <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Selected Projects
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Creative solutions and innovative digital experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
              style={{
                transform: hoveredProject === index
                  ? `perspective(1000px) rotateY(${mousePosition.x * 2}deg) rotateX(${-mousePosition.y * 2}deg) translateZ(30px)`
                  : 'none',
                transition: 'transform 0.3s ease-out',
              }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative h-full rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all flex flex-col overflow-hidden">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs text-white/80 border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Sparkle Icon */}
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={hoveredProject === index ? { rotate: 360 } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <Sparkles size={20} className="text-purple-400" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl mb-3 text-white">{project.title}</h3>
                  <p className="text-white/60 mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-white/5 text-xs text-white/70 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <motion.button
                    onClick={() => setSelectedProject(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${project.gradient} hover:shadow-lg transition-all`}
                  >
                    <span>Read More</span>
                  </motion.button>
                </div>

                {/* Hover Particles */}
                {hoveredProject === index && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${project.gradient}`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -30, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0a0a0f]/95 backdrop-blur-2xl border border-white/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <X size={24} />
              </button>

              {/* Modal Content */}
              <div className="p-8 md:p-12">
                {/* Image */}
                <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-400 text-sm">
                      {projects[selectedProject].category}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl text-white">
                    {projects[selectedProject].title}
                  </h2>

                  <p className="text-xl text-white/80 leading-relaxed">
                    {projects[selectedProject].fullDescription}
                  </p>

                  {/* Tags */}
                  <div>
                    <h4 className="text-sm text-white/60 mb-3">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-3">
                      {projects[selectedProject].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 rounded-lg bg-white/5 text-white/80 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
