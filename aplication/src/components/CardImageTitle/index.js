import Tooltip from '@mui/material/Tooltip';
import { FcLike } from "react-icons/fc";
import { FaStar } from 'react-icons/fa';

import * as S from './style';


export default function CardImageTitle ({connection}){
    return (
        <S.Content>
            <S.InsideContent>
            {connection &&
                connection.map((item) => {
                return (
                    <Tooltip  arrow title={
                    <S.InsideTooltip>
                        <S.TitleTooltip>{item?.attributes?.canonicalTitle}</S.TitleTooltip>
                        <S.PercentageTooltip>{item?.attributes?.averageRating}%</S.PercentageTooltip>
                        <S.PopularityTooltip><FcLike /> # {item?.attributes?.popularityRank} Mais Popular</S.PopularityTooltip>
                        <S.RankTooltip><FaStar color="#FFE145" /> # {item?.attributes?.ratingRank} Melhor Classificado</S.RankTooltip>
                        <S.SynopsisTooltip>{item?.attributes?.synopsis ? item?.attributes?.synopsis.substring(0, 180): "Não existe descrição"}... </S.SynopsisTooltip>
                    </S.InsideTooltip>
                    }
                    >
                    <S.Img src={item?.attributes?.posterImage.small} onClick={() => Router.push(`/AnimesSelected?id=${item.id}`)} />
                    </Tooltip>
                );
                })}
            </S.InsideContent>
      </S.Content>

    )
}