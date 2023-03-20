import Router from "next/router";
import * as S from "./style";


function footer() {
    return (
        <S.Content>
            <S.Containerone>
                <S.Text>
                    Ainda está procurando algo pra assistir?
                    <span>Confira nosso acervo completo</span>
                </S.Text>
                <S.Button onClick={() => Router.push(`/AllAnimes`)}>
                    Ver Tudo
                </S.Button>
            </S.Containerone>
            <S.Containertwo>
                <S.Textcopyrigth>
                    © 2023 FPR Animes - Todos os direitos reservados.
                </S.Textcopyrigth>
                <S.Img src="./icon logo animes branco 1.png" />
            </S.Containertwo>
        </S.Content>
    )
}

export default footer