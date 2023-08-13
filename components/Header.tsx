'use client'

import { useState } from 'react';
import Link from 'next/link'
import LogoHere from '@/public/logo-here.svg';
import IconMenu from '@/public/icon-menu.svg';
import IconCart from '@/public/icon-cart.svg';
import IconUser from '@/public/icon-user.svg';
import Menu from '@/components/Menu';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  function handleShowMenu() {
    document.body.classList.add('overflow-hidden');
    setShowMenu(true);
  }
  function handleHideMenu() {
    document.body.classList.remove('overflow-hidden');
    setShowMenu(false);
  }

  return (
    <header className="shadow-sm xl:shadow-none py-7 px-5">
      <div className="xl:max-w-7xl xl:m-auto">
        <div className="xl:flex text-black">
          <div className="flex items-center">
            <div className="mr-5">
              <Link href="/">
                <LogoHere className="w-[91px] h-[22px] xl:w-[121px] xl:h-[29px]" />
              </Link>
            </div>
            <div className="ml-auto xl:hidden">
              <div className="flex justify-end">
                <button onClick={handleShowMenu}>
                  <IconMenu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex xl:items-center xl:ml-auto">
            <nav className="xl:flex">
              <Link
                href="/"
                className="base-link mx-5"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="base-link mx-5"
              >
                Features
              </Link>
              <Link
                href="/blog"
                className="base-link mx-5"
              >
                Blog
              </Link>
              <Link
                href="/shop"
                className="base-link mx-5"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="base-link mx-5"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="base-link block mx-5"
              >
                Contact
              </Link>
            </nav>
            <nav className="flex justify-center">
              <Link
                href="/user"
                className="link-circle link-circle--black ml-7"
              >
                <IconUser className="w-[18px] h-[18px]" />
              </Link>
              <Link
                href="/cart"
                className="link-circle link-circle--black ml-7"
              >
                <IconCart className="w-[18px] h-[18px]" />
              </Link>
            </nav>

          </div>
        </div>
      </div>
       {showMenu && <Menu onHide={handleHideMenu} />}
    </header>
  );
};

export default Header;