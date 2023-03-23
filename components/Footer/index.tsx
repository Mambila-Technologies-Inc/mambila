import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
    <div className='px-[40px] mt-[50px]'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-[20px] pb-[40px] border-[#2D2D2D] border-b'>
        <div>
          <p className='font-[800] font-Mulish text-[24px] text-[#000000]'>Company</p>
          <div className='grid space-y-[10px] mt-[20px]'>
            {
              footerLink.slice(0,4)
              .map(({ link, name, id }) => (
                <Link href={link} key={id} className='text-[#000000] font-Montserrat font-[400] text-[18px]'>{name}</Link>
              ))
            }
          </div>
        </div>
        <div>
        <p className='font-[800] font-Mulish text-[24px] text-[#000000]'>Products</p>
          <div className='grid space-y-[10px] mt-[20px]'>
            {
              footerLink.slice(4,7)
              .map(({ link, name, id }) => (
                <Link href={link} key={id} className='text-[#000000] font-Montserrat font-[400] text-[18px]'>{name}</Link>
              ))
            }
          </div>
        </div>
        <div>
        <p className='font-[800] font-Mulish text-[24px] text-[#000000]'>Company</p>
          <div className='grid space-y-[10px] mt-[20px]'>
            {
              footerLink.slice(7,10)
              .map(({ link, name, id }) => (
                <Link href={link} key={id} className='text-[#000000] font-Montserrat font-[400] text-[18px]'>{name}</Link>
              ))
            }
          </div>
        </div>
        <div>
        <p className='font-[800] font-Mulish text-[24px] text-[#000000]'>Company</p>
          <div className='grid space-y-[10px] mt-[20px]'>
            {
              footerLink.slice(10,footerLink.length)
              .map(({ link, name, id }) => (
                <Link href={link} key={id} className='text-[#000000] font-Montserrat font-[400] text-[18px]'>{name}</Link>
              ))
            }
          </div>
        </div>
      </div>
      <div className='py-[20px]'>
        <div className='flex items-center justify-between'>
          <div>loll</div>
          <div>loll</div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Footer


const footerLink = [
  {
    id: 1,
    name: 'About Us',
    link: '/'
  },
  {
    id: 2,
    name: 'Contact Us',
    link: '/'
  },
  {
    id: 3,
    name: 'Careers (we are hiring)',
    link: '/'
  },
  {
    id: 4,
    name: 'Licenses',
    link: '/'
  },
  {
    id: 5,
    name: 'Cashbank',
    link: '/'
  },
  {
    id: 6,
    name: 'Cirlce',
    link: '/'
  },
  {
    id: 7,
    name: 'Kollect Ng',
    link: '/'
  },
  {
    id: 8,
    name: 'Gadgets',
    link: '/'
  },
  {
    id: 9,
    name: 'Solar Inverters',
    link: '/'
  },
  {
    id: 10,
    name: 'AI/Robotics ',
    link: '/'
  },
  {
    id: 11,
    name: 'Partnerships',
    link: '/'
  },
  {
    id: 12,
    name: 'Lodge a Complain',
    link: '/'
  },
  {
    id: 13,
    name: 'News',
    link: '/'
  },
]