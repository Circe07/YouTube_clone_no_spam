import { useRouter } from 'next/router';
import { getEmbedUrl } from '../lib/invidious';

export default function Watch() {
  const router = useRouter();
  const videoId = router.query.id as string;

  if (!videoId) return <p>Cargando...</p>;

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1 style={{ marginBottom: 20 }}>Reproduciendo video</h1>
      <iframe
        width="100%"
        height="500"
        src={getEmbedUrl(videoId)}
        allow="autoplay"
        allowFullScreen
        style={{ border: 'none' }}
      />
    </div>
  );
}