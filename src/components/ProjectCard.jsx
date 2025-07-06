// src/components/ProjectCard.jsx
import React from 'react';
import styled from 'styled-components';
import GlowingRevealCard from './GlowingRevealCard';

// Icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiNetlify } from 'react-icons/si';

const imageMap = {
  'Safe City': './safecity.avif',
  'Food Delivery App': './fooddelivery.png',
  'Painting App': './painting.png',
  'Quiz App': './quiz.png',
};

const iconMap = {
  React: <FaReact color="#61DBFB" size={24} />,
  'Node.js': <FaNodeJs color="#3C873A" size={24} />,
  MongoDB: <SiMongodb color="#4DB33D" size={24} />,
  Express: <SiExpress color="#fff" size={24} />,
  Redux: <SiRedux color="#764abc" size={24} />,
  Netlify: <SiNetlify color="#00C7B7" size={24} />,
  HTML: <FaHtml5 color="#e34c26" size={24} />,
  CSS: <FaCss3Alt color="#264de4" size={24} />,
  JavaScript: <FaJs color="#f0db4f" size={24} />,
};

const ProjectCard = ({ project }) => {
  const image = imageMap[project.title] || '/projects/default.png';

  return (
    <CardWrapper>
      <div className="card-container">
        <GlowingRevealCard
          image={image}
          title={project.title}
          description={project.description}
          liveLink={project.liveLink}
        />
      </div>
      <div className="info">
        <h3>{project.title}</h3>
        <p className="desc">{project.description}</p>
        <p><strong>Date:</strong> {project.date}</p>

        <div className="tech-stack">
          <p className="label"><strong>Tech Stack:</strong></p>
          <div className="icons-row">
            {project.skills.map((skill, idx) => (
              <div key={idx} className="icon">
                {iconMap[skill] || <span>{skill}</span>}
              </div>
            ))}
          </div>
        </div>

        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          🔗 Live Link
        </a>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  background-color: #1c1c1c;
  padding: 2rem;
  border-radius: 12px;
  color: white;
  flex-wrap: wrap;

  .card-container {
    flex-shrink: 0;
    width: 300px;
  }

  .info {
    flex: 1;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3 {
    font-size: 1.5rem;
    color: #00e0ff;
    margin-bottom: 0.5rem;
  }

  .desc {
    margin-bottom: 1rem;
    color: #ccc;
  }

  .tech-stack {
    margin-top: 1rem;
    border-top: 1px solid #333;
    padding-top: 1rem;

    .label {
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    .icons-row {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .icon {
      transition: transform 0.3s;
    }

    .icon:hover {
      transform: scale(1.2);
    }
  }

  a {
    display: inline-block;
    margin-top: 1.5rem;
    color: #00e0ff;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .card-container {
      margin-bottom: 1.5rem;
    }

    .info {
      text-align: center;
    }

    .icons-row {
      justify-content: center;
    }
  }
`;

export default ProjectCard;
