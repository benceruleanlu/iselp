import Image from 'next/image'
import peelImage from '/public/peelImageBW.png'
import facebookLogo from '/public/facebook.png'
import instagramLogo from '/public/instagram.png'
import twitterLogo from '/public/twitter.png'
import youtubeLogo from '/public/youtube.png'

const Footer = () => {
  return (
    <div className='flex flex-row justify-between mb-8 w-10/12 mx-auto border-t'>
      <div className='flex flex-col'>
        <a href="https://www.peelschools.org/" target='_blank'>
          <Image
            src={peelImage}
            alt="Logo of Peel District School Board"
            width={500}
            className='opacity-60 m-8 ml-6'
          />
        </a>
        <div className='flex flex-row ml-6 space-x-12 mt-4'>
          <a href="https://x.com/peelschools" target='_blank'><Image src={twitterLogo} alt="Twitter Logo" width={24} height={24} className='opacity-60' /></a>
          <a href="https://www.instagram.com/peelschools/" target='_blank'><Image src={instagramLogo} alt="Instagram Logo" width={24} height={24} className='opacity-60' /></a>
          <a href="https://www.facebook.com/peelschools/" target='_blank'><Image src={facebookLogo} alt="Facebook Logo" width={24} height={24} className='opacity-60'/></a>
          <a href="https://www.youtube.com/user/PeelSchools" target='_blank'><Image src={youtubeLogo} alt="YouTube Logo" width={24} height={24} className='opacity-60' /></a>
        </div>
      </div>
      <div className='w-50 h-50 flex flex-row max-h-48'>
        <div className='flex flex-col mr-24 mt-8 space-y-4'>
          <p>Articles</p>
          <p className='text-slate-600'>Article 1</p>
          <p className='text-slate-600'>Article 2</p>
          <p className='text-slate-600'>Article 3</p>
        </div>

        <div className='flex flex-col mr-24 mt-8 space-y-4'>
          <p className='invisible'>Articles</p> {/* Invisible text hotfix to maintain spacing*/}
          <p className='text-slate-600'>Article 4</p>
          <p className='text-slate-600'>Article 5</p>
          <p className='text-slate-600'>Article 6</p>
        </div>

        <div className='flex flex-col mr-16 mt-8 space-y-4'>
          <p>Other</p>
          <p className='text-slate-600'>Resources</p>
          <p className='text-slate-600'>About</p>
          <p className='text-slate-600'>Help</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;