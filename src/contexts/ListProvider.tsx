import { useContext, useState, useMemo } from 'react';
import { Idiease, ListContext } from './ListContext';

interface IListProvider {
  children: React.ReactNode;
}

export function ListProvider({ children }: IListProvider) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [dieaseData, setDieaseData] = useState<Idiease[]>([]);
  const [keyword, setKeyword] = useState<string>('');

  return (
    <ListContext.Provider
      value={{
        isFocused,
        dieaseData,
        keyword,
        setIsFocused,
        setDieaseData,
        setKeyword,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}

export const useList = () => useContext(ListContext);
