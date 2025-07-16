import { useState } from 'react';
import { searchVideos } from '../lib/invidious';
import VideoCard from '../components/VideoCard';
import { useRouter } from 'next/router';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const router = useRouter();

  async function handleSearch() {
    const data = await searchVideos(query);
    setResults(data);
  }

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontSize: 28 }}>MyTube (sin anuncios)</h1>
      <input
        type="text"
        placeholder="Buscar videos..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ padding: 10, width: '100%', fontSize: 16, marginBottom: 20 }}
      />
      <button onClick={handleSearch} style={{ padding: 10, fontSize: 16 }}>
        Buscar
      </button>
      <div style={{ marginTop: 20 }}>
        {results.map((video: any) => (
          <VideoCard
            key={video.videoId}
            video={video}
            onPress={() => router.push(`/watch?id=${video.videoId}`)}
          />
        ))}
      </div>
    </div>
  );
}