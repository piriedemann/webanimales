import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import StatsSection from './components/StatsSection';
import CourseSection from './components/CourseSection';
import OrderSection from './components/OrderSection';
import TeamSection from './components/TeamSection';
import SolveDoubtsSection from './components/SolveDoubtsSection';
import StructureSection from './components/StructureSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoSection />
      <StatsSection />
      <CourseSection />
      <OrderSection />
      <TeamSection />
      <SolveDoubtsSection />
      <StructureSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
