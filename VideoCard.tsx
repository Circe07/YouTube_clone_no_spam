import React from 'react';

export default function VideoCard({ video, onPress }: any) {
  return (
    <div
      onClick={() => onPress(video)}
      style={{
        display: 'flex',
        cursor: 'pointer',
        marginBottom: 16,
        borderBottom: '1px solid #ccc',
        paddingBottom: 12
      }}
    >
      <img src={video.videoThumbnails?.[0]?.url} width={120} height={90} alt="thumb" />
      <div style={{ marginLeft: 12 }}>
        <h3 style={{ fontSize: 16 }}>{video.title}</h3>
        <p style={{ fontSize: 14, color: '#666' }}>{video.author}</p>
      </div>
    </div>
  );
}