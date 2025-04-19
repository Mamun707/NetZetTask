'use client';
import Image from 'next/image';
import React from 'react';

const GetButtons=()=> {
    return (
        <div className='w-max my-7.5'>
            <button className='bg-[#FC004E] px-[83px] py-2 rounded-lg font-bold text-xl inline-flex items-center shadow-[2px_2px_10px_0px_#00E7F9]'>
                GET STARTED
                <Image
                    src='/images/arrow-icon.png'
                    alt='Arrow Icon'
                    className='object-contain ml-2'
                    height={6}
                    width={11}
                />
            </button>
            <p className='text-xs text-gray-500 text-center mt-2.5'>
                1-minute quiz for personalized insights
            </p>
        </div>
    );
}
export default GetButtons;