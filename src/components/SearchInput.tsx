import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const Wrapper = styled.div`
  display: flex;
  button {
    border: none;
    background-color: #357ae1;
    color: white;
    padding: 20px;
    border-bottom-right-radius: 50%;
    border-top-right-radius: 50%;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: white;
  width: 400px;
  border-bottom-left-radius: 40px;
  border-top-left-radius: 40px;

  &:first-child {
  }
  input {
    width: 100%;
    margin-left: 10px;
    border: none;
    outline: none;
  }
`;

export default function SearchInput() {
  return (
    <Wrapper>
      <InputWrapper>
        <IoSearch size="24" />
        <input placeholder="질환명을 입력해주세요" />
      </InputWrapper>
      <button>검색</button>
    </Wrapper>
  );
}
