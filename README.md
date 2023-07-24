# 원티드 프론트엔드 인턴십 4주차 과제

## 프로젝트 소개

[한국임상정보](https://github.com/facebook/react/issues)의 검색 영역 클론하기

## 실행방법

```
$ npm install
$ npm start
```

## 서버 구동 방법

```
$ git clone https://github.com/KingDonggyu/clinicaltrials-search.git
$ npm install
$ npm start
```

## 개발환경

- 언어 : typescript
- 라이브러리 및 프레임워크: react, axios, styled-components

## 기능 구현

### API 호출 별 로컬 캐싱 구현

- cacheStorage API 사용

### API 호출 횟수 최적화 구현

- useDebounce 커스텀 훅 사용

```typescript
function useDebounce<T>({ value, delay }: debounceProps<T>): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
```

- useDebounce 내부 로직에 따라 0.5초 안에 다른 이벤트가 발생하지 않으면 정상적으로 변한 value가 리턴되어 값을 갖게 될 것이고 그렇지 않으면 기존 값을 그대로 리턴

- useEffect를 사용하여 의존성 배열에 해당 값을 넣어 값이 변할 경우 api를 호출

### 키보드만으로 추천 검색어들로 이동 가능하도록 구현

- context에 focus된 item의 인덱스 값을 가진 state 생성

- 키보드 이벤트를 다루는 handleFocusItem 함수 구현

```typescript
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
```

- input의 onKeyDown 이벤트 핸들러로 전달
