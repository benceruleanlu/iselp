import Image from 'next/image'

const Page = () => {
  return (
    <div className='flex flex-col justify-between w-10/12 mx-auto my-16 max-w-screen-lg'>
      <p className='font-bold text-5xl text-slate-950 mb-4'>Portrait of a Learner Engaged in ISELP</p>
      <p className='text-slate-500 text-lg mb-6'>Learn how to understand and support gifted learners, including their characteristics and potential challenges.</p>

      <div className='space-y-4'>
        <p className='text-gray-600	text-sm italic'>Note: While this section refers specifically to Giftedness, much of the information is applicable both to students who are identified as Exceptional Intellectual - Gifted, and to those students who are engaged in ISELP, but are receiving Non-Identified Special Education services.</p>

        <p className='font-semibold text-3xl'>Summary and Highlights</p>
        <hr />

        <p>The Ministry of Education defines Giftedness as “[a]n unusually advanced degree of general intellectual ability that requires differentiated learning experiences of a depth and breadth beyond those normally provided in the regular school program to satisfy the level of educational potential indicated” (Ministry of Education, 2017). For the purposes of the Peel District School Board, this is the definition that is used to describe our Gifted learners.</p>
        <p>It is important to note the other definitions of Giftedness that cite characteristics such as:</p>

        <ol className='list-disc pl-12'>
          <li>“asynchronous development” (Vuyk, Kerr, & Thomas, 2016; Silverman, 1996);</li>
          <li>a “physiological reality” (Gifted Development Centre); and,</li>
          <li>exceptionally high ability regardless of academic performance (Peterson, 2015).</li>
        </ol>

        <p>However, Giftedness goes far beyond this definition, and like all exceptionalities, is complex. Common characteristics and traits of Gifted learners are listed below:</p>

        <div className='flex justify-center w-full'>
          <Image
            src='/commonCharacteristicsOfGiftedLearners.png'
            width={800}
            height={600}
            alt='Characteristics of Gifted Learners'
            className='rounded-lg py-6'
          />
        </div>

        <p className='text-gray-600	text-sm'>(Note: The above lists are not all-encompassing, and some students may demonstrate characteristics not listed here. Moreover, not all students will display all of these characteristics.)</p>

        <p className='font-semibold text-xl'>Affective qualities of Gifted learners:</p>
        
        <p>Gifted learners often perceive and engage with the world differently than their non-Gifted peers. While many of their ‘gifts’ present a multitude of opportunities, it is important to note that in some cases these ‘gifts’ might make students more vulnerable to academic anxiety, social-emotional problems, and Gifted underachievement (Stornelli, Flett, & Hewitt, 2009; Christopher & Shewmaker, 2010;. Gaesser, 2018).</p>

        <p className='font-semibold text-xl'>Gifted underachievement:</p>

        <p>Some Gifted students underperform compared to the evidence that they are capable of high achievement. Research offers a variety of reasons to explain Gifted underachievement including, but not limited to:</p>

        <ol className='list-disc pl-12'>
          <li>students’ fixed mindset about giftedness such as perfectionism or rebellion;</li>
          <li>feeling unsupported by parents, teachers and/or non-Gifted peers; and,</li>
          <li>misperceptions about the value of student work such as varied interpretations of depth and breadth of learning (Rimm, 1986; Roberts, Inman & Robins, 2022).</li>
        </ol>

        <br />
        <p className='font-semibold text-3xl'>In-Depth</p>
        <hr />

        <p className='font-semibold text-xl'>What is Giftedness?</p>

        <p>Giftedness is a complex exceptionality. As such, there are a variety of definitions that are used to describe “Giftedness” across a variety of resources. There is no universally accepted definition of gifted. Some definitions are functional and relate to a selection process (e.g., scores, percentiles) and some clarify the nature of giftedness (e.g., domains, affinities). The Ministry of Education’s definition of Giftedness is: “an unusually advanced degree of general intellectual ability that requires differentiated learning experiences of a depth and breadth beyond those normally provided.” This is the definition under which the Peel District School Board and schools throughout the province use to determine “Giftedness.” </p>

        <p>However, it is important to note the other definitions of Giftedness that cite characteristics such as:</p>

        <ol className='list-disc pl-12'>
          <li>“asynchronous development” (Vuyk, Kerr, & Thomas, 2016; Silverman, 1996);</li>
          <li>a “physiological reality” (Gifted Development Centre); and,</li>
          <li>exceptionally high ability regardless of academic performance (Peterson, 2015).</li>
        </ol>

        <p>Vuky, Kerr, & Thomas (2016) present a definition of Giftedness that incorporates a wide swath of the research into Giftedness, defining it as “asynchronous development in which advanced cognitive abilities and heightened intensity combine to create inner experiences and awareness that are qualitatively different from the norm” (Vuyk, Kerr, & Thomas, 2016, pg. 60). Most importantly, though, as there are no two Gifted learners who are exactly alike, there is no single definition of Giftedness (Kennedy & Farley, 2017).</p>

        <div className='flex w-full justify-center py-1'><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/L8OlKSNQAIU?si=fUTpBWElTGmS9qGo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>

        <p className='font-semibold text-xl'>Common characteristics of Gifted learners</p>

        <p>There is a common misconception that Gifted students are a fairly heterogeneous group (Schultz, 2018); however, Gifted students can exhibit a wide range of personality characteristics and processing abilities.</p>

        <p>The graphic below outlines those characteristics that appear most commonly in Gifted students, even though they will be expressed differently in each student. It is important to recognize that not every Gifted student will necessarily show all of the same characteristics or common traits.</p>

        <div className='flex justify-center w-full'>
          <Image
            src='/commonCharacteristicsOfGiftedLearners.png'
            width={800}
            height={600}
            alt='Characteristics of Gifted Learners'
            className='rounded-lg py-6'
          />
        </div>

        <p className='font-semibold text-xl'>Portraits of Gifted and talented</p>

        <p>Giftedness manifests differently amongst Gifted students. The link to the chart below provides further details on the different portraits of Gifted learners and some suggestions for home and school support.</p>

        <p><a href="https://docs.google.com/document/d/12nOtu6kacb7DteCxcwfPsMb1neWc47BnzDoONmY0Ds4/edit?usp=sharing" target='_blank' className='text-[#0066CC] underline'>Portraits of Gifted and talented students</a></p>

        <p>(Adapted from Reis, Sally M. series editor (2004). Essential Readings in Gifted Education: A Joint Publication of Corwin Press and the National Association for Gifted Children, Thousand Oaks, CA: Corwin Press.)</p>

        <p className='font-semibold text-xl'>Misconceptions about Giftedness</p>

        <p>Due to the complex intellectual and socio-emotional traits of Gifted learners, it is not uncommon for educators to misunderstand their behaviours, attitudes, and learning needs or desires. As educators, it is important to understand these misconceptions and to understand the truths as they have direct implications on teaching practice and the ways in which Gifted students learn.</p>

        <p>Researchers acknowledge a number of misconceptions about Gifted students that are identified in the chart below, along with considerations for teaching practice.</p>

        <p className='border border-dashed border-black'>PLACEHOLDER FOR TABLE HERE. I haven't seen a table on internet websites since the 2000s... Might take a while styling it.</p>

        <p className='font-semibold text-xl'>Affective qualities of Gifted learners</p>

        <p>Gifted learners often perceive and engage with the world differently than their non-Gifted peers. While many of their ‘gifts’ present a multitude of opportunities, it is important to note that in some cases these ‘gifts’ might make students more vulnerable to academic anxiety, social-emotional problems, and Gifted underachievement (Stornelli, Flett, & Hewitt, 2009; Christopher & Shewmaker, 2010;. Gaesser, 2018).  However, with informed adults who understand their unique needs, Gifted students can flourish.</p>

        <p>Researchers have investigated anxiety as it specifically pertains to Gifted learners and identified five ways it can be exhibited by some Gifted learners:</p>

        <ol className='list-disc pl-12'>
          <li>asynchronistic development</li>
          <li>multipotentiality</li>
          <li>self concept</li>
          <li>perfectionism</li>
          <li>overexcitabilities</li>
        </ol>

        <p>Each of these <span className='italic'>affective areas</span> will be discussed further in the following sections.</p>

        <br />
        <p className='font-semibold text-3xl'>Further Reading and Resources</p>
        <hr />

        <p>Here’s some helpful resources that you can access to learn more about the portrait of a Gifted learner:</p>

        <p className='font-semibold text-xl'>Resources</p>

        <p><a href="https://open.alberta.ca/dataset/4204f7d0-5eda-4f53-bb0c-0df988b8b55d/resource/897b9b57-43af-477a-a3d6-3d949312151e/download/the-journey-a-handbook-for-parents-2004.pdf" target='_blank' className='text-[#0066CC] underline'>The Journey</a></p>

        <p className='font-semibold text-xl'>Videos</p>

        <p><a href="https://www.youtube.com/watch?v=ctYVIYggRfg" target='_blank' className='text-[#0066CC] underline'>Linda Silverman:  The unique inner lives of gifted children</a></p>

        <p><a href="https://www.youtube.com/watch?v=jLwPwH1FmXM" target='_blank' className='text-[#0066CC] underline'>Linda Silverman:  Overexcitabilities windows into the innerworld of the gifted</a></p>

        <p className='font-semibold text-xl'>Websites</p>

        <p><a href="https://gifteddevelopment.org/" target='_blank' className='text-[#0066CC] underline'>Gifted Development Center</a></p>

        <p><a href="https://nagc.org/" target='_blank' className='text-[#0066CC] underline'>National Association for Gifted Children</a></p>

        <p className='font-semibold text-xl'>Articles</p>

        <p><a href="https://www.verywellfamily.com/dabrowskis-overexcitabilities-in-gifted-children-1449118" target='_blank' className='text-[#0066CC] underline'>Dabrowski’s Overexcitabilities in Gifted Children</a></p>

        <p><a href="https://gifteddevelopment.org/musings/newinsights" target='_blank' className='text-[#0066CC] underline'>Further information on OEs</a></p>

        <p className='font-semibold text-xl'>More on anxiety as it pertains to Gifted students</p>

        <p><a href="https://files.eric.ed.gov/fulltext/EJ1172288.pdf" target='_blank' className='text-[#0066CC] underline'>Counselling gifted students:  school-based considerations and strategies</a></p>

        <p><a href="https://drive.google.com/file/d/1y-HpgHS6EdM89rglCIdTj9vCSNbvGsK_/view?usp=sharing" target='_blank' className='text-[#0066CC] underline'>Befriending Anxiety to Reach Potential: Strategies to Empower Our Gifted Youth</a></p>

        <p><a href="https://globalgtchatpoweredbytagt.wordpress.com/2022/04/29/using-bibliotherapy-to-support-gt-learners/" target='_blank' className='text-[#0066CC] underline'>Bibliotherapy</a></p>

        <p><a href="https://www.researchgate.net/publication/303600319_Using_Mindfulness-Based_Strengths_Practices_with_gifted_populations" target='_blank' className='text-[#0066CC] underline'>Mindfulness</a></p>
      </div>
    </div>
  );
}

export default Page;