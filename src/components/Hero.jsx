import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight, FiGithub, FiLinkedin, FiSmartphone } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();

  // Parallax effects
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const yShape1 = useTransform(scrollY, [0, 500], [0, -100]);
  const yShape2 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-content"
        style={{ y: yText, opacity: opacityText }}
      >
        <motion.p
          className="greeting"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello World, I am
        </motion.p>

        <motion.h1
          className="name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Muhamad Rifat Kautsar
        </motion.h1>

        <motion.h2
          className="subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Crafting Digital Experiences.
        </motion.h2>

        <motion.p
          className="description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I am a <strong>Mobile & Front-End Developer</strong> specializing in building elegant, high-performance applications. Whether it's a seamless mobile app or a dynamic responsive website, I bring ideas to life with modern web and mobile aesthetics.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="portfolio" smooth={true} duration={500} offset={-70} className="btn-primary">
            View My Work <FiArrowRight />
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-70} className="btn-outline">
            Let's Talk
          </Link>
        </motion.div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="#"><FiGithub /></a>
          <a href="#"><FiLinkedin /></a>
          <a href="#"><FiSmartphone /></a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="img-container">
          {/* Abstract Placeholder for modern look */}
          <motion.div style={{ y: yShape1 }} className="abstract-shape shape-1"></motion.div>
          <motion.div style={{ y: yShape2 }} className="abstract-shape shape-2 glass"></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
