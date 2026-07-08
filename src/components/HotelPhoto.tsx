import type { CSSProperties } from 'react';

interface HotelPhotoProps {
  id: number;
  country: string;
  stars: number;
  style?: CSSProperties;
}

/**
 * SVG-обложка отеля: гарантированно работает на любом хостинге,
 * потому что это не внешняя ссылка, а код прямо в HTML.
 * Имитирует фото отеля через красивый градиент + силуэт архитектуры
 * (небоскрёб, вилла, горы, бунгало) + стилизованные элементы.
 */

const Svg = ({ children, gradient }: { children: React.ReactNode; gradient: string }) => (
  <svg
    viewBox="0 0 400 250"
    preserveAspectRatio="xMidYMid slice"
    style={{ width: '100%', height: '100%', display: 'block' }}
  >
    <defs>
      <linearGradient id={gradient} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ff9a76" />
        <stop offset="50%" stopColor="#a18cd1" />
        <stop offset="100%" stopColor="#2a3a5f" />
      </linearGradient>
      <linearGradient id="ocean" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4dd0e1" />
        <stop offset="100%" stopColor="#006064" />
      </linearGradient>
    </defs>
    <rect width="400" height="250" fill={`url(#${gradient})`} />
    {children}
  </svg>
);

// Силуэты зданий и пейзажей (минималистичные, но узнаваемые)
const Building = ({ x, y, w, h, color = '#1a1f3a', windows = true }: any) => (
  <g>
    <rect x={x} y={y} width={w} height={h} fill={color} />
    {windows &&
      Array.from({ length: Math.floor(h / 18) }).map((_, i) =>
        Array.from({ length: Math.floor(w / 12) }).map((_, j) => (
          <rect
            key={`${i}-${j}`}
            x={x + 4 + j * 12}
            y={y + 6 + i * 18}
            width="6"
            height="8"
            fill={Math.random() > 0.4 ? '#ffd54f' : '#37474f'}
            opacity="0.9"
          />
        )),
      )}
  </g>
);

const Palm = ({ x, y }: { x: number; y: number }) => (
  <g>
    <rect x={x} y={y} width="4" height="50" fill="#3e2723" />
    {[-30, -10, 10, 30, 0].map((_, i) => (
      <path
        key={i}
        d={`M${x + 2} ${y} Q ${x + 25} ${y - 20} ${x + 30 + i * 4} ${y - 15}`}
        stroke="#2e7d32"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
    ))}
  </g>
);

const Mountain = ({ x, y, scale = 1 }: any) => (
  <polygon
    points={`${x},${y} ${x + 60 * scale},${y - 80 * scale} ${x + 120 * scale},${y}`}
    fill="#5d6d7e"
    opacity="0.85"
  />
);

const Wave = ({ y, opacity = 0.3 }: { y: number; opacity?: number }) => (
  <path
    d={`M0 ${y} Q 100 ${y - 8} 200 ${y} T 400 ${y}`}
    stroke="#80deea"
    strokeWidth="2"
    fill="none"
    opacity={opacity}
  />
);

const Moon = () => (
  <circle cx="320" cy="60" r="20" fill="#fff8e1" opacity="0.9" />
);

const Sun = () => (
  <g>
    <circle cx="50" cy="50" r="22" fill="#ffe082" opacity="0.9" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
      <line
        key={i}
        x1="50"
        y1="20"
        x2="50"
        y2="14"
        stroke="#ffe082"
        strokeWidth="2"
        transform={`rotate(${a} 50 50)`}
      />
    ))}
  </g>
);

