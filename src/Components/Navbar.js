import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import Logo from '../assets/dhsLogo.png'
import { Disclosure } from "@headlessui/react";
import { HashLink } from "react-router-hash-link";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Projects", href: "#projects", current: false },
  { name: "Our Services", href: "#services", current: false },
  { name: "About Us", href: "#about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ className }) {
  const [navs, setNavs] = useState(navigation);

  const handleActive = (nav) => {
    const updatedNavs = navs.map(item => ({
      ...item,
      current: item.name === nav.name
    }));
    setNavs(updatedNavs);
  };

  return (
    <Disclosure as="nav" className={`bg-transparent ${className}`}>
      {({ open }) => (
        <>
          <div className="pt-8">
            <div className="relative flex flex-row-reverse lg:flex-row items-center justify-between h-16">
              <div className="inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className=" mx-auto ml-0 flex flex-start w-[80%] sm:items-stretch sm:justify-start">
                <div className="relative right-4 flex-shrink-0 flex items-center">
                  <img src={Logo} alt="logo" className="h-20 w-20" />
                </div>
                <div className="hidden sm:block relative sm:ml-6">
                  <div className="ml-80 md:ml-[8rem] xl:ml-80 flex space-x-4 relative top-4 links-nav">
                    {navs.map((item) => (
                      <HashLink
                        onClick={() => handleActive(item)}
                        smooth
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "text-transparent bg-clip-text bg-gradient-to-br from-[#6664F1] to-[#C94AF0] md:text-xs lg:text-base"
                            : "text-gray-300",
                          "px-3 py-2 rounded-md text-sm font-medium md:text-xs lg:text-base hover:text-white hover:scale-110 ease-in duration-200"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </HashLink>
                    ))}
                  </div>
                </div>
              </div>
              {/* Botón "Contact Us" fuera de las opciones de navegación */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 contact-btn">
                <HashLink
                  smooth
                  to="#contact"
                  onClick={() => handleActive({ name: "Contact" })}
                  className="text-white border rounded px-7 py-2 md:px-5 hover:text-white c-btn relative tracking-wider overflow-hidden relative bottom-1"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-[#6664F1] to-[#C94AF0]"></span>
                  <span className="inset-0 flex justify-center items-center">
                    Contact Us
                  </span>
                </HashLink>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 ">
              {navs.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={() => handleActive(item)}
                  className={classNames(
                    item.current
                      ? "bg-transparent text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
