import React from "react";
import * as S from "./style";
import { FaBars } from 'react-icons/fa'
import {useState} from "react"
import Sidebar from '../Sidebar'

function Header() {
    const [sidebar, setSidebar] = useState(false)

    const showSiderbar = () => setSidebar(!sidebar)
    return (
        <S.Container>
            <FaBars onClick={showSiderbar} />
            {sidebar && <Sidebar active={setSidebar} />}
            <S.Icon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlaESEcIJwR5DOmd7DzGqo-dFsUkFf89CCx4jLsAyc1GhFtwjFwQy7O3ruN_3ilcdk8bU&usqp=CAU " />
            <S.Containerbuttons>
                <S.Button>Mais vistos</S.Button>
                <S.Button>Melhores</S.Button>
                <S.Button>Mais Procurados</S.Button>
                <S.Button>Mais Visitados</S.Button>
            </S.Containerbuttons>
            <S.Imput type="search" placeholder="Busque seu anime" />
        </S.Container>
    )
}

export default Header