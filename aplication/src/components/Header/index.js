import React from "react";
import * as S from "./style";
import { FaSistrix } from 'react-icons/fa';




function Header({ usedonbutton, usedonfilter, setusedonfilter }) {

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
        }
    }

    return (
        <S.Container  >
            <S.Containerimput>
                <S.Logo src="./logo.svg" />
                <S.Containersearch>
                    <S.Imput
                        onChange={(e) => setusedonfilter(e.target.value.toLowerCase(usedonfilter))}
                        type="search"
                        placeholder='Buscar'
                        onKeyDown={handleKeyDown}
                    />
                    <FaSistrix onClick={() => { usedonbutton() }} cursor="pointer" color="white"
                        style={{
                            position: "absolute",
                            top: "50%",
                            right: "15px",
                            transform: "translateY(-50%)"
                        }} />
                </S.Containersearch>
            </S.Containerimput>
            <S.Textcontainer >
                <S.paragraphone>
                    O <span>Maior</span> Catálogo de
                </S.paragraphone>
                <S.paragraphtwo>
                    <span>Anime</span> do Mundo
                </S.paragraphtwo>
            </S.Textcontainer>
        </S.Container>
    )
}

export default Header