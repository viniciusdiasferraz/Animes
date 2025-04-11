import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import AlternativeHeader from "../../components/AlternativeHeader";
import Sidebar from "../../components/Sidebar";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FaBars, FaStar } from "react-icons/fa";
import { BsPlayBtnFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

import * as S from "../../styles/AnimesSelected/style";

export default function AnimesSelected() {
  const [animeSelected, setAnimeSelected] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    border: "2px solid #000",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    bgcolor: "black",
  };

  let url;
  let characterId;

  if (typeof window !== "undefined") {
    url = window?.location?.href;
    characterId = url.split("id=")[1];
  }

  const selectAnime = () => {
    axios
      .get(`https://kitsu.io/api/edge/anime/${characterId}`)
      .then((response) => {
        setAnimeSelected(response?.data?.data);
        setVideoUrl(response?.data?.data?.attributes?.youtubeVideoId);
      });
  };

  useEffect(() => {
    selectAnime();
  }, []);

  return (
    <>
      <S.ContainerSideBar>
        <FaBars
          onClick={showSiderbar}
          color="white"
          size={45}
          cursor="pointer"
        />
        {sidebar && <Sidebar active={setSidebar} />}
      </S.ContainerSideBar>
      <AlternativeHeader position="absolute" />
      <S.ImgCover
        src={
          animeSelected?.attributes?.coverImage
            ? animeSelected?.attributes?.coverImage.small
            : "./fundoaleatorio.jpg"
        }
      />
      <S.Container>
        <S.SpaceImgButton>
          <S.Img src={animeSelected?.attributes?.posterImage.small} />
        </S.SpaceImgButton>
        <S.SpaceDescription>
          <S.TextTitle>{animeSelected?.attributes?.canonicalTitle}</S.TextTitle>
          <S.Text>{animeSelected?.attributes?.synopsis}</S.Text>
        </S.SpaceDescription>
      </S.Container>
      <S.AnimeVideo>
        <S.Button onClick={handleOpen}>
          <BsPlayBtnFill color="white" size={35} />
          Ver Trailer
        </S.Button>
        <S.TextRating>
          Aprovado por <span>{animeSelected?.attributes?.averageRating}</span>%
          da Comunidade
        </S.TextRating>
        <S.Textpopularity>
          <FcLike size={20} /> #{animeSelected?.attributes?.popularityRank} Mais
          Popular
        </S.Textpopularity>
        <S.TextRank>
          <FaStar color="#FFE145" size={20} /> #
          {animeSelected?.attributes?.ratingRank} Melhor Classificado
        </S.TextRank>
      </S.AnimeVideo>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <iframe
            src={`https://www.youtube.com/embed/${videoUrl}`}
            width="950px"
            height="500px"
          ></iframe>
        </Box>
      </Modal>
      <S.ContentImg>
        <S.ImgCat src="./yuzu 3.png" />
      </S.ContentImg>
      <Footer />
    </>
  );
}
