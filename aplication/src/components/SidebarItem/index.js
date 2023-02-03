import React from 'react'
import * as S from "./style";

const SidebarItem = ({ Icon, Text }) => {
  return (
    <S.Container>
      <Icon />
      {Text}
    </S.Container>
  )
}

export default SidebarItem