const HotelPhoto = ({ country, stars, style }: HotelPhotoProps) => {
  // Выбираем «сюжет» фото в зависимости от страны/категории
  const c = country.toLowerCase();
  let gradient = 'sunset';

  let content: React.ReactNode = null;

  if (c.includes('россия') || c.includes('абхазия')) {
    // Горы + лес + луна — для России и Абхазии
    gradient = 'cold';
    content = (
      <>
        <Mountain x={20} y={250} scale={1.2} />
        <Mountain x={150} y={250} scale={1.6} />
        <Mountain x={280} y={250} scale={1.3} />
        <Snow />
        <Building x={50} y={200} w={60} h={50} color="#5d4037" />
        <Building x={120} y={180} w={80} h={70} color="#4e342e" />
        <Building x={220} y={190} w={70} h={60} color="#3e2723" />
        <Moon />
      </>
    );
  } else if (c.includes('турция') || c.includes('египет') || c.includes('оаэ')) {
    // Жаркие страны: солнце + пальмы + бассейн
    gradient = 'sunset';
    content = (
      <>
        <Sun />
        <Wave y={220} opacity={0.4} />
        <Wave y={235} opacity={0.3} />
        <Palm x={50} y={170} />
        <Palm x={330} y={170} />
        <Building x={140} y={150} w={120} h={100} color="#fff3e0" windows={false} />
        <rect x="140" y="150" width="120" height="20" fill="#ff6f00" />
        {Array.from({ length: 5 }).map((_, i) => (
          <rect key={i} x={150 + i * 22} y="170" width="14" height="12" fill="#1a237e" />
        ))}
        <rect x="0" y="220" width="400" height="30" fill="url(#ocean)" />
      </>
    );
  } else if (c.includes('мальдив') || c.includes('индонезия') || c.includes('таиланд') || c.includes('вьетнам') || c.includes('филиппины') || c.includes('куба')) {
    // Тропики: вода, пальмы, закат
    gradient = 'tropic';
    content = (
      <>
        <circle cx="200" cy="80" r="35" fill="#ff8a65" />
        <rect x="0" y="170" width="400" height="80" fill="url(#ocean)" />
        <Wave y={170} opacity={0.6} />
        <Wave y={190} opacity={0.5} />
        <Wave y={210} opacity={0.4} />
        <Palm x={40} y={150} />
        <Palm x={350} y={150} />
        <rect x="170" y="200" width="60" height="20" fill="#6d4c41" />
        <polygon points="170,200 200,180 230,200" fill="#a1887f" />
      </>
    );
  } else if (c.includes('италия') || c.includes('испания') || c.includes('греция') || c.includes('франция') || c.includes('кипр')) {
    // Европа: историческая архитектура, закат
    gradient = 'europe';
    content = (
      <>
        <Sun />
        <Building x={40} y={140} w={50} h={110} color="#d7ccc8" />
        <Building x={100} y={120} w={60} h={130} color="#bcaaa4" />
        <Building x={170} y={100} w={80} h={150} color="#8d6e63" />
        <Building x={260} y={130} w={50} h={120} color="#a1887f" />
        <Building x={320} y={150} w={50} h={100} color="#bcaaa4" />
        <polygon points="170,100 210,70 250,100" fill="#5d4037" />
      </>
    );
  } else if (c.includes('япония') || c.includes('китай')) {
    // Азия: небоскрёбы, неон
    gradient = 'asia';
    content = (
      <>
        <Moon />
        {Array.from({ length: 6 }).map((_, i) => (
          <rect
            key={i}
            x={20 + i * 60}
            y={150 - (i % 2) * 30}
            width="50"
            height={100 + (i % 2) * 30}
            fill="#1a237e"
          />
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <rect
            key={i}
            x={25 + (i % 6) * 60}
            y={160 + Math.floor(i / 6) * 15}
            width="6"
            height="4"
            fill={Math.random() > 0.5 ? '#ff1744' : '#00e5ff'}
          />
        ))}
      </>
    );
  } else {
    // Default
    content = (
      <>
        <Sun />
        <Building x={100} y={150} w={200} h={100} color="#eceff1" />
      </>
    );
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
        ...style,
      }}
    >
      <Svg gradient={gradient}>{content}</Svg>
      {stars > 0 && (
        <div
          style={{
            position: 'absolute',
            top: 8,
            left: 8,
            background: 'rgba(10,15,30,0.85)',
            borderRadius: 6,
            padding: '3px 8px',
            color: '#fbbf24',
            fontSize: 12,
            zIndex: 2,
          }}
        >
          {'★'.repeat(stars)}
        </div>
      )}
    </div>
  );
};

const Snow = () => (
  <>
    {Array.from({ length: 30 }).map((_, i) => (
      <circle
        key={i}
        cx={Math.random() * 400}
        cy={150 + Math.random() * 100}
        r="2"
        fill="#fff"
        opacity="0.7"
      />
    ))}
  </>
);

export default HotelPhoto;
