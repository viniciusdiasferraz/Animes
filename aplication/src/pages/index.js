import Slider from "../components/Slider";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const [requestAnime, setRequestAnime] = useState();
  const [answer1, setAnswer1] = useState();
  const [requestManga, setRequestManga] = useState();

  const anime = () => {
    axios
      .get("https://kitsu.io/api/edge/categories/1/anime")
      .then((response) => {
        setRequestAnime(response.data.data);
      });
  };
  console.log(requestAnime, "requestAnime");

  // const drama = () =>{
  // 	axios.get('https://kitsu.io/api/edge/categories/1/relationships/drama').then((response) => {
  // 		setAnswer1(response.data);
  // 	});
  // }

  const manga = () => {
    axios
      .get("https://kitsu.io/api/edge/categories/1/manga")
      .then((response) => {
        setRequestManga(response.data.data);
      });
  };

  // console.log(resposta1, "resposta1");
  //   console.log(requestManga, "requestManga");

  useEffect(() => {
    anime();
  }, []);

  //   useEffect(() => {
  // 	drama();
  //   }, []);

  useEffect(() => {
    manga();
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
            < >
                <SwiperSlide>
                  <p>{item?.attributes?.canonicalTitle}</p>
                  <img src={item?.attributes?.posterImage.small} />
                </SwiperSlide>
            </>
          );
        })}
        </Swiper>

        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
      {requestManga &&
        requestManga.map((item) => {
          return (
            < >
                <SwiperSlide>
                  <p>{item?.attributes?.canonicalTitle}</p>
                  <img src={item?.attributes?.posterImage.small} />
                </SwiperSlide>
            </>
          );
        })}
        </Swiper>
    </>
  );
}
