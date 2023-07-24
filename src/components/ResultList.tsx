import styled from 'styled-components';
import { useList } from '../contexts/ListProvider';
import ResultItem from './ResultItem';
import { Idiease } from '../contexts/ListContext';

const Wrapper = styled.div`
  width: 100%;
  max-height: 420px;
  background-color: white;
  border-radius: 20px;
  margin-top: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16);
  overflow-y: auto;
  padding-bottom: 10px;
  p {
    padding: 5px 20px 0px 20px;
    margin: 10px 0px 5px 0px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
  & > div:first-child {
    padding-top: 4px !important;
  }
`;

export default function ResultList() {
  const { dieaseData, keyword, focusListItem } = useList();

  return (
    <Wrapper>
      {keyword == '' ? (
        <p>검색어 없음</p>
      ) : (
        <>
          <p>추천 검색어</p>
          {dieaseData.length == 0 && <p>일치하는 질환 없음</p>}
          {dieaseData.map((diease: Idiease, index: number) => (
            <ResultItem
              key={index}
              name={diease.sickNm}
              isfocused={focusListItem === index}
            />
          ))}
        </>
      )}
    </Wrapper>
  );
}
