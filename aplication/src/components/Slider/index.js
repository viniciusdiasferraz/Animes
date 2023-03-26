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
          <S.Text><span>Naruto</span>: Incrível. Personagens simpáticos, uma história com coração e muita animação. A música também é fantástica.</S.Text>
        </div>
        <div>
          <S.Singleimg src="./dragon banner.png" alt="Banner Dragon Ball" />
          <S.Text><span>Dragon bal z</span>:  Você conhece pelo nome e reputação, e honestamente é a série que redefiniu o que o anime shonen se tornaria para melhor ou para pior.</S.Text>
        </div>
        <div>
          <S.Singleimg src="./one peace banner.png" alt="Banner One Peace" />
          <S.Text><span>One Piece</span>: Um anime incrível com construção de mundo incrivelmente memorável. Montanha russa de emoções, cheia de aventura e grandes personagens.</S.Text>
        </div>
      </Slider>
    </S.Body>
  );
};

export default Sliders;

