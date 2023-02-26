import React, {useState} from "react";
import Link from "next/link";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false)

    const onClickMenu = () => {
      setOpenMenu(!openMenu)
    }

  return (
      <nav
          className="bg-primary-nav px-2 sm:px-4 pt-3.5 py-3 fixed w-full z-20 top-0 left-0">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
              <Link href="/">
                  <div  className="flex items-center">
                      <img src="/logo.png" className="h-6 mr-3 sm:h-9 rounded-full" alt="Logo" />
                      <span
                          className="text-white self-center text-xl font-semibold whitespace-nowrap">สวนสน แบตเตอรี่</span>
                  </div>
              </Link>
              <div className="flex md:order-2 text-white">
                  <button
                      onClick={onClickMenu}
                      data-collapse-toggle="navbar-sticky" type="button"
                          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                          aria-controls="navbar-sticky" aria-expanded="false">
                      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd" />
                      </svg>
                  </button>
              </div>
              <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                   id="navbar-sticky">
                  <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-primary-nav md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0 md:bg-primary-nav">
                      <li className='text-white'>
                          <Link href="/"
                             className={`block py-2 pl-3 pr-4 text-white bg-primary-nav rounded md:bg-transparent md:p-0`}
                             aria-current="page">หน้าหลัก</Link>
                      </li>
                      <li className='text-white'>
                          <Link href="/products"
                                className={`block py-2 pl-3 pr-4 text-white bg-primary-nav rounded md:bg-transparent md:p-0`}>
                              สินค้า</Link>
                      </li>
                      <li className='text-white'>
                          <Link href="/reviews"
                                className={`block py-2 pl-3 pr-4 text-white bg-primary-nav rounded md:bg-transparent md:p-0`}>
                              รีวิว</Link>
                      </li>
                      <li className='text-white'>
                          <Link href="/contact"
                                className={`block py-2 pl-3 pr-4 text-white bg-primary-nav rounded md:bg-primary-nav md:p-0`}>
                              ติดต่อเรา</Link>
                      </li>
                  </ul>
              </div>
          </div>
          {openMenu &&
              <div className='absolute bg-white w-10/12 h-hull top-16 right-2 rounded-md'>
                  <ul onClick={onClickMenu}>
                      <li className='text-primary-nav'>
                          <Link href="/"
                                className={`block py-2 pl-3 pr-4 rounded md:p-0`}
                                aria-current="page">หน้าหลัก</Link>
                      </li>
                      <li className='text-primary-nav'>
                          <Link href="/products"
                                className={`block py-2 pl-3 pr-4 rounded md:p-0`}>
                              สินค้า</Link>
                      </li>
                      <li className='text-primary-nav'>
                          <Link href="/reviews"
                                className={`block py-2 pl-3 pr-4 rounded md:p-0`}>
                              รีวิว</Link>
                      </li>
                      <li className='text-primary-nav'>
                          <Link href="/contact"
                                className={`block py-2 pl-3 pr-4 rounded md:p-0`}>
                              ติดต่อเรา</Link></li>
                  </ul>
              </div>
          }
      </nav>
  );
};
export default NavBar;
