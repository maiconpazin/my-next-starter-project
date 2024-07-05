import {
  AboutUs,
  BestOffers,
  Contact,
  FindQuotes,
  Hero,
  Testimonials,
  WhyUs,
} from '@/components/organisms';

export default function Home() {
  return (
    <main>
      <Hero />
      <BestOffers />
      <FindQuotes />
      <AboutUs />
      <WhyUs />
      <Testimonials />
      <Contact />
    </main>
  );
}
