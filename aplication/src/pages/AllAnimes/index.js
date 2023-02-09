import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Router from "next/router";
import * as S from "./style";
import Header from "../../components/Header";


export default function AllAnimes () {
    const [requestAnime, setRequestAnime] = useState();

    const anime = () => {
        axios
          .get("https://kitsu.io/api/edge/categories/1/anime?page[limit]=20&page[offset]=0")
          .then((response) => {
            setRequestAnime(response.data.data);
          });
      };
      console.log(requestAnime, "requestAnime");
    
      useEffect(() => {
        anime();
      }, []);


    return(
        <>
        <Header/>
        <S.Content>
            {requestAnime &&
          requestAnime.map((item) => {
            return (
              <S.Container>
                <div onClick={() => Router.push(`/AnimesSelected?id=${item.id}`)}>
                  <p>{item?.attributes?.canonicalTitle}</p>
                  <img src={item?.attributes?.posterImage.small} />
                </div>
              </S.Container>
            );
          })}
        </S.Content>
        </>
    )
}
