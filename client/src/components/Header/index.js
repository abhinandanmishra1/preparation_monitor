import { IconContext } from "react-icons";
import { AiOutlineSearch } from 'react-icons/ai';


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
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className='login__form-body-row'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
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
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className='register__form-body-row'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button className='login__form-btn' >Register</button>
          </div>
        </div>
      </div>
    </div>
  )
};

const Navbar = () => {
  return (
    <div className='header__navbar'>
      <div class="header__navbar-items">
        <div className="header__navbar-item">Gyms</div>
        <div className="header__navbar-item">Coding Round Preparation</div>
        <div className="header__navbar-item">Interview Round Preparation</div>
      </div>
      <div class="header__search">
        <input class="header__search-input" type="text" placeholder="Search" />
        <IconContext.Provider value={{ color: "blue", className: "header__search-icon" }}>
          <AiOutlineSearch />
        </IconContext.Provider>
      </div>
    </div>
  )
}


const Header = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const TopHeader = () => {
    return (
      <div className='header__top'>
        <div>Preparation Monitor</div>
        <div className='header__top--left'>
          <div onClick={()=> setLoginModalOpen(true)}>Enter</div>
          <div onClick={()=> setRegisterModalOpen(true)}>Register</div>
        </div>
      </div>
    )
  }
  return (
    <>
    <div className='header'>
      <TopHeader />
      <Navbar />
    </div>
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
    
    </>
  )
}

export default Header