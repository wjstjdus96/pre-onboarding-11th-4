import { IoSearch } from 'react-icons/io5';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 13px;
`;
const Itemname = styled.div`
  font-size: 14px;
  margin-left: 8px;
`;

interface IResultItem {
  name: string;
}

export default function ResultItem({ name }: IResultItem) {
  return (
    <Wrapper>
      <IoSearch size="24" opacity="0.5" />
      <Itemname>{name}</Itemname>
    </Wrapper>
  );
}
