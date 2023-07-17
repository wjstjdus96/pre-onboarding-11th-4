import React from 'react';
import { styled } from 'styled-components';

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
    <div className="App">
      <Header>
        <div>국내 모든 임상시험 검색하고</div>
        <div>온라인으로 참여하기</div>
      </Header>
    </div>
  );
}

export default App;
