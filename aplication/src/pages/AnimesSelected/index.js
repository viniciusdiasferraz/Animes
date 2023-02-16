import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AnimesSelected() {
    const [answer, setAnswer] = useState();

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
                setAnswer(response?.data?.data);
            });
    };

    useEffect(() => { 
        selectAnime();
    }, []);


    console.log(answer, "resposta");

    return (
        <>
            Ola
        </>
    )
}

