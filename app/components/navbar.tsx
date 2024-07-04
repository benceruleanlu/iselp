import Link from "next/link";
import HamburgerMenu from "./hamburgerMenu";

const NavBar = () => {
  return (
    <div className="min-w-screen flex flex-row justify-between border-b p-4">
      <div className="flex flex-row items-center">
        <Link
          href="/"
          className="transform text-2xl font-semibold text-slate-950 transition duration-300 ease-in-out hover:scale-105 hover:text-[#0066CC] lg:p-2 lg:pl-4 lg:text-3xl"
        >
          ISELP for Everyone
        </Link>
      </div>
      <div className="mr-6 hidden flex-row items-center space-x-8 text-lg md:flex">
        <Link
          href="/references-resources-and-further-reading"
          className="transform transition duration-300 ease-in-out hover:scale-105 hover:text-[#0066CC]"
        >
          Resources
        </Link>
        <Link
          href="/about"
          className="transform transition duration-300 ease-in-out hover:scale-105 hover:text-[#0066CC]"
        >
          About
        </Link>
        <Link
          href="/help"
          className="transform transition duration-300 ease-in-out hover:scale-105 hover:text-[#0066CC]"
        >
          Help
        </Link>
      </div>
      <div className="md:hidden">
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default NavBar;
