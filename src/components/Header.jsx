import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const links = [
  {
    id: 1,
    title: "Home",
    to: "/Home",
  },
  {
    id: 2,
    title: "Goals",
    to: "/Goal",
  },
  {
    id: 3,
    title: "Connect",
    to: "/Connect",
  },
  {
    id: 4,
    title: "Contact",
    to: "/Contact",
  },
];

const Header = () => {
  const [nav, setNavBar] = useState(false);
  return (
    <div className="flex gap-2 justify-between items-center h-20 sticky top-0 w-full ">
      <h1 className=" text-3xl text-rose-800 font-bold  cursor-pointer flex justify-between items-center h-20 ml-6 hover:scale-105 duration-300">
        BuddyBurst
      </h1>
      <ul className=" hidden md:flex ml-auto cursor-pointer">
        {links.map(({ id, title, to }) => (
          <li
            key={id}
            className=" px-4 cursor-pointer py-6 font-medium text-slate-600 hover:scale-105 duration-300"
          >
            <a href={to}>{title}</a>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNavBar(!nav)}
        className="cursor-pointer z-10 md:hidden"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      {nav && (
        <ul className="flex md:hidden flex-col justify-center items-center absolute top-0 left-0 h-screen w-full text-slate-600 bg-white">
          {links.map(({ id, title, to }) => (
            <li key={id} className="cursor-pointer py-6 font-medium text-xl">
              <a href={to}>{title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
