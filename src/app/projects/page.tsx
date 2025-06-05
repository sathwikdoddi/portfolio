'use client';

import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Monty - Trading Strategy Backtesting',
    description: 'A backtesting engine for users to develop no-code trading strategies based on movements in indicators such as SMA, EMA, RSI, etc. Features 500 Monte Carlo simulations to analyze trading strategies and provide AI-driven feedback for users.',
    image: '/monty-preview.png',
    technologies: ['React', 'FastAPI', 'Monte Carlo Simulations', 'Data Visualization'],
    github: 'https://github.com/ayan-goel/monty',
    demo: 'https://monty-alpha.vercel.app',
  },
  {
    title: 'Cloth Simulation (C++/SFML)',
    description: 'A custom physics engine and math-heavy cloth simulation using my own Verlet integration solver. Focused on systems design, numerical stability, and efficient computation—ideal for optimized rendering.',
    image: '/cloth-sim-preview.png',
    technologies: ['C++', 'SFML', 'Custom Physics', 'Math', 'Systems Design'],
    github: 'https://github.com/sathwikdoddi/sfml-cloth-simulation',
    demo: 'https://github.com/sathwikdoddi/sfml-cloth-simulation/#readme',
  },
  {
    title: '{Pal}go – Competitive LeetCode Tracker App',
    description: 'A cross-platform mobile app for tracking LeetCode progress and competing with friends. Features real-time ELO and Palgo scores with less than 200ms update latency.',
    image: '/palgo-preview.png',
    technologies: ['React Native', 'AWS', 'Supabase', 'PostgreSQL', 'Expo'],
    demo: 'https://palgo.app',
  },
  {
    title: 'Coastlens - Hurricane Risk Analysis Web App',
    description: 'A full-stack application to assess flood and hurricane risk across 40,000+ regions. Features location-based risk visualization with Maps and ARCGis, and insurance premium analysis.',
    image: '/coastlens-preview.png',
    technologies: ['Python', 'Flask', 'React', 'Node.js', 'RESTful APIs'],
    github: 'https://github.com/kevskillz/coastlens',
    demo: 'https://devpost.com/software/rising-tide-a8he6n',
  },
  {
    title: 'GroupSync',
    description: 'GroupSync makes it easy to schedule hangouts by syncing Google Calendar data, showing when everyone is free, and letting friends chat in one place.',
    image: '/groupsync-preview.png',
    technologies: ['React', 'Firebase', 'Google Calendar API', 'HTML', 'JavaScript', 'CSS', 'TypeScript'],
    github: 'https://github.com/Nomitto/GroupSyncHackathon',
    demo: 'https://devpost.com/software/groupsync-3i6f82',
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="project-card">
      <a href={project.demo} target="_blank" rel="noopener noreferrer">
        <div className="project-image-container">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </a>
      <div className="project-tags">
        {project.technologies.map((tech) => (
          <span key={tech} className="project-tag">{tech}</span>
        ))}
      </div>
      <div className="card-title" style={{ fontSize: '1.08rem', marginBottom: 6 }}>{project.title}</div>
      <div className="card-meta" style={{ fontSize: '0.98rem', marginBottom: 10 }}>{project.description}</div>
      <div className="project-links">
        {project.github ? <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <FaGithub /> Source
        </a> : null}
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
  // Additional projects data
  const additionalProjects = [
    {
      title: 'Flappy Bird NeuroEvolution of Fixed Topologies Algorithm',
      description:
        'A genetic neural network that evolves birds to play Flappy Bird. Uses NEFT to generate birds with random neural networks as brains, mutates the highest fitness birds, and learns to play through generations. Visualizes the learning process and fitness improvements over time.',
      tags: ['Python', 'Neuroevolution', 'Genetic Algorithm', 'Pygame', 'AI'],
      github: 'https://github.com/sathwikdoddi/neft-algo-flappybird',
      demo: 'https://github.com/sathwikdoddi/neft-algo-flappybird/#readme',
    },
    {
      title: 'Custom MNIST Network',
      description:
        'A fully custom neural network built from scratch (no libraries) to classify handwritten digits from the MNIST database. Implements backpropagation and matrix math, achieving ~93% accuracy. Demonstrates deep understanding of neural networks and optimization.',
      tags: ['Python', 'Neural Network', 'MNIST', 'Matrix Math', 'Backpropagation'],
      github: 'https://github.com/sathwikdoddi/mnist-neuralnetwork',
      demo: 'https://github.com/sathwikdoddi/mnist-neuralnetwork/#readme',
    },
    {
      title: 'Connect 4 Minimax Algorithm',
      description:
        'A Connect 4 game with a Pygame interface, where the computer plays using a minimax algorithm (depth 4). Plans for alpha-beta pruning. Features a clean UI and demonstrates classic game AI techniques.',
      tags: ['Python', 'Pygame', 'Minimax', 'Game AI', 'Algorithms'],
      github: 'https://github.com/sathwikdoddi/Connect4Minimax',
    },
    {
      title: 'Wordle Solver',
      description:
        'A custom filtering algorithm and web scraper that always solves the daily NYT Wordle. Efficiently narrows down possible words and demonstrates practical use of automation and scraping.',
      tags: ['Python', 'Web Scraping', 'Algorithms', 'Automation'],
      github: 'https://github.com/sathwikdoddi/wordle-solver',
      demo: 'https://drive.google.com/file/d/1laTI92AmrfZ4sqtFnUyYgaw0gV-PQWGm/view',
    },
    {
      title: 'Blackjack Discord Bot',
      description:
        'A Discord bot that lets users play Blackjack via chat commands. Integrates with the Discord API, handles user sessions, and provides a fun, interactive experience.',
      tags: ['Python', 'Discord API', 'Bot', 'Game'],
      github: 'https://github.com/sathwikdoddi/discordbotv1',
    },
  ];

  const AdditionalProjectCard = ({ project }: { project: typeof additionalProjects[0] }) => (
    <div className="additional-project-card">
      <div className="additional-project-content">
        <div className="additional-project-title">{project.title}</div>
        <div className="additional-project-desc">{project.description}</div>
        <div className="additional-project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="additional-project-tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="additional-project-links">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="additional-project-link"
        >
          <FaGithub /> Source
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="additional-project-link"
          >
            <FaExternalLinkAlt /> Demo
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="section-title" style={{ textAlign: 'center', marginBottom: 48 }}>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <section className="additional-projects-section">
        <h2 className="additional-projects-title">Additional Projects</h2>
        <div className="additional-project-list">
          {additionalProjects.map((project) => (
            <AdditionalProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
} 