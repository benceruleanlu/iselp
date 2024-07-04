import Image from "next/image";
import stockImage from "../../public/stock7.jpg";
import Navbar from "../components/navbar-a";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto mb-12 my-6 flex w-11/12 flex-row overflow-visible text-wrap lg:mb-16 lg:mt-8 lg:space-x-16">
        <div>
          <p className="mb-4 text-4xl font-bold text-slate-950 lg:text-5xl">
            Guide
          </p>
          <p className="mb-6 text-lg text-slate-500">
            Learn how to use this website.
          </p>

          <div className="space-y-4">
            <p>
              This resource is an alternate format to the{" "}
              <a
                href="https://docs.google.com/document/d/19JGCfusp80INEaoEr3Kflopd67AFguzkGtJh-I2Y7Lg/edit?usp=sharing"
                target="_blank"
                className="text-[#0066CC] underline"
              >
                ISELP Programming Guide
              </a>
              , for educators to access when supporting students engaged in
              ISELP at their schools.
            </p>
            <p>Each section provides two options for readers:</p>
            <ol className="list-decimal pl-12">
              <li>
                A <span className="italic">highlights and summary</span> section
                that reviews the basic level of information about that topic.
              </li>
              <li>
                An <span className="italic">in-depth</span> section that goes
                into significantly more detail about that topic.
              </li>
            </ol>
            <p>
              This resource is designed to be used by classroom teachers, ISSP
              teachers, administrators, SERTs, and anyone else involved in
              supporting students engaged in ISELP.
            </p>
            <p>
              Supporting both Gifted learners and learners who receive
              non-identified ISELP programming throughout their school career is
              critical to them achieving optimal success. It is equally critical
              to create the appropriate learning environment that will allow
              each learner to thrive, build upon their strengths, and hone their
              interests. As stated in{" "}
              <a
                href="http://www.edu.gov.on.ca/eng/policyfunding/inclusiveguide.pdf"
                target="_blank"
                className="italic text-[#0066CC] underline"
              >
                Equity and Inclusive Education in Ontario Schools
              </a>
              , “Schools are expected to support effective instructional
              practices that reflect the diverse needs and pathways of all
              students” (p. 21). The intent of this guide is to do just that for
              learners engaged in ISELP programming. Each section of this
              resource is intended to address the various aspects that are
              required to effectively support and understand the student engaged
              in ISELP. For the educator who may be new to working with the
              learner engaged in ISELP, it is recommended that this resource be
              viewed in its entirety. Alternatively it can be accessed in
              sections, based on the specific information required of the
              reader.
            </p>
            <p>
              Additionally, throughout each section of this resource, there are
              numerous links to other resources to explore that will enhance
              understanding on how to support students engaged in ISELP.
            </p>
          </div>
        </div>
        <Image
          src={stockImage}
          alt="Greenery and flowers on a low sun backdrop."
          width={400}
          height={800}
          className="ml-20 hidden self-auto rounded-lg object-cover xl:block"
        />
      </div>
    </>
  );
};

export default Page;
