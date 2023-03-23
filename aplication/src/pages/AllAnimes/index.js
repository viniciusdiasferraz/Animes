import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Router from "next/router";
import * as S from "./style";
import Pagination from "../../components/Pagination/index";
import AlternativeHeader from "../../components/AlternativeHeader"
import Footer from "../../components/Footer";
import qs from 'qs';
import { FaBars, FaFilm } from 'react-icons/fa';
import Sidebar from "../../components/Sidebar";



export default function AllAnimes() {
  const [requestAnime, setRequestAnime] = useState({});
  const [offset, setOffset] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);


  const api = 'https://kitsu.io/api/edge/';

  const LIMIT = 20;

  console.log(requestAnime, "requestAnime");

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
      <FaBars onClick={showSiderbar} style={{ background: "#F46D1B", position: "absolute", width: "4.3em", height: "217.1vh" }} size={20} color="white" cursor="pointer" />
      {sidebar && <Sidebar active={setSidebar} />}
      <AlternativeHeader conection={requestAnime} />
      <S.Text><FaFilm/>Todos os animes</S.Text>
      <S.Content>
        {requestAnime &&
          requestAnime?.data?.map((item) => {
            return (
              <S.Container onClick={() => Router.push(`/AnimesSelected?id=${item.id}`)}>
                <S.Img src={item?.attributes?.posterImage.small} />
              </S.Container>
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
