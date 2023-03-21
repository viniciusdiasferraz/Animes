import SearchInput from "../SearchInput";
import * as S from "./style";

export default function AlternativeHeader({background, conection, position, requestSearch }) {

    return (
        <S.Container background={background} position={position}>
            <S.Containerimput>
                <S.Logo src="./logo.svg" />
                <SearchInput requestSearch={conection} />
            </S.Containerimput>
            <S.Textcontainer >
            </S.Textcontainer>
        </S.Container>
    )
}
