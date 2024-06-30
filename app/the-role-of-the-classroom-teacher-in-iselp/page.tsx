'use client'

import Image from 'next/image'
import CustomLink from '../components/customlink';
import NavBar from '../components/navbar-a';
import { useState } from 'react';


const Page = () => {

  const [isInDepthVisible, setIsInDepthVisible] = useState(false);
  return (
    <>
      <NavBar />
      <div className='flex flex-row w-11/12 mx-auto my-6 lg:my-16 max-w-6xl lg:space-x-16 overflow-hidden text-wrap'>
        <div className='min-w-56 text-nowrap truncate space-y-2 sticky top-8 h-full *:truncate text-sm hidden lg:block'> {/* Ran out of zyn, can't make it maintainable :(( */}
            <p className='font-bold text-lg'>Contents</p>
            <hr className='!mb-4'/> {/* Killing myself */}
            
            <p><CustomLink href="#introduction" className="font-semibold">Introduction</CustomLink></p>
            <p><CustomLink href="#summary-and-highlights" className="font-semibold">Summary and Highlights</CustomLink></p>
              <p className = '!mb-4'><CustomLink href="#goal-setting-and-transitions" className = 'ml-2'>Goal setting and transitions</CustomLink></p>
            
            <p><CustomLink href="#in-depth" className='font-semibold'>In-Depth</CustomLink></p>
              <p className='!mb-4'><CustomLink href="#goal-setting-planning-and-transitions" className = 'ml-2'>Goal setting, planning, and transitions</CustomLink></p>
        </div>

        <div className='flex flex-col mx-auto max-w-[92vw]'>
          <p className='font-bold text-3xl lg:text5xl text-slate-950 mb-4'>The Role Of The Classroom Teacher In ISELP</p>
          <p className='text-slate-500 lg:text-lg mb-6'>Learn how to effectively engage and challenge learners in ISELP with specific classroom strategies.</p>
          
          <div className='space-y-4'>
            <p className='font-semibold text-xl lg:text-3xl' id='introduction'>Introduction</p>
            <hr />
            <p>Accommodating learners engaged in ISELP differs somewhat from supporting students with other exceptionalities and/or needs.  Allowing the learner the opportunity to engage in meaningful learning is critical in their development.  This, of course, is true of all students. As such, this section describes how teachers can work to effectively accommodate these students in the classroom and with specific strategies.</p>
            <p>Key takeaways for the classroom conditions and teacher programming to support learners engaged in ISELP include:</p>
            <ol className='list-disc pl-12'>
              <li>Class work for learners engaged in ISELP should be based on the curriculum with the aim of working toward greater depth and breadth of the concepts being taught. <b><i>Assessment and evaluation should be based on the curricular expectations of the standard grade level curriculum and not based on extensions beyond the expected work of their peers.</i></b></li>
              <li>While teachers may feel a need for acceleration with students engaged in ISELP, it often benefits students to work with the same concepts at a more sophisticated level without acceleration through the curriculum.</li>
              <li>Opportunities for extensions of course work should be provided, based on student interest, but should be monitored to ensure that students are not overwhelmed with additional tasks to complete.</li>
              <li>Additional opportunities should stay in line with the same time commitments as their classmates, by bypassing instances of learning when the student can demonstrate proficiency.</li>
              <li>Activities should foster student agency in their learning and opportunities for self-directed learning.</li>
            </ol>

            <p className='font-semibold text-xl lg:text-3xl' id='summary-and-highlights'>Summary and Highlights</p>
            <hr />
            <p>Students engaged in ISELP need to take part in meaningful learning with the aim of working toward greater depth and breadth of concepts being taught during class time.</p>
            <p>Early in a given school year, it is advisable that the classroom teacher collaborate with the ISSP teacher to build a comprehensive student portrait, based on the input from the student, family/caregiver(s), and all educators, in order get a sense of what the student’s strengths and preferences for extensions are to meet the accommodations set in their IEP.</p>
            <p>The chart below highlights the importance of the classroom teacher, ISSP teacher, family, and student relationship:</p>
            <p className='text-slate-500 lg:text-lg mb-6'>IMAGE MISSING</p>

            <p className="font-semibold text-xl" id='assessment-considerations'>Assessment Considerations</p>
              <p>Students with a Gifted identification should be evaluated based on the Ontario Curriculum as with any student in their grade.  While Gifted students may be given opportunities to go beyond the course material and work on modified activities, <b><i>all assessments should be evaluated based on standard grade level curricular expectations</i></b>, as for all learners.</p>
            
            <p className="font-semibold text-xl" id='strategies-for-implementing-extensions-in-the-classroom'>Strategies for implementing extensions in the classroom</p>
              <p>Many strategies may work differently within different subjects and will depend on the teacher and the student. Typically, extensions focus on the idea of developing various skills with students engaged in ISELP. Many of the practices focus on building critical thinking and analytical skills while helping students self-advocate and work towards collective and self-directed learning. Additionally, opportunities for extensions should work to foster the opportunity to explore subject expectations in greater depth and breadth.</p>

              <br />
              <p className='font-semibold text-3xl cursor-pointer dropdown-title flex items-center justify-between hover:lg:underline' onClick={() => setIsInDepthVisible(!isInDepthVisible)} id='in-depth'>
                In-Depth
                <svg className={`w-6 h-6 transform transition-transform duration-300 ${isInDepthVisible ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </p>
              <hr />

              {isInDepthVisible && (
              <>
                <p className="font-semibold text-xl" id='working-with-the-ISSP-teacher'>Working with the ISSP teacher</p>
                  <p>As with any identified student with an exceptionality, learners engaged in ISELP should be afforded support through your school’s Special Education department.  Their contact may be with an ISSP teacher, Guidance teacher, or other similar types of roles based on the way your school’s support team is structured.</p>
                  <p>Early in a given school year, it is advisable that the classroom teacher collaborate with the ISSP teacher to build a comprehensive student portrait, based on the input from the student, family/caregiver(s), and all educators, in order get a sense of what the student’s strengths and preferences for extensions are to meet the accommodations set in their IEP.</p>
                  <p>Below are some guiding topics that can build effective planning for students engaged in ISELP who are part of your classroom:</p>
                  <ol className ='list-decimal pl-12'>
                    <li><i>Discuss what are the given strengths and needs for each student. What are some interests that the student may focus on (ex: Social - leadership opportunities; Cognitive - Engaging with a passion project which satisfies the curricular expectations) that you may be able to support.</i></li>
                    <li><i>Ensure that any other exceptionalities (e.g., learning disabilities), diagnoses (e.g., ADHD, anxiety), and other areas that need to be supported (e.g., ELL) are discussed and how they impact the learner portrait, ensuring there is a comprehensive understanding of the student’s complete portrait as a learner.</i></li>
                    <li><i>Discuss what particular strategies work best with each student and what potential needs might students have in interacting with the class and teacher.</i></li>
                    <li><i>Discuss the possible opportunities for cross-curricular work with other teachers in the same term or school year.</i></li>
                  </ol>
                  <p>The chart below highlights the importance of the classroom teacher, ISSP teacher, family, and student relationship. For maximum success, each role has specific areas to contribute to the program development and implementation.</p>
                  <p className='text-slate-500 lg:text-lg mb-6'>IMAGE MISSING</p>

                <p className="font-semibold text-xl" id='assessment-considerations'>Assessment considerations</p>
                  <p>Learners engaged in ISELP may show advanced mastery of subject material but may also not excel in the specific skills in each subject discipline, or may not exercise the necessary learning skills to ensure that they meet all grade-level curriculum expectations. Special Education identification is part of many intersecting identifications of our students. Students who are identified as Gifted can have deficiencies in other areas, such as social maturity, and other diagnosed learning disabilities.</p>
                  <p>Students with a Gifted identification should be evaluated based on the Ontario Curriculum as with any student in their grade.  While Gifted students may be given opportunities to go beyond the course material and work on modified activities,<b><i>all assessments should be evaluated based on standard grade level curricular expectations</i></b>, as for all learners.</p>
                  <p>Below are some common situations that arise when learners who are part of ISELP engage with evaluated tasks.</p>
                  <p>Please refer to the <a href="https://pdsb1.sharepoint.com/sites/Innovation/SitePages/EML-2021-and-the-Innovative-Elements-Knowing-and-Doing-Guides.aspx" target='_blank' className='text-[#0066CC] underline'>Empowering Modern Learners ‘Knowing and Doing Guides’</a> and the <a href="https://pdsb1.sharepoint.com/sites/AssessPeel" target='_blank' className='text-[#0066CC] underline'>Assess Peel SharePoint site</a> for a foundational understanding of assessment for students engaged with ISELP.</p>

                  
              
              
              
              </>
              )}

          </div>
        </div>
      
      </div>
    </>
  );
}

export default Page;