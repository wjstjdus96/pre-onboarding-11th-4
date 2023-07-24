import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
    'cache-control': true,
  },
  withCredentials: true,
});

export const getDiseasesData = async (keyword: string) => {
  const result = axiosInstance.get('/sick', {
    params: {
      q: keyword,
    },
  });
  console.info('calling api');
  return result;
};
