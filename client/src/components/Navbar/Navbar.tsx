import React, { Key, ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { TbDrone } from 'react-icons/tb';
import { BsFillCameraFill } from 'react-icons/bs';
import { FaRobot } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';
import { BiHomeAlt } from 'react-icons/bi';
import { RiListSettingsLine } from 'react-icons/ri';
import { IoCloseSharp } from 'react-icons/io5';
import { HiMenuAlt1 } from 'react-icons/hi';

const menuList = [
  {
    icon: <BiHomeAlt size={25} />,
    name: 'home',
    path: '/',
  },
  {
    icon: <TbDrone size={25} />,
    name: 'drones',
    path: '/drones',
  },
  {
    icon: <BsFillCameraFill size={25} />,
    name: 'cameras',
    path: '/cameras',
  },
  {
    icon: <FaRobot size={25} />,
    name: 'robots',
    path: '/robots',
  },
  {
    icon: <MdExplore size={25} />,
    name: 'explore',
    path: '/explore',
  },
  {
    icon: <RiListSettingsLine size={25} />,
    name: 'settings',
    path: '/settings',
  },
];

const Navbar = () => {
  const router = useRouter();
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  return (
    <div className={`${showNavbar || '-left-[300px]'} md:left-0 relative`}>
      <button
        type="button"
        className={`flex md:hidden absolute top-0 -right-[70px] cursor-pointer bg-white rounded-lg p-2`}
        onClick={() => setShowNavbar((prevState) => !prevState)}
      >
        {showNavbar ? <IoCloseSharp size={20} /> : <HiMenuAlt1 size={20} />}
      </button>
      <div className="max-w-[250px] min-w-[250px] w-full min-h-[800px] h-full bg-white rounded-3xl flex flex-col justify-between items-center py-8">
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/"
              className="text-3xl leading-none font-deca font-extrabold"
              data-testid="logo"
            >
              AVD
            </Link>
            <div className="flex items-center justify-center gap-4 mt-5">
              <Image
                src="/avatar.svg"
                alt="profile picture"
                className="rounded-md object-top object-cover"
                width={35}
                height={35}
              />
              <p className="text-lg font-semibold">Tolgahan Tolu</p>
            </div>
          </div>
          <nav>
            <ul className="flex flex-col gap-4">
              {menuList.map((item: { icon: object; name: string; path: string }, i: Key) => (
                <li key={i}>
                  <Link href={item.path} className="flex flex-row items-center gap-4">
                    <span
                      className={` ${
                        router.pathname == item.path ? 'active' : 'text-theme-light-black'
                      } p-3 rounded-full`}
                    >
                      {item.icon as ReactNode}
                    </span>
                    <p
                      className={`${
                        router.pathname == item.path
                          ? 'text-theme-black font-semibold'
                          : 'text-theme-light-black font-medium'
                      } text-lg`}
                    >
                      {item.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <small className="text-xs mx-5 text-center">
          This demo project was created by{' '}
          <Link href="https://www.linkedin.com/in/tolgahant/" className="font-bold underline">
            Tolgahan Tolu
          </Link>
        </small>
      </div>
    </div>
  );
};

export default Navbar;
