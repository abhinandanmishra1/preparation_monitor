import React, { useState } from "react";
import Modal from "../../common/Modal";

const LoginUi = () => {
  return (
    <div className='login'>
      <div className='login__form'>
        <div className='login__form-header'>
          <h2>Login</h2>
        </div>
        <div className='login__form-body'>
          <div className='login__form-body-row'>
            <label className="w-1/3" htmlFor="email">Email</label>
            <input type="email" placeholder="Type here" className="input input-bordered input-info w-2/3 max-w-xs" />
          </div>
          <div className='login__form-body-row'>
            <label className="w-1/3" htmlFor="password">Password</label>
            <input type="password" placeholder="Type here" className="input input-bordered input-info w-2/3 max-w-xs" />
          </div>
          <div>
            <button className='login__form-btn' >Login</button>
          </div>
        </div>
      </div>
    </div>
  )
};

const RegisterUi = () => {
  return (
    <div className='register'>
      <div className='register__form'>
        <div className='register__form-header'>
          <h2>Register</h2>
        </div>
        <div className='register__form-body'>
          <div className='register__form-body-row'>
            <label className="w-1/3" htmlFor="email">Email</label>
            <input type="email" placeholder="Type here" className="input input-bordered input-info w-2/3 max-w-xs" />
          </div>
          </div>
          <div className='register__form-body-row'>
            <label className="w-1/3" htmlFor="password">Password</label>
            <input type="password" placeholder="Type here" className="input input-bordered input-info w-2/3 max-w-xs" />
          </div>
          <div>
            <button className='login__form-btn' >Register</button>
          </div>
        </div>
    </div>
  )
};

const Navbar = () => {
  return (
    
<nav class="w-3/4 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <div class="flex items-center cursor-pointer">
      <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Preparation Monitor</span>
  </div>
  <div class="flex md:order-2">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
      <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Search</span>
    </button>
    <div class="hidden relative md:block">
      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
    </div>
    <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
      <span class="sr-only">Open menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div class="relative mt-3 md:hidden">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="search-navbar" class="block p-2 pl-10 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/2" placeholder="Search..." />
      </div>
      <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li 
        class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
          Home
        </li>
        <li class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</li>
        <li class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        Services</li>
      </ul>
    </div>
  </div>
</nav>

  )
}


const Header = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const TopHeader = () => {
    return (
      <div className='header__top'>
        <Navbar />
        <div className='header__top--left'>
          <div className="block py-2 pr-4 pl-3 text-green-700 rounded hover:bg-green-100 cursor-pointer" onClick={()=> setLoginModalOpen(true)}>Enter</div>
          {"|"}
          <div className="block py-2 pr-4 pl-3 text-blue-700 rounded hover:bg-blue-100 cursor-pointer" onClick={()=> setRegisterModalOpen(true)}>Register</div>
        </div>
      </div>
    )
  }
  return (
    <div className='header'>
      <TopHeader />
      {
      loginModalOpen && (
        <Modal isOpen={loginModalOpen} close={() => setLoginModalOpen(false)}>
          <LoginUi />
        </Modal>
      )
      }
      {
        registerModalOpen && (
          <Modal isOpen={registerModalOpen} close={() => setRegisterModalOpen(false)}>
            <RegisterUi />
          </Modal>
        )
      }
    </div>
  )
}

export default Header