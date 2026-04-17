import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <span>01.</span> About Me
      </motion.h2>

      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>
            Hello! I enjoy creating things that live on the internet and mobile devices. My interest in software development started back when I decided to try building custom ROMs and themes for Android, which taught me a lot about mobile ecosystems and UI/UX.
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of building software for a variety of clients and personal projects. My main focus these days is building accessible, inclusive products and digital experiences across both mobile platforms (iOS/Android) and modern web browsers.
          </p>
          <p>
            When I'm not at the computer, I'm usually exploring new tech trends, reading, or hanging out.
          </p>
        </motion.div>

        <motion.div 
          className="about-pic"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="pic-wrapper glass">
            {/* If there's an actual image, place it here. Using a placeholder stylings for now */}
            <div className="pic-placeholder">
               <span>[ Your Photo Here ]</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
