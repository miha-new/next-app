import Link from 'next/link';
import LogoHere from '@/public/logo-here.svg';
import Contacts from './Contacts';
import Subscribe from './Subscribe';

const Footer = () => (
  <footer className="bg-black p-5">
    <div className="xl:max-w-7xl xl:m-auto">
      <div className="flex justify-center border-b border-white mb-8">
        <Link
          className="text-white mb-4 xl:mt-14 xl:mb-11"
          href="/"
        >
          <LogoHere className="w-[181px] h-[44px]" />
        </Link>
      </div>
      <div className="md:flex md:flex-wrap">
        <div className="text-center md:text-left text-white md:flex-1 xl:flex-none xl:w-[360px] xl:pr-5 pb-5">
          <div className="text-base xl:text-lg font-semibold mb-5">
            Reach us
          </div>
          <Contacts />
        </div>
        <div className="md:flex md:w-full xl:flex-1 md:order-2 xl:order-1">
          <div className="text-center text-white md:text-left md:flex-1 xl:px-5 pb-5">
            <div className="text-base xl:text-lg font-semibold mb-5">
              Company
            </div>
            <div>
              <div className="mb-5">
                <Link
                  className="base-link"
                  href="/blogs"
                >
                  About
                </Link>
              </div>
              <div className="mb-5">
                <Link
                  className="base-link"
                  href="/blogs"
                >
                  Contact
                </Link>
              </div>
              <div className="mb-5">
                <Link
                  className="base-link"
                  href="/blogs"
                >
                  Blogs
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center text-white md:text-left md:flex-1 xl:px-5 pb-5">
            <div className="text-base xl:text-lg font-semibold mb-5">
              Legal
            </div>
            <div>
              <div className="mb-5">
                <Link
                  className="base-link"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </div>
              <div className="mb-5">
                <Link
                  className="base-link"
                  href="/terms&services"
                >
                  Terms & Services
                </Link>
              </div>
              <div className="mb-5">
                <Link
                  className="base-link"
                  href="/terms-of-use"
                >
                  Terms of Use
                </Link>
              </div>
              <div className="mb-5">
                <Link
                  className="base-link"
                  href="/refund-policy"
                >
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center text-white md:text-left md:flex-1 xl:px-5 pb-5">
            <div className="text-base xl:text-lg font-semibold mb-5">
              Quick Links
            </div>
            <div>
              <div className="mb-5">
                <Link
                  className="base-link"
                  href="/techlabz-keybox"
                >
                  Techlabz Keybox
                </Link>
              </div>
              <div className="mb-5">
                <Link
                  className="base-link"
                  href="/downloads"
                >
                  Downloads
                </Link>
              </div>
              <div className="mb-5">
                <Link
                  className="base-link"
                  href="/forum"
                >
                  Forum
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-1 xl:flex-none xl:w-[325px] md:pl-5 xl:order-1 pb-5">
          <Subscribe />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;