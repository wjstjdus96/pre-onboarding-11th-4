import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
import { getDiseases } from '../services/keywordService';
import { useState, useEffect, useContext, useRef } from 'react';
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
    focusListItem,
    setDieaseData,
    setIsFocused,
    setKeyword,
    setFocusListItem,
  } = useList();

  const changeKeyword = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const getKeywordResults = (keyword: string) => {
    getDiseases(keyword, setDieaseData);
    setFocusListItem(-1);
  };

  const handleFocusItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        setFocusListItem((prev: number) => (prev + 1) % dieaseData.length);
        break;
      case 'ArrowUp':
        setFocusListItem((prev: number) =>
          prev - 1 < 0 ? dieaseData.length - 1 : prev - 1,
        );
    }
  };

  useEffect(() => {
    if (keyword) {
      getKeywordResults(keyword);
    } else {
      setDieaseData([]);
    }
  }, [keyword]);

  return (
    <Wrapper>
      <InputWrapper>
        <IoSearch size="24" opacity="0.5" />
        <input
          value={keyword}
          onChange={changeKeyword}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleFocusItem}
          placeholder="질환명을 입력해주세요"
        />
      </InputWrapper>
      <button>검색</button>
    </Wrapper>
  );
}
