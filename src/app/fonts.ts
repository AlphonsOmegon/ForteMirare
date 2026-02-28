import { Cinzel_Decorative, Cinzel, Raleway } from 'next/font/google';

export const cinzelDecorative = Cinzel_Decorative({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'optional',
  variable: '--main-title-font',
});

export const cinzel = Cinzel({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'optional',
  variable: '--title-font',
});

export const raleway = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'optional',
  variable: '--text-font',
});