import React from 'react';
import styled from 'styled-components';

const images = [
  './img1.jpg',
  './img2.jpg',
  './img3.jpg',
  './img4.jpg',
];

const fifthImage = './img5.jpg';

const CollageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 2rem;
`;

const Polaroid = styled.div`
  width: 200px;
  height: 240px;
  padding: 12px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s;
  transform: rotate(${() => (Math.random() - 0.5) * 10}deg);
  cursor: pointer;

  &:hover {
    transform: scale(1.05) rotate(0deg);
    z-index: 5;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const OverlapPolaroid = styled(Polaroid)`
  position: absolute;
  top: 100px; /* Adjust to position between img1 and img3 */
  left: 50%;  /* Centered */
  transform: translateX(-50%) rotate(-5deg);
  z-index: 3;
`;

export default function ImageCollage() {
  return (
    <CollageWrapper>
      {images.map((src, index) => (
        <Polaroid key={index}>
          <img src={src} alt={`Collage ${index}`} />
        </Polaroid>
      ))}
      <OverlapPolaroid>
        <img src={fifthImage} alt="Collage 5 overlapped" />
      </OverlapPolaroid>
    </CollageWrapper>
  );
}
