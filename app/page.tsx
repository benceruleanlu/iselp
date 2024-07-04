import Card from "./components/card";
import Navbar from "./components/navbar";
import Link from "next/link";
import SearchBar from "./components/searchbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <div className="flex flex-col items-center space-y-8 bg-[#0066CC] px-8 py-10 text-center text-slate-50 lg:space-y-16 lg:px-[18vw] lg:pt-[10vh]">
          <p className="max-w-[90vw] text-4xl font-bold tracking-tight md:max-w-[70vw] md:text-5xl lg:text-7xl">
            What would you like to learn today?
          </p>
          <SearchBar />
          <Link href="/help" className="hidden underline lg:block">
            How to use this resource --&gt;
          </Link>
        </div>

        <div className="-mb mx-auto mb-4 mt-8 max-w-[90vw] text-center md:max-w-[40vw] lg:mb-10 lg:mt-16">
          <p className="mb-2 text-3xl font-bold text-slate-950 lg:mb-4 lg:text-5xl">
            ISELP Articles
          </p>
          <p className="text-lg text-slate-500">
            Search and browse at your leisure.
          </p>
        </div>

        <div className="mx-auto mb-10 flex flex-row flex-wrap justify-center">
          <Card
            title="Portrait of a Learner Engaged in ISELP"
            subtitle="Learn how to understand and support gifted learners, including their characteristics and potential challenges."
            imageSrc="/stock1.jpg"
            linkUrl="/portrait-of-a-learner-engaged-in-iselp"
          />
          <Card
            title="ISELP and Other Exceptionalities/Diagnoses"
            subtitle="Learn how to support Dual Exceptional students with additional diagnoses or exceptionalities."
            imageSrc="/stock2.jpg"
            linkUrl="/iselp-and-other-exceptionalities-or-diagnoses"
          />
          <Card
            title="Creating an ISELP Individual Education Plan"
            subtitle="Learn how to tailor an Individualized Education Plan (IEP) to meet the unique needs of gifted students."
            imageSrc="/stock3.jpg"
            linkUrl="/creating-an-iselp-individual-education-plan"
          />
          <Card
            title="The Role of the Classroom Teacher in ISELP"
            subtitle="Learn how to effectively engage and challenge learners in ISELP with specific classroom strategies."
            imageSrc="/stock4.jpg"
            linkUrl="/the-role-of-the-classroom-teacher-in-iselp"
          />
          <Card
            title="The Role of School-Based Support Staff in ISELP"
            subtitle="Learn how to effectively implement and support the ISELP program in a regular classroom setting."
            imageSrc="/stock5.jpg"
            linkUrl="/the-role-school-based-support-staff-in-iselp"
          />
          <Card
            title="References, Resources, and Further Reading"
            subtitle="Learn more about the resources used on this website."
            imageSrc="/stock6.jpg"
            linkUrl="/references-resources-and-further-reading"
          />
        </div>
      </main>
    </>
  );
}
