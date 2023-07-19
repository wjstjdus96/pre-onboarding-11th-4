import { createContext } from 'react';

export interface Idiease {
  sickCd: string;
  sickNm: string;
}

export interface ListContextProps {
  isFocused: boolean;
  setIsFocused: (i: any) => void;
  dieaseData: Idiease[];
  setDieaseData: (i: any) => void;
  keyword: string;
  setKeyword: (i: any) => void;
  focusListItem: number;
  setFocusListItem: (i: any) => void;
}

const initialListContext: ListContextProps = {
  isFocused: false,
  setIsFocused: (i: boolean) => {},
  dieaseData: [],
  setDieaseData: (i: any) => {},
  keyword: '',
  setKeyword: (i: any) => {},
  focusListItem: -1,
  setFocusListItem: (i: any) => {},
};

export const ListContext = createContext<ListContextProps>(initialListContext);
