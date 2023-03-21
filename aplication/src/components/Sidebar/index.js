import React from 'react'
import * as S from "./style";
import { FaList } from 'react-icons/fa'


const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <S.Container sidebar={active}>
      <S.Text onClick={closeSidebar}>x</S.Text>
      <S.Content>
        <S.TextTitle><FaList/>Categorias</S.TextTitle>
        <S.List>
          <S.Item><a href='/Category?/anime?filter[categories]=comedy'>Comedy</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Fantasy'>Fantasy</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Romance'>Romance</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Action'>Action</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Drama'>Drama</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=School S.Itemfe'>School S.Itemfe</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Adventure'>Adventure</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=SS.Itemce of S.Itemfe'>SS.Itemce of S.Itemfe</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Yaoi'>Yaoi</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Science Fiction'>Science Fiction</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Shoujo Ai'>Shoujo Ai</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Ecchi'>Ecchi</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Sports'>Sports</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Historical'>Historical</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Magic'>Magic</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Mystery'>Mystery</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Japan'>Japan</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Harem'>Harem</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Music'>Music</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Thriller'>Thriller</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Earth'>Earth</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Psychological'>Psychological</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Supernatural'>Supernatural</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Kids'>Kids</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Horror'>Horror</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Present'>Present</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Shounen Ai'>Shounen Ai</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Asia'>Asia</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Shounen'>Shounen</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Seinen'>Seinen</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Martial Arts'>Martial Arts</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Mecha'>Mecha</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Super Power'>Super Power</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Demon'>Demon</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Isekai'>Isekai</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Fantasy World'>Fantasy World</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Shoujo'>Shoujo</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=MiS.Itemtary'>MiS.Itemtary</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Violence'>Violence</a></S.Item>
          <S.Item><a href='/Category?/anime?filter[categories]=Plot Continuity'>Plot Continuity</a></S.Item>
        </S.List>
      </S.Content>
    </S.Container>
  )
}

export default Sidebar