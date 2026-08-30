import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Paths from './pages/Paths';
import PathDetail from './pages/PathDetail';
import Analyzer from './pages/Analyzer';
import Stories from './pages/Stories';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paths" element={<Paths />} />
          <Route path="/paths/:id" element={<PathDetail />} />
          <Route path="/analyzer" element={<Analyzer />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
