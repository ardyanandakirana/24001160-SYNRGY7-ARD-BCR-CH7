// App.tsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import WhyUs from '../components/WhyUs';
import Testimonial from '../components/Testimonial';
import Banner from '../components/Banner';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <OurServices />
        <WhyUs />
        <Testimonial />
        <Banner />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
