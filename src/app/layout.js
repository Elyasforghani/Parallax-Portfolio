
import { Monsieur_La_Doulaise, Funnel_Sans } from 'next/font/google';
import "./globals.css";
import ScrollSmooth from './components/ScrollSmooth';
import CustomCursorTrail from './components/CustomCursorTrail';

const subTitleFont = Monsieur_La_Doulaise({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-subtitle',
});

const funnelSans = Funnel_Sans({
  subsets: ['latin'],
  variable: '--font-funnel',
});
export const metadata = {
  title: "Elyas Forghani — Creative Developer & Art Director",
  description: "Personal portfolio of Elyas Forghani, featuring kinetic typography, editorial design, and interactive web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${subTitleFont.variable} ${funnelSans.variable} antialiased`}>
      <body className="bg-neutral-950 text-neutral-100 selection:bg-white selection:text-black">
        <CustomCursorTrail/>
        <ScrollSmooth>
          {children}
        </ScrollSmooth>
      </body>
    </html>
  );
}