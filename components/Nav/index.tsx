import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Nav: NextPage = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-2">
        <div className="py-2">
          <Image
            src="/images/img1.png"
            alt="Landscape picture"
            width={50}
            height={50}
          />
        </div>
        <div className="flex space-x-6">
          <Link href="/">Products</Link>
          <Link href="/">Solutions</Link>
          <Link href="/">News</Link>
          <Link href="/">Investor relations</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Contact</Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
