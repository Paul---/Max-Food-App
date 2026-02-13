import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import { MainHeaderBackground } from './main-header-background';
import NavLinks from './NavLinks';

const navigationLinks = [
  { name: 'Foodies Community', href: '/community' },
  { name: 'Browse Meals', href: '/meals' },
];

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex items-center justify-between px-4 py-8 md:px-[10%]">
        <Link
          className="font-brand flex items-center justify-center gap-8 text-[1.5rem] font-bold tracking-[0.15rem] text-[#ddd6cb] uppercase no-underline"
          href="/"
        >
          <Image
            width={80}
            height={80}
            className="h-20 w-20 object-contain drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]"
            priority
            src={logo}
            alt="Plate with food on it"
          />
          NextLevel Food
        </Link>
        <NavLinks links={navigationLinks} />
      </header>
    </>
  );
}
