'use client';

import Image from 'next/image';
import Link from 'next/link';

interface VideoCardProps {
    id: number | string;
    title: string;
    uploader: string;
    views: string;
    date: string;
    duration: string;
    thumbnail: string;
}

export default function VideoCard({ id, title, uploader, views, date, duration, thumbnail }: VideoCardProps) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', cursor: 'pointer' }}>
            <Link href={`/video/${id}`}>
                <div style={{
                    position: 'relative',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    aspectRatio: '16/9',
                    backgroundColor: '#f1f2f3'
                }}>
                    <img
                        src={thumbnail}
                        alt={title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        color: 'white',
                        padding: '2px 4px',
                        borderRadius: '4px',
                        fontSize: '12px'
                    }}>
                        {duration}
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '8px',
                        display: 'flex',
                        gap: '10px',
                        color: 'white',
                        fontSize: '12px',
                        textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                    }}>
                        <span>▶ {views}</span>
                        <span>💬 233</span>
                    </div>
                </div>
            </Link>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <Link href={`/video/${id}`} style={{
                        fontSize: '15px',
                        fontWeight: 500,
                        lineHeight: '1.4',
                        color: 'var(--text-primary)',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--bili-blue)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                    >
                        {title}
                    </Link>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                        <span>UP {uploader}</span>
                        <span>·</span>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
