import { useState } from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  const jobs = [
    {
      company: "Tech Corp",
      role: "Mobile Developer",
      date: "2023 - Present",
      duties: [
        "Developed and shipped a flagship mobile application using Flutter, reaching 1M+ downloads.",
        "Architected scalable state management solutions and optimized rendering performance.",
        "Collaborated closely with designers and product managers to refine the UI/UX.",
      ]
    },
    {
      company: "Digital Agency",
      role: "Front-End Engineer",
      date: "2021 - 2023",
      duties: [
        "Led the front-end development for 10+ responsive web projects using React and Next.js.",
        "Implemented complex animations and interactive components with Framer Motion.",
        "Mentored junior developers and established code-review best practices.",
      ]
    },
    {
      company: "StartUp Inc",
      role: "Junior Web Developer",
      date: "2019 - 2021",
      duties: [
        "Maintained and improved existing legacy codebases.",
        "Built internal tooling dashboards using Vue.js and Firebase.",
        "Participated in agile ceremonies and sprint planning.",
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <span>03.</span> Where I've Worked
      </motion.h2>

      <div className="experience-container glass">
        <div className="tab-list">
          {jobs.map((job, idx) => (
            <button
              key={idx}
              className={`tab-btn ${activeTabId === idx ? 'active' : ''}`}
              onClick={() => setActiveTabId(idx)}
            >
              {job.company}
            </button>
          ))}
          <div 
            className="tab-highlight" 
            style={{ transform: `translateY(${activeTabId * 48}px)` }}
          />
        </div>

        <div className="tab-content">
          <motion.div
            key={activeTabId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>
              <span>{jobs[activeTabId].role}</span>
              <span className="company"> @ {jobs[activeTabId].company}</span>
            </h3>
            <p className="range">{jobs[activeTabId].date}</p>
            <ul>
              {jobs[activeTabId].duties.map((duty, idx) => (
                <li key={idx}>
                  <span className="bullet">▹</span>
                  {duty}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
