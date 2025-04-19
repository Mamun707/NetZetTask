import HomeContentSection from '@/components/HomeContentSection';
import Navbar from '@/components/Navbar';

export default function Home() {
    return (
        <main className=' bg-[#010101] min-h-screen'>
            <div className='bg-gradient-to-r from-pink-600 to-cyan-400 text-white p-3 text-center text-[16px] lg:text-[22px] font-extrabold font-figtree'>
                <span className='text-[#00E7F9]'>🚀 FRESH BEGINNINGS SALE:</span> Extra 25% OFF,
                Limited Spots - start your journey today!
            </div>
            <div className='mx-auto px-5 sm:px-6 lg:mx-[215px] lg:px-0'>
                <Navbar />
                <HomeContentSection/>
            </div>
        </main>
    );
}
