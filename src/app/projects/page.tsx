'use client';

import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Monty - Trading Strategy Backtesting',
    description: 'A no-code trading algorithm backtester based on movements in indicators such as SMA, EMA, RSI, etc. Features 500 Monte Carlo simulations to analyze trading strategies and provide AI-driven feedback for users.',
    image: '/monty-preview.jpg',
    technologies: ['React', 'FastAPI', 'Monte Carlo Simulations', 'Data Visualization'],
    github: 'https://github.com/sathwikdoddi/monty',
    demo: 'https://monty-trading.vercel.app',
  },
  {
    title: '{Pal}go – Competitive LeetCode Tracker App',
    description: 'A cross-platform mobile app for tracking LeetCode progress and competing with friends. Features real-time ELO and Palgo scores with less than 200ms update latency.',
    image: '/palgo-preview.jpg',
    technologies: ['React Native', 'AWS', 'Supabase', 'PostgreSQL', 'Expo'],
    github: 'https://github.com/sathwikdoddi/palgo',
    demo: 'https://palgo.app',
  },
  {
    title: 'Coastlens - Hurricane Risk Analysis Web App',
    description: 'A full-stack application to assess flood and hurricane risk across 40,000+ regions. Features location-based risk visualization with Maps and ARCGis, and insurance premium analysis.',
    image: '/coastlens-preview.jpg',
    technologies: ['Python', 'Flask', 'React', 'Node.js', 'RESTful APIs'],
    github: 'https://github.com/sathwikdoddi/coastlens',
    demo: 'https://coastlens.vercel.app',
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="card">
      <div style={{ position: 'relative', height: 192, marginBottom: 16, borderRadius: 12, overflow: 'hidden' }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="card-title">{project.title}</div>
      <div className="card-meta">{project.description}</div>
      <div className="tech-badges">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <FaGithub /> Source
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <FaExternalLinkAlt /> Demo
        </a>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div>
      <h1 className="section-title" style={{ textAlign: 'center', marginBottom: 48 }}>My Projects</h1>
      <div className="card-list">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
} 