import whiteLogo from '../assets/white_logo.png';

export const Footer = () => {

  return (
    <footer className="flex flex-col items-center bg-black py-14 lg:pb-7">
      <img src={ whiteLogo } alt="White Logo" className="w-28 mb-5 lg:mb-7" />
      <p className="text-white text-xs lg:text-2xl">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
