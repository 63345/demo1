'use client';

import Sidebar from '@/components/Sidebar';
import VideoCard from '@/components/VideoCard';
import { useState } from 'react';

// Mock Data
const MOCK_VIDEOS = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `【4K】这是一个非常有趣的视频标题示例 ${i + 1}`,
  uploader: `UP主 ${i + 1}`,
  views: `${Math.floor(Math.random() * 100)}万`,
  date: '2-9',
  duration: `${Math.floor(Math.random() * 10)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
  thumbnail: `https://picsum.photos/seed/${i + 1}/320/180`
}));

export default function Home() {
  const [videos] = useState(MOCK_VIDEOS);

  return (
    <div className="container" style={{ display: 'flex', marginTop: '20px', gap: '20px' }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        {/* Banner Section (Placeholder) */}
        <div style={{
          width: '100%',
          height: '120px',
          backgroundColor: '#e3e5e7',
          borderRadius: '10px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9499a0'
        }}>
          Banner / Carousel Area
        </div>

        {/* Video Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '20px 20px'
        }}>
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
}
