import Slider from "../components/Slider";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Router from "next/router";

export default function Home() {
  const [requestAnime, setRequestAnime] = useState();


  const anime = () => {
    axios
      .get("https://kitsu.io/api/edge/anime?")
      .then((response) => {
        setRequestAnime(response.data.data);
      });
  };
  console.log(requestAnime, "requestAnime");

  useEffect(() => {
    anime();
  }, []);


  const settings = {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: true,
    loop: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
  };

  return (
    <>
      <Header />
      <Slider settings={settings} />
      <h1>Animes</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {requestAnime &&
          requestAnime.map((item) => {
            return (
              <>
                <SwiperSlide onClick={() => Router.push(`/AnimesSelected?id=${item.id}`)}>
                  <p>{item?.attributes?.canonicalTitle}</p>
                  <img src={item?.attributes?.posterImage.original} />
                </SwiperSlide>
              </>
            );
          })}
      </Swiper>
      <a onClick={() =>  Router.push(`/AllAnimes`)}>Ver mais animes</a>


    </>
  );
}
