import * as S from "./style";

export default function AlternativeHeader({ title, background, conection}) {

    console.log(conection, "esse é o conection");

    return (
        <S.Container background={background} >
            <h1>{title}</h1>
            <S.Containerimput>
                <S.Logo src="./logo.svg" />
            </S.Containerimput>
            <S.Textcontainer >
            </S.Textcontainer>
        </S.Container>
    )
}
