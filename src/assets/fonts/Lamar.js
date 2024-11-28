import localFont from 'next/font/local';

export const Lamar = localFont({
  src: [
    {
      path: './Lamar-Font.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Lamar-Font.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-lamar'
});