import Ticker from "@/components/Ticker";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OffersGrid from "@/components/OffersGrid";
import MissionVision from "@/components/MissionVision";
import BrokerSpotlight from "@/components/BrokerSpotlight";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CommunityCTA from "@/components/CommunityCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Ticker />
      <Nav />
      <Hero />
      <OffersGrid />
      <MissionVision />
      <BrokerSpotlight />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CommunityCTA />
      <Footer />
    </>
  );
}
