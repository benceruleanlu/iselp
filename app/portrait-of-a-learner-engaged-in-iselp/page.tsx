import Image from 'next/image'

const Page = () => {
  return (
    <div className='flex flex-col justify-between w-10/12 mx-auto my-16'>
      <p className='font-bold text-5xl text-slate-950 mb-4'>Portrait of a Learner Engaged in ISELP</p>
      <p className='text-slate-500 text-lg mb-6'>Learn how to understand and support gifted learners, including their characteristics and potential challenges.</p>

      <div className='space-y-4'>
        <p>The Ministry of Education defines Giftedness as “[a]n unusually advanced degree of general intellectual ability that requires differentiated learning experiences of a depth and breadth beyond those normally provided in the regular school program to satisfy the level of educational potential indicated” (Ministry of Education, 2017). For the purposes of the Peel District School Board, this is the definition that is used to describe our Gifted learners.</p>
        <p>It is important to note the other definitions of Giftedness that cite characteristics such as:</p>

        <ol className='list-disc pl-12'>
          <li>“asynchronous development” (Vuyk, Kerr, & Thomas, 2016; Silverman, 1996);</li>
          <li>a “physiological reality” (Gifted Development Centre); and,</li>
          <li>exceptionally high ability regardless of academic performance (Peterson, 2015).</li>
        </ol>

        <p>However, Giftedness goes far beyond this definition, and like all exceptionalities, is complex. Common characteristics and traits of Gifted learners are listed below:</p>


      </div>
    </div>
  );
}

export default Page;