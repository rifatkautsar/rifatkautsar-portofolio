import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiCode, FiSmartphone, FiDatabase, FiPenTool } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax offsets for different cards
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const y4 = useTransform(scrollYProgress, [0, 1], [70, -70]);

  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <FiSmartphone />,
      skills: ["Flutter", "Dart", "React Native", "Swift", "Kotlin"],
      yValue: y1
    },
    {
      title: "Front-End Development",
      icon: <FiCode />,
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5 & CSS3", "TailwindCSS"],
      yValue: y2
    },
    {
      title: "Back-End / Cloud",
      icon: <FiDatabase />,
      skills: ["Node.js", "Express", "PostgreSQL", "Firebase", "REST APIs"],
      yValue: y3
    },
    {
      title: "Tools & Others",
      icon: <FiPenTool />,
      skills: ["Git & GitHub", "Figma", "Postman", "Agile", "CI/CD"],
      yValue: y4
    }
  ];

  return (
    <section id="skills" className="skills-section" ref={containerRef}>
      <motion.div 
        className="skills-bg-glow"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 200]) }}
      />
      
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <span>02.</span> My Arsenal
      </motion.h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div 
            className="skill-card-wrapper"
            key={category.title}
            style={{ y: category.yValue }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="skill-card modern-glass">
              <div className="skill-header">
                <div className="skill-icon-wrap">
                  <div className="skill-icon">{category.icon}</div>
                  <div className="icon-glow"></div>
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={skill} 
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-color)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
