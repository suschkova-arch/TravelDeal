import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationsSection from './components/DestinationsSection';
import HotelsSection from './components/HotelsSection';
import LiveHotelSearch from './components/LiveHotelSearch';
import FlightsSection from './components/FlightsSection';
import RailwaySection from './components/RailwaySection';
import PriceTrendSection from './components/PriceTrendSection';
import StatsSection from './components/StatsSection';
import ReviewsSection from './components/ReviewsSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: '#0a0f1e', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <DestinationsSection />
      <HotelsSection />
      <LiveHotelSearch />
      <FlightsSection />
      <RailwaySection />
      <PriceTrendSection />
      <StatsSection />
      <ReviewsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
