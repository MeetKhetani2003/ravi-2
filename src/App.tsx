import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { WhatsAppFloat, EmergencyStrip } from './components/ui';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ParentCorner from './pages/ParentCorner';
import Appointment from './pages/Appointment';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 text-ink-900">
      <EmergencyStrip />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/parent-corner" element={<ParentCorner />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
