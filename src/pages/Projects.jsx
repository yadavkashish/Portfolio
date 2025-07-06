// src/sections/Projects.jsx
import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiNetlify } from 'react-icons/si';
import Bg from '../components/Bg'; // ✅ Importing background

const projects = [
  {
    id: 1,
    title: 'Safe City',
    description: 'A MERN stack project focused on traveler safety with live tracking and emergency alerts.',
    date: 'March 2025',
    skills: ['React', 'MongoDB', 'Express', 'Node.js'],
    image: './safecity.avif',
    liveLink: 'https://innotech-project.onrender.com/home',
  },
  {
    id: 2,
    title: 'Food Delivery App',
    description: 'React + Redux-based app for browsing food items, cart functionality, and order placing.',
    date: 'February 2025',
    skills: ['React', 'Redux', 'Netlify'],
    image: './fooddelivery.png',
    liveLink: 'https://kash-food-delivery-system.netlify.app/',
  },
  {
    id: 3,
    title: 'Painting App',
    description: 'Web-based drawing board using vanilla JS with eraser, bucket, and brush tools.',
    date: 'January 2025',
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: './painting.png',
    liveLink: 'https://painting-project.vercel.app/',
  },
  {
    id: 4,
    title: 'Quiz App',
    description: 'Interactive web-based quiz platform with categories, score tracking, and responsive UI.',
    date: 'April 2025',
    skills: ['React', 'CSS', 'Netlify'],
    image: './quiz.png',
    liveLink: 'https://playquizwithus.netlify.app/',
  },
];

const iconMap = {
  React: <FaReact color="#61DBFB" size={20} />,
  'Node.js': <FaNodeJs color="#3C873A" size={20} />,
  MongoDB: <SiMongodb color="#4DB33D" size={20} />,
  Express: <SiExpress color="#fff" size={20} />,
  Redux: <SiRedux color="#764abc" size={20} />,
  Netlify: <SiNetlify color="#00C7B7" size={20} />,
  HTML: <FaHtml5 color="#e34c26" size={20} />,
  CSS: <FaCss3Alt color="#264de4" size={20} />,
  JavaScript: <FaJs color="#f0db4f" size={20} />,
};

const Projects = () => {
  return (
    <Section id="projects">
      <Bg /> {/* ✅ Background bubbles added */}
      <h2>Projects</h2>
      <Grid>
        {projects.map((project) => (
          <Card key={project.id}>
            <ImageWrapper>
              <img src={project.image} alt={project.title} />
            </ImageWrapper>
            <Content>
              <h3>{project.title}</h3>
              <p className="desc">{project.description}</p>
              <p className="date">📅 {project.date}</p>
              <TechIcons>
                {project.skills.map((skill, i) => (
                  <span key={i}>{iconMap[skill] || skill}</span>
                ))}
              </TechIcons>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                🔗 Live Link
              </a>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;

// Styled Components

const Section = styled.section`
  position: relative;
  // background: #0d0d0d; /* ✅ Replaced gradient with solid dark background */
  color: white;
  padding: 4rem 2rem;
  min-height: 100vh;
  overflow: hidden;
  z-index: 1;

  h2 {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 3rem;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 2;
  }
`;

const Grid = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
`;

const Card = styled.div`
  position: relative;
  z-index: 2;
  background: #1c1c1c;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 224, 255, 0.2);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.5rem;
    color: #00e0ff;
    margin-bottom: 0.5rem;
  }

  .desc {
    font-size: 0.95rem;
    color: #ccc;
    margin-bottom: 0.75rem;
  }

  .date {
    font-size: 0.85rem;
    color: #aaa;
    margin-bottom: 0.75rem;
  }

  a {
    display: inline-block;
    margin-top: 1rem;
    color: #00e0ff;
    font-weight: bold;
    text-decoration: underline;
  }
`;

const TechIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;

  span {
    filter: grayscale(100%);
    transition: filter 0.3s, transform 0.3s;
  }

  span:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }
`;
