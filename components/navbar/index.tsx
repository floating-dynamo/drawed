import React from 'react';
import { Button } from '../ui/button';
import { SITE_CONFIG } from '@/site.config';
import Link from 'next/link';

const Navbar = () => {
  const { brandName, brandLogo: Logo } = SITE_CONFIG;
  return (
    <div className="py-4 px-12 flex justify-between border-b-2 bg-white sticky top-0">
      <div data-test-id="brand" className="flex items-center justify-center gap-3">
        <Logo className="size-5 text-primary" />
        <Link href={'/'}>
          <p className="font-bold">{brandName}</p>
        </Link>
      </div>
      <div className='flex gap-4'>
        <Button variant={'outline'}>
          <Link href={'/sign-in'}>Sign In</Link>
        </Button>
        <Button>
          <Link href={'/sign-up'}>Sign Up</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
