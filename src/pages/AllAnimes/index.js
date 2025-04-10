import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Router from "next/router";
import Pagination from "../../components/Pagination/index";
import AlternativeHeader from "../../components/AlternativeHeader"
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import qs from 'qs';
import Tooltip from '@mui/material/Tooltip';
import { FaBars, FaFilm, FaStar } from 'react-icons/fa';
import { FcLike } from "react-icons/fc";

import * as S from "./style";


export default function AllAnimes() {
  const [requestAnime, setRequestAnime] = useState({});
  const [offset, setOffset] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);

  const api = 'https://kitsu.io/api/edge/';

  const LIMIT = 20;

  useEffect(() => {
    setRequestAnime({})

    const query = {
      page: {
        limit: LIMIT,
        offset
      }
    };

    axios
      .get(`${api}anime?${qs.stringify(query)}`)
      .then((response) => {
        setRequestAnime(response.data);
      });
  }, [offset]);


  return (
    <>
      <S.ContainerSideBar>
        <FaBars onClick={showSiderbar} color="white" size={45} cursor="pointer" />
        {sidebar && <Sidebar active={setSidebar} />}
      </S.ContainerSideBar>
      <AlternativeHeader conection={requestAnime} />
      <S.Title>
        <FaFilm color=" #F46D1B" size={27} style={{ position: "absolute" }} /><S.Text>Todos os animes</S.Text>
      </S.Title>
      <S.Content>
        {requestAnime &&
          requestAnime?.data?.map((item) => {
            return (
              <Tooltip PopperProps={{
                sx: {
                  "& .MuiTooltip-tooltip": {
                    background: "#262626",
                    padding: 2,
                    width: 230,
                    height: 250
                  }
                }
              }} arrow placement="bottom" title={
                <S.InsideTooltip>
                  <S.TitleTooltip>{item?.attributes?.canonicalTitle}</S.TitleTooltip>
                  <S.PercentageTooltip>{item?.attributes?.averageRating}%</S.PercentageTooltip>
                  <S.PopularityTooltip><FcLike /> # {item?.attributes?.popularityRank} Mais Popular</S.PopularityTooltip>
                  <S.RankTooltip><FaStar color="#FFE145" /> # {item?.attributes?.ratingRank} Melhor Classificado</S.RankTooltip>
                  <S.SynopsisTooltip>{item?.attributes?.synopsis ? item?.attributes?.synopsis.substring(0, 180) : "não existe descrição"}...</S.SynopsisTooltip>
                </S.InsideTooltip>
              }
              >
                <S.Img src={item?.attributes?.posterImage.small} onClick={() => Router.push(`/AnimesSelected?id=${item.id}`)} />
              </Tooltip>
            );
          })}
      </S.Content>

      {requestAnime && (
        <Pagination
          limit={LIMIT}
          total={requestAnime?.meta?.count}
          offset={offset}
          setOffset={setOffset}
        />
      )}
      <S.ContentImg>
        <S.ImgCat src="./yuzu 3.png" />
      </S.ContentImg>
      <Footer />
    </>
  )
}
