import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  linkUrl: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, subtitle, linkUrl }) => {
  return (
    <div className="max-w-lg rounded-lg shadow-lg mx-2 my-4 lg:m-6 w-[90vw] items-center border transition duration-300 ease-in-out hover:shadow-xl hover:lg:scale-105">
        <Link href={linkUrl} passHref>
        <Image src={imageSrc} alt={title} width={999} height={999} className='max-h-[200px] md:max-h-[300px] overflow-hidden object-cover rounded-t-lg'/>
        <div className="px-6 py-4 shrink">
          <div className="font-bold text-xl mb-2 tracking-tight">{title}</div>
          <p className="text-gray-700 text-base	min-h-[3rem] text-wrap">
            {subtitle}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;