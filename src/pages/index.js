import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { FaBars } from 'react-icons/fa'
import { BiStar } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import Sidebar from '../components/Sidebar'
import { useRouter } from 'next/router';
import CardImageTitle from "../components/CardImageTitle";
import { Drawer } from '@mui/material';

import * as S from "../styles/style";

export default function Home() {
  const [requestAnimePopularityRank, setRequestAnimePopularityRank] = useState();
  const [requestAnimeAverageRating, setRequestAnimeAverageRating] = useState();
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);
  const [search, SetSearch] = useState("");
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
    navigation: false,
    loop: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '" style="background-color: #F46D1B;"></span>';
      },
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
      <S.ContainerSideBar>
        <FaBars onClick={showSiderbar} color="white" size={45} cursor="pointer" />
        {sidebar && <Sidebar active={setSidebar} />}
      </S.ContainerSideBar>
      
      <Header usedonbutton={animeFiltered} usedonfilter={search} setusedonfilter={SetSearch} />

      <S.Text><BiStar color='#F46D1B' size={27} /><span>Animes</span>Mais Populares</S.Text>

      <CardImageTitle connection={requestAnimePopularityRank} />

      <Slider settings={settings} />

      <S.Text><AiOutlineLike color='#F46D1B' /><span>Animes</span> Mais Bem Classificados</S.Text>

      <CardImageTitle connection={requestAnimeAverageRating} />

      <S.ContentImg>
        <S.ImgCat src="./yuzu 3.png" />
      </S.ContentImg>

      <Footer />
    </S.Container>

  );
}