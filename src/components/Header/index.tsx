'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { HeaderLink } from './components/HeaderLink';
import { AppRoutesEnum } from '@/constants';
import { useSearchParams } from 'next/navigation';

export function Header() {
  const [openMobileMenuState, setOpenMobileMenuState] = useState(false);

  const handleClickMenuMobileButton = () => {
    setOpenMobileMenuState(true);
  };

  return (
    <header>
      <div className="flex justify-between border-b border-zinc-100 bg-zinc-800 p-4 sm:p-8">
        <Link href={'/'}>Home Logo</Link>
        <nav className="hidden gap-8 sm:flex">
          <HeaderLink href={AppRoutesEnum.HOME} label="Inicio" />
          <HeaderLink href={AppRoutesEnum.PROJECTS} label="Projetos" />
          <HeaderLink href={AppRoutesEnum.CONTACT} label="Contato" />
        </nav>
        <button className="flex cursor-pointer sm:hidden" onClick={handleClickMenuMobileButton}>
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
