"use client";

import CustomLinkA from "../components/customlink-a";
import NavBar from "../components/navbar-a";
import { useState } from "react";

const Page = () => {
  const [isInDepthVisible, setIsInDepthVisible] = useState(false);
  const [isFurtherReadingVisible, setIsFurtherReadingVisible] = useState(false);

  return (
    <>
      <NavBar />
      <div className="mx-auto my-6 flex w-11/12 flex-row overflow-visible text-wrap lg:mb-16 lg:mt-8 lg:space-x-16">
        <div className="sticky top-8 hidden h-full min-w-96 space-y-2 truncate text-nowrap text-sm *:truncate lg:block">
          <p className="text-lg font-bold">Contents</p>
          <hr className="!mb-4" />
          <p>
            <CustomLinkA href="#introduction" className="font-semibold">
              Introduction
            </CustomLinkA>
          </p>
          <p>
            <CustomLinkA
              href="#what-is-meant-by-dual-identified-twice-exceptional-or-2e"
              className="ml-2"
            >
              What is meant by Dual Identified, Twice Exceptional, or 2e
            </CustomLinkA>
          </p>
          <p>
            <CustomLinkA
              href="#summary-and-highlights"
              className="font-semibold"
            >
              Summary and Highlights
            </CustomLinkA>
          </p>
          <p onClick={() => setIsInDepthVisible(true)}>
            <CustomLinkA href="#in-depth" className="font-semibold">
              In-Depth
            </CustomLinkA>
          </p>
          <p onClick={() => setIsInDepthVisible(true)}>
            <CustomLinkA
              href="#portrait-of-a-dual-identified-student"
              className="ml-2"
            >
              Portrait of a Dual Identified Student
            </CustomLinkA>
          </p>
          <p onClick={() => setIsInDepthVisible(true)}>
            <CustomLinkA
              href="#common-traits-of-dual-identified-learners-gifted-and-ld"
              className="ml-2"
            >
              Common traits of Dual Identified learners (Gifted and LD)
            </CustomLinkA>
          </p>
          <p onClick={() => setIsInDepthVisible(true)}>
            <CustomLinkA
              href="#programming-strategies-for-dual-identified-students"
              className="ml-2"
            >
              Programming strategies for Dual Identified students
            </CustomLinkA>
          </p>
          <p onClick={() => setIsInDepthVisible(true)}>
            <CustomLinkA
              href="#specific-strategies-for-working-with-dual-identified-gifted-students"
              className="ml-2"
            >
              Specific Strategies for Working with Dual Identified Gifted
              Students
            </CustomLinkA>
          </p>
          <p onClick={() => setIsFurtherReadingVisible(true)}>
            <CustomLinkA
              href="#further-reading-and-resources"
              className="font-semibold"
            >
              Further Reading and Resources
            </CustomLinkA>
          </p>
        </div>
        <div className="mx-auto flex max-w-[92vw] flex-col">
          <p className="mb-4 text-4xl font-bold tracking-tight text-slate-950 lg:text-5xl">
            ISELP and Other Exceptionalities / Diagnoses
          </p>
          <p className="mb-6 text-slate-500 lg:text-lg">
            Learn how to support Dual Exceptional students with additional
            diagnoses or exceptionalities.
          </p>

          <div className="space-y-4">
            <p className="text-2xl font-semibold lg:text-3xl" id="introduction">
              Introduction
            </p>
            <hr />

            <p>
              For our purposes in this resource, “Dual Exceptional” will refer
              to a student who is identified as Exceptional Intellectual -
              Gifted, and who has other diagnoses or exceptionalities, which may
              or may not be identified.
            </p>

            <p>
              Students who are receiving Non-identified Special Education
              support through ISELP may also have additional
              diagnoses/identifications, and can also be considered as “Dual
              Identified” for the purposes of this section. For example, some
              students with exceptional cognitive abilities also may have an
              additional diagnosis (e.g., ADHD, anxiety) and/or identifications
              (e.g., ASD), which impacts their learning.
            </p>

            <p
              className="text-xl font-semibold"
              id="what-is-meant-by-dual-identified-twice-exceptional-or-2e"
            >
              What is meant by Dual Identified, Twice Exceptional, or 2e
            </p>

            <p>
              The term Dual Identified or &lsquo;Twice Exceptional&rsquo; -
              often abbreviated as &lsquo;2e&rsquo; (typically in American
              research and literature) - is used to identify a group of students
              who are exceptional because they may have one or more diagnoses
              and/or exceptionalities in addition to being identified as Gifted.
              These students will possess superior intellectual abilities,
              coupled with one or more learning difficulties. Dual identified
              students can be overlooked, misclassified, neglected, or not
              receive the proper programming as the characteristics of one
              exceptionality can mask those of the other and the student appears
              as average in their school achievement. These students can be
              misunderstood as one exceptionality hides the other. Dual
              Identified students require a Special Education placement and
              additional support, such as extensions in their programming to
              reach their academic and social-emotional potential.
            </p>

            <br />
            <p
              className="text-2xl font-semibold lg:text-3xl"
              id="summary-and-highlights"
            >
              Summary and Highlights
            </p>
            <hr />

            <p>
              Some students identified as Gifted by an IPRC have more than one
              exceptionality, and some students engaged in ISELP may also have
              other exceptionalities as part of their portrait as a learner.
              These are know as Dual Identified learners.
            </p>
            <p>
              These students, like all students receiving Special Education
              support, need individualized considerations for programming and
              transition planning to meet their complete portrait as a learner.
            </p>
            <p>
              Portraits of Dual Identified students are highly diverse. The
              portrait of a student identified as Gifted with other identified
              exceptionalities can be characterized by:
            </p>

            <ol className="list-disc pl-12">
              <li>high activity levels</li>
              <li>impulsivity</li>
              <li>low frustration tolerance</li>
              <li>
                social/emotional difficulties that coexist with Giftedness
              </li>
            </ol>

            <p>
              The most common diagnosis identified as co-occurring with
              giftedness is Attention-deficit/hyperactivity disorder (ADHD)
              (Neihart, 2003; Webb et al., 2005).
            </p>
            <p>
              Dual Identified students have exceptional abilities but can have
              an inability to grasp smaller concepts. Their overall abilities
              are often well beyond their grade level, and they can be a master
              of recalling and may demonstrate diverse thinking skills. However,
              their approaches to learning and thinking skills can be impacted
              by additional factors such as dyslexia, dysgraphia, or
              social-emotional needs. Dual exceptional learners may struggle
              with time management, planning, or with task completion.
            </p>
            <p className="font-semibold">
              Programming strategies for Dual Identified learners:
            </p>

            <ol className="list-disc pl-12">
              <li>Co-create learning goals and success criteria</li>
              <li>Allow for extra time for assessment tasks</li>
              <li>
                Verbally scaffold (e.g., ask questions on a test instead of
                having the student read them independently)
              </li>
              <li>
                Use earphones or noise-cancelling headphones for less auditory
                stimuli
              </li>
              <li>
                Adapt teaching and learning activities to include the
                student&rsquo;s preferred learning style
              </li>
              <li>
                Know your student. Explore topics to understand your students
                interests
              </li>
              <li>Flexible curriculum pace</li>
              <li>
                Increased focus on deep learning through understanding concepts
              </li>
              <li>
                Consider shifting assessment to being
                feedback-focused/gradeless, in order to support students
                managing perfectionism
              </li>
              <li>
                Consider other strategies in PDSB&rsquo;s{" "}
                <a
                  href="https://pdsb1.sharepoint.com/sites/Innovation/SitePages/EML-2021-and-the-Innovative-Elements-Knowing-and-Doing-Guides.aspx"
                  target="_blank"
                  className="text-[#0066CC] underline"
                >
                  Empowering Modern Learners Knowing and Doing Guides
                </a>
              </li>
            </ol>

            <br />
            <p
              className="dropdown-title flex cursor-pointer items-center justify-between text-2xl font-semibold lg:text-3xl hover:lg:underline"
              onClick={() => setIsInDepthVisible(!isInDepthVisible)}
              id="in-depth"
            >
              In-Depth
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${isInDepthVisible ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </p>
            <hr />

            {isInDepthVisible && (
              <>
                <p
                  className="text-xl font-semibold"
                  id="portrait-of-a-dual-identified-student"
                >
                  Portrait of a Dual Identified Student
                </p>

                <p>
                  The portraits of Dual Identified students can be highly
                  diverse. In order to clarify and improve understanding of the
                  various combinations of exceptionalities, potential
                  combinations of exceptionalities are outlined below.
                </p>

                <p className="font-semibold">Gifted</p>

                <p>
                  A student identified as Gifted typically demonstrates
                  behaviour consisting of an interaction between three traits:
                  above average intellectual abilities, high levels of task
                  commitment, and creativity. Students who are identified as
                  Gifted are considered to be academically talented individuals
                  who have abilities in one or more domains that are
                  significantly advanced (Renzulli, 1978, as cited in Douglass,
                  2008). However, perceptions of giftedness are also shaped by
                  culture and cultural norms, including beliefs, customs, and
                  values (Borland, 2012, as cited by Parekh, et. al., 2018). The
                  term “Gifted” can also be understood as a &lsquo;learning
                  difference&rsquo;. This typically involves being identified as
                  Gifted based on the results of an IQ test.
                </p>

                <p className="font-semibold">Learning Disability</p>

                <p>
                  Students who are identified as both Gifted and with a Learning
                  Disability demonstrate characteristics that result from the
                  interaction of their advanced cognitive abilities and a
                  learning disability. Frequently, this discrepancy may create
                  social and emotional difficulties as students struggle to
                  understand why they can know the answer, but are unable to say
                  or write it correctly (Reis & Colbert, 2004).
                </p>

                <p className="font-semibold">
                  Gifted with other diagnoses and/or exceptionalities
                </p>

                <p>
                  The portrait of a student identified as Gifted with other
                  identified exceptionalities can be characterized by high
                  activity levels, impulsivity, low frustration tolerance, and
                  social/emotional difficulties that coexist with Giftedness.
                  The most common diagnosis identified as co-occurring with
                  giftedness is Attention-deficit/hyperactivity disorder (ADHD)
                  (Neihart, 2003; Webb et al., 2005). Since LD and ADHD often
                  co-exist, it is conceivable that individual students show
                  characteristics related to multiple categories of
                  exceptionality (e.g., Giftedness, LD, and ADHD).
                </p>
                <p>
                  Dual Identified students have exceptional abilities but can
                  have an inability to grasp smaller concepts. Their overall
                  abilities are often well beyond their grade level, and they
                  can be a master of recalling and may demonstrate diverse
                  modalities in their thinking. However, their approaches to
                  learning and thinking skills can be impacted by additional
                  factors such as dyslexia, dysgraphia, or social-emotional
                  needs. Dual exceptional learners may struggle with time
                  management, planning, or with task completion.
                </p>

                <p
                  className="text-xl font-semibold"
                  id="common-traits-of-dual-identified-learners-gifted-and-ld"
                >
                  Common traits of Dual Identified learners (Gifted and LD)
                </p>

                <p>
                  The following is a list of common characteristics of Dual
                  Identified learners. This list is not exhaustive.
                </p>

                <ol className="list-disc pl-12">
                  <li>
                    Poor memory for isolated facts, but excellent comprehension
                  </li>
                  <li>
                    Preference for complex and challenging materials; easily
                    distracted
                  </li>
                  <li>Lacking self-regulation and goal-setting strategies</li>
                  <li>
                    Boredom with rote or memorization tasks, but often
                    disorganized
                  </li>
                  <li>
                    Difficulty reading, writing or spelling, but excellent oral
                    language skills
                  </li>
                  <li>
                    Skill in influencing people and situations, but poor
                    interpersonal skills
                  </li>
                  <li>
                    Poor performance on simple facts such as addition and
                    subtraction, but capable of complex, conceptual
                    manipulations such as algebraic concepts
                  </li>
                  <li>
                    Strong sense of humour, but inability to judge appropriate
                    times to display it
                  </li>
                  <li>
                    Penetrating insights, but inability to determine cause and
                    effect related to own actions
                  </li>
                  <li>
                    Ability to concentrate for unusually long periods of time
                    when the topic is of interest, but inability to control his
                    or her actions and attention when the topic is not of
                    interest
                  </li>
                </ol>

                <p>
                  Taken from: &lsquo;List of possible markers of the combination
                  of giftedness and LD&rsquo;, from the{" "}
                  <a
                    href="https://education.wm.edu/centers/ttac/documents/packets/twiceexceptional.pdf"
                    target="_blank"
                    className="text-[#0066CC] underline"
                  >
                    Twice Exceptional Information Packet
                  </a>{" "}
                  (2014)
                </p>

                <p className="font-semibold">
                  How does twice-exceptionality look at school and at home?
                </p>

                <p>
                  From the National Association for Gifted Children, &apos;
                  <a
                    href="https://dev.nagc.org/resources-publications/resources-parents/twice-exceptional-students"
                    target="_blank"
                    className="text-[#0066CC] underline"
                  >
                    Twice Exceptional Students
                  </a>
                  .&apos;
                </p>

                <div className="overflow-x-auto bg-white shadow-md sm:rounded-lg">
                  <table className="w-full min-w-[800px] text-left text-sm text-gray-700">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                          What the Teacher Might See
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                          What the Parent Might See
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 bg-white">
                        <td className="px-6 py-4">
                          The start of the school year has already proved quite
                          challenging. I have a new student that shows high
                          interest and ability in math and science. Her level of
                          understanding and problem-solving capabilities are off
                          the charts. So, why the challenge? This student has
                          extreme difficulty with any work that requires writing
                          and reading. So much so that homework, note-taking,
                          and assigned reading are very hard for her to
                          complete. Does she have a learning disability?
                        </td>
                        <td className="px-6 py-4">
                          Each night, homework ends in frustration, tears, and
                          meltdowns for my middle schooler. It takes her hours
                          each night to complete her homework, when other
                          classmates seem to complete assignments in a fraction
                          of the time. She often seems disorganized or clueless
                          about what needs to be done, and her backpack is a
                          mess. She&rsquo;s very creative and enjoys delving
                          into deep, complex content-- but is having major
                          difficulties when it comes to language arts and math.
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-6 py-4">
                          I wish there was an answer for what is going on with
                          one of my students this year. “Jim” is a bright,
                          highly motivated 10-year-old who enjoys the STEM
                          problems we cover in class. He&rsquo;s a walking
                          encyclopedia on the planet Mars and recent missions;
                          he&rsquo;s even designed his own plans for a new Mars
                          rover. Despite this, Jim is extremely quiet and
                          withdrawn, does not seem to have any friends, and
                          rarely looks me in the eye when I try to talk with him
                          about Mars or other subjects.
                        </td>
                        <td className="px-6 py-4">
                          I&rsquo;ve been receiving complaints from the teacher
                          about my son, who is concerned he is distracting and
                          annoying his classmates. She described him as
                          interruptive and rude, often not paying attention. He
                          has a high IQ, but is viewed as a “behavior problem.”
                          He has deep interests outside of school, and can
                          engage for hours in topics he cares about. Normally
                          outgoing with a great sense of humor, he is becoming
                          withdrawn and hates school. I wish for more than
                          negative phone calls and emails from the school.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p
                  className="text-xl font-semibold"
                  id="programming-strategies-for-dual-identified-students"
                >
                  Programming strategies for Dual Identified students
                </p>

                <p>
                  Below are some programming strategies and accommodations
                  educators can consider in supporting Dual Identified learners.
                </p>

                <ol className="list-disc pl-12">
                  <li>Co-create learning goals and success criteria</li>
                  <li>Allow for extra time for assessment tasks</li>
                  <li>
                    Verbally scaffold (e.g., ask questions on a test instead of
                    having the student read them independently)
                  </li>
                  <li>
                    Use earphones or noise-cancelling headphones for less
                    auditory stimuli
                  </li>
                  <li>
                    Adapt teaching and learning activities to include the
                    student&rsquo;s preferred learning style
                  </li>
                  <li>
                    Know your student. Explore topics to understand your
                    students interests
                  </li>
                  <li>Flexible curriculum pace</li>
                  <li>
                    Increased focus on deep learning through understanding
                    concepts
                  </li>
                  <li>
                    Consider shifting assessment to being
                    feedback-focused/gradeless, in order to support students
                    managing perfectionism
                  </li>
                  <li>
                    Consider other strategies in PDSB&rsquo;s{" "}
                    <a
                      href="https://pdsb1.sharepoint.com/sites/Innovation/SitePages/EML-2021-and-the-Innovative-Elements-Knowing-and-Doing-Guides.aspx"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      Empowering Modern Learners Knowing and Doing Guides
                    </a>
                  </li>
                </ol>

                <p
                  className="text-xl font-semibold"
                  id="specific-strategies-for-working-with-dual-identified-gifted-students"
                >
                  Specific Strategies for Working with Dual Identified Gifted
                  Students
                </p>

                <p>
                  The William & Mary School of Education has developed a{" "}
                  <a
                    href="https://education.wm.edu/centers/ttac/resources/considerations/index.php"
                    target="_blank"
                    className="text-[#0066CC] underline"
                  >
                    Considerations Packet
                  </a>{" "}
                  for educators working with Dual Identified Gifted students.
                  Examples of strategies and suggestions for working with Dual
                  Identified students can be found in the sections below and
                  have been taken from the William & Mary School of
                  Education&apos;s work.
                </p>

                <p>
                  Many of these strategies are beneficial for all students who
                  require Special Education support, but are listed here in
                  relation specifically to students participating in ISELP.
                </p>
              </>
            )}

            <br />
            <p
              className="dropdown-title flex cursor-pointer items-center justify-between text-2xl font-semibold lg:text-3xl hover:lg:underline"
              onClick={() =>
                setIsFurtherReadingVisible(!isFurtherReadingVisible)
              }
              id="further-reading-and-resources"
            >
              Further Reading and Resources
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${isFurtherReadingVisible ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </p>
            <hr />

            {isFurtherReadingVisible && (
              <>
                <p>
                  The below links provide additional information on how to
                  support Dual Identified learners.
                </p>

                <p>
                  <a
                    href="https://education.wm.edu/centers/ttac/documents/packets/twiceexceptional.pdf"
                    target="_blank"
                    className="text-[#0066CC] underline"
                  >
                    Twice Exceptional: Gifted Students with Learning
                    Disabilities
                  </a>
                </p>
                <p>
                  <a
                    href="http://www.ldao.ca/introduction-to-ldsadhd/articles/about-education/ld-gifted-and-talented/"
                    target="_blank"
                    className="text-[#0066CC] underline"
                  >
                    LD Gifted and Talented – Learning Disabilities Association
                    of Ontario – LDAO
                  </a>
                </p>
                <p>
                  <a
                    href="https://drive.google.com/file/d/1qiTt_LTSJAWx_nLUIAgU-A3Fj7YQMkFi/view?usp=sharing"
                    target="_blank"
                    className="text-[#0066CC] underline"
                  >
                    Response to Intervention: Promises and Pitfalls for Gifted
                    Students With Learning Disabilities
                  </a>{" "}
                  - Franci Crepeau-Hobson, PhD and Margarita Bianco, PhD
                </p>
                <p>
                  <a
                    href="https://www.ldatschool.ca/gifted-students-with-lds-what-teachers-need-to-know/"
                    target="_blank"
                    className="text-[#0066CC] underline"
                  >
                    Gifted Students with LDs: What Teachers Need to Know -
                    LD@school
                  </a>
                </p>
                <p>
                  <a
                    href="https://cche.ca/developing-in-the-dark-when-giftedness-hides-itself/"
                    target="_blank"
                    className="text-[#0066CC] underline"
                  >
                    CCHE | Developing in the Dark: When Giftedness Hides Itself
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.understood.org/en/friends-feelings/empowering-your-child/building-on-strengths/7-myths-about-twice-exceptional-2e-students"
                    target="_blank"
                    className="text-[#0066CC] underline"
                  >
                    7 Myths About Twice-Exceptional (2E) Students | Understood -
                    For learning and thinking differences
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.psychologytoday.com/ca/blog/worrier-warrior/201511/the-twice-exceptional-adult"
                    target="_blank"
                    className="text-[#0066CC] underline"
                  >
                    The Twice-Exceptional Adult | Psychology Today Canada
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
