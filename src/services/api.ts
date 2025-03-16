import axios from 'axios';
import { Photo } from '../types';

const API_KEY = 'YBMUvg_zUT-EYbEMkTXn4qUQvv4OAvqSGGeeZY9Wu8c';
const BASE_URL = 'https://api.unsplash.com/search/photos?';

interface UnsplashResponse {
  results: Photo[];
}

export const fetchImages = async (
  query: string,
  page: number,
  perPage = 15,
): Promise<Photo[]> => {
  try {
    const { data } = await axios.get<UnsplashResponse>(`${BASE_URL}`, {
      params: {
        client_id: API_KEY,
        query,
        page,
        per_page: perPage,
        orientation: 'landscape',
        lang: 'en',
      },
    });
    return data.results;
  } catch (error: any) {
    console.error('Error fetching images:', error.response || error.message);
    throw new Error(
      `Could not fetch images ${
        error?.response?.data?.message || error.message
      }`,
    );
  }
};
