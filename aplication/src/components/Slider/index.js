import * as S from "./styles";


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sliders = () => {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
  <S.Body>
    <Slider {...settings}>
      <div>
        <S.Singleimg src="./naruto banner.png" alt="Banner Naruto" />
      </div>
      <div>
        <S.Singleimg src="./dragon banner.png" alt="Banner Dragon Ball" />
      </div>
      <div>
        <S.Singleimg src="./one peace banner.png" alt="Banner One Peace" />
      </div>
    </Slider>
    </S.Body>
  );
};

export default Sliders;

