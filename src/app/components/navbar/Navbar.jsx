"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { clearLists} from "../../store/reducers/ReducerSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  function handleClearLists() {
    dispatch(clearLists());
  }


  return (
    <nav className="bg-orange-300 navbar-shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/emoji-start.svg"
            width={100}
            height={100}
            alt="Arc de Triomphe"
            className="img_shadow"
          />
          <svg height="40" width="240">
            <text x="5" y="30" fill="red" fontSize="25">
              <tspan fill="#111826" stroke="#36494F">
                MEMS_not_TO_#LOL
              </tspan>
            </text>
          </svg>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="bg-orange-300">
          <ul className="font-medium flex flex-col p-4 md:p-3 mt-4 border border-gray-100 nav_actions rounded-lg bg-yellow-100 shadow-xl md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:border-gray-700 w-80 justify-center">
            <li>
              <Link
                href="/pages/all/"
                className=" md:hover:text-orange-300"
                aria-current="page"
              >
                All
              </Link>
            </li>
            <li>
              <Menu>
                <MenuButton>Hot</MenuButton>
                <MenuItems anchor="bottom" className="menuItems">
                  <MenuItem>
                    <Link
                      data-dropdown-toggle="dropdownNavbar"
                      href="/pages/hot/"
                      className="data-[focus]:bg-orange-100 menuItems"
                      aria-current="page"
                    >
                      Lista hot
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <a
                      data-dropdown-toggle="dropdownNavbar"
                      className="data-[focus]:bg-orange-100 menuItems"
                      onClick={handleClearLists}
                    >
                      Resetuj listę
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </li>
            <li>
              <Menu>
                <MenuButton>Regular</MenuButton>
                <MenuItems anchor="bottom" className="menuItems">
                  <MenuItem>
                    <Link
                      data-dropdown-toggle="dropdownNavbar"
                      className="data-[focus]:bg-orange-100 menuItems"
                      aria-current="page"
                      href="/pages/regular/"
                    >
                      Lista regular
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <a
                      className="block data-[focus]:bg-orange-100 menuItems"
                      onClick={handleClearLists}
                    >
                      Resetuj listę
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </li>
            <li>
              <Link className=" md:hover:text-orange-300" href="/pages/new">
                New
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
