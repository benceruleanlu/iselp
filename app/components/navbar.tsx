// import Image from 'next/image'
import Link from 'next/link'
// import peelImage from '/public/peelImage.png'

const NavBar = () => {
  return (
    <div className='flex flex-row justify-between min-w-screen p-4 border-b'>
        <div className='flex flex-row items-center'>
          {/* <Image
              src={peelImage}
              alt="Logo of Peel District School Board"
              width={350}
              className='pl-2 pt-2 pb-2'
          />
          <div className='border-black border-l min-h-20 mx-4'></div> */}
          <Link href="/" className='text-3xl p-2 pl-4 transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#0066CC] font-semibold text-slate-950'>ISELP for Everyone</Link>
        </div>
        <div className='flex flex-row items-center text-lg space-x-8 mr-6'>
            <Link href="/references-resources-and-further-reading" className='transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#0066CC]'>Resources</Link>
            <Link href="/about" className='transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#0066CC]'>About</Link>
            <Link href="/help" className='transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#0066CC]'>Help</Link>
        </div>
    </div>
  );
}

export default NavBar;