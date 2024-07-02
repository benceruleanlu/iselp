'use client'

import Image from 'next/image'
import CustomLink from '../components/customlink';
import CustomLinkA from '../components/customlink-a';
import NavBar from '../components/navbar-a';
import { useState } from 'react';


const Page = () => {
    const [isInDepthVisible, setIsInDepthVisible] = useState(false);
    return (
        <>
            <NavBar />
            <div className='flex flex-row w-11/12 mx-auto my-6 lg:mt-8 lg:mb-16 max-w-[85%] lg:space-x-16 overflow-visible text-wrap'>
                <div className='min-w-96 text-nowrap truncate space-y-2 sticky top-8 h-full *:truncate text-sm hidden lg:block'>
                    <p className='font-bold text-lg'>Contents</p>
                    <hr className='!mb-4'/>
                    <p><CustomLinkA href="#introduction" className="font-semibold">Introduction</CustomLinkA></p>
                    <p><CustomLinkA href="#summary-and-highlights" className="font-semibold">Summary and Highlights</CustomLinkA></p>
                    <p onClick={() => setIsInDepthVisible(true)}><CustomLinkA href="#in-depth" className='font-semibold'>In-Depth</CustomLinkA></p>
                    <p onClick={() => setIsInDepthVisible(true)}><CustomLinkA href="#working-with-the-ISSP-teacher" className='ml-2'>Working with the ISSP teacher</CustomLinkA></p>
                    <p onClick={() => setIsInDepthVisible(true)}><CustomLinkA href="#assessment-considerations-1" className='ml-2'>Assessment considerations</CustomLinkA></p>
                    <p onClick={() => setIsInDepthVisible(true)}><CustomLinkA href="#common-strategies-for-extensions-in-the-classroom" className='ml-2'>Common strategies for extensions in the classroom</CustomLinkA></p>
                </div>

                <div className='flex flex-col mx-auto max-w-[92vw]'>
                    <p className='font-bold text-5xl lg:text-5xl text-slate-950 mb-4 tracking-tight'>The Role Of The Classroom Teacher In ISELP</p>
                    <p className='text-slate-500 lg:text-lg mb-6'>Learn how to effectively engage and challenge learners in ISELP with specific classroom strategies.</p>
                    
                    <div className='space-y-4'>
                        <p className='font-semibold text-xl lg:text-3xl' id='introduction'>Introduction</p>
                        <hr />
                        <p className='font-semibold'>Keeping Students Engaged and Challenged</p>
                        <p>Accommodating learners engaged in ISELP differs somewhat from supporting students with other exceptionalities and/or needs. Allowing the learner the opportunity to engage in meaningful learning is critical in their development. This, of course, is true of all students. As such, this section describes how teachers can work to effectively accommodate these students in the classroom and with specific strategies.</p>
                        <p>Key takeaways for the classroom conditions and teacher programming to support learners engaged in ISELP include:</p>
                        <ol className='list-disc pl-12 space-y-1'>
                            <li>Class work for learners engaged in ISELP should be based on the curriculum with the aim of working toward greater depth and breadth of the concepts being taught. Assessment and evaluation should be based on the curricular expectations of the standard grade level curriculum and not based on extensions beyond the expected work of their peers.</li>
                            <li>While teachers may feel a need for acceleration with students engaged in ISELP, it often benefits students to work with the same concepts at a more sophisticated level without acceleration through the curriculum.</li>
                            <li>Opportunities for extensions of course work should be provided, based on student interest, but should be monitored to ensure that students are not overwhelmed with additional tasks to complete.</li>
                            <li>Additional opportunities should stay in line with the same time commitments as their classmates, by bypassing instances of learning when the student can demonstrate proficiency.</li>
                            <li>Activities should foster student agency in their learning and opportunities for self-directed learning.</li>
                        </ol>

                        <br />
                        <p className='font-semibold text-xl lg:text-3xl' id='summary-and-highlights'>Summary and Highlights</p>
                        <hr />
                        <p>Students engaged in ISELP need to take part in meaningful learning with the aim of working toward greater depth and breadth of concepts being taught during class time.</p>
                        <p>Early in a given school year, it is advisable that the classroom teacher collaborate with the ISSP teacher to build a comprehensive student portrait, based on the input from the student, family/caregiver(s), and all educators, in order get a sense of what the student&rsquo;s strengths and preferences for extensions are to meet the accommodations set in their IEP.</p>
                        <p>The chart below highlights the importance of the classroom teacher, ISSP teacher, family, and student relationship:</p>
                        
                        <Image
                            src='/theRoleOfStaffInISELP.png'
                            width={900}
                            height={700}
                            alt='Characteristics of Gifted Learners'
                            className='rounded-lg py-6 max-h-[900px] max-w-[700px] mx-auto overflow-x-auto'
                        />

                        <p className="font-semibold" id='assessment-considerations'>Assessment Considerations</p>
                            <p>Students with a Gifted identification should be evaluated based on the Ontario Curriculum as with any student in their grade. While Gifted students may be given opportunities to go beyond the course material and work on modified activities, all assessments should be evaluated based on standard grade level curricular expectations, as for all learners.</p>
                        
                        <p className="font-semibold" id='strategies-for-implementing-extensions-in-the-classroom'>Strategies for implementing extensions in the classroom</p>
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
                                    <p>As with any identified student with an exceptionality, learners engaged in ISELP should be afforded support through your school&rsquo;s Special Education department. Their contact may be with an ISSP teacher, Guidance teacher, or other similar types of roles based on the way your school&rsquo;s support team is structured.</p>
                                    <p>Early in a given school year, it is advisable that the classroom teacher collaborate with the ISSP teacher to build a comprehensive student portrait, based on the input from the student, family/caregiver(s), and all educators, in order get a sense of what the student&rsquo;s strengths and preferences for extensions are to meet the accommodations set in their IEP.</p>
                                    <p>Below are some guiding topics that can build effective planning for students engaged in ISELP who are part of your classroom:</p>
                                    <ol className ='list-decimal pl-12 space-y-1'>
                                        <li><i>Discuss what are the given strengths and needs for each student. What are some interests that the student may focus on (ex: Social - leadership opportunities; Cognitive - Engaging with a passion project which satisfies the curricular expectations) that you may be able to support.</i></li>
                                        <li><i>Ensure that any other exceptionalities (e.g., learning disabilities), diagnoses (e.g., ADHD, anxiety), and other areas that need to be supported (e.g., ELL) are discussed and how they impact the learner portrait, ensuring there is a comprehensive understanding of the student&rsquo;s complete portrait as a learner.</i></li>
                                        <li><i>Discuss what particular strategies work best with each student and what potential needs might students have in interacting with the class and teacher.</i></li>
                                        <li><i>Discuss the possible opportunities for cross-curricular work with other teachers in the same term or school year.</i></li>
                                    </ol>
                                    <p>The chart below highlights the importance of the classroom teacher, ISSP teacher, family, and student relationship. For maximum success, each role has specific areas to contribute to the program development and implementation.</p>
                                    <Image
                                        src='/theRoleOfStaffInISELP.png'
                                        width={900}
                                        height={700}
                                        alt='Characteristics of Gifted Learners'
                                        className='rounded-lg py-6 max-h-[900px] max-w-[700px] mx-auto overflow-x-auto'
                                    />
                                <p className="font-semibold text-xl" id='assessment-considerations-1'>Assessment considerations</p>
                                    <p>Learners engaged in ISELP may show advanced mastery of subject material but may also not excel in the specific skills in each subject discipline, or may not exercise the necessary learning skills to ensure that they meet all grade-level curriculum expectations. Special Education identification is part of many intersecting identifications of our students. Students who are identified as Gifted can have deficiencies in other areas, such as social maturity, and other diagnosed learning disabilities.</p>
                                    <p>Students with a Gifted identification should be evaluated based on the Ontario Curriculum as with any student in their grade. While Gifted students may be given opportunities to go beyond the course material and work on modified activities, all assessments should be evaluated based on standard grade level curricular expectations, as for all learners.</p>
                                    <p>Below are some common situations that arise when learners who are part of ISELP engage with evaluated tasks.</p>
                                    <p>Please refer to the <a href="https://pdsb1.sharepoint.com/sites/Innovation/SitePages/EML-2021-and-the-Innovative-Elements-Knowing-and-Doing-Guides.aspx" target='_blank' className='text-[#0066CC] underline'>Empowering Modern Learners &lsquo;Knowing and Doing Guides&rsquo;</a> and the <a href="https://pdsb1.sharepoint.com/sites/AssessPeel" target='_blank' className='text-[#0066CC] underline'>Assess Peel SharePoint site</a> for a foundational understanding of assessment for students engaged with ISELP.</p>

                                    <div className="overflow-x-auto shadow-md sm:rounded-lg bg-white">
                                        <table className="w-full text-sm text-left text-gray-700 min-w-[800px]">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                                <tr>
                                                    <th scope="col" className="py-3 px-6 text-center">Type of Task</th>
                                                    <th scope="col" className="py-3 px-6 text-center">Description</th>
                                                    <th scope="col" className="py-3 px-6 text-center">Implementation in the Classroom</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b border-gray-200">
                                                    <td className="py-4 px-6"><span className='font-bold'>Unchanged Task (Student Works to Complete Expected Product)</span></td>
                                                    <td className="py-4 px-6">Student may complete the expected assignment with no modifications or extensions.</td>
                                                    <td className="py-4 px-6">
                                                        <ol className = "list-disc pl-12">
                                                            <li>Evaluate entirely based on decided criteria for the class.</li>
                                                        </ol>
                                                    </td>
                                                </tr>
                                                <tr className="bg-gray-50 border-b border-gray-200">
                                                    <td className="py-4 px-6"><span className='font-bold'>Changed/Adapted Task</span></td> 
                                                    <td className="py-4 px-6 space-y-2">
                                                        <p>Students determine the way they wish to meet the learning goals and complete work with a choice of product or topic. While the topic or product reflects the student&rsquo;s learning priorities, the student may or may not meet the expectations of the learning goal.</p>
                                                        <p>See the <a href="https://drive.google.com/file/d/1BMVUzoRx7SeQGqZ2kx3xxUQ-iDVm77NH/view" target='_blank' className='text-[#0066CC] underline'>EML Learning Environments Knowing and Doing Guide</a> for more information.</p>
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <ol className = "list-disc pl-12 space-y-2 leading-tight">
                                                            <li>Evaluate entirely based on decided criteria for the class.</li>
                                                            <li>Treat such cases as if a standard student were opting for a different product type.</li>
                                                            <li>It&rsquo;s advisable to conference with the student to clarify how they can meet the expectations of the task while adopting their chosen modification.</li>
                                                        </ol>
                                                    </td>
                                                </tr>
                                                <tr className="bg-white border-b border-gray-200">
                                                    <td className="py-4 px-6"><span className='font-bold'>Ambitious Undertaking (Goes Beyond Expectations)</span></td> 
                                                    <td className="py-4 px-6 space-y-2">
                                                        <p>Student may decide to go beyond assignment expectations in scope of information or product. In this instance the student may meet the expectations of the assignment and exceed them.</p>
                                                        <p>Teacher should be aware of the strategies below regarding choice and structure planning.</p>
                                                        <p>See the <a href="https://pdsb1.sharepoint.com/sites/Innovation/SiteAssets/Forms/AllItems.aspx?id=%2Fsites%2FInnovation%2FSiteAssets%2FSitePages%2FEML%2D2021%2Dand%2Dthe%2DInnovative%2DElements%2DKnowing%2Dand%2DDoing%2DGuides%2FUDL%2DEML%2DEquity%2D%2D%2DEML%2D2021%2D%2D3%2D%2Epdf&parent=%2Fsites%2FInnovation%2FSiteAssets%2FSitePages%2FEML%2D2021%2Dand%2Dthe%2DInnovative%2DElements%2DKnowing%2Dand%2DDoing%2DGuides" target='_blank' className='text-[#0066CC] underline'>UDL to EML to Equity</a> guide for more information.</p>
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <ol className = "list-disc pl-12 space-y-2 leading-tight">
                                                            <li>It&rsquo;s OK for a student to receive a high mark! Remember to stay within the expectations of the grade level.</li>
                                                            <li>Take the time to comment on how they may further improve on more advanced reasoning to help foster development.</li>
                                                            <li>Use phrases such as, &ldquo;at this level you&rsquo;ve met all expectations of the assignment, and here are some ways to improve.&rdquo;</li>
                                                        </ol>
                                                    </td>
                                                </tr>
                                                <tr className="bg-gray-50 border-b border-gray-200">
                                                    <td className="py-4 px-6"><span className='font-bold'>Ambitious Undertaking (Fails to Meet Expectations)</span></td> 
                                                    <td className="py-4 px-6 space-y-2">
                                                        <p>Student may decide to go beyond the expected scope of the assignment. However, in this instance the student may miss some of the expectations being evaluated because they are focusing on the scope of their plans rather than ensuring they meet all outlined expectations.</p>
                                                        <p>Teachers should be aware of Common Strategies for Extensions regarding choice and structure planning.</p>
                                                        <p>See the <a href="https://drive.google.com/file/d/1IVnb3REh-0YtVpCIV614YeQSVEBFCW7c/view" target='_blank' className='text-[#0066CC] underline'>EML Equitable Assessment Knowing and Doing Guide</a> for more information.</p>
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <ol className = "list-disc pl-12 space-y-2 leading-tight">
                                                            <li>Pre-empt this problem by conferencing with the student at the early stages of the task; ensure you specifically clarify how they can meet the expectations of the course/assignment.</li>
                                                            <li>Avoid over-evaluation based on effort. Again, we must ensure that we&rsquo;re evaluating against the expectations of the curriculum.</li>
                                                            <li>As with any student, try to remain sensitive toward their passion. Provide feedback as to where matters could be improved upon, and if suitable, allow the student to perhaps adjust their product to improve their standing.</li>
                                                        </ol>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                <p className="font-semibold text-xl" id='common-strategies-for-extensions-in-the-classroom'>Common strategies for extensions in the classroom</p>
                                    <p>There are a variety of strategies and ongoing practices that help encourage learning for the Gifted student. Fullan (2014, p3) provides a very clear description of new pedagogies as &ldquo;the foundation of teacher quality is a teacher&rsquo;s pedagogical capacity - their repertoire of teaching strategies and their ability to form partnerships with students in mastering the process of learning. Technology in the new model is pervasive and it is used to discover and master content knowledge and to enable the deep learning goals of creating and using new knowledge in the world.&rdquo;</p>
                                    <p>Many strategies may work differently within different disciplines and may depend on the teacher and the student. The following chart highlights strategies and practices that focus on the idea of developing various skills with students engaged in ISELP. Many of the practices focus on building critical thinking and analytical skills while helping students self-advocate and work towards collective and self-directed learning. Additionally, these strategies should work to foster the opportunity to explore subject expectations in greater depth and breadth.</p>

                                    <p className='font-semibold'>Developing Inquiry/Questioning Processes</p>
                                    <div className="overflow-x-auto shadow-md sm:rounded-lg bg-white">
                                        <table className="w-full text-sm text-left text-gray-700 min-w-[800px]">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                                <th scope="col" className="py-3 px-6 text-center">Description</th>
                                                <th scope="col" className="py-3 px-6 text-center">Implementation in the Classroom</th>
                                                <th scope="col" className="py-3 px-6 text-center">Example</th>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b border-gray-200">
                                                        <td className="py-4 px-6 space-y-2">
                                                            <p>While working to develop a concept with your class, a Gifted learner may understand the concept at a pace much quicker than the standard pacing requires. For example, a question posed in class which usually fosters a whole period of discussion and exploration, may have already been encountered by the student from previous experience or just seem &ldquo;intuitive&rdquo; to a Gifted learner. This, at times, creates the circumstance where the Gifted learner will not have the opportunity to examine the concept deeply with their peers.</p>
                                                            <p>More information can be found in the <a href="https://drive.google.com/file/d/1IVnb3REh-0YtVpCIV614YeQSVEBFCW7c/view" target='_blank' className='text-[#0066CC] underline'>EML Learning Environment Knowing and Doing Guide</a>.</p>
                                                        </td>
                                                        <td className="py-4 px-6">
                                                            <ol className = "list-disc space-y-2 leading-tight">
                                                                <li>Use follow-up questions that examine the concept at a deeper level (more generalized).</li>
                                                                <li>Encourage the student to independently develop these types of questions.</li>
                                                            </ol>
                                                        </td>
                                                        <td className="py-4 px-6">
                                                            <ol className = "list-disc space-y-2 leading-tight">
                                                                <li>Yes, and then?</li>
                                                                <li>How would you prove this result?</li>
                                                                <li>Does this connect anywhere else?</li>
                                                                <li>Can this result be extended in a more generalized way?</li>
                                                                <li>What can we extrapolate from this theory or idea? What does it lead to?</li>
                                                                <li>How can we compare these ideas or concepts to others that we may be aware of?</li>
                                                            </ol>
                                                        </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className='font-semibold'>Communicating Ideas</p>
                                    <div className="overflow-x-auto shadow-md sm:rounded-lg bg-white">
                                        <table className="w-full text-sm text-left text-gray-700 min-w-[800px]">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                                <th scope="col" className="py-3 px-6 text-center">Description</th>
                                                <th scope="col" className="py-3 px-6 text-center">Implementation in the Classroom</th>
                                                <th scope="col" className="py-3 px-6 text-center">Example</th>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b border-gray-200">
                                                    <td className='py-4 px-6'>Many Gifted students require ongoing assistance in organizing their thoughts as they may have difficulty in communicating concepts or ideas that may seem intuitive to them; thereby their presentation of ideas seems disconnected; exhibiting leaps of reasoning to the audience at hand.</td>
                                                    <td className='py-4 px-6'>
                                                        <ol className = "list-disc space-y-2 leading-tight">
                                                            <li>Allow time to engage in thorough one-on-one discussions, during which it is imperative to actively listen and ask for clarifications whenever such leaps occur.</li>
                                                            <li>In a presentation/class wide discussion; interject with clarifying questions to both assist the student to understand where there is a lack of detail, but to also model for the remainder of the class as to what type of questions to ask.</li>
                                                        </ol>
                                                    </td>
                                                    <td className='py-4 px-6'>
                                                        <ol className = "list-disc space-y-2 leading-tight">
                                                            <li>Student, during mathematics, quickly comes to the answer without being able to show how or why they came to that conclusion.</li>
                                                            <li>A student who may present interesting aspects of a topic but may not focus enough on the specific expected (and need to know) aspects of a topic first.</li>
                                                        </ol>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className='font-semibold'>Compacting</p>
                                    <div className="overflow-x-auto shadow-md sm:rounded-lg bg-white">
                                        <table className="w-full text-sm text-left text-gray-700 min-w-[800px]">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                                <th scope="col" className="py-3 px-6 text-center">Description</th>
                                                <th scope="col" className="py-3 px-6 text-center">Implementation in the Classroom</th>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b border-gray-200">
                                                    <td className='py-4 px-6 space-y-2'>
                                                        <p>Gifted learners will often become proficient at a given technique or comprehend explicitly presented information at a far quicker pace than their peers. As such, this provides a great opportunity to provide alternative tasks for the gifted learner to work in an asynchronous manner while the remainder of the class works to master concepts such as these.</p>
                                                        <p>Ensure to be cautious when taking this approach by requiring the student to properly demonstrate that the concepts have developed at a proficient enough level (i.e. doesn&rsquo;t have to be perfect, but good enough to practice further with a more challenging alternative).</p>
                                                    </td>
                                                    <td className='py-4 px-6'>
                                                        <ol className = "list-disc space-y-2 leading-tight">
                                                            <li>Assign/allow the student to work through an alternative set of practice if the given skill is demonstrated to be sufficiently developed.</li>
                                                            <li>Attempt to ensure that alternative work would entail the same time commitment as the standard practice.</li>
                                                            <li>Avoid alternatives that are repetitive in nature.</li>
                                                        </ol>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className='font-semibold'>Providing Choice and Open-Ended Learning</p>
                                    <div className="overflow-x-auto shadow-md sm:rounded-lg bg-white">
                                        <table className="w-full text-sm text-left text-gray-700 min-w-[800px]">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                                <th scope="col" className="py-3 px-6 text-center">Description</th>
                                                <th scope="col" className="py-3 px-6 text-center">Implementation in the Classroom</th>
                                                <th scope="col" className="py-3 px-6 text-center">Example</th>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b border-gray-200">
                                                    <td className='py-4 px-6 space-y-2'>
                                                        <p>Many Gifted learners feel greater agency when they are afforded the opportunity to engage with the subject material through choice in topic material for certain projects or by approaching assignments in a way that gives choice to the final product or medium. Work should still relate to the specific curriculum and teachers should be aware of the specific criteria being evaluated and whether the choice works with the specific expectations.</p>
                                                        <p>More information can be found in the <a href="https://drive.google.com/file/d/1D2aHThCjHQ6FCEfMtUF2AlMJNn_Bw8c9/view" target='_blank' className='text-[#0066CC] underline'>EML Global Competencies Knowing and Doing Guide</a>.</p>
                                                    </td>
                                                    <td className='py-4 px-6'>
                                                        <ol className="list-disc space-y-2 leading-tight">
                                                            <li>Outline the responsibilities entailed when producing a non-standard product medium.</li>
                                                            <li>Ensure to discuss how one would achieve success on the task (i.e. be able to obtain marks/avoid being penalized) when tackling an alternative choice.</li>
                                                            <li>Alternative choices should still generally tie back to curriculum expectations. Be aware of what is being assessed in the assignment to ensure choice still connects to that assessment.</li>
                                                        </ol>
                                                    </td>
                                                    <td className='py-4 px-6'>
                                                        <ol className="list-disc space-y-2 leading-tight">
                                                            <li>If a student does an interview instead of a written piece, they need to be made aware that their responsibility is to answer pointed questions and therefore will need to be an expert to prepare for unexpected questions, whereas a written product burdens the writer with full control of information, thus they must ensure little to no ambiguity is evident.</li>
                                                        </ol>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className='font-semibold'>Structuring Planning and Dealing with Overreaching Tendencies</p>
                                    <div className="overflow-x-auto shadow-md sm:rounded-lg bg-white">
                                        <table className="w-full text-sm text-left text-gray-700 min-w-[800px]">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                                <th scope="col" className="py-3 px-6 text-center">Description</th>
                                                <th scope="col" className="py-3 px-6 text-center">Implementation in the Classroom</th>
                                                <th scope="col" className="py-3 px-6 text-center">Example</th>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b border-gray-200">
                                                    <td className='py-4 px-6'><p>While Gifted students tend not to need the same scaffolding of assignments, many will have large ideas that will require guidance to help them work through the necessary steps to see the attainability of their goals or to be able to reach them. Additionally, these issues can cause students to seem lazy or avoid starting work because, while they may have grand ideas, they are unsure how to play towards its completion or are concerned about it not being perfect.</p></td>
                                                    <td className='py-4 px-6'>
                                                        <ol className = "list-disc space-y-2 leading-tight">
                                                            <li>Conference with the student, examine the ideas that the student has, discuss steps towards the final outcome and to ask questions about how the student may deal with particular issues as they may come up in the process.</li>
                                                            <li>Set benchmark goals to be discussed in follow up conferences if the project/concept is more of a longtime spanning task.</li>
                                                        </ol>
                                                    </td>
                                                    <td className='py-4 px-6'>
                                                        <ol className = "list-disc space-y-2 leading-tight">
                                                            <li>Student working on a presentation and wishes to complete a video/film project. Conference with the student to ensure they know what steps they need to take with research and planning, specific success criteria that must be met, and how they plan to incorporate the required information and/or demonstrate the required skills.</li>
                                                        </ol>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className='font-semibold'>Helping Students Explore Areas of Strength</p>
                                    <div className="overflow-x-auto shadow-md sm:rounded-lg bg-white">
                                        <table className="w-full text-sm text-left text-gray-700 min-w-[800px]">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                                <th scope="col" className="py-3 px-6 text-center">Description</th>
                                                <th scope="col" className="py-3 px-6 text-center">Implementation in the Classroom</th>
                                                <th scope="col" className="py-3 px-6 text-center">Example</th>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b border-gray-200">
                                                <td className='py-4 px-6 space-y-2'>
                                                    <p>Not every student will have the same Gifted potential (or interest) in each class but, working in concert with an ISSP teacher, you should find ways to engage each student to help them explore their areas of strength and approach the subject material in a way that highlights their abilities, while still working within the expectations of the grade-level curriculum.</p>
                                                    <p className="">Models of Learning:</p>
                                                    <ol className="list-disc pl-12 space-y-2">
                                                        <li>Educators may optimize relevance, value, and authenticity by empowering students to make connections between content and their own interests to link understanding to real world situations; design their own learning experiences; apply knowledge to authentic assessment scenarios.</li>
                                                        <li>Educators may offer ways of customizing the display of information by choosing resources and materials that best meet their own needs and personalizing their learning.</li>
                                                    </ol>
                                                    <p>More information can be found in the <a href="https://drive.google.com/file/d/1giR9uRE29r-W59AObxLa6vQE8XHJlUOq/view" target='_blank' className='text-[#0066CC] underline'>EML Models of Learning Knowing and Doing Guide</a>.</p>
                                                </td>
                                                <td className='py-4 px-6'>
                                                    <ol className="list-disc space-y-2 leading-tight">
                                                        <li>Work with the ISSP teacher to examine student strengths, tendencies, behaviours, etc.</li>
                                                        <li>Encourage students to self-advocate their ideas.</li>
                                                    </ol>
                                                </td>
                                                <td className='py-4 px-6'>
                                                    <ol className="list-disc space-y-2 leading-tight">
                                                        <li>Often related to choice. A student who may work well with computers or video editing may wish to present a project by developing a computer program or video essay.</li>
                                                        <li>A student with a propensity for mathematics may wish to examine the data related to a historical event instead of a more typical approach.</li>
                                                        <li>In either case the student should conference with the teacher and ensure that any alternative work still completes the expected assessment tasks.</li>
                                                    </ol>
                                                </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className='font-semibold'>Dealing with Questions that Challenge Authority</p>
                                    <div className="overflow-x-auto shadow-md sm:rounded-lg bg-white">
                                        <table className="w-full text-sm text-left text-gray-700 min-w-[800px]">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                                <th scope="col" className="py-3 px-6 text-center">Description</th>
                                                <th scope="col" className="py-3 px-6 text-center">Implementation in the Classroom</th>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b border-gray-200">
                                                    <td className='py-4 px-6 space-y-2'>
                                                        <p>Gifted learners tend to openly question the purpose of a given lesson/task/assignment. This can often be interpreted as a challenge to the teacher&rsquo;s authority; however, in many circumstances, they simply are examining their learning and the education system as a whole.</p>
                                                        <p>It is instructive to engage in a dialogue with them in an authentic manner. The Gifted student can likely engage in higher level thinking and dialogue.</p>
                                                        <p>More information can be found in the <a href="https://drive.google.com/file/d/1giR9uRE29r-W59AObxLa6vQE8XHJlUOq/view" target='_blank' className='text-[#0066CC] underline'>EML Models of Learning Knowing and Doing Guide</a>.</p>
                                                    </td>
                                                    <td className='py-4 px-6'>
                                                        <ol className = "list-disc space-y-2 leading-tight">
                                                            <li>Openly discuss how the task will benefit their development, ensuring to be thorough if questioned further.</li>
                                                            <li>Be open to modifying the task by asking them how they would be better engaged. You can use the above strategies as suggestions if the student isn&rsquo;t able to articulate what they would prefer.</li>
                                                        </ol>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                                {/*
                                                <tr>
                                                    <td>
                                                        <p>Gifted learners tend to openly question the purpose of a given lesson/task/assignment. This can often be interpreted as a challenge to the teacher&rsquo;s authority; however, in many circumstances, they simply are examining their learning and the education system as a whole.</p>
                                                        <p>It is instructive to engage in a dialogue with them in an authentic manner. The Gifted student can likely engage in higher level thinking and dialogue.</p>
                                                        <p>More information can be found in the <a href="https://drive.google.com/file/d/1giR9uRE29r-W59AObxLa6vQE8XHJlUOq/view" target='_blank' className='text-[#0066CC] underline'>EML Models of Learning Knowing and Doing Guide</a>.</p>
                                                    </td>
                                                    <td>
                                                        <ol className = "list-disc pl-12">
                                                            <li>Openly discuss how the task will benefit their development, ensuring to be thorough if questioned further.</li>
                                                            <li>Be open to modifying the task by asking them how they would be better engaged. You can use the above strategies as suggestions if the student isn&rsquo;t able to articulate what they would prefer.</li>
                                                        </ol>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> */}
                            </>
                            )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;