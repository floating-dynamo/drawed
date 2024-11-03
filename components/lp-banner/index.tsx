import React from 'react';
import { Button } from '../ui/button';
import { HeroSection } from './hero-section';
import { FeaturesSection } from './features-section';

const LandingPageBanner = () => {
  return (
    <div className='flex flex-col items-center justify-center px-4 py-6 gap-8 flex-wrap text-center mt-8'>
      <HeroSection />
      <div>
        <Button>Start Drawing Today</Button>
      </div>
      <div className='mt-5 flex items-center justify-center gap-4 flex-wrap md:text-lg text-sm'>
        <FeaturesSection />
      </div>
    </div>
  );
};

export default LandingPageBanner;
