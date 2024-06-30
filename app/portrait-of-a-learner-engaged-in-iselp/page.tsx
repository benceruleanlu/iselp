'use client'

import Image from 'next/image'
import CustomLink from '../components/customlink';
import CustomLinkA from '../components/customlink-a';
import NavBar from '../components/navbar-a';
import { useState } from 'react';

const Page = () => {
  const [isInDepthVisible, setIsInDepthVisible] = useState(false);
  const [isFurtherReadingVisible, setIsFurtherReadingVisible] = useState(false);

  return (
    <>
      <NavBar />
      <div className='flex flex-row w-11/12 mx-auto my-6 lg:my-16 max-w-6xl lg:space-x-16 overflow-visible text-wrap'>
        <div className='min-w-56 text-nowrap truncate space-y-2 sticky top-8 h-full *:truncate text-sm hidden lg:block'> {/* Ran out of zyn, can't make it maintainable :(( */}
          <p className='font-bold text-lg'>Contents</p>
          <hr className='!mb-4'/> {/* Killing myself */}
          <p><CustomLinkA href="#summary-and-highlights" className="font-semibold">Summary and Highlights</CustomLinkA></p>
          <p><CustomLinkA href="#affective-qualities-of-gifted-learners-1" className='ml-2'>Affective qualities of Gifted learners</CustomLinkA></p>
          <p className='!mb-4'><CustomLinkA href="#gifted-underachievement" className='ml-2'>Gifted underachievement</CustomLinkA></p>
          <p onClick={() => setIsInDepthVisible(true)}><CustomLinkA href="#in-depth" className='font-semibold'>In-Depth</CustomLinkA></p>
          <p onClick={() => setIsInDepthVisible(true)}><CustomLinkA href="#what-is-giftedness" className='ml-2'>What is Giftedness?</CustomLinkA></p>
          <p onClick={() => setIsInDepthVisible(true)}><CustomLinkA href="#common-characteristics-of-gifted-learners" className='ml-2'>Common characteristics of Gifted learners</CustomLinkA></p>
          <p onClick={() => setIsInDepthVisible(true)}><CustomLinkA href="#portraits-of-gifted-and-talented" className='ml-2'>Portraits of Gifted and talented</CustomLinkA></p>
          <p onClick={() => setIsInDepthVisible(true)}><CustomLinkA href="#misconceptions-about-giftedness" className='ml-2'>Misconceptions about Giftedness</CustomLinkA></p>
          <p onClick={() => setIsInDepthVisible(true)} className='!mb-4'><CustomLinkA href="#affective-qualities-of-gifted-learners-2" className='ml-2'>Affective qualities of Gifted learners</CustomLinkA></p>
          <p onClick={() => setIsFurtherReadingVisible(true)}><CustomLinkA href="#further-reading-and-resources" className='font-semibold'>Further Reading and Resources</CustomLinkA></p>
          <p onClick={() => setIsFurtherReadingVisible(true)}><CustomLinkA href="#resources" className='ml-2'>Resources</CustomLinkA></p>
          <p onClick={() => setIsFurtherReadingVisible(true)}><CustomLinkA href="#videos" className='ml-2'>Videos</CustomLinkA></p>
          <p onClick={() => setIsFurtherReadingVisible(true)}><CustomLinkA href="#websites" className='ml-2'>Websites</CustomLinkA></p>
          <p onClick={() => setIsFurtherReadingVisible(true)}><CustomLinkA href="#articles" className='ml-2'>Articles</CustomLinkA></p>
          <p onClick={() => setIsFurtherReadingVisible(true)}><CustomLinkA href="#more-on-anxiety-as-it-pertains-to-gifted-students" className='ml-2'>More on anxiety as it pertains to Gifted students</CustomLinkA></p>
          <p onClick={() => setIsFurtherReadingVisible(true)}><CustomLinkA href="#footnotes" className='ml-2'>Footnotes</CustomLinkA></p>
        </div>
        <div className='flex flex-col mx-auto max-w-[92vw]'>
          <p className='font-bold text-3xl lg:text5xl text-slate-950 mb-4'>Portrait of a Learner Engaged in ISELP</p>
          <p className='text-slate-500 lg:text-lg mb-6'>Learn how to understand and support gifted learners, including their characteristics and potential challenges.</p>

          <div className='space-y-4'>
            <p className='text-gray-600	text-sm italic'>Note: While this section refers specifically to Giftedness, much of the information is applicable both to students who are identified as Exceptional Intellectual - Gifted, and to those students who are engaged in ISELP, but are receiving Non-Identified Special Education services.</p>

            <p className='font-semibold text-xl lg:text-3xl' id='summary-and-highlights'>Summary and Highlights</p>
            <hr />

            <p>The Ministry of Education defines Giftedness as &ldquo;[a]n unusually advanced degree of general intellectual ability that requires differentiated learning experiences of a depth and breadth beyond those normally provided in the regular school program to satisfy the level of educational potential indicated&rdquo; (Ministry of Education, 2017). For the purposes of the Peel District School Board, this is the definition that is used to describe our Gifted learners.</p>
            <p>It is important to note the other definitions of Giftedness that cite characteristics such as:</p>

            <ol className='list-disc pl-12'>
              <li>&ldquo;asynchronous development&rdquo; (Vuyk, Kerr, & Thomas, 2016; Silverman, 1996);</li>
              <li>a &ldquo;physiological reality&rdquo; (Gifted Development Centre); and,</li>
              <li>exceptionally high ability regardless of academic performance (Peterson, 2015).</li>
            </ol>

            <p>However, Giftedness goes far beyond this definition, and like all exceptionalities, is complex. Common characteristics and traits of Gifted learners are listed below:</p>

            <div className='flex justify-center w-full'>
              <Image
                src='/commonCharacteristicsOfGiftedLearners.png'
                width={800}
                height={600}
                alt='Characteristics of Gifted Learners'
                className='rounded-lg py-6 max-h-[800px] max-w-[600px] mx-auto overflow-x-auto'
              />
            </div>

            <p className='text-gray-600	text-sm'>(Note: The above lists are not all-encompassing, and some students may demonstrate characteristics not listed here. Moreover, not all students will display all of these characteristics.)</p>

            <p className='font-semibold text-xl' id='affective-qualities-of-gifted-learners-1'>Affective qualities of Gifted learners</p>
            
            <p>Gifted learners often perceive and engage with the world differently than their non-Gifted peers. While many of their &lsquo;gifts&rsquo; present a multitude of opportunities, it is important to note that in some cases these &lsquo;gifts&rsquo; might make students more vulnerable to academic anxiety, social-emotional problems, and Gifted underachievement (Stornelli, Flett, & Hewitt, 2009; Christopher & Shewmaker, 2010;. Gaesser, 2018).</p>

            <p className='font-semibold text-xl' id='gifted-underachievement'>Gifted underachievement</p>

            <p>Some Gifted students underperform compared to the evidence that they are capable of high achievement. Research offers a variety of reasons to explain Gifted underachievement including, but not limited to:</p>

            <ol className='list-disc pl-12'>
              <li>students&rsquo; fixed mindset about giftedness such as perfectionism or rebellion;</li>
              <li>feeling unsupported by parents, teachers and/or non-Gifted peers; and,</li>
              <li>misperceptions about the value of student work such as varied interpretations of depth and breadth of learning (Rimm, 1986; Roberts, Inman & Robins, 2022).</li>
            </ol>

            <br />
            <p className='font-semibold text-3xl cursor-pointer dropdown-title flex items-center justify-between hover:lg:underline' onClick={() => setIsInDepthVisible(!isInDepthVisible)} id='in-depth'>
              In-Depth
              <svg className={`w-6 h-6 transform transition-transform duration-300 ${isInDepthVisible ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </p>
            <hr />

            {isInDepthVisible && (
              <>
                <p className='font-semibold text-xl' id='what-is-giftedness'>What is Giftedness?</p>

                <p>Giftedness is a complex exceptionality. As such, there are a variety of definitions that are used to describe &ldquo;Giftedness&rdquo; across a variety of resources. There is no universally accepted definition of gifted. Some definitions are functional and relate to a selection process (e.g., scores, percentiles) and some clarify the nature of giftedness (e.g., domains, affinities). The Ministry of Education&#39;s definition of Giftedness is: &ldquo;an unusually advanced degree of general intellectual ability that requires differentiated learning experiences of a depth and breadth beyond those normally provided.&rdquo; This is the definition under which the Peel District School Board and schools throughout the province use to determine &ldquo;Giftedness.&rdquo; </p>

                <p>However, it is important to note the other definitions of Giftedness that cite characteristics such as:</p>

                <ol className='list-disc pl-12'>
                  <li>&ldquo;asynchronous development&rdquo; (Vuyk, Kerr, & Thomas, 2016; Silverman, 1996);</li>
                  <li>a &ldquo;physiological reality&rdquo; (Gifted Development Centre); and,</li>
                  <li>exceptionally high ability regardless of academic performance (Peterson, 2015).</li>
                </ol>

                <p>Vuky, Kerr, & Thomas (2016) present a definition of Giftedness that incorporates a wide swath of the research into Giftedness, defining it as &ldquo;asynchronous development in which advanced cognitive abilities and heightened intensity combine to create inner experiences and awareness that are qualitatively different from the norm&rdquo; (Vuyk, Kerr, & Thomas, 2016, pg. 60). Most importantly, though, as there are no two Gifted learners who are exactly alike, there is no single definition of Giftedness (Kennedy & Farley, 2017).</p>

                <div className='flex py-1 max-w-[560px] max-h-[315px] mx-auto'><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/L8OlKSNQAIU?si=fUTpBWElTGmS9qGo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>

                <p className='font-semibold text-xl' id='common-characteristics-of-gifted-learners'>Common characteristics of Gifted learners</p>

                <p>There is a common misconception that Gifted students are a fairly heterogeneous group (Schultz, 2018); however, Gifted students can exhibit a wide range of personality characteristics and processing abilities.</p>

                <p>The graphic below outlines those characteristics that appear most commonly in Gifted students, even though they will be expressed differently in each student. It is important to recognize that not every Gifted student will necessarily show all of the same characteristics or common traits.</p>

                <div className='flex justify-center w-full'>
                  <Image
                    src='/commonCharacteristicsOfGiftedLearners.png'
                    width={800}
                    height={600}
                    alt='Characteristics of Gifted Learners'
                    className='rounded-lg py-6 max-h-[800px] max-w-[600px] mx-auto overflow-x-auto'
                  />
                </div>

                <p className='font-semibold text-xl' id='portraits-of-gifted-and-talented'>Portraits of Gifted and talented</p>

                <p>Giftedness manifests differently amongst Gifted students. The link to the chart below provides further details on the different portraits of Gifted learners and some suggestions for home and school support.</p>

                <p><a href="https://docs.google.com/document/d/12nOtu6kacb7DteCxcwfPsMb1neWc47BnzDoONmY0Ds4/edit?usp=sharing" target='_blank' className='text-[#0066CC] underline'>Portraits of Gifted and talented students</a></p>

                <p>(Adapted from Reis, Sally M. series editor (2004). Essential Readings in Gifted Education: A Joint Publication of Corwin Press and the National Association for Gifted Children, Thousand Oaks, CA: Corwin Press.)</p>

                <p className='font-semibold text-xl' id='misconceptions-about-giftedness'>Misconceptions about Giftedness</p>

                <p>Due to the complex intellectual and socio-emotional traits of Gifted learners, it is not uncommon for educators to misunderstand their behaviours, attitudes, and learning needs or desires. As educators, it is important to understand these misconceptions and to understand the truths as they have direct implications on teaching practice and the ways in which Gifted students learn.</p>

                <p>Researchers acknowledge a number of misconceptions about Gifted students that are identified in the chart below, along with considerations for teaching practice.</p>

                <div className="overflow-x-auto shadow-md sm:rounded-lg bg-white]">
                  <table className="w-full text-sm text-left text-gray-700 min-w-[800px]">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                      <tr>
                        <th scope="col" className="py-3 px-6 text-center">
                          Misconception
                        </th>
                        <th scope="col" className="py-3 px-6 text-center">
                          Truth
                        </th>
                        <th scope="col" className="py-3 px-6 text-center">
                          Consideration for Teaching
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b border-gray-200">
                        <td className="py-4 px-6">
                          <span className='font-bold italic'>&ldquo;Additional tasks and rote learning are appropriate means of enrichments.&rdquo; </span><CustomLink href="#end1" className="text-xs text-[#0066CC]"><sup id='start1'>[1]</sup></CustomLink>
                        </td>
                        <td className="py-4 px-6">
                          Additional work will often be received as punitive as opposed to an opportunity and will often result in resentment of the identification.<CustomLink href="#end2" className="text-xs text-[#0066CC]"><sup id='start2'>[2]</sup></CustomLink>
                        </td>
                        <td className="py-4 px-6">
                          Consider offering class tasks that have a &ldquo;low floor and high ceiling&rdquo; (e.g. an activity that all students can easily begin, based on their own understanding of the material, and that can be worked on according to each student&rsquo;s level of engagement and desire to go deeper).<br /><br />Draw on students&apos; interests to engage them in learning as opposed to giving &ldquo;extra questions&rdquo; or additional rote tasks.
                        </td>
                      </tr>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <td className="py-4 px-6">
                          <span className='font-bold italic'>&ldquo;Gifted learners will be academically successful, regardless of their learning experiences, and therefore do not need services by their school.&rdquo; </span><CustomLink href="#end3" className="text-xs text-[#0066CC]"><sup id='start3'>[3]</sup></CustomLink>
                        </td>
                        <td className="py-4 px-6">
                          Gifted students engage with the world differently than their non-Gifted peers.<br /><br />Absence of challenge can translate into lack of motivation, frustration, and even disengagement in the regular classroom.<CustomLink href="#end4" className="text-xs text-[#0066CC]"><sup id='start4'>[4]</sup></CustomLink>
                        </td>
                        <td className="py-4 px-6">
                          Teachers should be aware that Gifted students may need supports that attend to affective aspects of education. (see definition of <a href="https://docs.google.com/document/d/19JGCfusp80INEaoEr3Kflopd67AFguzkGtJh-I2Y7Lg/edit#heading=h.maxz3sc5rj5y" target='_blank' className='text-[#0066CC] underline'>affective qualities</a>)<br /><br />Gifted students require work that is sufficiently challenging, and perceived as both meaningful and valuable.
                        </td>
                      </tr>
                      <tr className="bg-white border-b border-gray-200">
                        <td className="py-4 px-6">
                          <span className='font-bold italic'>&ldquo;Gifted learners are a homogenous group, and therefore will all benefit equally from the same supports.&rdquo; </span><CustomLink href="#end5" className="text-xs text-[#0066CC]"><sup id='start5'>[5]</sup></CustomLink>
                        </td>
                        <td className="py-4 px-6">
                          Gifted learners exhibit unique characteristics, strengths, and weaknesses.<CustomLink href="#end6" className="text-xs text-[#0066CC]"><sup id='start6'>[6]</sup></CustomLink>
                        </td>
                        <td className="py-4 px-6">
                          Teachers need to determine what types of approaches will work best with a given student, with input from the student and family/caregivers.
                        </td>
                      </tr>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <td className="py-4 px-6">
                          <span className='font-bold italic'>&ldquo;Gifted students are well adjusted and efficacious.&rdquo; </span><CustomLink href="#end7" className="text-xs text-[#0066CC]"><sup id='start7'>[7]</sup></CustomLink>
                        </td>
                        <td className="py-4 px-6">
                          A number of researchers agree that Gifted learners can encounter a number of anxiety producing stressors throughout their day.<CustomLink href="#end8" className="text-xs text-[#0066CC]"><sup id='start8'>[8]</sup></CustomLink>
                        </td>
                        <td className="py-4 px-6">
                          Teachers need to recognize Gifted learners&rsquo; socio-emotional needs and recognize that while they may not outwardly show anxiety about school work, they may be experiencing it as a stressor.<br /><br />Teachers need to provide explicit instruction on executive functioning skills (with support from ISSP).
                        </td>
                      </tr>
                      <tr className="bg-white border-b border-gray-200">
                        <td className="py-4 px-6">
                          <span className='font-bold italic'>&ldquo;Gifted students are arrogant.&rdquo; </span><CustomLink href="#end9" className="text-xs text-[#0066CC]"><sup id='start9'>[9]</sup></CustomLink>
                        </td>
                        <td className="py-4 px-6">
                          Sometimes Gifted students struggle with sharing a differing opinion.
                        </td>
                        <td className="py-4 px-6">
                          Gifted students sometimes need support and direct instruction to practice how to give feedback that is kind, specific, and helpful (e.g., modelling and role playing).
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className='font-semibold text-xl' id='affective-qualities-of-gifted-learners-2'>Affective qualities of Gifted learners</p>

                <p>Gifted learners often perceive and engage with the world differently than their non-Gifted peers. While many of their &lsquo;gifts&rsquo; present a multitude of opportunities, it is important to note that in some cases these &lsquo;gifts&rsquo; might make students more vulnerable to academic anxiety, social-emotional problems, and Gifted underachievement (Stornelli, Flett, & Hewitt, 2009; Christopher & Shewmaker, 2010;. Gaesser, 2018).  However, with informed adults who understand their unique needs, Gifted students can flourish.</p>

                <p>Researchers have investigated anxiety as it specifically pertains to Gifted learners and identified five ways it can be exhibited by some Gifted learners:</p>

                <ol className='list-disc pl-12'>
                  <li>asynchronistic development</li>
                  <li>multipotentiality</li>
                  <li>self concept</li>
                  <li>perfectionism</li>
                  <li>overexcitabilities</li>
                </ol>

                <p>Each of these <span className='italic'>affective areas</span> will be discussed further in the following sections.</p>
              </>
            )}

            <br />
            <p className='font-semibold text-3xl cursor-pointer dropdown-title flex items-center justify-between hover:lg:underline' onClick={() => setIsFurtherReadingVisible(!isFurtherReadingVisible)} id='further-reading-and-resources'>
              Further Reading and Resources
              <svg className={`w-6 h-6 transform transition-transform duration-300 ${isFurtherReadingVisible ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </p>
            <hr />

            {isFurtherReadingVisible && (
              <>
                <p>Here&rsquo;s some helpful resources that you can access to learn more about the portrait of a Gifted learner:</p>

                <p className='font-semibold text-xl' id='resources'>Resources</p>

                <p><a href="https://open.alberta.ca/dataset/4204f7d0-5eda-4f53-bb0c-0df988b8b55d/resource/897b9b57-43af-477a-a3d6-3d949312151e/download/the-journey-a-handbook-for-parents-2004.pdf" target='_blank' className='text-[#0066CC] underline'>The Journey</a></p>

                <p className='font-semibold text-xl' id='videos'>Videos</p>

                <p><a href="https://www.youtube.com/watch?v=ctYVIYggRfg" target='_blank' className='text-[#0066CC] underline'>Linda Silverman:  The unique inner lives of gifted children</a></p>

                <p><a href="https://www.youtube.com/watch?v=jLwPwH1FmXM" target='_blank' className='text-[#0066CC] underline'>Linda Silverman:  Overexcitabilities windows into the innerworld of the gifted</a></p>

                <p className='font-semibold text-xl' id='websites'>Websites</p>

                <p><a href="https://gifteddevelopment.org/" target='_blank' className='text-[#0066CC] underline'>Gifted Development Center</a></p>

                <p><a href="https://nagc.org/" target='_blank' className='text-[#0066CC] underline'>National Association for Gifted Children</a></p>

                <p className='font-semibold text-xl'  id='articles'>Articles</p>

                <p><a href="https://www.verywellfamily.com/dabrowskis-overexcitabilities-in-gifted-children-1449118" target='_blank' className='text-[#0066CC] underline'>Dabrowski&&apos;s Overexcitabilities in Gifted Children</a></p>

                <p><a href="https://gifteddevelopment.org/musings/newinsights" target='_blank' className='text-[#0066CC] underline'>Further information on OEs</a></p>

                <p className='font-semibold text-xl' id='more-on-anxiety-as-it-pertains-to-gifted-students'>More on anxiety as it pertains to Gifted students</p>

                <p><a href="https://files.eric.ed.gov/fulltext/EJ1172288.pdf" target='_blank' className='text-[#0066CC] underline'>Counselling gifted students:  school-based considerations and strategies</a></p>

                <p><a href="https://drive.google.com/file/d/1y-HpgHS6EdM89rglCIdTj9vCSNbvGsK_/view?usp=sharing" target='_blank' className='text-[#0066CC] underline'>Befriending Anxiety to Reach Potential: Strategies to Empower Our Gifted Youth</a></p>

                <p><a href="https://globalgtchatpoweredbytagt.wordpress.com/2022/04/29/using-bibliotherapy-to-support-gt-learners/" target='_blank' className='text-[#0066CC] underline'>Bibliotherapy</a></p>

                <p><a href="https://www.researchgate.net/publication/303600319_Using_Mindfulness-Based_Strengths_Practices_with_gifted_populations" target='_blank' className='text-[#0066CC] underline'>Mindfulness</a></p>

                <p className='font-semibold text-xl' id='footnotes'>Footnotes</p>

                <p><CustomLink href="start1" className="text-[#0066CC]"><sup id='end1'>[1]</sup></CustomLink> Schultz, 2018; Gomez-Arizaga et al, 2020</p>

                <p><CustomLink href="start2" className="text-[#0066CC]"><sup id='end2'>[2]</sup></CustomLink> Gomez-Arizaga, et al., 2020</p>
                
                <p><CustomLink href="start3" className="text-[#0066CC]"><sup id='end3'>[3]</sup></CustomLink> Gomez-Arizaga, Valdivia-Lefort, Castillo-Hermosilla, Hébert, & Leonor Conejeros-Solar, 2020</p>

                <p><CustomLink href="start4" className="text-[#0066CC]"><sup id='end4'>[4]</sup></CustomLink> Gomez-Arizaga, et al., 2020</p>

                <p><CustomLink href="start5" className="text-[#0066CC]"><sup id='end5'>[5]</sup></CustomLink> Schultz, 2018</p>

                <p><CustomLink href="start6" className="text-[#0066CC]"><sup id='end6'>[6]</sup></CustomLink> Schultz, 2018; Lamont, 2012</p>

                <p><CustomLink href="start7" className="text-[#0066CC]"><sup id='end7'>[7]</sup></CustomLink> NAGC, 2018</p>

                <p><CustomLink href="start8" className="text-[#0066CC]"><sup id='end8'>[8]</sup></CustomLink> Gaesser, 2018; Coleman, 2012; Kennedy & Farley, 2017</p>

                <p><CustomLink href="start9" className="text-[#0066CC]"><sup id='end9'>[9]</sup></CustomLink> O&rsquo;Connor, 2005</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;