import { Navigation, Hero, FeaturedTanks, Gallery, Stats, Footer } from './components';

function App() {
  return (
    <div className="bg-gaming-darker text-white overflow-hidden">
      <Navigation />
      <Hero />
      <FeaturedTanks />
      <Stats />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
