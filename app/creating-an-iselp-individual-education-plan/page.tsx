'use client'

import Image from 'next/image'
import CustomLink from '../components/customlink';
import NavBar from '../components/navbar-a';
import { useState } from 'react';

const Page = () => {

  const [isInDepthVisible, setIsInDepthVisible] = useState(false);
  const [isFurtherReadingVisible, setIsFurtherReadingVisible] = useState(false);
  
  return (
    <>
      <NavBar />
      <div className='flex flex-row w-11/12 mx-auto my-6 lg:my-16 max-w-6xl lg:space-x-16 overflow-hidden text-wrap'>
        <div className='min-w-56 text-nowrap truncate space-y-2 sticky top-8 h-full *:truncate text-sm hidden lg:block'> {/* Ran out of zyn, can't make it maintainable :(( */}
            <p className='font-bold text-lg'>Contents</p>
            <hr className='!mb-4'/> {/* Killing myself */}
            <p><CustomLink href="#introduction" className="font-semibold">Introduction</CustomLink></p>
            <p><CustomLink href="#summary-and-highlights" className="font-semibold">Summary and Highlights</CustomLink></p>
            
            <p><CustomLink href="#in-depth" className='font-semibold'>In-Depth</CustomLink></p>
              <p><CustomLink href="#adjustments-to-the-learning-as-part-of-an-ISELP-IEP" className = 'ml-2'>Adjustments to the learning as part of an ISELP IEP</CustomLink></p>
              <p><CustomLink href="#differentiation-and-program-development" className = 'ml-2'>Differentiation and program development</CustomLink></p>
              <p><CustomLink href="#developing-a-comprehensive-understanding-of-the-student-engaged-in-ISELP" className = 'ml-2'>Developing a comprehensive understanding of the student engaged in ISELP</CustomLink></p>
              <p><CustomLink href="#the-collaborative-consultation-approach" className = 'ml-2'>The collaborative consultation approach</CustomLink></p>
              <p><CustomLink href="#accomodations-as-part-of-the-ISELP-IEP-1" className = 'ml-2'>Accommodations as part of the ISELP IEP</CustomLink></p>
              <p className='!mb-4'><CustomLink href="#alternative-skills-pages" className = 'ml-2'>Alternative skills pages</CustomLink></p>
            
              <p><CustomLink href="#further-reading-and-resources" className='font-semibold'>Further Reading and Resources</CustomLink></p>
          </div>
        
        <div className='flex flex-col mx-auto max-w-[92vw]'>
          <p className='font-bold text-3xl lg:text5xl text-slate-950 mb-4'>Creating an ISELP Individual Education Plan</p>
          <p className='text-slate-500 lg:text-lg mb-6'>Learn how to tailor an Individualized Education lan (IEP) to meet the unique needs of gifted students.</p>

          <div className='space-y-4'>
          <p className='text-gray-600	text-sm italic'>An alternative page (page 4) for students who are identified as Exceptional Intellectual - Gifted is to be a &lsquo;Gifted Plan&rsquo; page. An alternative page (page 4) for students who are receiving non-identified Special Education supports is to be an &lsquo;Enhanced Learning Plan&rsquo; page.</p>
          
          <p className='font-semibold text-xl lg:text-3xl' id='introduction'>Introduction</p>
          <hr />

          <p>Gifted students require programming that is tailored to their unique needs and as such require an Individualized Education Plan (IEP).</p>
          <p className='font-semibold text-lg'>Tailoring the IEP to the student portrait</p>
            <p>The <a href="https://docs.google.com/document/d/19OQpepFo0I97o59EvruotiQiUWbiuqQbDvt3frSXSYA/edit" target='_blank' className='text-[#0066CC] underline'>Student Portrait Map</a> template promotes a more holistic view of the student. It assists teachers to focus and to program for the studen&rsquo;s strengths, consider ways of motivating the student and supporting their learning by drawing on strengths that the student has demonstrated in other subjects. It is also essential to acknowledge all other needs, identifications, or diagnoses (e.g., social-emotional, ELL, etc.), highlight prior knowledge in various subjects, learning style or preference, and interests outside school. ( Learning for All, p. 44)</p>
            <p>A detailed Student Portrait includes current levels of achievement and progress in developing learning skills and work habits (from the most recent provincial report card and EQAO data), including:</p>
            <ol className='list-disc pl-12'>
              <li>readiness to learn, particularly in relation to specific subject areas and/or curriculum expectations (e.g., from classroom observations, surveys, pretests);</li>
              <li>learning strengths, styles, and preferences;</li>
              <li>motivational needs and interests (from interest inventories, questionnaires, classroom discussions);</li>
              <li>learning needs, and any additional support, accommodations, and/or types of challenges that motivate and enable the student to learn and to demonstrate learning;</li>
              <li>social and emotional strengths and needs (e.g., self-management, getting along with others, social responsibility), including the capacity to adjust to transitions;</li>
              <li>available resources and supports that help meet the student&rsquo;s needs;</li>
              <li>other relevant information, such as the kind of activities the student pursues outside the school.;</li>
            </ol>
            <p>For more information on developing a comprehensive student portrait:</p>
            <p><a href="https://www.ontario.ca/document/special-education-ontario-policy-and-resource-guide-kindergarten-grade-12/components-iep#section-1" target='_blank' className='text-[#0066CC] underline'>Components of the IEP standards and effective practices | Part E: The Individual Education Plan (IEP) | ontario.ca</a></p>
            <p><a href="https://files.ontario.ca/edu-learning-for-all-2013-en-2022-01-28.pdf" target='_blank' className='text-[#0066CC] underline'>&lsquo;The Process of Developing an Individual Student Profile,&rsquo; Learning For All, p. 50, </a></p>
            
            <p className='font-semibold text-xl lg:text-3xl' id='summary-and-highlights'>Summary and Highlights</p>
            <hr />
              <p>The learning process for students engaged in ISELP requires planning supports that will motivate and engage in order to further enhance the learning experience.  As such, programming for these learners is instrumental to developing their fullest potential and to support growth. Developing the Individualized Education Plan (IEP) is the first step for schools to identify the learner&rsquo;s needs and to maximize the learner&rsquo;s abilities.</p>
              <p>Researchers have identified that Gifted students require a faster pace, work that is appropriately challenging, and the opportunity to engage in tasks that do not have a straightforward solution (Gomez-Arizaga et al, 2020).  Students engaged in ISELP will not simply gain benefit from exploring a curriculum that is new to them. The greater cognitive skills demonstrated by these students will create ongoing demands on the need to provide programming suitable to their needs as a learner.</p>
              <p className="font-semibold text-xl" id='areas-of-an-IEP-that-are-applicable-to-learners-engaged-in-ISELP'>Areas of an IEP that are applicable to learners engaged in ISELP</p>
                <ol className='list-disc pl-12'>
                  <li><i>Transition Goals and Actions</i> (individualized to the student and their short, medium, and long-term goals)</li>
                  <li><i>Accommodations</i> (specific to the needs of the student and purposefully structured to provide supports as they are needed)</li>
                  <li><i>Alternative programming</i> - Page 4 (focused on skill-development in areas that match the student&rsquo;s goals and areas for further development)</li>
                </ol>
                <p className="font-semibold text-xl" id='accomodations-as-part-of-an-ISELP-IEP'>Accommodations as part of an ISELP IEP</p>
                  <p>Students may not demonstrate the same degree of advancement in all subject areas and their abilities may develop asynchronously. This also means that these students may be able to understand complex ideas they are not developmentally or emotionally ready for which can be a cause of anxiety.</p>
                  <p>It is reasonable to assume that some students may require accommodations, built into their IEP, as a means of providing an additional level of support and ISELP programming.</p>
                  <p>Students who are engaged in ISELP may also present with other identified (and sometimes not identified) exceptionalities. When developing an IEP for these students, the needs of all of these areas must be taken into account.</p>
                <p className="font-semibold text-xl" id='the-gifted-plan-enhanced-learning-plan'>The Gifted Plan/Enhanced Learning Plan</p>
                  <p>Annual Goals within the Gifted or Enhanced Learning Plan should be broad to allow students to focus on a skill they can develop throughout the curriculum in all subject areas.</p>
                  <p>The student&rsquo;s work toward the goals outlined in the Gifted/Enhanced Learning Plan should be primarily completed as part of their work in the classroom. Opportunities for withdrawal can also be included as part of the student&rsquo;s ISELP work to complement the programming in the Gifted/Enhanced Learning Plan; however, the majority of the work toward ISELP goals should be part of the teaching and learning process in the student&rsquo;s main classroom. <b>To put it simply, students who require ISELP support need it on an ongoing basis, not for discrete blocks of time throughout the week.</b></p>
                  <p>Students engaged in ISELP are most successful when they view their goals as meaningful, valuable, and relevant.  It is important that the goals are individualized to the student, and created collaboratively with the student, the family/caregiver(s), and the teaching staff that work with the student.</p>
          
            <br />
            <p className='font-semibold text-3xl cursor-pointer dropdown-title flex items-center justify-between hover:lg:underline' onClick={() => setIsInDepthVisible(!isInDepthVisible)} id='in-depth'>
              In-Depth
              <svg className={`w-6 h-6 transform transition-transform duration-300 ${isInDepthVisible ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </p>
            <hr />
            {isInDepthVisible && (
              <>
                <p className="font-semibold text-xl" id='adjustments-to-the-learning-as-part-of-an-ISELP-IEP'>Adjustments to the learning as part of an ISELP IEP</p>
                  <p>As with any student with an Individual Education Plan (IEP), Students who are part of ISELP require changes in the process of learning (through differentiation, accommodations, and alternative programming, including a Gifted/Enhanced Learning Plan, as appropriate - see Figure 1, below) to maintain motivation and engagement in that learning. Giftedness should be addressed in the subjects of greatest interest or strength (Ministry of Education). This programming is not limited to the core subject areas, but can be applied to any area that matches the student&rsquo;s portrait.</p>
                  <p>Researchers have identified that Gifted students require a faster pace, work that is appropriately challenging, and the opportunity to engage in tasks that do not have a straightforward solution (Gomez-Arizaga et al, 2020).  Students engaged in ISELP will not simply gain benefit from exploring a curriculum that is new to them. The greater cognitive skills demonstrated by these students will create ongoing demands on the need to provide programming suitable to their needs as a learner.</p>
                  <p>The below figure shows the overlapping terms that can be used to describe the changes in the process of learning required to adequately program for the needs of students engaged in ISELP.</p>
                  <Image
                  src='/changesInTheProcessOfLearning.png'
                  width={800}
                  height={600}
                  alt='Characteristics of Gifted Learners'
                  className='rounded-lg py-6 max-h-[800px] max-w-[600px] mx-auto overflow-x-auto'
                  /> 
                  <p className='font-semibold text-sm text-slate-500'>Figure 1 - Adapted from <a href="https://www.abcontario.ca/images/pdfs/iep_guide_rev_april_20.pdf" target='_blank' className='text-[#0066CC] underline'>https://www.abcontario.ca/images/pdfs/iep_guide_rev_april_20.pdf</a>, p. 15</p>
                  <p>ABC Ontario (2008) suggests two criteria for determining what changes to the learning process should be implemented via the student&rsquo;s IEP:</p>
                  <ol className='list-decmial pl-12'>
                    <li>All stakeholders (the student, the family/caregiver(s), the educators involved with the student, etc.) should share an understanding of the programming and be held accountable for its implementation. The IEP should clearly state the unique learning expectations for the student and how to implement them.</li>
                    <li>Learning experiences that are enriched should be described with enough detail that subsequent teachers, and those in other subject areas, would know where to begin with the programming in their classes. The programming needs to be tracked with sufficient detail so as to avoid unnecessary repetition.</li>                 
                  </ol>

                <p className="font-semibold text-xl" id='differentiation-and-program-development'>Differentiation and program development</p>
                  <p>In order to maximize success, students engaged in ISELP frequently require an individualized program that differs in content, processes, teaching and learning strategies, and evaluation methods. The ISELP Individual Education Plan is the starting point and the accommodations and alternative skills listed on the <a href='https://iep.peelschools.org/eLite/iepdocuments//DOCUMENTATION/MENU/EFFECTIVE/8%20-%20DEVELOPING%20GIFTED%20PLAN%20.PDF' target='_blank' className='text-[#0066CC] underline'>Gifted (for Identified students) or Enhanced Learning Plan (for Non-Identified students) page</a> are an essential part of the programming to meet the needs of the student.</p>
                  <p>The IEP can be tailored to the needs of the student engaged in ISELP to:</p>
                  <ol className='list-disc pl-12'>
                    <li>develop an alternative skills Gifted or Enhanced Learning Plan page that outlines programming related to curricular areas;</li>
                    <li>provide instructional, environmental, and assessment accommodations matched to the learning needs of the student;</li>
                    <li>develop transition planning goals and actions that are matched to the student&rsquo;s needs and aspirations (short, medium, and long-term goals);</li>
                    <li>develop other alternative skills pages to further outline and provide programming for skills development in other non-curricular areas (e.g., social skills, learning skills, etc.).</li>
                  </ol>
                
                <p className="font-semibold text-xl" id='developing-a-comprehensive-understanding-of-the-student-engaged-in-ISELP'>Developing a comprehensive understanding of the student engaged in ISELP</p>
                  <p>A variety of tools can be helpful during this consultation process, in order to develop a comprehensive picture of the student&rsquo;s learning portrait, their goals, and other underlying factors that may require attention during the IEP development process. A <a href='https://docs.google.com/document/d/1pZfSKj-relPwdEoM1z9QQ8frK3m9qKg6XF82gTbs-RI/edit?usp=sharing' target='_blank' className='text-[#0066CC] underline'>Student Portrait Map</a> is a helpful tool which can be used to develop an understanding of the full portrait in collaboration with all stakeholders.</p>
                  <p>Examples of helpful tools for gathering information about various areas of a student&rsquo;s learning portrait are:</p>
                  <ol className='list-disc pl-12'>
                    <li><a href='https://www.gifteddevelopment.com/sites/default/files/Kids%27%20Guide%20to%20Overexcitabilities.pdf' target='_blank' className='text-[#0066CC] underline'>Kids&rsquo; guide to overexcitabilities (self assessment tool for Gifted students)</a></li>
                    <li><a href='https://drive.google.com/file/d/1WGXJvLjCANeDPjuTPmLTnNRDzHaxPL0v/view?usp=sharing' target='_blank' className='text-[#0066CC] underline'>Abbreviated math anxiety rating scale</a></li>
                    <li><a href='https://drive.google.com/file/d/1A8GafptRXH5i-19wW3RoK8RloU5A_OTB/view?usp=sharing' target='_blank' className='text-[#0066CC] underline'>Academic anxiety inventory</a></li>
                    <li><a href='https://angeladuckworth.com/grit-scale/' target='_blank' className='text-[#0066CC] underline'>Grit Scale</a></li>
                  </ol>

                <p className="font-semibold text-xl" id='the-collaborative-consultation-approach'>The collaborative consultation approach</p>
                  <p>The consultation actions listed below are taken from the <a href='http://www.edu.gov.on.ca/eng/document/policy/os/onschools_2017e.pdf' target='_blank' className='text-[#0066CC] underline'>Special Education in Ontario (2017)</a> guide, listing steps that should be taken to ensure the development of the IEP takes into consideration the complete portrait of the student&rsquo;s strengths, needs, and interests. The examples listed are not exhaustive, but provide a starting point for each of the steps in the consultation process.</p>
                  <table className="w-full text-sm text-left text-gray-700 min-w-[800px]">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                      <tr>
                        <th scope="col" className="py-3 px-6 text-center">Collaborative Action*</th>
                        <th scope="col" className="py-3 px-6 text-center">Examples of Consultations for a Student taking part in ISELP</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b border-gray-200">
                        <td className="py-4 px-6"><span className='font-bold italic'>Share information and observations about the student&rsquo;s behaviour and learning in a variety of settings</span></td>
                        <td className="py-4 px-6">
                          <ol className='list-disc pl-12'>
                            <li>Conversations with classroom teachers, including previous teachers</li>
                            <li>Self-reflection from student, focusing on areas of strength and challenge in specific learning situations</li>
                            <li>Discussions with family/caregiver(s) about student&rsquo;s learning behaviour outside of school</li>
                            <li>Consultation with the other school staff, regarding observations of needs outside of classroom environments</li>
                          </ol>
                        </td>
                      </tr>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <td className="py-4 px-6"><span className='font-bold italic'>Develop a common understanding of the student&rsquo;s strengths and needs as they affect the student&rsquo;s ability to learn and demonstrate learning, and the student&rsquo;s educational goals</span></td>
                        <td className="py-4 px-6">
                          <ol className='list-disc pl-12'>
                            <li>Consultation with the student and their family/caregiver(s) to determine long-term educational goals</li>
                            <li>Self-reflection from student through discussions, interviews, and/or self-assessments (led by ISSP teacher)</li>
                            <li>Cross-curricular consultations with classroom teachers to determine strengths and needs across a variety of subject areas</li>
                          </ol>
                        </td>
                      </tr>
                      <tr className="bg-white border-b border-gray-200">
                        <td className="py-4 px-6"><span className='font-bold italic'>Discuss possible accommodations that can help the student learn and demonstrate learning</span></td>
                        <td className="py-4 px-6">
                          <ol className='list-disc pl-12'>
                            <li>Discussion with student, reflecting on areas of need and strength in a variety of learning environments</li>
                            <li>Feedback from classroom teacher(s) regarding informal accommodations used to maximize learning for the student in specific learning situations</li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6"><span className='font-bold italic'>Discuss the type and level of support required from support services personnel</span></td>
                        <td className="py-4 px-6">
                          <ol className='list-disc pl-12'>
                            <li>Consultation with the ISSP teacher, Guidance teacher, Social-Emotional Learning EA, focused on demonstrated areas of social-emotional need</li>
                            <li><a href='https://pdsb1-my.sharepoint.com/:w:/g/personal/kirsti_maki_peelsb_com/EXxuU0DWgVhKhhNg6imxqpkBvY0gP7F40jTHyBkbQNsGtA?e=I1kOah' target='_blank' className='text-[#0066CC] underline'>SRM referral</a> to discuss student needs with PSSP and/or school-based team</li>
                            <li>Consultation with parents regarding demonstrated social-emotional needs outside of school</li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6"><span className='font-bold italic'>Plan and outline how the student&rsquo;s learning will be assessed and evaluated so that the connection between the IEP and the report card will be readily apparent to both the student and the parents</span></td>
                        <td>
                          <ol className='list-disc pl-12'>
                            <li>Consultation with the student to determine overall  programming goals, and relation to specific curricular areas</li>
                            <li>Consultation with classroom teacher(s) to determine implementation of Gifted/Enhanced Learning Plan goals into specific subject matter</li>
                            <li>Ongoing feedback from classroom teacher(s) and student regarding progress toward alternative expectation in Gifted/Enhanced Learning Plan</li>
                            <li>Regular communication with the student&rsquo;s family/caregivers(s) to determine effectiveness of Gifted/Enhanced Learning Plan programming and need for revision/updating, as applicable</li>
                          </ol>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className='font-semibold text-sm text-slate-500'>* adapted from <a href='https://files.ontario.ca/edu-special-education-policy-resource-guide-en-2022-05-30.pdf' target='_blank' className='text-[#0066CC] underline'>Special Education in Ontario, 2017</a></p>
              
                <p className="font-semibold text-xl" id='accomodations-as-part-of-the-ISELP-IEP-1'>Accommodations as part of the ISELP IEP</p>
                  <p>Students may not demonstrate the same degree of advancement in all subject areas and their abilities may develop asynchronously. This also means that these students may be able to understand complex ideas they are not developmentally or emotionally ready for which can be a cause of anxiety (e.g., death anxiety). Additionally, overexcitabilities are more common in the Gifted population (Silverman, 2016; Gassear, 2018); therefore it is reasonable to assume that some students may require accommodations, built into their IEP, as a means of providing an additional level of support and ISELP programming.</p>
                  <p>Students who are engaged in ISELP may also present with other identified (and sometimes not identified) exceptionalities. When developing an IEP for these students, the needs of all of these areas must be taken into account.</p>
                  <p className='font-semibold text-lg'>Accomodations Examples</p>
                    <p>&ldquo;The goal of applying interventions and making accommodations is to enable the student to learn successfully...The needs of the individual student, the resources available, and parent and student preferences must all be considered in determining the nature and extent of the interventions and accommodations recommended and provided.&rdquo; (<a href='https://files.ontario.ca/edu-special-education-policy-resource-guide-en-2022-05-30.pdf' target='_blank' className='text-[#0066CC] underline'>Special Education in Ontario, Kindergarten to Grade 12: Policy and Resource Guide</a>, C25). The following sections provide examples of possible accommodations that can be included within the student&rsquo;s IEP.</p>
                
                <p className="font-semibold text-xl" id='alternative-skills-pages'>Alternative skills pages</p>
                  <p>Per the <a href='http://www.edu.gov.on.ca/eng/document/policy/os/onschools_2017e.pdf' target='_blank' className='text-[#0066CC] underline'>Special Education in Ontario</a> guide, Alternative Skills can be recorded in the IEP in order to develop programming to complement the curricular learning. These skill areas should be designed to provide an appropriate level of challenge for the student to develop their cognitive skills, and should be achievable (in terms of mastery) with reasonable effort on the student&rsquo;s part.</p>
                  <p className='font-semibold text-lg'>Learning goal orientation</p>
                    <p>Kulkin (2016) describes the difference between the two learning goal orientations: performance and mastery. &ldquo;Performance goals are often met in a climate of competition that prizes speed, memorization of facts, and acquisition of specific skills. In contrast, mastery goals emphasize real-world application and problem solving&rdquo; (p.29).  Mastery goals are connected to intrinsic motivation, academic efficacy, persistence, help-seeking behaviour, and is negatively correlated to test anxiety (Furner & Gonzalez-DeHass, 2011, p. 231).  </p>
                    <ol className='list-decimal pl-12'>
                      <li><p><b>Performance Goals:</b></p>
                        <ol className='list-disc pl-12 space-y-1'>
                          <li><b>What Students Focus On</b>: Students with performance goals care a lot about their grades and proving their abilities. They are focused on academic performance.</li>
                          <li><b>How They Approach Learning</b>: They focus on real-world application and problem-solving. Mastery-focused learning emphasizes developing healthy learning habits, such as asking questions and seeking support when needed.</li>
                          <li><b>Impact</b>: This approach reduces anxiety because they seek help and understand their mistakes.</li>
                        </ol>
                      </li>
                      <li><p><b>Mastery Goals:</b></p>
                        <ol className='list-disc pl-12 space-y-1'>
                          <li><b>What Students Focus On</b>: Students with mastery goals are more interested in learning and improving their skills. They are more willing to investigate mistakes and understand their errors.</li>
                          <li><b>How They Approach Learning</b>: They focus on real-world application and problem-solving. Mastery-focused learning emphasizes developing healthy learning habits, such as asking questions and seeking support when needed.</li>
                          <li><b>Impact</b>: This approach reduces anxiety because they seek help and understand their mistakes.</li>
                        </ol>
                      </li>
                    </ol>
                  <p>In a mastery classroom, students should feel comfortable to ask questions and view questioning as evidence of a strong learner.  Students are encouraged to use their peers as &ldquo;helpful resources in the pursuit of learning&rdquo; (Furner & Gonzalez-DeHass, 2011, p.237). </p>
                  <p>In a mastery classroom environment, there is a heavy focus on the process of learning, students&rsquo; feelings towards learning are important, and evaluation is a private critique of the work rather than a confirmation of a student&rsquo;s ability.</p>
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
                <ol className='list-disc pl-12 space-y-2'>
                  <li><p className="font-semibold text-lg"><a href="https://files.ontario.ca/edu-special-education-policy-resource-guide-en-2022-05-30.pdf" target='_blank' className='text-[#0066CC] underline'>Special Education in Ontario - Kindergarten to Grade 12: Policy and Resource Guide</a></p></li>
                  <li><p className="font-semibold text-lg"><a href='https://pdsb1.sharepoint.com/TL/SpecialEd/Sec/Shared%20Documents/IEP/Spec%20Ed%20Categories%20and%20Accommodations.pdf' target='_blank' className='text-[#0066CC] underline'>Ontario Special Education Companion</a></p></li>
                  <li><p className="font-semibold text-lg"><a href='https://www.abcontario.ca/images/pdfs/iep_guide_rev_april_20.pdf ' target='_blank' className='text-[#0066CC] underline'>Developing Individual Education Plans for Gifted Students: Information for Parents and Guardians (from ABC Ontario)</a></p></li>
                  <li><p className="font-semibold text-lg"><a href='https://www.abcontario.ca/resources-support/understanding-giftedness/schooling ' target='_blank' className='text-[#0066CC] underline'>ABC Ontario - &lsquo;Talking With Educators&rsquo; (helpful descriptions of what programming should be included in a Gifted student&rsquo;s education plan)</a></p></li>
                  <li><p className="font-semibold text-lg"><a href='https://people.wou.edu/~girodm/100/mastery_vs_performance_goals.pdf' target='_blank' className='text-[#0066CC] underline'>Learning goal orientation - Mastery vs. Performance Goals</a></p></li>
                  <li><p className="font-semibold text-lg"><a href='https://plato.stanford.edu/entries/critical-thinking/ ' target='_blank' className='text-[#0066CC] underline'>Critical thinking skills</a></p></li>
                  <li><p className="font-semibold text-lg"><a href='https://positivepsychology.com/self-regulation/' target='_blank' className='text-[#0066CC] underline'>Self Regulation Theory</a></p></li>
                </ol>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;