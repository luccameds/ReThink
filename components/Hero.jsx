import React from 'react';
import { BlackBlock, GreenBlock } from './components2';

function Hero() {
  return (
    <div className="flex bg-black">
      <div className="mx-40 my-40 flex flex-1 flex-row justify-between text-white max-md:mx-10 max-md:my-10">
        <div>
          <div className="text-[50px] font-extralight max-md:text-[30px]">
            <p>Transformando Ideias</p>
            <p>em Experiências Digitais</p>
            <h1 className="font-bold">de Sucesso.</h1>
          </div>
          <p className="my-5 w-1/2 font-extralight">
            Unimos tecnologia, design e estratégia para ajudar empresas que
            precisam oferecer aos seus clientes uma experiência digital
            incrível.
          </p>
          <div className="my-16 flex flex-row">
            <button className="z-10 rounded-[15px] bg-white px-5 py-5 text-black">
              Entrar em Contato
            </button>
            <button className="z-10 mx-10 text-lime-300">Sobre Nós</button>
          </div>
        </div>
        <div className="flex flex-wrap justify-end max-xl:hidden">
          <img src="/graph-4.svg" alt="graph4" />
          <img src="/graph-1.svg" alt="graph1" />
          <img src="/graph-2.svg" alt="graph2" />
          <img src="/graph-3.svg" alt="graph3" />
          <img src="/graph-5.svg" alt="graph5" />
        </div>
      </div>
      <GreenBlock />
      <BlackBlock />
    </div>
  );
}

export default Hero;
