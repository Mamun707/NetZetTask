'use client';
import { useState } from 'react';
import Image from 'next/image';

const Navbar=()=> {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='flex justify-between items-center pt-[35px] md:pt-[35px] bg-black relative'>
            {/* Logo for Mobile */}
            <div className='md:hidden absolute left-1/2 transform -translate-x-1/2'>
                <Image 
                    src='/images/logo.svg' 
                    alt='logo' 
                    width={105} 
                    height={45}     
                    priority
                />
            </div>

            {/* Logo for Desktop */}
            <div className='hidden md:block'>
                <Image 
                    src='/images/logo.svg' 
                    alt='logo' 
                    width={170} 
                    height={72}     
                    priority
                />
            </div>

            {/* Desktop Section */}
            <nav className='hidden md:flex space-x-6 lg:space-x-8 text-[#A9A9A9]'>
                <a href='#' className='font-figtree text-sm font-semibold hover:text-gray-300 transition'>
                    About us
                </a>
                <a href='#' className='font-figtree text-sm font-semibold hover:text-gray-300 transition'>
                    Contact
                </a>
            </nav>

              {/* Mobile Section */}
            <button 
                className='md:hidden text-white focus:outline-none ml-auto' // ml-auto pushes it to the right
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
            >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
            </button>

            {isMenuOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-95 z-50 p-6 flex flex-col'>
                    <div className='flex justify-end mb-6'>
                        <button 
                            onClick={() => setIsMenuOpen(false)} 
                            className='text-white focus:outline-none'
                            aria-label="Close menu"
                        >
                            <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>
                    </div>

                    <nav className='flex flex-col space-y-6 text-[#A9A9A9] text-lg'>
                        <a 
                            href='#' 
                            className='font-figtree font-semibold hover:text-gray-300 transition'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About us
                        </a>
                        <a 
                            href='#' 
                            className='font-figtree hover:text-gray-300 transition'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
export default Navbar;