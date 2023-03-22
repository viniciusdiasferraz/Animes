import React from "react";
import * as S from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Sliders({ settings, children }) {
  return (
    <>
      <Swiper margin='2em' height='10em' 
        modules={[Navigation, Pagination, A11y, Autoplay]}
        {...settings}
      >
        {children}
        <S.Container>
          <SwiperSlide >
            <S.Singleimg src="./naruto banner.png" />
          </SwiperSlide>
          <SwiperSlide >
            <S.Singleimg src="./dragon banner.png"/>
          </SwiperSlide>
          <SwiperSlide>
            <S.Singleimg src="./one peace banner.png" />
          </SwiperSlide>
        </S.Container>
      </Swiper>
    </>
  );
}
