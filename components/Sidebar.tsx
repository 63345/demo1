'use client';

import Link from 'next/link';

const categories = [
    { name: '首页', icon: '🏠' },
    { name: '动态', icon: '⚡' },
    { name: '热门', icon: '🔥' },
    { name: '频道', icon: '📺' },
];

const subCategories = [
    '番剧', '国创', '综艺', '动画', '鬼畜', '舞蹈', '娱乐', '科技', '美食', '汽车', '运动', '影视'
];

export default function Sidebar() {
    return (
        <aside style={{
            width: '200px',
            padding: '20px 0',
            display: 'none', // Hidden on small screens initially, will handle responsive in CSS later potentially
            flexDirection: 'column',
            gap: '10px'
            // In a real Bilibili layout, sidebar is often minimal or part of top nav + grid, 
            // but let's make a left sidebar for structure if requested, or maybe a category bar.
            // Actually Bilibili main page has a category bar below header, not a side bar usually.
            // Let's make this a CategoryBar instead? Or Sidebar? 
            // The task says "Sidebar/Navigation", let's stick to sidebar for now but maybe style it as a side menu.
        }}>
            {/* Actually Bilibili 2024 uses a left sidebar for minimal nav and top for categories. */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {categories.map((cat) => (
                    <Link key={cat.name} href="#" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '16px',
                        fontWeight: 500,
                        transition: 'background 0.2s',
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E3E5E7'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <span>{cat.icon}</span>
                        <span>{cat.name}</span>
                    </Link>
                ))}
            </div>

            <div style={{ height: '1px', backgroundColor: '#E3E5E7', margin: '10px 20px' }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '0 20px', gap: '10px' }}>
                {subCategories.map((sub) => (
                    <Link key={sub} href="#" style={{
                        color: 'var(--text-secondary)',
                        fontSize: '13px',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        textAlign: 'center'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E3E5E7'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        {sub}
                    </Link>
                ))}
            </div>
        </aside>
    );
}
