import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiDatabase, FiPenTool } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <FiSmartphone />,
      skills: ["Flutter", "Dart", "React Native", "Swift (Basic)", "Kotlin (Basic)"]
    },
    {
      title: "Front-End Development",
      icon: <FiCode />,
      skills: ["React.js", "Next.js", "JavaScript/TypeScript", "HTML5 & CSS3", "TailwindCSS", "Framer Motion"]
    },
    {
      title: "Back-End / Cloud",
      icon: <FiDatabase />,
      skills: ["Node.js", "Express", "PostgreSQL", "Firebase", "RESTful APIs"]
    },
    {
      title: "Tools & Others",
      icon: <FiPenTool />,
      skills: ["Git & GitHub", "Figma", "Postman", "Agile/Scrum", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
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
            className="skill-card glass"
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="skill-header">
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
            </div>
            <ul className="skill-list">
              {category.skills.map(skill => (
                <li key={skill}>
                  <span className="bullet">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
