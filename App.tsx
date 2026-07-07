import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveHotelSearch from './components/LiveHotelSearch';
import HotelsSection from './components/HotelsSection';
import FlightsSection from './components/FlightsSection';
import RailwaySection from './components/RailwaySection';
import PriceTrendSection from './components/PriceTrendSection';
import ReviewsSection from './components/ReviewsSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <LiveHotelSearch />
      <HotelsSection />
      <FlightsSection />
      <RailwaySection />
      <PriceTrendSection />
      <ReviewsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
