import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';
import db from '../firebase';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';

interface Props {}

const Home: React.FC<Props> = () => {

  const dispatch = useDispatch()


  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot: any) => {
      let tempMovies = snapshot.docs.map((doc: any) => {
        return { id: doc.id, ...doc.data() };
      })
      dispatch(setMovies(tempMovies))
    });

  }, []);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 0.5rem);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;
