import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='flex flex-row justify-between min-w-screen p-4 border-b'>
        <div className='flex flex-row items-center'>
          <Link href="/" className='text-2xl lg:text-3xl lg:p-2 lg:pl-4 transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#0066CC] font-semibold text-slate-950'>ISELP for Everyone</Link>
        </div>
        <div className='hidden md:flex flex-row items-center text-lg space-x-8 mr-6'>
            <Link href="/references-resources-and-further-reading" className='transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#0066CC]'>Resources</Link>
            <Link href="/about" className='transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#0066CC]'>About</Link>
            <Link href="/help" className='transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#0066CC]'>Help</Link>
        </div>
    </div>
  );
}

export default NavBar;