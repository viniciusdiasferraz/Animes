import React from 'react';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";

import * as S from "./style";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({
  limit,
  total,
  offset,
  setOffset
}) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(
    Math.max(current - MAX_LEFT, 1),
    maxFirst
  );

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <S.Container>
        <S.List>
          <BsFillArrowLeftSquareFill color="#F46D1B" size={45} onClick={() => onPageChange(current - 1)}
            disabled={current === 1} />
        </S.List>
        <S.List>
          <BsFillArrowRightSquareFill color="#F46D1B" size={45} onClick={() => onPageChange(current + 1)}
            disabled={current === pages} />
        </S.List>
    </S.Container>
  );
};

export default Pagination;