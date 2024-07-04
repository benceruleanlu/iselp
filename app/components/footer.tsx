import Image from "next/image";
import peelImage from "/public/peelImageBW.png";
import facebookLogo from "/public/facebook.png";
import instagramLogo from "/public/instagram.png";
import twitterLogo from "/public/twitter.png";
import youtubeLogo from "/public/youtube.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mx-auto mt-16 mb-8 flex w-11/12 flex-row items-center justify-between border-t">
      <div className="flex flex-col">
        <a href="https://www.peelschools.org/" target="_blank">
          <Image
            src={peelImage}
            alt="Logo of Peel District School Board"
            width={250}
            className="m-8 ml-6 opacity-60 md:w-[400px]"
          />
        </a>
        <div className="ml-6 mt-4 flex flex-row space-x-12">
          <a href="https://x.com/peelschools" target="_blank">
            <Image
              src={twitterLogo}
              alt="Twitter Logo"
              width={24}
              height={24}
              className="opacity-60"
            />
          </a>
          <a href="https://www.instagram.com/peelschools/" target="_blank">
            <Image
              src={instagramLogo}
              alt="Instagram Logo"
              width={24}
              height={24}
              className="opacity-60"
            />
          </a>
          <a href="https://www.facebook.com/peelschools/" target="_blank">
            <Image
              src={facebookLogo}
              alt="Facebook Logo"
              width={24}
              height={24}
              className="opacity-60"
            />
          </a>
          <a href="https://www.youtube.com/user/PeelSchools" target="_blank">
            <Image
              src={youtubeLogo}
              alt="YouTube Logo"
              width={24}
              height={24}
              className="opacity-60"
            />
          </a>
        </div>
      </div>
      <div className="w-50 h-50 hidden max-h-48 flex-row custom-footer:flex">
        <div className="mr-24 mt-8 flex flex-col space-y-4">
          <p>Articles</p>
          <Link
            href="/portrait-of-a-learner-engaged-in-iselp"
            className="transform text-slate-600 transition duration-300 ease-in-out hover:scale-105"
          >
            Portrait
          </Link>
          <Link
            href="/iselp-and-other-exceptionalities-or-diagnoses"
            className="transform text-slate-600 transition duration-300 ease-in-out hover:scale-105"
          >
            Dual Ex.
          </Link>
          <Link
            href="/creating-an-iselp-individual-education-plan"
            className="transform text-slate-600 transition duration-300 ease-in-out hover:scale-105"
          >
            IEPs
          </Link>
        </div>

        <div className="mr-24 mt-8 flex flex-col space-y-4">
          <p className="invisible">Articles</p>{" "}
          {/* Invisible text to maintain spacing*/}
          <Link
            href="/the-role-of-the-classroom-teacher-in-iselp"
            className="transform text-slate-600 transition duration-300 ease-in-out hover:scale-105"
          >
            Teachers
          </Link>
          <Link
            href="/the-role-school-based-support-staff-in-iselp"
            className="transform text-slate-600 transition duration-300 ease-in-out hover:scale-105"
          >
            Sup. Staff
          </Link>
        </div>

        <div className="mr-16 mt-8 flex flex-col space-y-4">
          <p>Other</p>
          <Link
            href="/references-resources-and-further-reading"
            className="transform text-slate-600 transition duration-300 ease-in-out hover:scale-105"
          >
            Resources
          </Link>
          <Link
            href="/about"
            className="transform text-slate-600 transition duration-300 ease-in-out hover:scale-105"
          >
            About
          </Link>
          <Link
            href="/help"
            className="transform text-slate-600 transition duration-300 ease-in-out hover:scale-105"
          >
            Help
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
