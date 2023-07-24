import { IoSearch } from 'react-icons/io5';
import styled from 'styled-components';
import { useList } from '../contexts/ListProvider';

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
  const { keyword } = useList();

  const highlightName = (name: string) => {
    if (name.indexOf(keyword) == -1) {
      return name;
    }
    const highlightStartIdx = name.indexOf(keyword);
    const highlightEndIdx = highlightStartIdx + keyword.length;
    return (
      <>
        {name.slice(0, highlightStartIdx)}
        <b>{name.slice(highlightStartIdx, highlightEndIdx)}</b>
        {name.slice(highlightEndIdx)}
      </>
    );
  };

  const highlightedName = highlightName(name);

  return (
    <Wrapper isfocus={isfocused}>
      <IoSearch size="24" opacity="0.5" />
      <Itemname>{highlightedName}</Itemname>
    </Wrapper>
  );
}
