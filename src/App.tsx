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
import { useLivePrices } from './services/livePriceService';

const ApiStatusBadge = () => {
  const { status } = useLivePrices();
  
  if (status === 'loading') return null;

  return (
    <div
      id="api-status"
      style={{
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        zIndex: 9999,
        background: 'rgba(10,15,30,0.9)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '12px',
        padding: '8px 14px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '11px',
        color: 'rgba(255,255,255,0.5)',
        backdropFilter: 'blur(10px)',
        pointerEvents: 'none'
      }}
    >
      {status === 'live' ? (
        <span style={{ color: '#34d399' }}>🟢 LIVE цены 2026</span>
      ) : (
        <span style={{ color: '#f59e0b' }}>🟡 Кэш цены (модель)</span>
      )}
    </div>
  );
};

const App = () => (
  <div
    style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      background: '#0a0f1e',
      minHeight: '100vh',
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
    <ApiStatusBadge />
  </div>
);

export default App;
