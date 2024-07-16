"use client";

import Image from "next/image";
import CustomLinkA from "../components/customlink-a";
import NavBar from "../components/navbar-a";
import { useState } from "react";

const Page = () => {
  const [isInDepthVisible, setIsInDepthVisible] = useState(false);

  return (
    <>
      <NavBar />
      <div className="mx-auto my-6 mb-12 flex w-11/12 flex-row overflow-visible text-wrap lg:mb-16 lg:mt-8 lg:space-x-16">
        <div className="sticky top-8 hidden h-full min-w-64 space-y-2 truncate text-nowrap text-sm *:truncate lg:block">
          <p className="text-lg font-bold">Contents</p>
          <hr className="!mb-4" />
          <p>
            <CustomLinkA href="#introduction" className="font-semibold">
              Introduction
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
              href="#supporting-program-extensions-and-differentiation-1"
              className="ml-2"
            >
              Supporting program extensions and differentiation
            </CustomLinkA>
          </p>
          <p onClick={() => setIsInDepthVisible(true)}>
            <CustomLinkA
              href="#withdrawal-supports-(as needed)"
              className="ml-2"
            >
              Withdrawal supports (as needed)
            </CustomLinkA>
          </p>
          <p onClick={() => setIsInDepthVisible(true)}>
            <CustomLinkA
              href="#opportunities-for-acceleration"
              className="ml-2"
            >
              Opportunities for acceleration
            </CustomLinkA>
          </p>
          <p onClick={() => setIsInDepthVisible(true)}>
            <CustomLinkA
              href="#mental-health-(asynchronous-development)"
              className="ml-2"
            >
              Mental Health (Asynchronous Development)
            </CustomLinkA>
          </p>
          <p onClick={() => setIsInDepthVisible(true)}>
            <CustomLinkA href="#building-self-advocacy-skills" className="ml-2">
              Building Self-Advocacy Skills
            </CustomLinkA>
          </p>
          <p onClick={() => setIsInDepthVisible(true)}>
            <CustomLinkA href="#SRMs-and-case-conferences" className="ml-2">
              SRMs and Case Conferences
            </CustomLinkA>
          </p>
          <p onClick={() => setIsInDepthVisible(true)} className="!mb-4">
            <CustomLinkA
              href="#goal-setting-planning-and-transitions"
              className="ml-2"
            >
              Goal setting, planning, and transitions
            </CustomLinkA>
          </p>
        </div>

        <div className="mx-auto flex max-w-[92vw] flex-col">
          <p className="mb-4 text-4xl font-bold tracking-tight text-slate-950 lg:text-5xl">
            The Role Of School-Based Support Staff in ISELP
          </p>
          <p className="mb-6 text-slate-500 lg:text-lg">
            Learn how to effectively implement and support the ISELP program in
            a regular classroom setting.
          </p>

          <div className="space-y-4">
            <p className="text-2xl font-semibold lg:text-3xl" id="introduction">
              Introduction
            </p>
            <hr />

            <p>
              The majority of ISELP implementation should take place in the
              student&rsquo;s regular classroom. However, the development of the
              initial ISELP program, the regular review of the program, and
              updates to the program (as needed), are usually coordinated by the
              ISSP teacher. Key aspects of the ISSP teacher&rsquo;s role as it
              relates to supporting the student engaged in ISELP include the
              following:
            </p>

            <ol className="list-disc space-y-1 pl-12">
              <li>
                Regularly support and collaborate with the classroom teacher to
                effectively develop ISELP programming
              </li>
              <li>
                Providing strategies for teachers who have students engaged in
                ISELP in their classes, including consulting around programming
                opportunities
              </li>
              <li>
                Supporting teachers in understanding the complete learner
                portrait of the student engaged in ISELP
              </li>
              <li>
                Coordinating with classroom teachers to ensure appropriate
                accommodations are working and are meeting the needs of the
                student
              </li>
              <li>
                Being involved in development of transition plans and assisting
                students to execute plans
              </li>
              <li>
                Supporting classroom teachers in developing, reviewing, and
                updating IEPs{" "}
              </li>
              <li>
                Providing more information about Special Education programming
                to families/caregivers, as needed
              </li>
              <li>
                Accessing additional supports and resources (e.g., SERT, PSSP,
                Itinerants, community-based, etc.), as needed
              </li>
              <li>
                Coordinating supports and additional interventions to support
                student engaged in ISELP
              </li>
            </ol>

            <p>
              The primary role of the classroom teacher is to assist students
              engaged in ISELP to develop their intellectual and academic
              potential in collaboration with the student, parent/caregiver, and
              the ISSP teacher. This development is framed through the
              Gifted/Enhanced Learning Plan in the student&rsquo;s IEP. Teaching
              a Gifted child comes with excitement and challenges. Educators
              must have the skills to differentiate their instruction to help
              students across the achievement spectrum grow to their full
              learning potential. The ISSP teacher can assist the classroom
              teacher to provide the appropriate accommodations and learning
              experiences that will support the student&rsquo;s learning needs.
              The interplay between the student, classroom teacher and ISSP
              teacher is integral to offering the most effective learning
              environment for the learner who is part of ISELP.
            </p>
            <p>
              The graphic below highlights the roles and responsibilities of the
              ISSP teacher, student, family, and classroom teacher and how they
              are each inter-connected in the ISELP program at a school.
            </p>
            <Image
              src="/theRoleOfStaffInISELP.png"
              width={900}
              height={700}
              alt="Characteristics of Gifted Learners"
              className="max-w-screen mx-auto max-h-[900px] overflow-x-auto rounded-lg py-6"
            />
            <p>
              As the learner engaged in ISELP will often learn faster, and can
              form an elaborate and differentiated knowledge of a topic, more so
              than the learner who does not require the support of ISELP
              programming, there are some specific strategies and tips for the
              ISSP teacher to consider in order to provide adequate and useful
              support. This section offers tips and consideration for monitoring
              the progress of the learner engaged in ISELP and for supporting
              teachers in offering effective programming.
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
              Monitoring the progress of the learner engaged in ISELP is
              necessary to provide the appropriate academic and socio-emotional
              support to ensure success.
            </p>
            <p
              className="font-semibold"
              id="supporting-program-extensions-and-differentiation"
            >
              Supporting program extensions and differentiation
            </p>
            <p>
              To adequately support program extensions or differentiation, it is
              imperative that the ISSP teacher emphasize with classroom teachers
              that:
            </p>

            <ol className="list-decimal pl-12">
              <li>
                Extensive/Alternative work should not be in addition to the
                standard work.
              </li>
              <li>
                Evaluation of work produced in this manner should be assessed
                based on the standard, grade-level appropriate curricular
                expectations.
              </li>
            </ol>

            <p>
              Providing learners engaged in ISELP with additional work and
              grading &ldquo;harder&rdquo; on an alternative set of expectations
              is punitive (e.g., extra-workload, stricter expectations in terms
              of grades) and it is likely that the student will build a
              reluctance to attempt such work.
            </p>
            <p>
              Supporting classroom teachers with effective programming
              strategies can be one of the more delicate matters that an ISSP
              teacher will deal with in order to support a student who is
              engaged in ISELP. The ISSP teacher&rsquo;s ultimate goal will be
              to act as an advocate for the learner&rsquo;s needs while working
              with the student to develop their ability to self-advocate with
              classroom teachers.
            </p>

            <p className="font-semibold" id="mental-health-and-well-being">
              Mental health and well-being
            </p>
            <p>
              Gifted learners will frequently develop in an asynchronous manner.
              For example, cognitively they can be quite mature relative to
              their peer group (e.g. greater ability for abstract reasoning,
              eloquent use of language, etc.) but socially can be immature and
              unsure as to how to relate to their peers. This can lead to
              anxieties and feelings of not belonging. It is important for the
              ISSP and/or Guidance teacher to keep apprised of their feelings in
              this regard.
            </p>
            <p>
              Additional supports for the learner engaged in ISELP can be
              accessed through PSSP staff, as required, through the Student
              Review Process.
            </p>

            <p className="font-semibold" id="goal-setting-and-transitions">
              Goal setting and transitions
            </p>
            <p>
              As students approach middle school and secondary education,
              it&rsquo;s crucial for them to consider their educational
              pathways.
            </p>
            <p>
              School teams should communicate the choices and associated
              timelines to families/caregivers and students to aid in goal
              setting and planning, to provide for the necessary time for the
              student to consider options and make an effective decision that
              supports their goals.
            </p>
            <p>
              It&rsquo;s also important to recognize that Gifted learners often
              face challenges in this decision-making due to their diverse
              interests, talents, and family expectations. Goal setting becomes
              a key component in gathering student input for their Individual
              Education Plan (IEP) annually. These students, often high
              achievers with extensive extracurricular involvement, need
              guidance to evaluate educational programs that align with their
              interests and learning profile, while also exploring additional
              opportunities without overextending themselves.
            </p>

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
                  id="supporting-program-extensions-and-differentiation-1"
                >
                  Supporting program extensions and differentiation
                </p>
                <p>
                  Accommodations for learners engaged in ISELP provide the
                  opportunity to explore concepts/assignments/tasks in greater
                  depth and breadth. As such, the role of the ISSP teacher may
                  be to advocate for this accommodation to &ldquo;open&rdquo;
                  tasks and learning opportunities as opposed to assigning the
                  learner additional work. To adequately support program
                  extensions or differentiation, it is imperative that the ISSP
                  teacher emphasize with classroom teachers that:
                </p>
                <ol className="list-decimal space-y-1 pl-12">
                  <li>
                    Extensive/Alternative work should <b>not</b> be in addition
                    to the standard work.
                  </li>
                  <li>
                    Evaluation of work produced in this manner should be
                    assessed based on the standard, grade-level appropriate
                    curricular expectations.
                  </li>
                </ol>
                <p>
                  Providing learners engaged in ISELP with additional work and
                  grading &ldquo;harder&rdquo; on an alternative set of
                  expectations is punitive (e.g., extra-workload, stricter
                  expectations in terms of grades) and it is likely that the
                  student will build a reluctance to attempt such work. Instead,
                  ideas for enhancement could include allowing a multimedia
                  presentation of work originally assigned as an essay, having
                  the student study an area of interest in depth while
                  classmates are learning a general overview of a subject, have
                  the the student create a learning game to try with other
                  students or other work that is derived from the
                  student&rsquo;s learner portrait and IEP goals.
                </p>
                <p>
                  Facilitating conversations with classroom teachers on
                  programming can be one of the more delicate matters that an
                  ISSP teacher will deal with in order to support a student who
                  is engaged in ISELP. The ISSP teacher&rsquo;s ultimate goal
                  will be to act as an advocate for the learner&rsquo;s needs
                  while working with the student to develop their ability to
                  self-advocate with classroom teachers. If successful, their
                  experience as a student can be greatly empowered.
                </p>
                <p className="font-semibold">Program Extensions Resources</p>
                <ol className="list-disc space-y-1 pl-12">
                  <li>
                    <a
                      href="https://www.st-clair.net/Data/Sites/1/media/public/SpecialEd/gifted-program/differentiation-and-enrichment-strategies-for-gifted-students.pdf"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      Differentiation and Extension Resources for Gifted and
                      Talented Learners (SCCSB)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.teachspeced.ca/giftedness"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      Teach Spec. Ed. (OTF) - Giftedness
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ascd.org/el/articles/six-strategies-for-challenging-gifted-learners"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      Six Strategies for Challenging Gifted Learners
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://open.alberta.ca/dataset/ab22ff64-3358-4387-9761-8c58878a6b84/resource/8610bbbc-094a-4328-83e4-cabc579b5107/download/ipp92.pdf"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      Planning for Students Who Are Gifted - Alberta Ministry of
                      Education
                    </a>
                  </li>
                </ol>

                <p
                  className="text-xl font-semibold"
                  id="withdrawal-supports-(as needed)"
                >
                  Withdrawal supports (as needed)
                </p>
                <p className="font-semibold">Working with Like-Minded Peers</p>
                <p>
                  While the majority of the programming offered to students
                  participating in ISELP should occur as part of the regular
                  teaching and learning activities in the student&rsquo;s main
                  classroom, there will be times when the student will benefit
                  from opportunities to work outside of the classroom on
                  individual or small group tasks, tailored to the goals in
                  their Gifted/Enhanced Learning Plan.
                </p>
                <p>
                  The following are examples of withdrawal opportunities that
                  can benefit students participating in ISELP as a compliment to
                  the programming provided in their regular classroom:
                </p>
                <ol className="list-disc space-y-1 pl-12">
                  <li>
                    <i>Seminars/special projects</i> - Projects may include
                    interdisciplinary studies or projects focused on the
                    individual/group interests of the students involved.
                  </li>
                  <li>
                    <i>Cluster grouping</i> - Students work in small groups on
                    tasks or skills tailored to their Gifted Plan/Enhanced
                    Learning Plan alternative goals and expectations.
                  </li>
                  <li>
                    <i>Mentorships</i> - Students work with a student in a
                    younger grade or a same-grade peer, serving as a mentor to
                    that student, focused on areas of shared interest.
                    Alternatively, the student works with a resource teacher,
                    parent volunteer, or community expert to develop skills in a
                    specific field. Mentoring relationships are a natural and
                    supportive opportunity for both the mentor and mentee to
                    enhance the student&rsquo;s social-emotional learning
                    skills.
                  </li>
                  <li>
                    <i>Online collaboration</i> - Students can access virtual
                    learning environments set up to connect students in a family
                    of schools, providing remote opportunities to collaborate,
                    connect with peers who share similar interests, or network
                    with like-minded peers.
                  </li>
                  <li>
                    <i>Leadership in areas of interest</i> -
                    Facilitating/creating clubs, school ambassador,
                    academic/extracurricular contests, community involvement
                    (e.g., contributing to a local retirement
                    home/legion/community centre, etc.)
                  </li>
                </ol>
                <p>
                  Most importantly, the work that students complete as part of a
                  withdrawal opportunity should not be in addition to the work
                  assigned as part of their regular classroom learning. These
                  opportunities should be complementary to the regular work, and
                  offered as an alternative task to what is assigned in the
                  classroom during their withdrawal time.
                </p>
                <p>
                  When a student is provided with opportunities for withdrawal
                  as part of their ISELP programming, staff should ensure that
                  the work completed as part of this withdrawal is focused and
                  tailored toward the alternative goals and expectations, as
                  outlined in the student&rsquo;s IEP.
                </p>

                <p
                  className="text-xl font-semibold"
                  id="opportunities-for-acceleration"
                >
                  Opportunities for acceleration
                </p>
                <p>
                  Acceleration, which means to work through curricular topics at
                  a greater pace than is usually expected, is another strategy
                  to accommodate for the learning needs of Gifted students.
                </p>
                <p>
                  Teachers working with students engaged in ISELP can recommend
                  variations of acceleration through asynchronous learning
                  opportunities. The examples below provide suggestions for ways
                  that ISELP students can explore accelerated learning
                  opportunities while simultaneously working through the
                  standard curricular work:
                </p>
                <ol className="list-disc space-y-1 pl-12">
                  <li>
                    Preparing for science, computing, arts, business, and other
                    subject-based contests (an extensive list of contests
                    available to students can be found here:{" "}
                    <a
                      href="https://www.youthofcanada.ca/contests"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      https://www.youthofcanada.ca/contests
                    </a>
                  </li>
                  <li>
                    Preparing for advanced mathematics-based contests (
                    <a
                      href="https://cms.math.ca/competitions/canadian-mathematical-gray-jay-competition-cmgc/"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      Canadian Mathematical Gray Jay Competition
                    </a>
                    ,{" "}
                    <a
                      href="https://www2.cms.math.ca/Competitions/COMC/2021/#main"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      Canadian Open Mathematics Challenge
                    </a>
                    ,{" "}
                    <a
                      href="https://mathkangaroo.ca/"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      Canadian Math Kangaroo Contest
                    </a>
                    ,{" "}
                    <a
                      href="https://cariboutests.com/"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      Caribou Mathematics Competition
                    </a>
                    ,{" "}
                    <a
                      href="https://mathkangaroo.ca/"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      Canadian Math Kangaroo Contest
                    </a>
                    ,{" "}
                    <a
                      href="https://www.cemc.uwaterloo.ca/contests/gauss.html"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      Gauss Mathematics Contests
                    </a>
                    )
                  </li>
                </ol>
                <p>
                  The link below discusses the benefits of acceleration for
                  Gifted learners:{" "}
                </p>
                <p>
                  <a
                    href="https://nagc.org/page/acceleration"
                    target="_blank"
                    className="text-[#0066CC] underline"
                  >
                    Acceleration | National Association for Gifted Children
                  </a>
                </p>

                <p
                  className="text-xl font-semibold"
                  id="mental-health-(asynchronous-development)"
                >
                  Mental Health (Asynchronous Development)
                </p>
                <p>
                  Gifted learners will frequently develop in an asynchronous
                  manner. For example, cognitively they can be quite mature
                  relative to their peer group (e.g. greater ability for
                  abstract reasoning, eloquent use of language, etc.) but
                  socially can be immature and unsure as to how to relate to
                  their peers. This can lead to anxieties and feelings of not
                  belonging. It is important for the ISSP and/or Guidance
                  teacher to keep apprised of their feelings in this regard.
                </p>
                <p>
                  As with any child, a Gifted learner may not immediately open
                  up to the support teachers about such issues. A good starting
                  point for discussions will lean more toward their academic
                  needs. If the learner senses that the ISSP/Guidance teacher is
                  an effective support for them, they may begin to relay their
                  perceptions and thus allow you to work with them in closing
                  such gaps.
                </p>
                <p>
                  For further information on asynchronous development and the
                  Gifted learner, see the link below.
                </p>
                <p>
                  <a
                    href="http://dev.nagc.org/resources-publications/resources-parents/social-emotional-issues/asynchronous-development"
                    target="_blank"
                    className="text-[#0066CC] underline"
                  >
                    Asynchronous Development | National Association for Gifted
                    Children
                  </a>
                </p>

                <p className="font-semibold">
                  Accessing support from PSSP staff
                </p>
                <p>
                  As with any student requiring the support of PSSP staff,
                  Gifted students can be brough to a Student Review Meeting to
                  discuss interventions and supports that can be provided by
                  board PSSP staff (e.g., Psychologists, Social Workers). Below
                  is an outline of the services available from PSSP staff:
                </p>

                <p className="font-semibold">Social Work</p>
                <p>
                  School social workers assist schools in identifying and
                  helping to address and remove those obstacles for children and
                  within their environment, including systemic racism and
                  oppression, which interfere with their ability to benefit from
                  educational experiences. Currently, the most frequently
                  requested types of social work service are:
                </p>
                <ol className="list-disc space-y-1 pl-12">
                  <li>
                    goal-focused, time-limited counselling with students and
                    families
                  </li>
                  <li>
                    consultations with school personnel including SRM Level 2
                  </li>
                  <li>crisis intervention</li>
                  <li>
                    facilitation of referrals to community agencies/resources
                  </li>
                </ol>
                <p>The five domains of Social Work Service are:</p>
                <ol className="list-disc space-y-1 pl-12">
                  <li>personal adjustment</li>
                  <li>family adjustment</li>
                  <li>attendance and absenteeism</li>
                  <li>mental health</li>
                  <li>crisis</li>
                </ol>
                <p className="text-base font-semibold">
                  Psychology Consultants
                </p>
                <p>
                  Psychoeducational Consultants provide a variety of
                  psychological services to schools. Currently, the most
                  frequently requested types of service from the Psychology
                  Department are:
                </p>
                <ol className="list-disc space-y-1 pl-12">
                  <li>psychoeducational assessment</li>
                  <li>consultation, including behavioural</li>
                  <li>support pertaining to SEA documentation</li>
                  <li>
                    counselling individual students/parents on a short-term
                    basis
                  </li>
                  <li>
                    providing PD for schools, teachers, BEAs and parent groups
                  </li>
                  <li>facilitating requests for risk assessments</li>
                  <li>providing intensive case management</li>
                </ol>
                <p>
                  Psychoeducational Consultants may facilitate a variety of
                  group counselling programs (e.g., to address such issues as
                  self-regulation, grief, parental separation/divorce, anger
                  management, social skills, etc.) and can also provide support
                  through individual counselling and crisis management support.
                </p>
                <p className="font-semibold">Check-Ins </p>
                <p>
                  It can be beneficial to establish a centralized location to
                  receive accommodations, support, a place to work or
                  de-escalate if needed (e.g., the ISSP office, a resource room,
                  etc.). SEA devices that are accessed by students engaged in
                  ISELP can be kept here, along with other tools to support
                  student accommodations.
                </p>
                <p>
                  As with any student in need of support, Gifted learners may
                  seek your assistance in an irregular and/or unconventional
                  manner. Having a consistent physical space for them to find
                  you can be critical for the support relationship to develop,
                  creating an &ldquo;open-door&rdquo; effect. Regular check-ins
                  support building a positive rapport with the students that
                  support staff are working with.
                </p>
                <p className="font-semibold">Mental Health Resources</p>
                <ol className="list-disc space-y-1 pl-12">
                  <li>
                    <a
                      href="https://smho-smso.ca/online-resources/wayfinder-your-grade-by-grade-guide-to-teach-about-mental-health/"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      School Mental Health Ontario
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.overcomingobstacles.org/"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      Overcoming Obstacles Digital Library
                    </a>
                  </li>
                </ol>

                <p
                  className="text-xl font-semibold"
                  id="building-self-advocacy-skills"
                >
                  Building Self-Advocacy Skills
                </p>
                <p>
                  To effectively support a student engaged in ISELP, it is
                  imperative to support the learner in building advocacy skills.
                  This will ultimately allow the learner to speak to their needs
                  and strengths and to have a solid understanding of their
                  learner portrait and greater cognitive abilities. By speaking
                  for themselves and understanding their own learner portrait,
                  students will more efficiently receive the necessary resources
                  and/or support they need from their classroom teachers as well
                  as take agency in their learning. Modelling problem solving is
                  one way the ISSP teacher can initiate self-advocacy skills.
                  Self-advocacy for the learner engaged in ISELP is also an
                  outlet for expressing positive and creative energy, and a
                  passion for innovation and justice that many Gifted students
                  possess. For example, encouraging the learner to write a
                  proposal to their teacher or prepare a presentation on a
                  school issue will serve them well beyond school. When
                  supporting students to learn how to self-advocate in
                  respectful and responsible ways, the ISSP teacher will help
                  the learner &ldquo;own&rdquo; their Giftedness and
                  authentically hone their skills.
                </p>
                <div className="mx-auto flex max-h-[315px] max-w-[560px] py-1">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/d-YikEGUz0Y?si=DHKwR9Ja7kVFIHPo"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="font-semibold">
                  4 Tips to Support the Gifted Student with Self-Advocacy
                </p>
                <ol className="list-disc space-y-1 pl-12">
                  <li>Pick the right time</li>
                  <li>
                    Understand your audience (i.e., when advocating with a
                    teacher, administrator, family/caregiver)
                  </li>
                  <li>
                    Identify the issue/problem while recognizing others&rsquo;
                    perspectives
                  </li>
                  <li>Keep an open mind and be realistic</li>
                </ol>
                <p className="font-semibold">Self Advocacy Resources</p>
                <ol className="list-disc space-y-1 pl-12">
                  <li>
                    <a
                      href="https://neurodiversitypodcast.com/home/2018/5/2/episode-8-a-guide-to-self-advocacy"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      A Guide to Self-Advocacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cdn.ymaws.com/default/files/files/Parked-Files/Self-Advocacy%20PHP%20Sept%202017.pdf"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      Letting Go While Holding On
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.washingtonpost.com/archive/lifestyle/wellness/1986/09/02/the-eight-great-gripes-of-gifted-children/846771c4-6943-4633-9cb6-14940a13f508/"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      8 Great Gripes of Gifted Children
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.freespiritpublishing.com/"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      Empower Gifted Learners to Advocate for Themselves
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gifted.education.uconn.edu/wp-content/uploads/sites/612/2014/08/Scales-for-Rating-the-Behvioral-Characteristics-of-Superior-Students.pdf"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      Renzulli Scales for Rating the Behavioral Characteristics
                      of Superior Students
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.amazon.com/gp/product/1593633483/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=deborahreber-20&creative=9325&linkCode=as2&creativeASIN=1593633483&linkId=ddadce56f61e460258c586448559847c"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      Programs and Services for Gifted Secondary Students: A
                      Guide to Recommended Practices
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.teachercreatedmaterials.com/free-spirit-publishing/audience/educator/"
                      target="_blank"
                      className="text-[#0066CC] underline"
                    >
                      The Power of Self-Advocacy for Gifted Learners: Teaching
                      the 4 Essential Steps for Success
                    </a>
                  </li>
                </ol>
                <div className="flex w-full justify-center">
                  <Image
                    src="/shouldIBringUpAnIssueWithTheTeacher.PNG"
                    width={800}
                    height={600}
                    alt="Characteristics of Gifted Learners"
                    className="mx-auto max-h-[800px] max-w-[600px] overflow-x-auto rounded-lg py-6"
                  />
                </div>

                <p
                  className="text-xl font-semibold"
                  id="SRMs-and-case-conferences"
                >
                  SRMs and Case Conferences
                </p>
                <p>
                  For many students, the results of the grade 4 screening tool
                  is the first time that they will be referred to a Level 2
                  Student Review Meeting (SRM) to discuss possible programming
                  and services, while others may have been referred before for
                  exceptional needs for extensive academic work,
                  social-emotional issues, or both.
                </p>
                <p>
                  Whenever the student is initially brought to a Level 1 SRM or
                  a Level 2 SRM through the{" "}
                  <a
                    href="https://sites.google.com/pdsb.net/student-review-process-srp-oct/home"
                    target="_blank"
                    className="text-[#0066CC] underline"
                  >
                    Student Review Process
                  </a>
                  , this is the beginning of an ongoing and more collaborative
                  look into the student portrait. However, In cases where the
                  student has additional needs, it may be beneficial for the
                  champion (e.g., the classroom teacher, ISSP and/or Guidance
                  teacher, etc.) to organize a Level 1 Student Review Meeting
                  (SRM) or case conference with classroom teachers, support
                  staff, the student, and family/caregivers to ensure - early on
                  in the school year - the best possible ways for the student to
                  experience challenge and achieve success.
                </p>
                <p>
                  Case conferences can be completed either formally or
                  informally depending upon the individual needs of the student.
                  During case conferences, important information about the
                  student can be shared, suggested accommodations can be made,
                  purposeful resources can be explored, and questions can be
                  answered.
                </p>
                <p>
                  Partnership between the student, family/caregivers, classroom
                  teacher, and ISSP and Guidance teachers are key to ensuring
                  that the learner&rsquo;s extensive learning needs are met.
                </p>

                <p
                  className="text-xl font-semibold"
                  id="goal-setting-planning-and-transitions"
                >
                  Goal setting, planning, and transitions
                </p>
                <p>
                  As students approach middle school and secondary education,
                  it&rsquo;s crucial for them to consider their educational
                  pathways, including Regional Learning Choices Programs (like
                  Sci-Tech, French Immersion, Advanced Placement, International
                  Baccalaureate), Secondary Enhanced Learning Program, or their
                  home school.
                </p>
                <p>
                  School teams should communicate the choices and associated
                  timelines to families/caregivers and students to aid in goal
                  setting and planning. For instance, entry into Regional
                  Programs typically occurs in grade 6 or 9 via an application
                  and lottery system, except for the Arts Program which starts
                  in grade 7. On the other hand, placement in Enhanced Learning
                  Classes or Secondary Enhanced Learning Programs follows the
                  IPRC process.
                </p>
                <p>
                  It&rsquo;s also important to recognize that Gifted learners
                  often face challenges in this decision-making due to their
                  diverse interests, talents, and family expectations. Goal
                  setting becomes a key component in gathering student input for
                  their Individual Education Plan (IEP) annually. These
                  students, often high achievers with extensive extracurricular
                  involvement, need guidance to evaluate educational programs
                  that align with their interests and learning profile, while
                  also exploring additional opportunities without overextending
                  themselves.
                </p>
                <p>
                  Therefore, early and ongoing planning support is recommended,
                  ensuring students fully understand their options and can
                  identify the programs that best align with their interests and
                  developmental needs.
                </p>
                <p className="font-semibold">Resources</p>
                <p>
                  <a
                    href="https://www.peelschools.org/elementary-regional-learning-choice-programs"
                    target="_blank"
                    className="text-[#0066CC] underline"
                  >
                    Elementary Regional Learning Choice Programs
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.peelschools.org/secondary-regional-learning-choice-programs"
                    target="_blank"
                    className="text-[#0066CC] underline"
                  >
                    Secondary Regional Learning Choice Programs
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
