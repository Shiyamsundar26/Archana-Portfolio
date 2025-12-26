import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';

interface ExperienceProps {
  mousePosition: { x: number; y: number };
}

const experiences = [
  {
    type: 'work',
    icon: Briefcase,
    title: 'Design Thinker & Creative Innovator Intern',
    company: 'AARUCHUDAR',
    period: '2024',
    description: 'Led design thinking workshops and developed creative solutions for community-driven projects focused on social impact.',
    achievements: [
      'Facilitated design thinking sessions for innovative problem-solving',
      'Created user-centered design solutions for social initiatives',
      'Collaborated with cross-functional teams on creative projects',
    ],
    gradient: 'from-purple-600 to-blue-600',
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'UI/UX Designer',
    company: 'Freelance Projects',
    period: '2023 - Present',
    description: 'Designing intuitive user interfaces and creating delightful user experiences for diverse clients.',
    achievements: [
      'Delivered 15+ successful design projects across various domains',
      'Implemented user research and usability testing methodologies',
      'Built comprehensive design systems and component libraries',
    ],
    gradient: 'from-cyan-600 to-teal-600',
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Bachelor of Technology',
    company: 'Computer Science & Engineering',
    period: '2021 - 2025',
    description: 'Specialized in UI/UX Design, Human-Computer Interaction, and Frontend Development.',
    achievements: [
      'Led college design club and organized design workshops',
      'Developed multiple academic projects focusing on user experience',
      'Active participant in hackathons and design competitions',
    ],
    gradient: 'from-green-600 to-emerald-600',
  },
];

const achievements = [
  {
    icon: Trophy,
    title: 'Design Leadership',
    description: 'Led design initiatives and workshops',
    year: '2024',
  },
  {
    icon: Award,
    title: 'Creative Innovation',
    description: 'Award for innovative design thinking',
    year: '2024',
  },
  {
    icon: Trophy,
    title: 'UI/UX Excellence',
    description: 'Recognition for outstanding design work',
    year: '2023',
  },
  {
    icon: Award,
    title: 'Problem Solver',
    description: 'Excellence in user-centered design',
    year: '2023',
  },
];

export function Experience({ mousePosition }: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-green-600/10 border border-green-600/20 text-green-400 text-sm mb-4">
            Career Journey
          </span>
          <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-cyan-600 to-green-600" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 z-10"
                  whileHover={{ scale: 1.5 }}
                  style={{
                    boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)',
                  }}
                />

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-16 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
                    style={{
                      transform: `perspective(1000px) rotateY(${mousePosition.x * 1}deg)`,
                      transition: 'transform 0.3s ease-out',
                    }}
                  >
                    {/* Glow */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${exp.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity`} />

                    <div className="relative">
                      {/* Header */}
                      <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center flex-shrink-0`}>
                          <exp.icon size={24} className="text-white" />
                        </div>
                        <div className={index % 2 === 0 ? 'md:text-right' : 'md:text-left'}>
                          <h3 className="text-2xl text-white mb-1">{exp.title}</h3>
                          <p className="text-purple-400 mb-1">{exp.company}</p>
                          <p className="text-sm text-white/50">{exp.period}</p>
                        </div>
                      </div>

                      <p className="text-white/70 mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                            <span className="text-purple-400 mt-1">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <h3 className="text-3xl text-center mb-12 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Awards & Recognition
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-600/50 transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <achievement.icon size={32} className="text-purple-400" />
                </div>
                <h4 className="mb-2 text-white">{achievement.title}</h4>
                <p className="text-sm text-white/60 mb-2">{achievement.description}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-purple-600/20 text-xs text-purple-400">
                  {achievement.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}