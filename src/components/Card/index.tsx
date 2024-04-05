import React from 'react';
import ProgressBar from '../ProgressBar';
import Image from 'next/image';
import rupiahFormat from '@/utils/string';

interface CardProps {
  image: string,
  shorturl: string,
  title: string,
  percentage: number,
  target: number,
  received: number,
  daysRemaining: number
}

const Card: React.FC<CardProps>  = ({
  image,
  shorturl,
  title,
  percentage,
  target,
  received,
  daysRemaining
}) => {

  return (
    <div className="block bg-white rounded shadow-sm p-4">
      <Image
        src={image}
        alt={shorturl}
        width={400}
        height={0}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        className="mb-4 rounded"
      />
      <p className="font-bold text-cyan-600 mb-4 leading-tight h-[44px]">{title}</p>
      <ProgressBar
        percentage={percentage}
        className="mb-4"
      />
      <div className="flex">
        <p className="text-xs text-gray-500 grow">Terkumpul</p>
        <p className="text-xs text-gray-500">Sisa hari</p>
      </div>

      <div className="flex">
        <div className="grow">
          <p className="text-md font-bold text-gray-600 m-0">{rupiahFormat(received)}</p>
          <p className="text-xs text-gray-400">/ {rupiahFormat(target)}</p>
        </div>
        <p className="text-sm font-bold text-gray-600">{daysRemaining}</p>
      </div>
    </div>
  );
};

Card.defaultProps = {
  image: '',
  shorturl: '',
  title: 'Empty Card',
  percentage: 0,
  target: 0,
  received: 0,
  daysRemaining: 0
}

export default Card;