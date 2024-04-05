import React from 'react';

const CardSkeleton = () => {

  return (
    <div className="block bg-white w-full h-[390px] shadow-sm p-4">
      <div className="block animate-pulse h-[200px] w-full bg-gray-300 opacity-90 rounded mb-4" />
      <div className="block animate-pulse h-[14px] w-full bg-gray-300 opacity-90 rounded mb-2" />
      <div className="block animate-pulse h-[14px] w-[65%] bg-gray-300 opacity-90 rounded mb-6" />
      <div className="block animate-pulse h-[10px] w-full bg-gray-300 opacity-90 rounded mb-1" />
      <div className="flex mt-5">
        <div className="grow">
          <div className="block animate-pulse h-[10px] w-[100px] bg-gray-300 rounded mb-1" />
        </div>
        <div className="block animate-pulse h-[10px] w-[50px] bg-gray-300 rounded mb-1" />
      </div>
      <div className="flex mt-1">
        <div className="grow">
          <div className="block animate-pulse h-[18px] w-[100px] bg-gray-300 rounded mb-1" />
        </div>
        <div className="block animate-pulse h-[18px] w-[50px] bg-gray-300 rounded mb-1" />
      </div>
    </div>
  );
};

export default CardSkeleton;
