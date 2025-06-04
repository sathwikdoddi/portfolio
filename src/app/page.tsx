'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const experiences = [
  {
    title: 'Software Development Intern (Embedded Systems)',
    company: 'Amazon Web Services (AWS)',
    date: 'May 2025 - August 2025',
    logo: '/aws-logo.jpg',
    details: [
      'Refactor firmware in C to support config-driven polling with platform-specific optimizations, reducing polling load by 80%',
      'Engineer thread-safe callback systems to trigger event-specific handlers in order to cut down response times',
      'Expose platform-specific event states via UDP network protocol, improving server debugging efficiency',
      'Write 300+ integration tests to validate end-to-end event detection, callback execution, and API accuracy',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'RoboJackets RoboRacing @ Georgia Tech',
    date: 'September 2024 - Present',
    logo: '/robojackets-logo.jpg',
    details: [
      'Architect modular C++ software and ROS2 components, within a Docker container, accelerating prototyping by 25%',
      'Implement graph-searching algorithms with sensor data, speeding up navigation and solution discovery by over 50%',
      'Refine tuning, enhancing path-planning deviation from 1 meters to 0.12 meters, representing an 8x improvement',
      'Optimize CI/CD pipelines via Docker, cutting deployment time for 200+ members by 30%',
    ],
  },
  {
    title: 'Computational Neuroscience Research Intern',
    company: 'Nabil Imam Group',
    date: 'August 2024 - Present',
    logo: '/imam-logo.png',
    details: [
      "Reproduce DeepCubeA's framework using deep RL and A* search in Python to achieve a 100% solve rate",
      'Integrate and optimize biologically-inspired constraints to simulate human cognitive limits in planning and memory',
      'Compare and visualize neural and symbolic agents across metrics like solution length, time, and sample efficiency',
    ],
  },
  {
    title: 'Full-Stack Software Engineer',
    company: 'SaleSpike Solutions',
    date: 'May 2024 – August 2024',
    logo: '/salespike-logo.png',
    details: [
      'Secure 200+ weekly leads to 10+ clients by creating customized web solutions aligned with business needs.',
      'Collaborate with clients to design user-friendly front-ends, contributing to a 20% revenue increase.',
      'Produce 40+ webpages with Agile methodologies, Jira, React, Express, and MongoDB, achieving 95% customer satisfaction.',
      'Integrate secure payment processing using Stripe, generating an additional 10% in client revenue.',
    ],
  },
  {
    title: 'Software Development Captain & Robot Manager',
    company: 'FIRST Robotics Team 4013',
    date: 'August 2022 – May 2024',
    logo: '/first-logo.jpg',
    details: [
      'Deploy a scouting software solution with React and an AWS SQL server, boosting data filtering speeds by 80%, leading to a reduction in analysis time from 3.6 to 0.72 milliseconds per competition.',
      'Engineer an OpenCV-powered auto-aim system with 92% precision, increasing match scores by 30%.',
      'Author custom localization software, allowing for autonomous driving features and improving robot speed by 30%.',
      'Direct 50+ members and 8 sub-teams to multiple top 10 regional and state-level placements.',
    ],
  },
];

const reversedExperiences = [...experiences].reverse();

export default function Home() {
  // Responsive: detect if mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 700);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Default select Amazon (rightmost)
  const defaultSelected = reversedExperiences.findIndex(exp => exp.company === 'Amazon Web Services (AWS)');
  const [selected, setSelected] = useState(defaultSelected === -1 ? 0 : defaultSelected);
  const [cardKey, setCardKey] = useState(0);

  const handleSelect = (idx: number) => {
    setSelected(idx);
    setCardKey(idx + Math.random()); // force re-mount for animation
  };

  // Dynamic blue spot for the timeline bar
  const nodeCount = reversedExperiences.length;
  const nodeSize = 80; // px (5rem + some margin)
  const nodeGap = isMobile ? 32 : 40; // px
  const minRowWidth = nodeCount > 1 ? nodeCount * nodeSize + (nodeCount - 1) * nodeGap : nodeSize;

  // Use a brighter blue for the spot
  const brightBlue = '#1976ff';
  // Calculate blue spot position in px, then as a percent of the bar width
  const spotPx = nodeCount === 1
    ? nodeSize / 2
    : (selected * (nodeSize + nodeGap)) + nodeSize / 2;
  const spotPercent = (spotPx / minRowWidth) * 100;
  const barBg = `linear-gradient(to right, 
    #222 0%, 
    #222 ${Math.max(spotPercent - 10, 0)}%, 
    ${brightBlue} ${Math.max(spotPercent - 2, 0)}%, 
    ${brightBlue} ${Math.min(spotPercent + 2, 100)}%, 
    #222 ${Math.min(spotPercent + 10, 100)}%, 
    #222 100%)`;

  return (
    <div>
      <div id="top" />
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Hi, I'm <span className="cobalt">Sathwik Doddi</span>
        </h1>
        <p className="hero-desc">
          Computer Science Student @ Georgia Tech | Software Engineer | AI Enthusiast
        </p>
        <div className="social-links">
          <a
            href="https://github.com/sathwikdoddi"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sathwik-doddi"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sathwik@gatech.edu"
            className="social-link"
          >
            <FaEnvelope />
          </a>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View Resume
        </a>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="timeline-container">
          <div
            className="timeline-nodes-row"
            style={isMobile ? { minWidth: `${minRowWidth}px`, width: `${minRowWidth}px` } : { width: '100%' }}
          >
            <div className="timeline-horizontal" style={{ background: barBg }} />
            {reversedExperiences.map((exp, idx) => (
              <div key={exp.company} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="timeline-date-above">{exp.date}</div>
                <button
                  className={`timeline-node${selected === idx ? ' active' : ''}`}
                  onClick={() => handleSelect(idx)}
                  aria-label={exp.company}
                >
                  <div className="timeline-logo">
                    <Image src={exp.logo} alt={exp.company + ' logo'} width={64} height={64} />
                  </div>
                </button>
              </div>
            ))}
          </div>
          <div className="timeline-card-area">
            <div
              key={cardKey}
              className="card card-anim timeline-card"
            >
              <div className="timeline-company">{reversedExperiences[selected].company}</div>
              <div className="timeline-title">{reversedExperiences[selected].title}</div>
              <ul>
                {reversedExperiences[selected].details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2 className="section-title">Education</h2>
        <div className="card-list">
          <div className="card">
            <div className="timeline-card-header">
              <div className="timeline-header-left">
                <div className="timeline-company">Georgia Institute of Technology</div>
                <div className="timeline-title edu">Bachelors of Science in Computer Science + Math Minor</div>
              </div>
              <div className="timeline-header-right">
                <div className="timeline-dates-right">Expected Graduation: May 2027</div>
                <div className="timeline-gpa">GPA: 4.00</div>
              </div>
            </div>
            <ul>
              <li><b>Concentration:</b> Mathematics and Artificial Intelligence</li>
              <li><b>Relevant Coursework:</b> Data Structures & Algorithms, Intro to Artificial Intelligence, Discrete Math, Linear Algebra, Multivariable Calculus, Introductory Physics 1 & 2, Computer Organization and Programming, Objects and Design</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
