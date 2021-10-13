import React from 'react';
import styled from 'styled-components';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu>
        <a>
          <img src='/images/home-icon.svg' alt='' />
          <span>HOME</span>
        </a>
        <a>
          <img src='/images/search-icon.svg' alt='' />
          <span>SEARCH</span>
        </a>
        <a>
          <img src='/images/watchlist-icon.svg' alt='' />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src='/images/original-icon.svg' alt='' />
          <span>ORIGINAL</span>
        </a>
        <a>
          <img src='/images/movie-icon.svg' alt='' />
          <span>MOVIES</span>
        </a>
        <a>
          <img src='/images/series-icon.svg' alt='' />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src='/images/gnome.jpg' alt='' />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 7rem;
  background-color: var(--disney-header);
  display: flex;
  align-items: center;
  padding: 0 3.6rem;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 8rem;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 2.5rem;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
    cursor: pointer;

    img {
      height: 2rem;
    }

    span {
      font-size: 1.3rem;
      letter-spacing: 0.142rem;
      position: relative;

      &:after {
        content: '';
        height: 0.2rem;
        background: white;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -0.6rem;
        opacity: 0;
        transform-origin: left center;
        transition:  all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
  }
`;

const UserImg = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  cursor: pointer;
`;
