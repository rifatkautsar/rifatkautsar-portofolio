import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSmartphone, FiX } from 'react-icons/fi';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "FinTech Mobile App",
      description: "A comprehensive digital wallet application built with Flutter. Features include expense tracking, QR code payments, and real-time bank syncing.",
      longDescription: "This advanced Digital Wallet solution was developed focusing on high security and a seamless user experience. It provides users with deep insights into their spending habits through intelligent categorization. The application integrates tightly with multiple banking APIs to facilitate instant transfers and real-time balance updates.",
      features: [
        "Secure biometric authentication",
        "Expense analytics and intuitive charts",
        "P2P money transfers via QR codes",
        "Multi-currency support"
      ],
      techList: ["Flutter", "Dart", "Firebase", "Stripe API", "GetX"],
      type: "Mobile",
      github: "#",
      live: "#"
    },
    {
      title: "Ecommerce Web Platform",
      description: "A modern ecommerce platform featuring a headless CMS, dynamic cart, and seamless checkout flow using React and Next.js.",
      longDescription: "A full-scale headless E-commerce platform engineered for immense scalability and performance. The frontend is fully statically generated through Next.js ensuring sub-second load times, while relying on a headless CMS for content management flexibility by the marketing team.",
      features: [
        "Headless CMS integration (Sanity.io)",
        "Dynamic cart and state management with Redux",
        "Algolia-powered instant search",
        "Automated inventory management"
      ],
      techList: ["Next.js", "React", "TailwindCSS", "Node.js", "MongoDB"],
      type: "Web",
      github: "#",
      live: "#"
    },
    {
      title: "Task Management SaaS",
      description: "A responsive kanban-style project management tool with drag-and-drop functionality, real-time collaboration, and dark mode.",
      longDescription: "Designed for modern agile teams, this Task Management SaaS mimics core functionalities of popular tools like Jira or Trello. It utilizes WebSockets to push live updates across all connected clients immediately. The flexible board system allows extensive customization of workflows.",
      features: [
        "Real-time Kanban boards via Socket.io",
        "Complex drag-and-drop interactions",
        "Role-based access control (RBAC)",
        "Detailed activity audit logs"
      ],
      techList: ["React", "Express", "PostgreSQL", "Socket.io", "Redis"],
      type: "Web",
      github: "#",
      live: "#"
    }
  ];

  // Prevent background scrolling when modal is open
  if (typeof window !== 'undefined') {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  return (
    <section id="portfolio" className="portfolio-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <span>04.</span> Some Things I've Built
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div 
            className="project-card glass clickable"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-top">
              <div className="folder">
                {project.type === "Mobile" ? <FiSmartphone /> : <FiExternalLink />}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}><FiGithub /></a>
                <a href={project.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}><FiExternalLink /></a>
              </div>
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <ul className="project-tech-list">
              {project.techList.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      
      <div className="view-more">
         <a href="#" className="btn-outline">Show More</a>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-content glass-modal"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <FiX />
              </button>
              
              <div className="modal-header">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <div className="modal-type">{selectedProject.type} Application</div>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h4>Overview</h4>
                  <p>{selectedProject.longDescription}</p>
                </div>

                <div className="modal-section">
                  <h4>Key Features</h4>
                  <ul className="modal-features-list">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>Technologies Used</h4>
                  <div className="modal-tech-list">
                    {selectedProject.techList.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-links">
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn-primary">
                    <FiGithub style={{ marginRight: '8px' }} /> Source Code
                  </a>
                  <a href={selectedProject.live} target="_blank" rel="noreferrer" className="btn-outline">
                    <FiExternalLink style={{ marginRight: '8px' }} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
