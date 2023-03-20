import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./style";
import Pagination from "../../components/Pagination/index";
import qs from 'qs';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Router from "next/router";





function Category() {
    const [categorySelected, setCategorySelected] = useState();
    const [offset, setOffset] = useState(0);
    const LIMIT = 20;

    let url;
    let categoryUrl;

    if (typeof window !== "undefined") {
        url = window?.location?.href;
        categoryUrl = url.split("anime?")[1];
    }

    const api = 'https://kitsu.io/api/edge/anime?'



    useEffect(() => {
        axios
            .get(
                `${api}${categoryUrl}${qs.stringify(query)}`
            )
            .then((response) => {
                setCategorySelected(response?.data?.data);
            });

        const query = {
            page: {
                limit: LIMIT,
                offset:20
            }
        };
    }, [offset]);


    console.log(categorySelected, "resposta");

    return (
        <>
        <Header/>
        <S.Content>
            {categorySelected &&
                categorySelected?.map((item) => {
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
            <Footer/>
        </>
    )
}

export default Category