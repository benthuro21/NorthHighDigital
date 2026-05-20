import dynamic from "next/dynamic";
import { Header } from "./(site)/_components/header";
import { Hero } from "./(site)/_components/hero";
import { Marquee } from "./(site)/_components/marquee";

// Lazy load components below the fold for better performance
const CaseStudies = dynamic(() => import("./(site)/_components/case-studies").then(mod => ({ default: mod.CaseStudies })), {
  loading: () => <div className="min-h-screen" />
});
const Process = dynamic(() => import("./(site)/_components/process").then(mod => ({ default: mod.Process })), {
  loading: () => <div className="min-h-screen" />
});
const MeetTheFounders = dynamic(() => import("./(site)/_components/meet-the-founders").then(mod => ({ default: mod.MeetTheFounders })), {
  loading: () => <div className="min-h-screen" />
});
const WhyUs = dynamic(() => import("./(site)/_components/why-us").then(mod => ({ default: mod.WhyUs })), {
  loading: () => <div className="min-h-screen" />
});
const Testimonials = dynamic(() => import("./(site)/_components/testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="min-h-screen" />
});
const Contact = dynamic(() => import("./(site)/_components/contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="min-h-screen" />
});
const Footer = dynamic(() => import("./(site)/_components/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="min-h-screen" />
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Marquee />
        {/* <Services /> */}
        {/* <CaseStudies /> */}
        <Process />
        <MeetTheFounders />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
