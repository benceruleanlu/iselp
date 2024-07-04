import Image from "next/image";
import stockImage from "../../public/stock8.jpg";
import Navbar from "../components/navbar-a";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto my-6 flex w-11/12 flex-row overflow-visible text-wrap lg:mb-16 lg:mt-8 lg:space-x-16">
        <div>
          <p className="mb-4 text-4xl font-bold text-slate-950 lg:text-5xl">
            About
          </p>
          <p className="mb-6 text-lg text-slate-500">Learn about the site.</p>

          <div className="space-y-4">
            <p>
              The idea behind this website was to provide a more digestable way
              to intake the information from the rather lengthly{" "}
              <a
                href="https://docs.google.com/document/d/19JGCfusp80INEaoEr3Kflopd67AFguzkGtJh-I2Y7Lg/edit?usp=sharing"
                target="_blank"
                className="text-[#0066CC] underline"
              >
                ISELP Programming Guide
              </a>{" "}
              document.
            </p>
            <p>
              Over weeks of planning, designing, and programming, the project
              was sculpted from the ground up. This was made possible by the
              vision and support from Mr. Lyle, a resource teacher, who led the
              project from start to finish.
            </p>
            <p>
              The website was designed with Figma, then written in TypeScript
              with Next.js and Tailwind CSS. You can view the source code on the{" "}
              <a
                href="https://github.com/benceruleanlu/iselp"
                target="_blank"
                className="text-[#0066CC] underline"
              >
                GitHub repository
              </a>
              .
            </p>
            <p>
              Thank you for reading about the story of this website, we hope it
              served you well.
            </p>
          </div>
        </div>
        <Image
          src={stockImage}
          alt="Squirrel on a tree looking at the camera"
          width={400}
          height={800}
          className="ml-20 hidden self-auto rounded-lg object-cover xl:block"
        />
      </div>
    </>
  );
};

export default Page;
