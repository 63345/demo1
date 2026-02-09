'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            height: 'var(--header-height)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            justifyContent: 'space-between'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <Link href="/" style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--bili-pink)' }}>
                    Bilibili
                </Link>
                <nav style={{ display: 'flex', gap: '15px', color: 'var(--text-primary)', fontSize: '14px' }}>
                    <Link href="/">首页</Link>
                    <Link href="#">番剧</Link>
                    <Link href="#">直播</Link>
                    <Link href="#">游戏中心</Link>
                    <Link href="#">会员购</Link>
                    <Link href="#">漫画</Link>
                    <Link href="#">赛事</Link>
                </nav>
            </div>

            <div style={{ flex: 1, maxWidth: '500px', margin: '0 20px' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#F1F2F3',
                    borderRadius: '8px',
                    padding: '0 10px',
                    height: '40px',
                    border: '1px solid transparent',
                    transition: 'background-color 0.2s'
                }}>
                    <input
                        type="text"
                        placeholder="搜索"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            border: 'none',
                            outline: 'none',
                            background: 'transparent',
                            flex: 1,
                            fontSize: '14px',
                            color: 'var(--text-primary)'
                        }}
                    />
                    <button style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '5px'
                    }}>
                        🔍
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#E7E7E7',
                    cursor: 'pointer',
                    overflow: 'hidden'
                }}>
                    {/* Avatar Placeholder */}
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '12px', color: 'var(--text-primary)', cursor: 'pointer' }}>
                    <span>大会员</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '12px', color: 'var(--text-primary)', cursor: 'pointer' }}>
                    <span>消息</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '12px', color: 'var(--text-primary)', cursor: 'pointer' }}>
                    <span>动态</span>
                </div>
                <button style={{
                    backgroundColor: 'var(--bili-pink)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '8px 20px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    fontWeight: 500
                }}>
                    投稿
                </button>
            </div>
        </header>
    );
}
