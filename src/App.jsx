import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import Programs from './components/sections/Programs';
import Activities from './components/sections/Activities';
import Gallery from './components/sections/Gallery';
import Events from './components/sections/Events';
import Testimonials from './components/sections/Testimonials';
import Trust from './components/sections/Trust';
import FeePayment from './components/sections/FeePayment';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Philosophy />
      <Programs />
      <Activities />
      <Gallery />
      <Events />
      <Testimonials />
      <Trust />
      <FeePayment />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
