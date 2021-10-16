import React from 'react';
import styled from 'styled-components';

interface Props {}

const Viewers: React.FC<Props> = () => {
  const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play();
  };

  const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
  };
  return (
    <Container>
      <Wrap>
        <img src='/images/viewers-disney.png' alt='' />
        <video
          muted={true}
          loop
          preload='none'
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
          // src={'/videos/1564674844-disney.mp4'}
        >
          <source src={'/videos/1564674844-disney.mp4'} type='video/mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-pixar.png' alt='' />
        <video
          muted={true}
          loop
          preload='none'
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
        >
          <source src={'/videos/1564676714-pixar.mp4'} type='video/mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-marvel.png' alt='' />
        <video
          muted={true}
          loop
          preload='none'
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
        >
          <source src={'/videos/1564676115-marvel.mp4'} type='video/mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-starwars.png' alt='' />
        <video
          muted={true}
          loop
          preload='none'
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
        >
          <source src={'/videos/1608229455-star-wars.mp4'} type='video/mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-national.png' alt='' />
        <video
          muted={true}
          loop
          preload='none'
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
        >
          <source
            src={'/videos/1564676296-national-geographic.mp4'}
            type='video/mp4'
          />
        </video>
      </Wrap>
    </Container>
  );
};

export default Viewers;

const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 5rem;
  padding: 3rem 0 2.6rem;
`;

const Wrap = styled.div`
  cursor: pointer;
  border: 0.3rem solid rgba(249, 249, 249, 0.1);
  border-radius: 1rem;
  box-shadow: rgb(0 0 0 / 69%) 0 2.6rem 3rem -1rem,
    rgb(0 0 0 / 73%) 0 1.6rem 1rem -1rem;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;
  padding: 30%;

  &:hover {
    transform: scale(1.05);

    video {
      opacity: 1;
    }
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    border-radius: 1rem;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    z-index: 1;
    pointer-events: none;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 4rem 5.8rem -1.6rem,
      rgb(0 0 0 / 72%) 0 3rem 2.2rem -1rem;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
