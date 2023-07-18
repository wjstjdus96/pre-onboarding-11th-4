import styled from 'styled-components';
import { useList } from '../contexts/ListProvider';
import ResultItem from './ResultItem';
import { Idiease } from '../contexts/ListContext';

const Wrapper = styled.div`
  width: 82%;
  max-height: 450px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin-top: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16);
  overflow-y: auto;
`;

const ListTitle = styled.div`
  font-size: 11px;
  color: rgba(0, 0, 0, 0.5);
`;

export default function ResultList() {
  const { dieaseData } = useList();
  return (
    <Wrapper>
      <ListTitle>추천 검색어</ListTitle>
      {dieaseData.map((diease: Idiease, index: number) => (
        <ResultItem key={index} name={diease.sickNm} />
      ))}
    </Wrapper>
  );
}
