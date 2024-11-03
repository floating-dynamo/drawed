import React from 'react';
import { Button } from '../ui/button';
import { SITE_CONFIG } from '@/site.config';

const Navbar = () => {
  const { brandName, brandLogo: Logo } = SITE_CONFIG;
  return (
    <div className='py-4 px-12 flex justify-between border-b-2 bg-white'>
      <div data-test-id='brand' className='flex items-center justify-center gap-3'>
        <Logo className='size-5 text-primary' />
        <p className='font-bold'>{brandName}</p>
      </div>
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Navbar;
