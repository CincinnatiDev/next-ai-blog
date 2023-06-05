import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SocialLinks from './SocialLinks';
import Ad1 from 'public/assets/ad-1.jpg';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className='mb-5'>
      <nav className='flex w-full items-center justify-between bg-wh-900 px-10 py-4 text-wh-10'>
        <div className='hidden sm:block'>
          <SocialLinks />
        </div>
        <div className='flex items-center justify-between gap-10'>
          <Link href='/'>Home</Link>
          <Link href='/'>Trending</Link>
          <Link href='/'>About</Link>
        </div>
        <div>
          <p>Sign In</p>
        </div>
      </nav>
      <div className='mx-10 mb-4 mt-5 flex justify-between gap-8'>
        <div className='basis-2/3 md:mt-3'>
          <h1 className='text-3xl font-bold md:text-5xl'>BLOG OF THE FUTURE</h1>
          <p className='mt-3 text-sm'>Blog dedicated towards AI generation and job automation</p>
        </div>
        <div className='relative h-32 w-auto basis-full bg-wh-500'>
          <Image
            fill
            style={{ objectFit: 'cover' }}
            alt='advert-1'
            src={Ad1}
            placeholder='blur'
            sizes='(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw'
          />
        </div>
      </div>
      <hr className='border-1 mx-10' />
    </header>
  );
};

export default Navbar;
