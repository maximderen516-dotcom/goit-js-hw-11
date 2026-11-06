import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '58450371-760ef696446c5833fde514ef0';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        lang: 'ru',
      },
    })
    .then(response => response.data);
}