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
  const [requestManga, setRequestManga] = useState();
  const [answer1, setAnswer1] = useState();

  const anime = () => {
    axios
      .get("https://kitsu.io/api/edge/categories/1/anime")
      .then((response) => {
        setRequestAnime(response.data.data);
      });
  };
  console.log(requestAnime, "requestAnime");

  
  const manga = () => {
    axios
    .get("https://kitsu.io/api/edge/categories/1/manga")
    .then((response) => {
      setRequestManga(response.data.data);
    });
  };
  
  useEffect(() => {
    anime();
  }, []);
  
  useEffect(() => {
    manga();
  }, []);

  

  // const drama = () =>{
  // 	axios.get('https://kitsu.io/api/edge/categories/1/relationships/drama').then((response) => {
  // 		setAnswer1(response.data);
  // 	});
  // }
  // console.log(resposta1, "resposta1");
  //   console.log(requestManga, "requestManga");
  //   useEffect(() => {
  // 	drama();
  //   }, []);


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
              <>
                <SwiperSlide  onClick={() => Router.push(`/AnimesSelected?id=${item.id}`)}>
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
              <>
                <SwiperSlide >
                  <p  >{item?.attributes?.canonicalTitle}</p>
                  <img
                    src={item?.attributes?.posterImage.small}
                    
                  />
                </SwiperSlide>
              </>
            );
          })}
      </Swiper>
    </>
  );
}
