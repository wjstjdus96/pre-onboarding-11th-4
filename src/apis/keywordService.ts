import axios from 'axios';
import { error } from 'console';

export async function getDiseases(
  keyword: string,
  setHandler: (i: any) => void,
) {
  return await axios
    .get(`http://localhost:4000/sick?q=${keyword}`)
    .then((res) => {
      if (res.status == 200) {
        setHandler(res.data);
        console.info('calling api');
      }
    });
}

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
