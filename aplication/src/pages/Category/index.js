import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./style";
import Pagination from "../../components/Pagination/index";
import qs from 'qs';
import Footer from "../../components/Footer";
import Router from "next/router";
import AlternativeHeader from "../../components/AlternativeHeader";
import { FaBars } from 'react-icons/fa';
import Sidebar from "../../components/Sidebar";







function Category() {
    const [categorySelected, setCategorySelected] = useState();
    const [offset, setOffset] = useState(0);
    const LIMIT = 20;
    const [sidebar, setSidebar] = useState(false)
    const showSiderbar = () => setSidebar(!sidebar)

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



    return (
        <>
            <FaBars onClick={showSiderbar} style={{ background: "#F46D1B", position: "absolute", width: "4.3em", height: "217.1vh" }} size={20} color="white" cursor="pointer" />
            {sidebar && <Sidebar active={setSidebar} />}
            <AlternativeHeader />
            <S.Content>
                {categorySelected &&
                    categorySelected?.data?.map((item) => {
                        return (
                            <S.Container onClick={() => Router.push(`/AnimesSelected?id=${item.id}`)}>
                                <S.Img src={item?.attributes?.posterImage.small} />
                            </S.Container >
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

export default Category