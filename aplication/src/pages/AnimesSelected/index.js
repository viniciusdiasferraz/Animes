import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import * as S from "./style";
import AlternativeHeader from "@/components/AlternativeHeader";


export default function AnimesSelected() {
    const [animeSelected, setAnimeSelected] = useState();

    let url;
    let characterId;

    if (typeof window !== "undefined") {
        url = window?.location?.href;
        characterId = url.split("id=")[1];
    }

    const selectAnime = () => {
        axios
            .get(
                `https://kitsu.io/api/edge/anime/${characterId}`
            )
            .then((response) => {
                setAnimeSelected(response?.data?.data);
            });
    };

    useEffect(() => {
        selectAnime();
    }, []);


    console.log(animeSelected, "resposta");

    return (
        <>
            <AlternativeHeader position='absolute' />
            <S.Img src={animeSelected?.attributes?.coverImage.small} />
            <S.Text>{animeSelected?.attributes?.canonicalTitle}</S.Text>
            <S.Text>{animeSelected?.attributes?.synopsis}</S.Text>
            <S.Img src={animeSelected?.attributes?.posterImage.small} />
            <S.Text>{animeSelected?.attributes?.averageRating}</S.Text>
            <S.Text>{animeSelected?.attributes?.popularityRank}</S.Text>
            <S.Text>{animeSelected?.attributes?.ratingRank}</S.Text>
            <S.ContentImg>
                <S.ImgCat src="./yuzu 3.png" />
            </S.ContentImg>
            <Footer />
        </>
    )
}

