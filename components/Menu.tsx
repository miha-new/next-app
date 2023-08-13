import Link from 'next/link'
import LogoHere from '@/public/logo-here.svg';
import IconClose from '@/public/icon-close.svg';
import IconCart from '@/public/icon-cart.svg';
import IconUser from '@/public/icon-user.svg';

interface IMenu {
  onHide(): void;
};

const Menu = ({ onHide }: IMenu) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-[500] text-white bg-black overflow-auto flex flex-col">
      <div className="flex items-center py-7 px-5">
        <div className="mr-5">
          <Link href="/">
            <LogoHere className="w-[91px] h-[22px]" />
          </Link>
        </div>
        <div className="ml-auto">
          <div className="flex justify-end">
            <button onClick={onHide}>
              <IconClose className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-auto py-5">
        <nav>
          <Link
            href="/"
            className="base-link block py-3.5 px-5"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="base-link block py-3.5 px-5"
          >
            Features
          </Link>
          <Link
            href="/blog"
            className="base-link block py-3.5 px-5"
          >
            Blog
          </Link>
          <Link
            href="/shop"
            className="base-link block py-3.5 px-5"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="base-link block py-3.5 px-5"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="base-link block py-3.5 px-5"
          >
            Contact
          </Link>
        </nav>
        <nav className="flex justify-center p-5 mt-auto">
          <Link
            href="/user"
            className="link-circle link-circle--white mx-4"
          >
            <IconUser className="w-[18px] h-[18px]" />
          </Link>
          <Link
            href="/cart"
            className="link-circle link-circle--white mx-4"
          >
            <IconCart className="w-[18px] h-[18px]" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Menu;