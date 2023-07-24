import { useContext, useState } from 'react';
import { Idiease, ListContext } from './ListContext';

interface IListProvider {
  children: React.ReactNode;
}

export function ListProvider({ children }: IListProvider) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [dieaseData, setDieaseData] = useState<Idiease[]>([]);
  const [keyword, setKeyword] = useState<string>('');
  const [focusListItem, setFocusListItem] = useState<number>(-1);

  return (
    <ListContext.Provider
      value={{
        isFocused,
        dieaseData,
        keyword,
        focusListItem,
        setIsFocused,
        setDieaseData,
        setKeyword,
        setFocusListItem,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}

export const useList = () => useContext(ListContext);
