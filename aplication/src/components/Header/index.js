import React from "react";
import * as S from "./style";
import { BiSearch } from 'react-icons/fa';




function Header() {


    return (
        <S.Container  >
            <S.Containerimput>
                <S.Logo src="./logo.svg" />
            </S.Containerimput>
            <S.Textcontainer >
                <S.paragraphone>
                    O <span>Maior</span> Catalógo de
                </S.paragraphone>
                <S.paragraphtwo>
                    <span>Anime</span> do Mundo
                </S.paragraphtwo>
            </S.Textcontainer>
        </S.Container>
    )
}

export default Header