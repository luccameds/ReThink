import React from 'react';

const Footer = () => {
  return (
    <footer class="body-font text-white">
      <div class="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div class="mx-auto mt-10 w-64 flex-shrink-0 text-center md:mx-0 md:mt-0 md:text-left">
          <a class="title-font flex items-center justify-center font-medium text-gray-400 md:justify-start">
            <img src="/logo.png" alt="logo" />
          </a>
          <p class="mt-2 text-sm text-gray-500">
            Para dúvidas ou parcerias, não deixe de fazer contato com a gente.
            Vai ser um prazer conhecer a sua história.
          </p>
        </div>
        <div class="order-first -mb-10 flex flex-grow flex-wrap text-center md:pr-20 md:text-left">
          <div class="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 class="title-font mb-3 text-sm font-medium tracking-widest text-gray-400">
              Categorias
            </h2>
            <nav class="mb-10 list-none">
              <li>
                <a class="text-white hover:text-gray-800">Primeiro Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Segundo Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Terceiro Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Quarto Link</a>
              </li>
            </nav>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 class="title-font mb-3 text-sm font-medium tracking-widest text-gray-400">
              Categorias
            </h2>
            <nav class="mb-10 list-none">
              <li>
                <a class="text-white hover:text-gray-800">Primeiro Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Segundo Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Terceiro Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Quarto Link</a>
              </li>
            </nav>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 class="title-font mb-3 text-sm font-medium tracking-widest text-gray-400">
              Categorias
            </h2>
            <nav class="mb-10 list-none">
              <li>
                <a class="text-white hover:text-gray-800">Primeiro Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Segundo Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Terceiro Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Quarto Link</a>
              </li>
            </nav>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 class="title-font mb-3 text-sm font-medium tracking-widest text-gray-400">
              Categorias
            </h2>
            <nav class="mb-10 list-none">
              <li>
                <a class="text-white hover:text-gray-800">Primeiro Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Segundo Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Terceiro Link</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-800">Quarto Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-black">
        <div class="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
          <p class="text-center text-sm text-gray-500 sm:text-left">
            © 2023 LuccaMeds —
            <a
              href="https://www.linkedin.com/in/luccameds/"
              rel="noopener noreferrer"
              class="ml-1 text-white"
              target="_blank"
            >
              @luccameds
            </a>
          </p>
          <span class="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              class="ml-3 text-gray-500"
              href="https://www.linkedin.com/in/luccameds/"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
