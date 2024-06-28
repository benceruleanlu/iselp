import Card from './components/card';
import Image from 'next/image'
import searchIcon from '/public/searchIcon.png'
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col'>
      <div className='bg-[#0066CC] text-slate-50 flex flex-col items-center px-[10vw] md:px-[18vw] text-center pt-[7vh] md:pt-[10vh] pb-[7vh] space-y-8 md:space-y-16'>
        <p className='text-4xl md:text-5xl lg:text-7xl font-bold max-w-[90vw] md:max-w-[70vw] tracking-tight'>What would you like to learn today?</p>
        <div className='bg-slate-50 text-slate-700 rounded-xl p-4 min-w-[60vw] lg:min-w-[42vw] flex flex-row justify-between'>
          <p className='text-left'>Search</p>
          <Image 
            src={searchIcon}
            alt='Icon of a magnifying glass'
            width={24}
          />
        </div>
        <Link href="/help" className='underline'>How to use this resource --&gt;</Link>
      </div>

      <div className='text-center mt-16 mb-10 max-w-[90vw] md:max-w-[40vw] mx-auto -mb'>
        <p className='font-bold text-5xl text-slate-950 mb-4'>ISELP Articles</p>
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
          title='The Role School-Based Support Staff in ISELP'
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
  );
}
