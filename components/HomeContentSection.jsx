'use client'
import React from 'react';
import CTAButton from './GetButtons';
import Image from 'next/image';

const  HomeContentSection=()=> {
    return (
        <section className=' text-white flex flex-col-reverse lg:flex-row items-center justify-between font-urbanist'>
            <div className='lg:mt-[57px]  lg:mb-[82px]'>
                <h2 className='font-bold text-[25px] lg:text-[35px] color-[#FFFFFF]'>
                    Want to Turn Social Media Into a Profitable Career?
                </h2>
                <p className='font-bold text-[25px] lg:text-[35px] text-[#00E7F9] drop-shadow-[0_2px_4px_#FC004E]'>
                    Discover your way to success with Fametonic:
                </p>

                <ul className='space-y-[13px] pt-4'>
                    {[
                        'Start growing your influence right away—no waiting required!',
                        'Create viral TikToks and Reels step by step with easy-to-follow lessons',
                        'Use a Personal AI Worker to boost your content',
                        'Learn from expert-led courses designed for aspiring influencers',
                    ].map((item, i) => (
                        <li key={i} className='flex items-center space-x-2'>
                            <img
                                src='/images/star.png'
                                alt='star icon'
                                className='w-5.5 h-5.5 text-base font-medium lg:font-semibold leading-5.5'
                            />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <div className='flex flex-col-reverse lg:flex-col'>
                <CTAButton/>
                <div>
                <div className='text-xs font-medium text-[#ABABAB] font-figtree pt-[22px] pb-[19px] md:pt-0 md:pb-0'>
                    By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy,
                    Subscription Terms
                </div>
                <div className='text-[10px] font-figtree text-[#ABABAB] lg:pt-3'>
                    Fametonic 2025 © All Rights Reserved.
                </div>
                </div>
                </div>
               
              
            </div>

            <div className='mt-10 lg:mt-0'>
               
                <Image src='/images/hero-phone.svg' alt='phone' height={666} width={679}/>
            </div>
        </section>
    );
}
export default HomeContentSection;  