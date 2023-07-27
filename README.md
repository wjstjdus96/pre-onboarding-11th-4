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

## 실행화면
![인턴십과제3](https://github.com/wjstjdus96/pre-onboarding-11th-4/assets/77755620/44434173-ea00-432f-8606-69dfeda97952)


## 개발환경

- 언어 : typescript
- 라이브러리 및 프레임워크: react, axios, styled-components

## 기능 구현

### API 호출 별 로컬 캐싱 구현

- cacheStorage API 사용
- 캐시를 다루는 클래스를 생성
- 캐시 저장소에서 캐시 응답과 만료기간 확인 후 서버에 데이터를 요청하거나 기존 캐시를 가져옴

```typescript
export class CacheApiServer {
  private static diseasesCahchStorage = 'DISEASE_CACHE';

  static async getDieasesByQuery(query: string) {
    const url = `${BASE_URL}/sick?q=${query}`;
    const cache = await caches.open(this.diseasesCahchStorage);
    return await this.getValidResponse(cache, url, query);
  }

  private static async getValidResponse(
    cache: Cache,
    url: string,
    query: string,
  ) {
    const cacheResponse = await caches.match(url);
    return cacheResponse && !this.isCacheExpired(cacheResponse)
      ? await cacheResponse.json()
      : await this.getFetchResponse(cache, url, query);
  }

  private static async getFetchResponse(
    cache: Cache,
    url: string,
    query: string,
  ) {
    const fetchResponse = await getDiseasesData(query);
    if (fetchResponse.data.length !== 0) {
      this.setCacheResponse(cache, url, fetchResponse);
    }
    return fetchResponse;
  }

  static async setCacheResponse(cache: Cache, url: string, data: any) {
    const cacheResponse = new Response(JSON.stringify(data));
    const newResponse = await this.getResponseWithFetchDate(cacheResponse);
    cache.put(url, newResponse);
  }

  private static async getResponseWithFetchDate(fetchResponse: Response) {
    const cloneResponse = fetchResponse.clone();
    const newBody = await cloneResponse.blob();
    const newHeaders = new Headers(cloneResponse.headers);
    newHeaders.append(HEADER_FETCH_DATE, new Date().toISOString());

    return new Response(newBody, {
      status: cloneResponse.status,
      statusText: cloneResponse.statusText,
      headers: newHeaders,
    });
  }

  private static isCacheExpired(cacheResponse: Response) {
    const fetchDate = new Date(
      cacheResponse.headers.get(HEADER_FETCH_DATE)!,
    ).getTime();
    const today = new Date().getTime();
    return today - fetchDate > ONE_DAY_MILISECOND;
  }
}

```

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
