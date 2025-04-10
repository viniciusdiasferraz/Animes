import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../../components/Pagination/index";
import qs from 'qs';
import Footer from "../../components/Footer";
import Router from "next/router";
import AlternativeHeader from "../../components/AlternativeHeader";
import { FaBars, FaFilm, FaStar } from 'react-icons/fa';
import Sidebar from "../../components/Sidebar";
import { FcLike } from "react-icons/fc";
import Tooltip from '@mui/material/Tooltip';

import * as S from "./style";

export default function Category() {
    const [categorySelected, setCategorySelected] = useState();
    const [offset, setOffset] = useState(0);
    const LIMIT = 20;
    const [sidebar, setSidebar] = useState(false)
    const showSiderbar = () => setSidebar(!sidebar)
    const [screenCategory, setScreenCategory] = useState()

    let url;
    let categoryUrl;

    const query = {
        page: {
            limit: LIMIT,
            offset
        }
    };

    if (typeof window !== "undefined") {
        url = window?.location?.href;
        categoryUrl = url.split("anime?")[1];
    }

    useEffect(() => {
        axios
            .get(
                `https://kitsu.io/api/edge/anime?${categoryUrl}&${qs.stringify(query)}`
            )
            .then((response) => {
                setCategorySelected(response?.data);
            });
    }, [offset]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            setScreenCategory(params.toString().replace('%2Fanime%3Ffilter%5Bcategories%5D=', ''))
        }
    }, [])

    const selectedcategory = () => {
        switch (screenCategory) {
            case "comedy":
                return "Comedy";
            case "Fantasy":
                return "Fantasy";
            case "Romance":
                return "Romance";
            case "Action":
                return "Action";
            case "Drama":
                return "Drama";
            case "School+Life":
                return "School Life";
            case "Adventure":
                return "Adventure";
            case "Slice+of+Life":
                return "Slice of Life";
            case "Yaoi":
                return "Yaoi";
            case "Science+Fiction":
                return "Science Fiction";
            case "Shoujo+Ai":
                return "Shoujo Ai";
            case "Ecchi":
                return "Ecchi";
            case "Sports":
                return "Sports";
            case "Historical":
                return "Historical";
            case "Magic":
                return "Magic";
            case "Mystery":
                return "Mystery";
            case "Japan":
                return "Japan";
            case "Harem":
                return "Harem";
            case "Music":
                return "Music";
            case "Thriller":
                return "Thriller";
            case "Earth":
                return "Earth";
            case "Psychological":
                return "Psychological";
            case "Supernatural":
                return "Supernatural";
            case "Kids":
                return "Kids";
            case "Horror":
                return "Horror";
            case "Present":
                return "Present";
            case "Shounen+Ai":
                return "Shounen Ai";
            case "Asia":
                return "Asia";
            case "Shounen":
                return "Shounen";
            case "Seinen":
                return "Seinen";
            case "Martial+Arts":
                return "Martial Arts";
            case "Mecha":
                return "Mecha";
            case "Super+Power":
                return "Super Power";
            case "Demon":
                return "Demon";
            case "Isekai":
                return "Isekai";
            case "Fantasy+World":
                return "Fantasy World";
            case "Shoujo":
                return "Shoujo";
            case "Military":
                return "Military";
            case "Violence":
                return "Violence";
            case "Plot+Continuity":
                return "Plot Continuity";
            default:
                return "Desconhecido";
        }
    }

    return (
        <>
            <S.ContainerSideBar>
                <FaBars onClick={showSiderbar} color="white" size={45} cursor="pointer" />
                {sidebar && <Sidebar active={setSidebar} />}
            </S.ContainerSideBar>
            <AlternativeHeader />
            <S.Title>
                <FaFilm color=" #F46D1B" size={27} style={{ position: "absolute" }} /><S.Text>{selectedcategory()}</S.Text>
            </S.Title>
            <S.Content>
                {categorySelected &&
                    categorySelected?.data?.map((item) => {
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
            {categorySelected && (
                <Pagination
                    limit={LIMIT}
                    total={categorySelected?.meta?.count}
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