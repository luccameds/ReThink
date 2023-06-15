import React from 'react';
import { logos } from '@/constants';
import { Cards } from './components2';

const Partners = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white">
      Nossos Parceiros
      <div className="flex flex-row justify-evenly py-10 max-md:flex-col max-md:items-center">
        {logos.map((logo, index) => (
          <Cards key={logo.id} {...logo} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
