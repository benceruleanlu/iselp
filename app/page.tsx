import Card from './components/card';
import Navbar from './components/navbar';
import Link from 'next/link';
import SearchBar from './components/searchbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex flex-col'>
        <div className='bg-[#0066CC] text-slate-50 flex flex-col items-center px-8 lg:px-[18vw] text-center lg:pt-[10vh] py-10 space-y-8 lg:space-y-16'>
          <p className='text-4xl md:text-5xl lg:text-7xl font-bold max-w-[90vw] md:max-w-[70vw] tracking-tight'>What would you like to learn today?</p>
          <SearchBar />
          <Link href="/help" className='underline hidden lg:block'>How to use this resource --&gt;</Link>
        </div>

        <div className='text-center mt-8 lg:mt-16 mb-4 lg:mb-10 max-w-[90vw] md:max-w-[40vw] mx-auto -mb'>
          <p className='font-bold text-3xl lg:text-5xl text-slate-950 mb-2 lg:mb-4'>ISELP Articles</p>
          <p className='text-slate-500 text-lg'>Search and browse at your leisure.</p>
        </div>

        <div className='flex flex-row flex-wrap mx-auto justify-center mb-10'>
          <Card
            title='Portrait of a Learner Engaged in ISELP'
            subtitle='Learn how to understand and support gifted learners, including their characteristics and potential challenges.'
            imageSrc='/stock1.jpg'
            linkUrl='/portrait-of-a-learner-engaged-in-iselp'
          />
          <Card
            title='ISELP and Other Exceptionalities/Diagnoses'
            subtitle='Learn how to support "Dual Exceptional" students with additional diagnoses or exceptionalities.'
            imageSrc='/stock2.jpg'
            linkUrl='/iselp-and-other-exceptionalities-or-diagnoses'
          />
          <Card
            title='Creating an ISELP Individual Education Plan'
            subtitle='Learn how to tailor an Individualized Education Plan (IEP) to meet the unique needs of gifted students.'
            imageSrc='/stock3.jpg'
            linkUrl='/creating-an-iselp-individual-education-plan'
          />
          <Card
            title='The Role of the Classroom Teacher in ISELP'
            subtitle='Learn how to effectively engage and challenge learners in ISELP with specific classroom strategies.'
            imageSrc='/stock4.jpg'
            linkUrl='/the-role-of-the-classroom-teacher-in-iselp'
          />
          <Card
            title='The Role of School-Based Support Staff in ISELP'
            subtitle='Learn how to effectively implement and support the ISELP program in a regular classroom setting.'
            imageSrc='/stock5.jpg'
            linkUrl='/the-role-school-based-support-staff-in-iselp'
          />
          <Card
            title='References, Resources, and Further Reading'
            subtitle='Learn more about the resources used on this website.'
            imageSrc='/stock6.jpg'
            linkUrl='/references-resources-and-further-reading'
          />
        </div>
      </main>
    </>
  );
}
