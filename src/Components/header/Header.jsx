import { CgMenuRight } from "react-icons/cg"; 
import React, { useState } from 'react'
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css"
import { Link } from "react-router-dom";
const Header = () => {
  const [MenuOpened ,setMenuOpened] = useState(false);
  const getMenuStyle =(MenuOpened)=>{
    if(document.documentElement.clientWidth <=800){
      return {right: !MenuOpened && "-100%"}
    }

  }
  return (
    <>
    <section className="h-wrapper">
        <div className="flexCenter paddings h-container">
            <img src="./logo.png" alt="logo" width={100} />
            <OutsideClickHandler onOutsideClick={()=>{setMenuOpened(false)}}>
                <div style={getMenuStyle(MenuOpened)} className="flexCenter h-menu">
                    <a href="#Residencies">Residencies</a>
                    <a href="#Value">Our Value</a>
                    <a href="#Contact">Contact Us</a>
                    <a href="#GetStarted">Get Started</a>
                    <button className='button'>
                      <a href="#Contact">Contact</a>
                    </button>
                </div>
            </OutsideClickHandler>
            <div onClick={()=>setMenuOpened((prev)=>!prev)} className="menu-icon">
              <CgMenuRight size={30} />
            </div>
        </div>
    </section>
    </>
  )
}

export default Header