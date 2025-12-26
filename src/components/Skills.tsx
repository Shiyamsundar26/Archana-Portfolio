import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Code2, Palette, Brain, Layers } from 'lucide-react';

interface SkillsProps {
  mousePosition: { x: number; y: number };
}

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend Development',
    color: 'from-purple-600 to-purple-400',
    skills: [
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'JavaScript / TypeScript', level: 90 },
      { name: 'React & Next.js', level: 92 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    color: 'from-blue-600 to-blue-400',
    skills: [
      { name: 'Figma', level: 98 },
      { name: 'Design Systems', level: 90 },
      { name: 'Prototyping', level: 92 },
      { name: 'User Research', level: 85 },
    ],
  },
  {
    icon: Brain,
    title: 'Design Thinking',
    color: 'from-cyan-600 to-cyan-400',
    skills: [
      { name: 'Problem Solving', level: 93 },
      { name: 'Creative Innovation', level: 90 },
      { name: 'User Empathy', level: 95 },
      { name: 'Ideation', level: 88 },
    ],
  },
  {
    icon: Layers,
    title: 'Tools & Technologies',
    color: 'from-violet-600 to-violet-400',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Framer Motion', level: 88 },
      { name: 'Adobe Creative Suite', level: 85 },
      { name: 'Responsive Design', level: 95 },
    ],
  },
];

export function Skills({ mousePosition }: SkillsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            What I Do Best
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A comprehensive blend of design expertise and development skills
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              onMouseEnter={() => setHoveredCard(categoryIndex)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === categoryIndex
                  ? `perspective(1000px) rotateY(${mousePosition.x * 3}deg) rotateX(${-mousePosition.y * 3}deg) translateZ(20px)`
                  : 'none',
                transition: 'transform 0.3s ease-out',
              }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                    <category.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.15 + skillIndex * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/90">{skill.name}</span>
                        <span className="text-white/50 text-sm">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.15 + skillIndex * 0.1 + 0.3 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Particles */}
                {hoveredCard === categoryIndex && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${10 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
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
    </section>
  );
}
