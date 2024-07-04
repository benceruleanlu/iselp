import Link from "next/link";
import HamburgerMenu from "./hamburgerMenu";

const NavBar = () => {
  return (
    <div className="min-w-screen mx-auto flex w-11/12 flex-row justify-between border-b py-4 xl:px-0">
      <div className="flex flex-row items-center">
        <Link
          href="/"
          className="transform text-2xl font-semibold text-slate-950 transition duration-300 ease-in-out hover:scale-105 hover:text-[#0066CC] lg:py-2 lg:text-3xl"
        >
          ISELP for Everyone
        </Link>
      </div>
      <div className="hidden flex-row items-center space-x-8 text-lg md:flex">
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
