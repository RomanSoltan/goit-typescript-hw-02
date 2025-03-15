import axios from 'axios';

const API_KEY = 'YBMUvg_zUT-EYbEMkTXn4qUQvv4OAvqSGGeeZY9Wu8c';
const BASE_URL = 'https://api.unsplash.com/search/photos?';

export const fetchImages = async (query, page, perPage = 15) => {
  try {
    const {
      data: { results },
    } = await axios.get(`${BASE_URL}`, {
      params: {
        client_id: API_KEY,
        query,
        page,
        per_page: perPage,
        orientation: 'landscape',
        lang: 'en',
      },
    });
    return results;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Could not fetch images');
  }
};
