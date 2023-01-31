import React from "react";
import * as S from "./style";

function Sidebar(){
    return(
        <S.Container>
            <S.Icon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlaESEcIJwR5DOmd7DzGqo-dFsUkFf89CCx4jLsAyc1GhFtwjFwQy7O3ruN_3ilcdk8bU&usqp=CAU "/>
            <S.Containerbuttons>
                <S.Button>Mais vistos</S.Button>
                <S.Button>Melhores</S.Button>
                <S.Button>Mais Procurados</S.Button>
                <S.Button>Mais Visitados</S.Button>
            </S.Containerbuttons>
            <S.Imput type="search" placeholder="Busque seu anime"/> 
        </S.Container>
    )
}

export default Sidebar