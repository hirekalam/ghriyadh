import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/services/ServiceDetail';
import Projects from './pages/Projects';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import SpecialOffer from './pages/SpecialOffer';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Disclaimer from './pages/Disclaimer';
import NotFound from './pages/NotFound';

// Service data for routing
const services = [
  { id: 'garden-design', slug: 'garden-design', title: 'تنسيق الحدائق' },
  { id: 'artificial-grass', slug: 'artificial-grass', title: 'العشب الصناعي' },
  { id: 'natural-grass', slug: 'natural-grass', title: 'العشب الطبيعي' },
  { id: 'shade-structures', slug: 'shade-structures', title: 'المظلات والسواتر' },
  { id: 'irrigation', slug: 'irrigation', title: 'الري والنوافير' },
  { id: 'maintenance', slug: 'maintenance', title: 'الصيانة الدورية' },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail services={services} />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="special-offer" element={<SpecialOffer />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
