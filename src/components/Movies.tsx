import React from 'react';
import styled from 'styled-components';
import { selectMovies } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

interface Props {}
interface Movie {
  backgroundImg: string;
  cardImg: string;
  description: string;
  id: string;
  subTitle: string;
  title: string;
  titleImg: string;
  type: string;
}

const Movies: React.FC<Props> = () => {
  const movies = useSelector(selectMovies);
  console.log(movies);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies &&
          movies.filter((movie:Movie) => movie.type === "recommend").map((recommendedMovies:Movie) => (
            <Wrap key={recommendedMovies.id}>
                {console.log(recommendedMovies)}
                <Link to={`detail/${recommendedMovies.id}`}>
                  <img src={recommendedMovies.cardImg} alt='' />
                </Link>
              </Wrap>
          ))
          }
      </Content>
      <h4>Originals</h4>
      <Content>
        {movies &&
          movies.filter((movie:Movie) => movie.type === "original").map((recommendedMovies:Movie) => (
            <Wrap key={recommendedMovies.id}>
                {console.log(recommendedMovies)}
                <Link to={`detail/${recommendedMovies.id}`}>
                  <img src={recommendedMovies.cardImg} alt='' />
                </Link>
              </Wrap>
          ))
          }
      </Content>
      <h4>Trending</h4>
      <Content>
        {movies &&
          movies.filter((movie:Movie) => movie.type === "trending").map((recommendedMovies:Movie) => (
            <Wrap key={recommendedMovies.id}>
                {console.log(recommendedMovies)}
                <Link to={`detail/${recommendedMovies.id}`}>
                  <img src={recommendedMovies.cardImg} alt='' />
                </Link>
              </Wrap>
          ))
          }
      </Content>
      <h4>New</h4>
      <Content>
        {movies &&
          movies.filter((movie:Movie) => movie.type === "new").map((recommendedMovies:Movie) => (
            <Wrap key={recommendedMovies.id}>
                {console.log(recommendedMovies)}
                <Link to={`detail/${recommendedMovies.id}`}>
                  <img src={recommendedMovies.cardImg} alt='' />
                </Link>
              </Wrap>
          ))
          }
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div`
  h4 {
    font-size: 2.4rem;
    margin: 2rem 0 1rem 0;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  border: 0.3rem solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0 2.6rem 3rem -1rem,
    rgb(0 0 0 / 73%) 0 1.6rem 1rem -1rem;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0 4rem 5.8rem -1.6rem,
      rgb(0 0 0 / 72%) 0 3rem 2.2rem -1rem;
  }
`;
