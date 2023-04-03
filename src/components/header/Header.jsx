import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  const navList = [
    { id: 1, url: "/", name: "Home" },
    { id: 2, url: "/about", name: "About" },
    { id: 3, url: "/services", name: "Services" },
    { id: 4, url: "/products", name: "Products" },
    { id: 5, url: "/contact", name: "Contact Us" },
  ];

  const [isOpenNav, setIsOpenNav] = useState(false);
  return (
    <div className="bg-gray-900 px-8 py-4 md:flex justify-between items-center ">
      <h1 className="text-4xl text-white">Awesome GYM</h1>
      <span
        onClick={() => setIsOpenNav(!isOpenNav)}
        className="absolute md:hidden top-6 right-4"
      >
        {!isOpenNav ? (
          <Bars3Icon className="  h-6 w-6 text-white border-2 border-white rounded-md "></Bars3Icon>
        ) : (
          <XMarkIcon className="h-6 w-6 text-white"></XMarkIcon>
        )}
      </span>
      <ul
        className={`md:flex justify-end duration-700 overflow-hidden md:h-fit  ${
          !isOpenNav ? " h-0 " : " h-32 "
        }`}
      >
        {navList.map((item) => (
          <NavLink key={item.id} linkItem={item}></NavLink>
        ))}
      </ul>
    </div>
  );
};

function NavLink({ linkItem }) {
  return (
    <li className="mr-4 text-white pl-4 md:pl-1 hover:text-green-100 hover:border-b border-b-white">
      <a href={linkItem.url}>{linkItem.name}</a>
    </li>
  );
}

export default Header;
