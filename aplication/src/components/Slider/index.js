import React from "react";
import * as S from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles.module.css";

export default function Sliders({ settings, children }) {
  return (
    <>
      <Swiper
        className={styles.content}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        {...settings}
      >
        {children}
        <S.Container>
          <SwiperSlide >
            <S.Singleimg src="https://images5.alphacoders.com/104/1046568.jpg" />
          </SwiperSlide>
          <SwiperSlide >
            <S.Singleimg src="https://2.bp.blogspot.com/-j89YHwyM_vs/XLdT42TJehI/AAAAAAAABqY/Wecpzuf5ExMf_AL7NyHvOS8lw32mROYIgCKgBGAs/w0/saitama-one-punch-man-uhdpaper.com-4K-9.jpg" />
          </SwiperSlide>
          <SwiperSlide >
            <S.Singleimg src="https://my4kwallpapers.com/wp-content/uploads/2020/10/Naruto-Desktop-Wallpaper-1024x576.png" />
          </SwiperSlide>
          <SwiperSlide>
            <S.Singleimg src="https://images3.alphacoders.com/716/716813.png" />
          </SwiperSlide>
        </S.Container>
      </Swiper>
    </>
  );
}
