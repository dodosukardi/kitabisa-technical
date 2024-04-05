import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="my-4">
      <Image src="/kitabisa-logo.png" width={200} height={100} alt="logo" />
    </div>
  );
};

export default Header;