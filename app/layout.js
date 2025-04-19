import { Urbanist, Figtree } from 'next/font/google';
import './globals.css';

const urbanist = Urbanist({
    subsets: ['latin'],
    variable: '--font-urbanist',
    weight: ['400', '500', '600', '700'],
});

const figtree = Figtree({
    subsets: ['latin'],
    variable: '--font-figtree',
    weight: ['400', '500', '600', '700'],
});

export const metadata = {
    title: 'Fame Tonic',
    description: 'NetZet Task',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={`${urbanist.variable} ${figtree.variable}`}>
            <body className='antialiased'>{children}</body>
        </html>
    );
}
