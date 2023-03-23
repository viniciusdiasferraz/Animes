import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import * as S from "./style";
import AlternativeHeader from "../../components/AlternativeHeader";
import Sidebar from "../../components/Sidebar";
import { FaBars } from 'react-icons/fa'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';





export default function AnimesSelected() {
    const [animeSelected, setAnimeSelected] = useState();
    const [videoUrl, setVideoUrl] = useState();
    const [sidebar, setSidebar] = useState(false)
    const showSiderbar = () => setSidebar(!sidebar)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        border: '2px solid #000',
        transform: 'translate(-50%, -50%)',
        boxShadow: 24,
        bgcolor: 'black',
    };



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
                setVideoUrl(response?.data?.data?.attributes?.youtubeVideoId)
            });
    };

    console.log(videoUrl, "video");

    useEffect(() => {
        selectAnime();
    }, []);


    console.log(animeSelected, "resposta");

    return (
        <>
            <FaBars onClick={showSiderbar} style={{ background: "#F46D1B", position: "absolute", width: "4.3em", height: "217.1vh", zIndex: "2" }} size={20} color="white" cursor="pointer" />
            {sidebar && <Sidebar active={setSidebar} />}
            <AlternativeHeader position='absolute' />
            <S.Img src={animeSelected?.attributes?.coverImage ? animeSelected?.attributes?.coverImage.small : "./fundoaleatorio.jpg" } />
            <S.Img src={animeSelected?.attributes?.posterImage.small} />
            <S.Text>{animeSelected?.attributes?.canonicalTitle}</S.Text>
            <S.Text>{animeSelected?.attributes?.synopsis}</S.Text>
            <S.Text>{animeSelected?.attributes?.averageRating}</S.Text>
            <S.Text>{animeSelected?.attributes?.popularityRank}</S.Text>
            <S.Text>{animeSelected?.attributes?.ratingRank}</S.Text>
            <S.Button onClick={handleOpen}>Open modal</S.Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <iframe src={`https://www.youtube.com/embed/${videoUrl}`} width="950px" height="500px">
                    </iframe>
                </Box>
            </Modal>
            <S.ContentImg>
                <S.ImgCat src="./yuzu 3.png" />
            </S.ContentImg>
            <Footer />
        </>
    )
}

