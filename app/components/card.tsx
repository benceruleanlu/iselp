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
    <div className="max-w-lg rounded-lg shadow-lg m-6 items-center border transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
        <Link href={linkUrl} passHref>
        <Image src={imageSrc} alt={title} width={999} height={999} className='max-h-[300px] overflow-hidden object-cover rounded-t-lg'/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {subtitle}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;