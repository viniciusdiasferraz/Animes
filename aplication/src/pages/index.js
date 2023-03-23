import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import Router from "next/router";
import { FaBars } from 'react-icons/fa'
import { BiStar } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import Sidebar from '../components/Sidebar'
import { useRouter } from 'next/router';

import * as S from "../styles/style";


export default function Home() {
  const [requestAnimePopularityRank, setRequestAnimePopularityRank] = useState();
  const [requestAnimeAverageRating, setRequestAnimeAverageRating] = useState();
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);
  const [search, SetSearch] = useState("");
  const [imputResult, setImputResult] = useState();
  const router = useRouter();

  const animemostpopular = () => {
    axios
      .get("https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0&sort=popularityRank")
      .then((response) => {
        setRequestAnimePopularityRank(response.data.data);
      });
  };

  useEffect(() => {
    animemostpopular();
  }, []);


  const animeaveragerating = () => {
    axios
      .get("https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0&sort=-averageRating")
      .then((response) => {
        setRequestAnimeAverageRating(response.data.data);
      });
  };

  useEffect(() => {
    animeaveragerating();
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

  const animeFiltered = () => {
    if (search) {
      axios
        .get(`https://kitsu.io/api/edge/anime?filter[text]=${search}`)
        .then((response) => {
          const anime = response.data.data[0];
          if (anime) {
            router.push(`/AnimesSelected?id=${anime.id}`);
          } else {
            alert('Nenhum anime encontrado');
          }
        })
    }
    else if (search === "") {
      alert("Digite um Anime!")
    }
  }

  return (
    <S.Container>
      <FaBars onClick={showSiderbar} style={{ background: "#F46D1B", position: "absolute", width: "4.3em", height: "217.1vh" }} size={20} color="white" cursor="pointer" />
      {sidebar && <Sidebar active={setSidebar} />}
      <Header usedonbutton={animeFiltered} usedonfilter={search} setusedonfilter={SetSearch}/>

      <S.Text><BiStar color='#F46D1B' /><span>Animes</span> Mais Populares</S.Text>

      <S.Content>
        <S.InsideContent>
          {requestAnimePopularityRank &&
            requestAnimePopularityRank.map((item) => {
              return (
                <S.Img src={item?.attributes?.posterImage.small} onClick={() => Router.push(`/AnimesSelected?id=${item.id}`)} />
              );
            })}
        </S.InsideContent>
      </S.Content>

      <Slider settings={settings} />

      <S.Text><AiOutlineLike color='#F46D1B' /><span>Animes</span> Mais Bem Classificados</S.Text>

      <S.Content>
        <S.InsideContent>
          {requestAnimeAverageRating &&
            requestAnimeAverageRating.map((item) => {
              return (
                <S.Img src={item?.attributes?.posterImage.small} onClick={() => Router.push(`/AnimesSelected?id=${item.id}`)} />
              );
            })}
        </S.InsideContent>
      </S.Content>

      <S.ContentImg>
        <S.ImgCat src="./yuzu 3.png" />
      </S.ContentImg>

      <Footer />
    </S.Container>

  );
}
