import React from 'react';
import styled, { keyframes } from 'styled-components';

const GlowingRevealCard = ({ image, title, description, liveLink }) => {
  return (
    <Card>
      <ImageWrapper>
        <Glow />
        <img src={image} alt={title} />
      </ImageWrapper>
      <Content>
        <h4>{title}</h4>
        <p>{description.split('.')[0]}.</p>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
      </Content>
    </Card>
  );
};

export default GlowingRevealCard;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Card = styled.div`
  position: relative;
  background-color: #111;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  width: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 1rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    position: relative;
    z-index: 2;
  }
`;

const Glow = styled.div`
  position: absolute;
  inset: -5px;
  background: conic-gradient(
    from 0deg,
    #0fb4ff,
    #ff4484,
    #ffeb3b,
    #0fb4ff
  );
  animation: ${rotate} 5s linear infinite;
  border-radius: 1rem;
  z-index: 1;
  filter: blur(12px);
`;

const Content = styled.div`
  padding: 1rem;
  text-align: center;
  color: #fff;

  h4 {
    font-size: 1.25rem;
    color: #00e0ff;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: #ccc;
    margin-bottom: 1rem;
  }

  button {
    background: linear-gradient(to right, #0fb4ff, #ff4484, #ffeb3b);
    padding: 0.5rem 1.25rem;
    border: none;
    border-radius: 999px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
