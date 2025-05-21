'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

const projects = [
  {
    id: 1,
    title: 'GcoeAsync',
    description: 'GcoeAsync is a comprehensive campus platform developed for GCOEA, combining event management, peer-to-peer marketplace, and virtual club coordination. Built with Spring Boot, MongoDB, and Next.js, it enables students to register for events, buy and sell items, and engage in college clubs digitally. The platform features role-based access, a mobile-responsive UI, and an intuitive dashboard for admins and club coordinators to manage activities efficiently across the college community.',
    image: '/gcoeasync.png',
    size: 'large',
    github: 'https://github.com/shahidmulani/gcoeasync'
  },
  {
    id: 2,
    title: 'HealthSense AI',
    description: 'HealthSense AI is an intelligent health monitoring and diagnostic platform that integrates real-time sensor data with smart machine learning models. It features live health input tracking, an AI-powered chatbot for health assistance, coronary heart disease (CHD) and respiratory illness prediction, and AI Vision for symptom analysis and disease detection. Designed for proactive health support, the system offers users instant feedback and intelligent insights based on physical metrics and conversational inputs.',
    image: '/healthsence-ai.png',
    size: 'small',
    github: 'https://github.com/miyamoto3000/Heathsense--AI'
  },
  {
    id: 3,
    title: 'EcoFund',
    description: 'EcoFund is a transparent and socially-driven crowdfunding platform built for NGOs to raise funds and run impactful donation campaigns. Developed with a Next.js frontend, it allows NGOs to create verified profiles, launch fundraising projects, showcase goals, and receive donations from individuals and communities. The platform empowers non-profits with visibility, donor trust, and tools to promote causes ranging from education and environment to healthcare and rural development.',
    image: '/ecofund.jpg',
    size: 'medium',
    github: 'https://github.com/miyamoto3000/Ecofund'
  },
  {
    id: 4,
    title: 'Multilingual Translation App',
    description: 'This AI-powered multilingual translator is built from scratch to enable real-time translation between multiple languages. Designed with deep learning techniques and custom preprocessing pipelines, it translates between English, Hindi, and other languages without relying on pretrained models. Ideal for diverse communication use cases, the app showcases a robust encoder-decoder architecture and is tailored for both performance and linguistic accuracy.',
    image: '/t.png',
    size: 'medium',
    github: 'https://github.com/SpringBoardMentor0781j/Neural_Machine_Translation_Infosys_Internship_Nov2024/tree/main/infosys'
  }
];


  const achievements = [
    { id: 1, title: 'winnar of code hunt', description: '1st position at code hunting at anusandhan tech fest at prmcea college' },
  ];

  const experiences = [
    {
      id: 1,
      role: 'Machine Learning Intern',
      company: 'Infosys Springboard',
      duration: '2024',
      description: 'Developed the Multilingual Translator from scratch, an AI-driven app enabling real-time translation across multiple languages using advanced machine learning techniques.',
    },
  ];

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const glitchVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -5, 5, 0],
      transition: { duration: 0.3, repeat: Infinity, repeatDelay: 2 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transition-colors duration-500 relative overflow-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 rounded-full border-2 border-blue-400 bg-blue-400/20 pointer-events-none z-50"
        style={{ x: cursorPosition.x - 12, y: cursorPosition.y - 12 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />

      {/* Animated Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-r from-blue-500/10 via-pink-500/10 to-blue-500/10 animate-gradient-x pointer-events-none z-0" />

      {/* Header */}
      <header className="fixed top-0 w-full bg-opacity-90 backdrop-blur-md z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-montserrat uppercase tracking-widest">Shahid Shakil Mulani</h1>
          <div className="flex space-x-4">
            <a href="#about" className="hover:text-blue-400 transition font-montserrat uppercase text-sm tracking-wider neon-glow">About</a>
            <a href="#skills" className="hover:text-blue-400 transition font-montserrat uppercase text-sm tracking-wider neon-glow">Skills</a>
            <a href="#experience" className="hover:text-blue-400 transition font-montserrat uppercase text-sm tracking-wider neon-glow">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition font-montserrat uppercase text-sm tracking-wider neon-glow">Projects</a>
            <a href="#achievements" className="hover:text-blue-400 transition font-montserrat uppercase text-sm tracking-wider neon-glow">Achievements</a>
            <a href="#connect" className="hover:text-blue-400 transition font-montserrat uppercase text-sm tracking-wider neon-glow">Connect</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl font-extrabold font-montserrat uppercase tracking-widest mb-4"
            variants={glitchVariants}
            initial="initial"
            animate="animate"
          >
            I Build the <span className="text-blue-400 neon-glow">Future</span>
          </motion.h1>
          <p className="text-xl sm:text-2xl font-montserrat tracking-wide">Hi, I'm Shahid Shakil Mulani. A passionate Java developer skilled in Spring Boot, Next.js, and AI/ML.</p>
          <a
            href="#projects"
            className="mt-8 inline-block px-8 py-4 bg-blue-500 text-white rounded-full font-montserrat uppercase tracking-widest text-lg hover:bg-blue-600 transition shadow-lg neon-glow"
          >
            Explore My Work
          </a>
        </motion.div>
      </section>

      {/* About Section with Photo */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="absolute inset-0 border-2 border-blue-400/30 rounded-lg pointer-events-none z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl font-bold font-montserrat uppercase tracking-widest text-center mb-8 neon-glow"
        >
          About Me
        </motion.h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <motion.img
            src="/linkedin_pic.jpg"
            alt="Shahid Shakil Mulani"
            className="w-72 h-72 rounded-full object-cover border-2 border-blue-400/50 neon-glow -ml-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <p className="text-lg sm:text-xl font-montserrat tracking-wide">
              I'm Shahid Shakil Mulani, a passionate Java developer with expertise in Spring Boot, Next.js, and AI/ML. I specialize in building robust backend systems and dynamic frontends while innovating with AI-driven solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="absolute inset-0 border-2 border-blue-400/30 rounded-lg pointer-events-none z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl font-bold font-montserrat uppercase tracking-widest text-center mb-12 neon-glow"
        >
          Skills
        </motion.h2>
        <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6">
          {['Java', 'Spring Boot', 'Next.js', 'Machine learning ', 'Mysql', 'mongodb','restfull api','spring security'].map((skill) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-blue-400/30 transition border border-blue-400/20"
            >
              <p className="text-center font-montserrat uppercase tracking-wider text-lg">{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 relative">
        <motion.div
          className="absolute inset-0 border-2 border-pink-400/30 rounded-lg pointer-events-none z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl font-bold font-montserrat uppercase tracking-widest text-center mb-12 neon-glow-pink"
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-pink-400/30 transition border border-pink-400/20 mb-6"
            >
              <h3 className="text-xl sm:text-2xl font-semibold font-montserrat uppercase tracking-wider">{exp.role} at {exp.company}</h3>
              <p className="text-blue-400 font-montserrat mt-1">{exp.duration}</p>
              <p className="mt-2 font-montserrat">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Academic Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="absolute inset-0 border-2 border-blue-400/30 rounded-lg pointer-events-none z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl font-bold font-montserrat uppercase tracking-widest text-center mb-12 neon-glow"
        >
          Academic Projects
        </motion.h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
              className={`bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-blue-400/30 transition border border-blue-400/20 ${
                project.size === 'large' ? 'col-span-2 row-span-2' : project.size === 'medium' ? 'col-span-1 row-span-2' : ''
              }`}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold font-montserrat uppercase tracking-wider">{project.title}</h3>
              <p className="mt-2 font-montserrat">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-montserrat tracking-wide">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-montserrat tracking-wide">
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 relative">
        <motion.div
          className="absolute inset-0 border-2 border-pink-400/30 rounded-lg pointer-events-none z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl font-bold font-montserrat uppercase tracking-widest text-center mb-12 neon-glow-pink"
        >
          Achievements
        </motion.h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-pink-400/30 transition border border-pink-400/20"
            >
              <h3 className="text-xl font-semibold font-montserrat uppercase tracking-wider">{achievement.title}</h3>
              <p className="mt-2 font-montserrat">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="absolute inset-0 border-2 border-blue-400/30 rounded-lg pointer-events-none z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl font-bold font-montserrat uppercase tracking-widest text-center mb-12 neon-glow"
        >
          Connect With Me
        </motion.h2>
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl font-montserrat tracking-wide mb-6"
          >
            Want to collaborate or just say hi? Reach out!
          </motion.p>
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="https://github.com/miyamoto3000"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <FaGithub className="text-4xl hover:text-blue-400 transition neon-glow" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shahid-mulani-46807729b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <FaLinkedin className="text-4xl hover:text-blue-400 transition neon-glow" />
            </motion.a>
            <motion.a
              href="https://x.com/ShahidM32586627"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <FaTwitter className="text-4xl hover:text-blue-400 transition neon-glow" />
            </motion.a>
          </div>
          <motion.a
            href="/shahid resume.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-full font-montserrat uppercase tracking-widest text-lg hover:bg-blue-600 transition shadow-lg neon-glow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="mr-2" /> Download My Resume
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p className="font-montserrat tracking-wide">© 2025 Shahid Shakil Mulani. All rights reserved.</p>
      </footer>
    </div>
  );
}