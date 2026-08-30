import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import HowItWorks from '../components/HowItWorks';
import FeaturedPaths from '../components/FeaturedPaths';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import PartnersBar from '../components/PartnersBar';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersBar />
      <HowItWorks />
      <FeaturedPaths />
      <Testimonials />
      <CTASection />
    </>
  );
}
