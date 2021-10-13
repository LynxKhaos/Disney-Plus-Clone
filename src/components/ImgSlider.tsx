import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

interface Props {}

const ImgSlider: React.FC<Props> = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='/images/slider-badging.jpg' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-badag.jpg' alt='' />
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 2rem;

  ul li button {
    &:before {
      font-size: 1rem;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 0.4rem solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    box-shadow: rgb(0 0 0 / 69%) 0 2.6rem 3rem -1rem,
      rgb(0 0 0 / 73%) 0 1.6rem 1rem -1rem;
    transition-duration: 300ms;

    &:hover {
      border: 0.4rem solid rgba(249, 249, 249, 0.8);
    }
  }
`;
