import styled from 'styled-components';
import { useList } from '../contexts/ListProvider';
import ResultItem from './ResultItem';
import { Idiease } from '../contexts/ListContext';
import { useState, useRef } from 'react';

const Wrapper = styled.div`
  width: 78%;
  max-height: 420px;
  background-color: white;
  border-radius: 10px;
  margin-top: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16);
  overflow-y: auto;
  p {
    padding: 5px 20px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const ListTitle = styled.div`
  font-size: 11px;
  color: rgba(0, 0, 0, 0.5);
  padding: 20px 20px 10px 20px;
`;

export default function ResultList() {
  const { dieaseData, keyword, focusListItem } = useList();

  return (
    <Wrapper>
      <ListTitle>추천 검색어</ListTitle>
      {dieaseData.map((diease: Idiease, index: number) => (
        <ResultItem
          key={index}
          name={diease.sickNm}
          isfocused={focusListItem === index}
        />
      ))}
      {keyword == '' && <p>검색어 없음</p>}
    </Wrapper>
  );
}
