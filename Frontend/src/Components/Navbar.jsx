import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img onClick={()=>navigate('/')} className="w-44 cursor-pointer " src={assets.logo} alt="" />
      <ul className="hidden md:flex items-start gap-5 font-medium ">
        <NavLink to="/">
          <li className="py-1 ">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1 ">ALL DOCTOR</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 ">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 ">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full " src={assets.profile_pic} alt="" />
            <img className="w-2.5 " src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium font text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 ">
                    <p onClick={()=>{navigate('/my-profile')}} className="hover:text-black cursor-pointer ">My Profile</p>
                    <p onClick={()=>{navigate('/my-appointments')}} className="hover:text-black cursor-pointer ">My Appointments</p>
                    <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer ">logout</p>
                </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            CREATE ACCOUNT
          </button>
        )}
     <img
  src={assets.menu_icon}
  className="w-6 md:hidden cursor-pointer"
  onClick={() => setShowMenu(true)}
  alt="Menu"
/>

{/* Mobile Menu */}
<div
  className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform duration-300 ease-in-out ${showMenu ? "translate-x-0" : "translate-x-full"} md:hidden`}
>
  <div className="flex justify-between items-center p-5">
    <img src={assets.logo} className="w-32" alt="Logo" />
    <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className="w-6 cursor-pointer" alt="Close" />
  </div>
  
  <ul className="flex flex-col items-center gap-5 mt-10 text-lg font-medium">
    <NavLink  to="/" onClick={() => setShowMenu(false)}> <p  className='px-4 py-2 rounded inline-block'>HOME</p>  </NavLink>
    <NavLink  to="/doctors" onClick={() => setShowMenu(false)}> <p  className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p>  </NavLink>
    <NavLink  to="/about" onClick={() => setShowMenu(false)}> <p  className='px-4 py-2 rounded inline-block'>ABOUT</p>  </NavLink>
    <NavLink  to="/contact" onClick={() => setShowMenu(false)}> <p  className='px-4 py-2 rounded inline-block'>CONTACT</p>  </NavLink>
  </ul>
</div>

      </div>
    </div>
  );
};

export default Navbar;
