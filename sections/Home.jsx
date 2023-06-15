import { Header, Hero, Partners } from '@/components';
import Footer from '@/components/Footer';
import { BlackBlock, GreenBlock } from '@/components/components2';
import React from 'react';

function Home() {
  return (
    <div>
      <Header />
      <GreenBlock />
      <Hero />
      <Partners />
      <BlackBlock />
      <Footer />
    </div>
  );
}

export default Home;
