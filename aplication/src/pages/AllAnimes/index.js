import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Router from "next/router";
import * as S from "./style";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination/index";
import qs from 'qs';


export default function AllAnimes() {
  const [requestAnime, setRequestAnime] = useState({});
  const [offset, setOffset] = useState(0);

  const api = 'https://kitsu.io/api/edge/';

  const LIMIT = 12;

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
      <Header />
      <S.Content>
        {requestAnime &&
          requestAnime?.data?.map((item) => {
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

      {requestAnime && (
        <Pagination
          limit={LIMIT}
          total={requestAnime?.meta?.count}
          offset={offset}
          setOffset={setOffset}
        />
      )}
    </>
  )
}
