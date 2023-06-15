import React from 'react';

function Header() {
  return (
    <div className="flex flex-row items-center justify-between px-10 py-5 text-white">
      <img src="/logo.png" alt="logo" className="w-1/4" />
      <div className="flex flex-row items-center justify-evenly">
        <div className="z-10 mx-[30px] flex w-[400px] justify-between text-lime-300 max-md:hidden">
          <button>Soluções</button>
          <button>Trabalhe Conosco</button>
          <button>Planos</button>
        </div>
        <button className="z-10 w-1/12 rounded-[30px] bg-[#050505] px-5 py-5 text-white max-md:hidden max-md:rounded-[15px]">
          Entre em Contato
        </button>
      </div>
    </div>
  );
}

export default Header;
