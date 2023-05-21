import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: '14239803-1525d40278084147650a3f538',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchImg = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  return data;
};
