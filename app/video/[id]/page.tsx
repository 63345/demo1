'use client';

import { useState, use } from 'react';
import Link from 'next/link';

// Mock Data for a single video
const MOCK_VIDEO_DETAIL = {
    id: 1,
    title: "【4K】这是一个非常有趣且标题很长的示例视频，用于测试换行效果",
    views: "102.4万",
    danmaku: "4567",
    date: "2024-02-09 12:00:00",
    uploader: {
        name: "示例UP主",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
        followers: "50.2万"
    },
    description: "这是视频的简介。\n这里是第二行。\n记得一键三连哦！",
    tags: ["搞笑", "日常", "Vlog"]
};

// Mock Related Videos
const RELATED_VIDEOS = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 100,
    title: `Related Video Title ${i + 1}`,
    uploader: `Uploader ${i}`,
    views: `${Math.floor(Math.random() * 50)}万`,
    thumbnail: `https://picsum.photos/seed/${i + 100}/160/100`
}));

export default function VideoPage({ params }: { params: Promise<{ id: string }> }) {
    // const { id } = use(params); // Next.js 15+ way or async component. 
    // Since we are in client component, we should unwrap params if it's a promise, or use `useParams`.
    // However, in Next.js 15 app router, params is a Promise.
    // Let's use `use` hook to unwrap it if we need the ID.
    const resolvedParams = use(params);
    const id = resolvedParams.id;

    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="container" style={{ display: 'flex', gap: '30px', padding: '20px' }}>
            {/* Main Content */}
            <div style={{ flex: 1 }}>
                {/* Title & Info */}
                <div style={{ marginBottom: '20px' }}>
                    <h1 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '10px' }}>{MOCK_VIDEO_DETAIL.title}</h1>
                    <div style={{ display: 'flex', gap: '20px', color: '#9499A0', fontSize: '13px' }}>
                        <span className="flex-center" style={{ gap: '5px' }}>▶ {MOCK_VIDEO_DETAIL.views}</span>
                        <span className="flex-center" style={{ gap: '5px' }}>💬 {MOCK_VIDEO_DETAIL.danmaku}</span>
                        <span>{MOCK_VIDEO_DETAIL.date}</span>
                    </div>
                </div>

                {/* Video Player Placeholder */}
                <div style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    backgroundColor: 'black',
                    borderRadius: '4px',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    position: 'relative'
                }}>
                    <span style={{ fontSize: '24px' }}>视频播放器 {id}</span>
                    {/* Fake Controls */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '40px',
                        background: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 20px',
                        gap: '20px'
                    }}>
                        <span>▶</span>
                        <div style={{ flex: 1, height: '4px', background: '#e0e0e0', borderRadius: '2px' }}>
                            <div style={{ width: '30%', height: '100%', background: 'var(--bili-blue)' }}></div>
                        </div>
                        <span>03:45 / 12:00</span>
                        <span>🔊</span>
                        <span>⛶</span>
                    </div>
                </div>

                {/* Toolbar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid #E3E5E7',
                    paddingBottom: '20px',
                    marginBottom: '20px'
                }}>
                    <div style={{ display: 'flex', gap: '30px', fontSize: '14px', color: '#505050' }}>
                        <span
                            style={{ cursor: 'pointer', color: isLiked ? 'var(--bili-pink)' : 'inherit' }}
                            onClick={() => setIsLiked(!isLiked)}
                        >
                            👍 点赞 {isLiked ? '1001' : '1000'}
                        </span>
                        <span style={{ cursor: 'pointer' }}>👎 不喜欢</span>
                        <span style={{ cursor: 'pointer' }}>🪙 投币</span>
                        <span style={{ cursor: 'pointer' }}>⭐ 收藏</span>
                        <span style={{ cursor: 'pointer' }}>↗ 转发</span>
                    </div>
                </div>

                {/* Description */}
                <div style={{ marginBottom: '40px', fontSize: '15px', lineHeight: '24px', whiteSpace: 'pre-line' }}>
                    {MOCK_VIDEO_DETAIL.description}
                    <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                        {MOCK_VIDEO_DETAIL.tags.map(tag => (
                            <span key={tag} style={{ background: '#F1F2F3', padding: '2px 8px', borderRadius: '12px', fontSize: '12px', color: '#61666D' }}>{tag}</span>
                        ))}
                    </div>
                </div>

                {/* Comments (Simplified) */}
                <div>
                    <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>评论 (233)</h3>
                    <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                        <div style={{ width: '48px', height: '48px', background: '#e0e0e0', borderRadius: '50%' }}></div>
                        <div style={{ flex: 1 }}>
                            <textarea style={{ width: '100%', height: '60px', padding: '10px', borderRadius: '8px', border: '1px solid #E3E5E7', resize: 'none', background: '#F1F2F3' }} placeholder="发一条友善的评论"></textarea>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                                <button style={{ background: 'var(--bili-blue)', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '4px', cursor: 'pointer' }}>发表评论</button>
                            </div>
                        </div>
                    </div>
                    {/* Mock Comment List */}
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                            <div style={{ width: '40px', height: '40px', background: '#ccc', borderRadius: '50%' }}></div>
                            <div>
                                <div style={{ fontSize: '13px', fontWeight: 500, color: '#61666D', marginBottom: '5px' }}>用户 {i + 1}</div>
                                <div style={{ fontSize: '15px', lineHeight: '24px' }}>这个视频太棒了！我非常喜欢。下次一定！</div>
                                <div style={{ fontSize: '12px', color: '#9499A0', marginTop: '5px' }}>2024-02-09 13:00</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar (Right) */}
            <div style={{ width: '350px' }}>
                {/* Uploader Info */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #E3E5E7' }}>
                    <img src={MOCK_VIDEO_DETAIL.uploader.avatar} style={{ width: '48px', height: '48px', borderRadius: '50%' }} alt="Uploader" />
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 500, marginBottom: '5px' }}>{MOCK_VIDEO_DETAIL.uploader.name}</div>
                        <div style={{ fontSize: '12px', color: '#9499A0' }}>{MOCK_VIDEO_DETAIL.uploader.followers} 粉丝</div>
                        <button style={{ marginTop: '10px', width: '100%', background: 'var(--bili-pink)', color: 'white', border: 'none', padding: '6px 0', borderRadius: '4px', cursor: 'pointer' }}>+ 关注</button>
                    </div>
                </div>

                {/* Related Videos */}
                <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>相关推荐</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {RELATED_VIDEOS.map(video => (
                        <div key={video.id} style={{ display: 'flex', gap: '10px', cursor: 'pointer' }}>
                            <div style={{ flexShrink: 0, width: '140px', height: '80px', borderRadius: '6px', overflow: 'hidden', background: '#f0f0f0' }}>
                                <img src={video.thumbnail} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={video.title} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div style={{
                                    fontSize: '14px',
                                    lineHeight: '1.4',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    fontWeight: 500
                                }}>{video.title}</div>
                                <div style={{ fontSize: '12px', color: '#9499A0' }}>
                                    <div>{video.uploader}</div>
                                    <div>{video.views}播放</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
