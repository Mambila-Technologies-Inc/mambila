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
          <Link href="/" className="font-Mulish font-bold text-md">
            Products
          </Link>
          <Link href="/" className="font-Mulish font-bold text-md">
            Solutions
          </Link>
          <Link href="/" className="font-Mulish font-bold text-md">
            News
          </Link>
          <Link href="/" className="font-Mulish font-bold text-md">
            Investor relations
          </Link>
          <Link href="/" className="font-Mulish font-bold text-md">
            Careers
          </Link>
          <Link href="/" className="font-Mulish font-bold text-md">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
