import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  linkUrl: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, subtitle, linkUrl }) => {
  return (
    <div className="mx-2 my-4 w-[90vw] max-w-lg items-center rounded-lg border shadow-lg transition duration-300 ease-in-out hover:shadow-xl lg:m-6 hover:lg:scale-105">
      <Link href={linkUrl} passHref>
        <Image
          src={imageSrc}
          alt={title}
          width={999}
          height={999}
          className="max-h-[200px] overflow-hidden rounded-t-lg object-cover md:max-h-[300px]"
        />
        <div className="shrink px-6 py-4">
          <div className="mb-2 text-xl font-bold tracking-tight">{title}</div>
          <p className="min-h-[3rem] text-wrap text-base text-gray-700">
            {subtitle}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
