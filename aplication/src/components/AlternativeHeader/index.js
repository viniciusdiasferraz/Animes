import Router from "next/router";
import { useRouter } from 'next/router';
import { useState } from "react";
import axios from "axios";
import { FaSistrix } from 'react-icons/fa';

import * as S from "./style";


export default function AlternativeHeader({ background, position, filter }) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const animeFiltered = () => {
    if (search) {
      axios
        .get(`https://kitsu.io/api/edge/anime?filter[text]=${search}`)
        .then((response) => {
          const anime = response.data.data[0];
          if (anime) {
            router.push(`/AnimesSelected?id=${anime.id}`);
            console.log(anime, 'anime')
          } else {
            alert('Nenhum anime encontrado');
          }
        })
    }
    else if (search === "") {
      alert("Digite um Anime!")
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      animeFiltered()
    }
}

  return (
    <S.Container background={background} position={position}>
      <S.Containerimput>
        <S.Logo src="./logo.svg" onClick={() => Router.push(`http://localhost:3000`)} />
        <S.Containersearch>
          <S.Input
            onChange={(e) => setSearch(e.target.value.toLowerCase(search))}
            type="search"
            placeholder='Buscar'
            onKeyDown={handleKeyDown}
          />
          <FaSistrix onClick={() => { animeFiltered() }} cursor="pointer" color="white"
            style={{
              position: "absolute",
              top: "50%",
              right: "15px",
              transform: "translateY(-50%)"
            }} />
        </S.Containersearch>
      </S.Containerimput>
    </S.Container>
  )
}
