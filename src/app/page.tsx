import { Header } from "./(site)/_components/header";
import { Hero } from "./(site)/_components/hero";
import { Marquee } from "./(site)/_components/marquee";
import { Services } from "./(site)/_components/services";
import { CaseStudies } from "./(site)/_components/case-studies";
import { Process } from "./(site)/_components/process";
import { WhyUs } from "./(site)/_components/why-us";
import { Testimonials } from "./(site)/_components/testimonials";
import { Contact } from "./(site)/_components/contact";
import { Footer } from "./(site)/_components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Marquee />
        {/* <Services /> */}
        <CaseStudies />
        <WhyUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
