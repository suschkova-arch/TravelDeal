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
  </div>
);

export default App;
