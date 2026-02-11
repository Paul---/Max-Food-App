'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Base and hover styles
const baseClasses =
  'rounded-[0.5rem] px-4 py-2 font-bold text-[#ddd6cb] no-underline transition-all hover:bg-linear-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_18px_rgba(248,190,42,0.8)]';

// Active-only styles
const activeClasses = 'bg-linear-to-r from-[#ff8a05] to-[#f9b331] bg-clip-text text-transparent';

interface NavLink {
  name: string;
  href: string;
}

interface NavLinksProps {
  links: NavLink[];
}

export default function NavLinks({ links }: NavLinksProps) {
  const pathname = usePathname();
  return (
    <>
      <nav>
        <ul className="m-0 flex list-none gap-6 p-0 text-[1.25rem]">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${baseClasses} ${isActive ? activeClasses : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
