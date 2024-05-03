import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constant";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full border-2 border-black ">
      <nav className="max-container flex justify-between *:items-center">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={20} />
        </a>
        <ul className="flex-1 flex gap-16 justify-center items-center max-lg:hidden">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="text-lg text-slate-500 font-montserrat leading-normal"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block  text-right focus-visible:ring-2 ">
          <Menu as="div">
            <div>
              <Menu.Button>
                <img src={hamburger} alt="hamburger" width={25} height={25} />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-12 mt-2 w-56 origin-top-right divide-y divide-gray-500 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none font-montserrat text-slate-500 ">
                <div className="px-1 py-1 ">
                  {navLinks.map((el) => (
                    <Menu.Item key={el.label}>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-orange-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {el.label}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
