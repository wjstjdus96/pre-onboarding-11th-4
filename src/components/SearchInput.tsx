import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
import { getDiseases } from '../services/keywordService';
import { useState, useEffect, useContext } from 'react';
import { useList } from '../contexts/ListProvider';

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

  input {
    width: 100%;
    margin-left: 10px;
    border: none;
    outline: none;
  }
`;

export default function SearchInput() {
  const {
    keyword,
    dieaseData,
    isFocused,
    setDieaseData,
    setIsFocused,
    setKeyword,
  } = useList();

  const changeKeyword = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const getKeywordResults = (keyword: string) => {
    getDiseases(keyword).then((res) => {
      if (res.status == 200) {
        console.log(res.data);
        setDieaseData(res.data);
      }
    });
  };

  return (
    <Wrapper>
      <InputWrapper>
        <IoSearch size="24" opacity="0.5" />
        <input
          value={keyword}
          onChange={changeKeyword}
          onFocus={() => setIsFocused(true)}
          placeholder="질환명을 입력해주세요"
        />
      </InputWrapper>
      <button onClick={() => getKeywordResults(keyword)}>검색</button>
    </Wrapper>
  );
}
