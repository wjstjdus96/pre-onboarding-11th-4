import React from 'react';
import { styled } from 'styled-components';
import SearchInput from './components/SearchInput';

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
  div {
    margin-bottom: 15px;
    font-size: 30px;
    font-weight: 800;
  }
`;

function App() {
  return (
    <Wrapper className="App">
      <Header>
        <div>국내 모든 임상시험 검색하고</div>
        <div>온라인으로 참여하기</div>
      </Header>
      <SearchInput />
    </Wrapper>
  );
}

export default App;
