import { IoSearch } from 'react-icons/io5';
import styled from 'styled-components';
import { useState, useRef } from 'react';

const Wrapper = styled.div<{ isfocus?: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  background-color: ${(props) =>
    props.isfocus ? 'rgba(0, 0, 0, 0.1)' : '#ffffff'};
`;
const Itemname = styled.div`
  font-size: 14px;
  margin-left: 8px;
`;

interface IResultItem {
  isfocused: boolean;
  name: string;
}

export default function ResultItem({ name, isfocused }: IResultItem) {
  return (
    <Wrapper isfocus={isfocused}>
      <IoSearch size="24" opacity="0.5" />
      <Itemname>{name}</Itemname>
    </Wrapper>
  );
}
