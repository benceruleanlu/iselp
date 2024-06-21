import NavBar from './components/navbar';
import Footer from './components/footer';
import Card from './components/card';
import Image from 'next/image'
import searchIcon from '/public/searchIcon.png'

export default function Home() {
  return (
    <div className="flex flex-col min-w-screen">
      <NavBar />
      
      <main className='flex flex-col'>
        <div className='bg-[#0066CC] text-slate-50 flex flex-col items-center px-[18vw] text-center pt-[10vh] pb-[7vh] space-y-16'>
          <p className='text-7xl font-bold max-w-[50vw]'>What would you like to learn today?</p>
          <div className='bg-slate-50 text-slate-700 rounded-xl p-4 min-w-[42vw] flex flex-row justify-between'>
            <p className='text-left'>Search</p>
            <Image 
              src={searchIcon}
              alt='Icon of a magnifying glass'
              width={24}
            />
          </div>
          <a href="https://example.com" target='_blank' className='underline'>How to use this resource --&gt;</a>
        </div>

        <div className='text-center mt-16 mb-10 max-w-[25vw] mx-auto -mb'>
          <p className='font-bold text-5xl text-slate-950 mb-4'>ISELP Articles</p>
          <p className='text-slate-500 text-lg'>Search and browse at your leisure, or read up on how to use this website.</p>
        </div>

        <div className='flex flex-row flex-wrap max-w-[90vw] mx-auto justify-center mb-10'>
          <Card
            title='Article one'
            subtitle='Learn how to navigate through the website and find the information you need.'
            imageSrc='/stock1.jpg'
            linkUrl='/how-to-use-this-website'
          />
          <Card
            title='Article two'
            subtitle='Learn how to navigate through the website and find the information you need.'
            imageSrc='/stock2.jpg'
            linkUrl='/how-to-use-this-website'
          />
          <Card
            title='Article three'
            subtitle='Learn how to navigate through the website and find the information you need.'
            imageSrc='/stock3.jpg'
            linkUrl='/how-to-use-this-website'
          />
          <Card
            title='Article four'
            subtitle='Learn how to navigate through the website and find the information you need.'
            imageSrc='/stock4.jpg'
            linkUrl='/how-to-use-this-website'
          />
          <Card
            title='Article five'
            subtitle='Learn how to navigate through the website and find the information you need.'
            imageSrc='/stock5.jpg'
            linkUrl='/how-to-use-this-website'
          />
          <Card
            title='Article six'
            subtitle='Learn how to navigate through the website and find the information you need.'
            imageSrc='/stock6.jpg'
            linkUrl='/how-to-use-this-website'
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
