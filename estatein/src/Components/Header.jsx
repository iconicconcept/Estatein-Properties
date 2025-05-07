import Logo from "../assets/Logo.png"
import Responsive from "../assets/hamburger.png"
import { Link } from "react-router-dom"
import cancel from "../assets/cancel.png"
import { useState } from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }
    const closeMenu = ()=>{
        setIsOpen(false)
    }

    const prompter = ()=>{
        alert("Email us at `estatein@gmail.com`");  
    }


    const [show, setShow] = useState(true)
    const toggleShow = ()=>{
        setShow(!show)
    }
    
  return (
    <>
    <header className="w-full text-white">
        {show && <div className="popUp flex justify-center relative items-center gap-1.5 lg:gap-3 py-2 px-3 lg:px-15 lg:py-1 text-[12px] lg:text-[15px] border-b-gray-700 border-b-1">
            <p>✨Discover Your Dream Property with Estatein</p>
            <a href="#" className="underline">Learn More</a>
            <div className="absolute right-3 md:right-13 lg:right-13 z-2 bg-gray-600 p-0.3 rounded-4xl cursor-pointer" onClick={toggleShow}><img src={cancel} className="size-4" alt="cancel" /></div>
        </div>}
        <div className="flex justify-between items-center w-full py-4 px-7 lg:px-15 text-white bg-[#161621]">
            <img src={Logo} alt="Logo" className=" h-[35px]" />
            <ul className="hidden md:flex lg:flex gap-7">
                <li className="hover:underline hover:underline-offset-2"><Link to="/">Home</Link></li>
                <li className="hover:underline hover:underline-offset-2"><Link to="/about">About</Link></li>
                <li className="hover:underline hover:underline-offset-2" ><Link to="/properties">Properties</Link></li>
                <li className="hover:underline hover:underline-offset-2"><Link to="/service">Service</Link></li>
            </ul>
            <button className="hidden md:flex lg:flex py-2 px-6 bg-gray-700 rounded cursor-pointer" onClick={prompter}>Contact Us</button>
            {isOpen ? <img src={Responsive} onClick={toggleMenu} aria-label="Toggle menu" alt="icon" className="md:hidden lg:hidden cursor-pointer" />
            : <img src={Responsive} onClick={toggleMenu} aria-label="Toggle menu" alt="icon" className="md:hidden lg:hidden cursor-pointer" />}
        </div>
    </header>

    {isOpen && <div className="bg-gray-950 h-[70vh] flex justify-center items-center text-white w-full pt-10 absolute z-5">
            <ul className="flex flex-col gap-8 font-bold text-[18px] text-center">
                <li className="cursor-pointer"><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li className="cursor-pointer"><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li className="cursor-pointer"><Link to="/properties" onClick={closeMenu}>Properties</Link></li>
                <li className="cursor-pointer"><Link to="/service" onClick={closeMenu}>Service</Link></li>
            </ul>
    </div>}

    </>
    
  )
}

export default Header