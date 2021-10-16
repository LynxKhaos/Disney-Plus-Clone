import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';

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

const Detail: React.FC<Props> = () => {
  const [detailState, setDetailState] = useState<Movie>();

  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    db.collection('movies')
      .doc(id)
      .get()
      .then((doc: any) => {
        if (doc.exists) {
          setDetailState(doc.data());
        } else {
        }
      });
  }, [id]);

  console.log(detailState);

  return (
    <Container>
      {detailState && (
        <>
          <Background>
            <img src={detailState?.backgroundImg} alt='' />
          </Background>
          <ImageTitle>
            <img src={detailState?.titleImg} alt='' />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src='/images/play-icon-black.png' alt='' />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src='/images/play-icon-white.png' alt='' />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src='/images/group-icon.png' alt='' />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{detailState?.subTitle}</SubTitle>
          <Description>{detailState?.description}</Description>
        </>
      )}
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 0.5rem);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 17rem;
  width: 35vw;
  min-width: 20rem;
  margin-top: 6rem;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 0.4rem;
  font-size: 1.5rem;
  padding: 0 2.4rem;
  margin-right: 2.2rem;
  display: flex;
  align-items: center;
  height: 5.6rem;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;

  /* &:hover {
    color: rgb(0, 0, 0);
  } */
`;

const AddButton = styled.button`
  margin-right: 1.6rem;
  width: 4.4rem;
  height: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  color: white;
  cursor: pointer;
  span {
    font-size: 3rem;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 1.5rem;
  min-height: 2rem;
  margin-top: 2.6rem;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 2rem;
  padding-top: 1.6rem;
  color: rgb(249, 249, 249);
  max-width: 70rem;
`;
