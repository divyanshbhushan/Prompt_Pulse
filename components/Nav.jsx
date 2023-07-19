"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const toggleNavbar = ()=>{
    let mobileNav = document.getElementById('mobileNav');
    if (mobileNav.classList.contains('hidden')) {
      mobileNav.classList.remove('hidden');
    }
    else {
          mobileNav.classList.add('hidden');
        }
  }

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <>
    <nav className='flex justify-between flex-between w-full mb-16 max-md:mb-3 py-1 border-b-2 h-20 border-gray-300 px-11 sticky top-0 bg-gray-50 z-30 max-md:px-4'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.png'
          alt='logo'
          width={70}
          height={70}
          className='object-contain'
        />
        <span className=" text-xl font-semibold text-violet-700">Prompt Pulse</span>
      </Link>

      {/* Desktop Navigation */}
      <div className='flex relative items-center'>
        <ul className='flex mr-5 max-md:hidden'>
          <li className='sm:w-1/2'>
            <Link href='/' className='text-gray-500 hover:text-gray-900 mx-2 hover:border-b-2 border-violet-700'>
             Home
            </Link>
          </li>
          <li className='sm:w-1/2'>
            <Link href='/about' className='text-gray-500 hover:text-gray-900 mx-2 hover:border-b-2 border-violet-700'>
              About
            </Link>
          </li>
          <li className='sm:w-1/2'>
            <Link href='/contact-s' className='text-gray-500 hover:text-gray-900 mx-2 hover:border-b-2 border-violet-700'>
              Contact
            </Link>
          </li>
          
        </ul>
              {/* Mobile Navigation Toggler */}
              <button type="button" className="mr-3 hidden max-md:block" onClick={toggleNavbar}>
              <i class="bi bi-list text-2xl"></i>
              </button>
        {session?.user ? (
          <div className='flex w-10 justify-end'>
            <Image
              src={session?.user.image}
              width="37"
              height="37"
              className='rounded-full cursor-pointer'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown border-gray-200 border-2'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link max-md:hidden'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>

    {/* Mobile Navigation Menu */}
    <nav className="border-2 border-violet-300 rounded-lg w-11/12 m-auto sticky top-24 bg-gray-50 z-30 shadow-2xl hidden" id="mobileNav">
    <ul className='hidden max-md:flex flex-col items-center'>
          <li className=' py-4 w-full text-center'>
            <Link href='/' className='text-gray-500 hover:text-gray-900 mx-2 hover:border-b-2 border-violet-700'>
             Home
            </Link>
          </li>
          {session?.user ? (
              <li className="py-4 w-full text-center">
                <Link
                  href="/create-prompt"
                  className="text-gray-500 hover:text-gray-900 mx-2 hover:border-b-2 border-violet-700"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
              </li>
            ) : (
              <li className=" hidden"></li>
            )}
          <li className=' py-4 w-full text-center'>
            <Link href='/about' className='text-gray-500 hover:text-gray-900 mx-2 hover:border-b-2 border-violet-700'>
              About
            </Link>
          </li>
          <li className=' py-4 w-full text-center'>
            <Link href='/contact-us' className='text-gray-500 hover:text-gray-900 mx-2 hover:border-b-2 border-violet-700'>
              Contact
            </Link>
          </li>

        </ul>
    </nav>
    </>
  );
};

export default Nav;
