import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import SearchInput from './components/SearchInput';
import { ListProvider, useList } from './contexts/ListProvider';
import ResultList from './components/ResultList';

const Wrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  div {
    margin-bottom: 15px;
    font-size: 30px;
    font-weight: 800;
  }
`;

function App() {
  const { isFocused, setIsFocused } = useList();
  return (
    <Wrapper className="App">
      <Header onClick={() => setIsFocused(false)}>
        <div>국내 모든 임상시험 검색하고</div>
        <div>온라인으로 참여하기</div>
      </Header>
      <SearchInput />
    </Wrapper>
  );
}

export default App;
