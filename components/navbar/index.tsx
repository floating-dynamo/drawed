'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { SITE_CONFIG } from '@/site.config';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { brandName, brandLogo: Logo } = SITE_CONFIG;
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  function toggleMenuDrawer() {
    setOpenMenu((prev) => !prev);
  }

  return (
    <>
      <div className="py-4 px-12 flex justify-between border-b-2 bg-white sticky top-0">
        <div data-test-id="brand" className="flex items-center justify-center gap-3">
          <Logo className="size-5 text-primary" />
          <Link href={'/'}>
            <p className="font-bold">{brandName}</p>
          </Link>
        </div>
        <div className="gap-4 hidden md:flex">
          <NavbarItems />
        </div>
        <div className="flex flex-col md:hidden justify-center items-center">
          <div className="transition-all cursor-pointer" onClick={toggleMenuDrawer}>
            {openMenu ? <X className="size-6" /> : <Menu className="size-6" />}
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="bg-white md:hidden flex flex-col justify-center p-4 gap-4 transition-all">
          <NavbarItems toggleMenuDrawer={toggleMenuDrawer} />
        </div>
      )}
    </>
  );
};

function NavbarItems({ toggleMenuDrawer }: { toggleMenuDrawer?: () => void }) {
  return (
    <>
      <Button variant={'outline'} onClick={toggleMenuDrawer}>
        <Link href={'/sign-in'} className="w-full">
          Sign In
        </Link>
      </Button>
      <Button onClick={toggleMenuDrawer}>
        <Link href={'/sign-up'} className="w-full">
          Sign Up
        </Link>
      </Button>
    </>
  );
}

export default Navbar;
