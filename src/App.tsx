import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationsSection from './components/DestinationsSection';
import HotelsSection from './components/HotelsSection';
import FlightsSection from './components/FlightsSection';
import RailwaySection from './components/RailwaySection';
import CruisesSection from './components/CruisesSection';
import PriceTrendSection from './components/PriceTrendSection';
import StatsSection from './components/StatsSection';
import ReviewsSection from './components/ReviewsSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';

const App = () => {
  const [isLive, setIsLive] = React.useState(false);

  React.useEffect(() => {
    // Проверяем связь с PHP-сервером
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'ok') setIsLive(true);
      })
      .catch(() => setIsLive(false));
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        background: '#0a0f1e',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <Navbar />
      <Hero />
      <DestinationsSection />
      <HotelsSection />
      <FlightsSection />
      <RailwaySection />
      <CruisesSection />
      <PriceTrendSection />
      <StatsSection />
      <ReviewsSection />
      <PartnersSection />
      <Footer />

      {/* Индикатор статуса как на фото */}
      <div style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 9999,
        background: 'rgba(10, 15, 30, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '6px 14px',
        borderRadius: '100px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 12,
        color: isLive ? '#34d399' : '#fbbf24',
        boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
      }}>
        <div style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: isLive ? '#34d399' : '#fbbf24',
          boxShadow: isLive ? '0 0 10px #34d399' : 'none'
        }} />
        {isLive ? 'LIVE цены' : 'Кэш цены (модель)'}
      </div>
    </div>
  );
};

export default App;
