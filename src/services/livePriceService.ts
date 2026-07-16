import { useState, useEffect } from 'react';

// Типы для данных
export interface LiveHotel {
  id: string;
  name: string;
  price: number;
  stars: number;
  rating: number;
}

export interface LiveFlight {
  from: string;
  to: string;
  price: number;
  airline: string;
}

export const useLivePrices = () => {
  const [status, setStatus] = useState<'loading' | 'live' | 'cache'>('loading');
  const [liveData, setLiveData] = useState<{ hotels: LiveHotel[], flights: LiveFlight[] }>({ hotels: [], flights: [] });

  useEffect(() => {
    const fetchLive = async () => {
      try {
        // Проверяем доступность API (PHP версия)
        const health = await fetch('/api/config.php', { method: 'HEAD' }).catch(() => ({ ok: false }));
        
        if (!health.ok) {
          setStatus('cache');
          return;
        }

        // Загружаем цены для базовых направлений
        const cities = ['dubai', 'paris', 'antalya', 'phuket'];
        const hotelRes = await Promise.all(
          cities.map(c => fetch(`/api/hotels.php?city=${c}`).then(r => r.json()).catch(() => ({ hotels: [] })))
        );

        const allHotels = hotelRes.flatMap(r => r.hotels || []);
        
        if (allHotels.length > 0) {
          setStatus('live');
          setLiveData(prev => ({ ...prev, hotels: allHotels }));
        } else {
          setStatus('cache');
        }
      } catch (err) {
        console.error('Live Sync Error:', err);
        setStatus('cache');
      }
    };

    fetchLive();
  }, []);

  return { status, liveData };
};
