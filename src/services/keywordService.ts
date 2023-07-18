import axios from 'axios';

export async function getDiseases(keyword: string) {
  return await axios.get(`http://localhost:4000/sick?q=${keyword}`);
}
