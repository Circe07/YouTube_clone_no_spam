import axios from 'axios';

const INSTANCE = 'https://yewtu.be'; // Puedes cambiar a otro Invidious

export async function searchVideos(query: string) {
  const res = await axios.get(`${INSTANCE}/api/v1/search`, {
    params: { q: query, type: 'video' }
  });
  return res.data;
}

export function getEmbedUrl(videoId: string) {
  return `${INSTANCE}/embed/${videoId}?autoplay=1`;
}