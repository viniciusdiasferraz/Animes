import * as S from "./style";
import Router from "next/router";
import { useRouter } from 'next/router';
import { useState } from "react";
import axios from "axios";
import { FaSistrix } from 'react-icons/fa';



export default function AlternativeHeader({ background, position }) {
  const [search, SetSearch] = useState("");
  const router = useRouter();

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
    <S.Container background={background} position={position}>
      <S.Containerimput>
        <S.Logo src="./logo.svg" onClick={() => Router.push(`http://localhost:3000`)} />
        <S.Containersearch>
          <S.Imput
            onChange={(e) => SetSearch(e.target.value.toLowerCase(search))}
            type="search"
            placeholder='Buscar'
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
      <S.Textcontainer >
      </S.Textcontainer>
    </S.Container>
  )
}
