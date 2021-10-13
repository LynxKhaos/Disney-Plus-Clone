import React from 'react';
import styled from 'styled-components';

interface Props {}

const Movies: React.FC<Props> = () => {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg'
            alt=''
          />
        </Wrap>
        <Wrap>
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg'
            alt=''
          />
        </Wrap>
        <Wrap>
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg'
            alt=''
          />
        </Wrap>
        <Wrap>
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg'
            alt=''
          />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div`

h4 {
  font-size:2.4rem;
  margin-bottom: 2rem;
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
