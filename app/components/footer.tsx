import Image from 'next/image'
import peelImage from '/public/peelImageBW.png'
import facebookLogo from '/public/facebook.png'
import instagramLogo from '/public/instagram.png'
import twitterLogo from '/public/twitter.png'
import youtubeLogo from '/public/youtube.png'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex flex-row justify-between mb-8 w-10/12 mx-auto border-t items-center'>
      <div className='flex flex-col'>
        <a href="https://www.peelschools.org/" target='_blank'>
          <Image
            src={peelImage}
            alt="Logo of Peel District School Board"
            width={250}
            className='opacity-60 m-8 ml-6 md:w-[400px]'
          />
        </a>
        <div className='flex flex-row ml-6 space-x-12 mt-4'>
          <a href="https://x.com/peelschools" target='_blank'><Image src={twitterLogo} alt="Twitter Logo" width={24} height={24} className='opacity-60' /></a>
          <a href="https://www.instagram.com/peelschools/" target='_blank'><Image src={instagramLogo} alt="Instagram Logo" width={24} height={24} className='opacity-60' /></a>
          <a href="https://www.facebook.com/peelschools/" target='_blank'><Image src={facebookLogo} alt="Facebook Logo" width={24} height={24} className='opacity-60'/></a>
          <a href="https://www.youtube.com/user/PeelSchools" target='_blank'><Image src={youtubeLogo} alt="YouTube Logo" width={24} height={24} className='opacity-60' /></a>
        </div>
      </div>
      <div className='w-50 h-50 flex-row max-h-48 hidden custom-footer:flex'>
        <div className='flex flex-col mr-24 mt-8 space-y-4'>
          <p>Articles</p>
          <Link href="/portrait-of-a-learner-engaged-in-iselp" className='text-slate-600 transition duration-300 ease-in-out transform hover:scale-105'>Portrait</Link>
          <Link href="/iselp-and-other-exceptionalities-or-diagnoses" className='text-slate-600 transition duration-300 ease-in-out transform hover:scale-105'>Dual Ex.</Link>
          <Link href="/creating-an-iselp-individual-education-plan" className='text-slate-600 transition duration-300 ease-in-out transform hover:scale-105'>IEPs</Link>
        </div>

        <div className='flex flex-col mr-24 mt-8 space-y-4'>
          <p className='invisible'>Articles</p> {/* Invisible text to maintain spacing*/}
          <Link href="/the-role-of-the-classroom-teacher-in-iselp" className='text-slate-600 transition duration-300 ease-in-out transform hover:scale-105'>Teachers</Link>
          <Link href="/the-role-school-based-support-staff-in-iselp" className='text-slate-600 transition duration-300 ease-in-out transform hover:scale-105'>Sup. Staff</Link>
        </div>

        <div className='flex flex-col mr-16 mt-8 space-y-4'>
          <p>Other</p>
          <Link href="/references-resources-and-further-reading" className='text-slate-600 transition duration-300 ease-in-out transform hover:scale-105'>Resources</Link>
          <Link href="/about" className='text-slate-600 transition duration-300 ease-in-out transform hover:scale-105'>About</Link>
          <Link href="/help" className='text-slate-600 transition duration-300 ease-in-out transform hover:scale-105'>Help</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;