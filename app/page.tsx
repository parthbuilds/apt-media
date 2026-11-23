import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import SelectedWorks from '@/components/SelectedWorks';
import LogoMarquee from '@/components/LogoMarquee';
import DesignExpertise from '@/components/DesignExpertise';
import CreativeMinds from '@/components/CreativeMinds';
import ClientFeedback from '@/components/ClientFeedback';
import SimplePricing from '@/components/SimplePricing';
import CommonQuestions from '@/components/CommonQuestions';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-zinc-900">
      <Navbar />
      <Hero />
      <Philosophy />
      <SelectedWorks />
      <LogoMarquee />
      <DesignExpertise />
      <CreativeMinds />
      <ClientFeedback />
      <SimplePricing />
      <CommonQuestions />
      <CtaBanner />
      <Footer />
    </main>
  );
}
