import { getDiseasesData } from '../apis/keywordService';
import { BASE_URL, HEADER_FETCH_DATE, ONE_DAY_MILISECOND } from '../consts/api';

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
