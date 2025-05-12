import React from 'react'
import logo from "../assets/Logo.png"
import { useState } from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
    const [mail, setEmail] = useState([])
    
    const sentEmail = ()=>{
        console.log(mail)
        document.getElementById("gmail").value=""
    } 

    const change = (event)=>{
        setEmail(event.target.value)
    }

  return (
    <>
        <section className='bg-gray-950 py-7 md:py-10 lg:py-19 px-5 md:px-30 lg:px-30 flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between gap-11 md:w-full lg-w-full'>
            <div className='flex flex-col gap-3' data-aos="fade-up">
                <img src={logo} alt="logo" className='h-[40px] w-[100px]' />
                <input type="text" id='gmail' name="gmail" onChange={change} className='email px-3 py-3 border border-gray-500 rounded text-white w-85 md:w-80 lg:w-80 md:py-2 lg:py-2' placeholder='Enter your Email' />
                <button onClick={sentEmail} className='cursor-pointer px-4 py-2 text-white rounded bg-gray-800 text-[14px] w-max'>Submit</button>
            </div>
            <div className='grid grid-cols-2 md:flex lg:flex md:gap-2 lg:gap-2' data-aos="fade-right">
                <div className='flex flex-col md:flex-row lg:flex-row gap-4 border md:border-0 lg:border-0 border-r-gray-500 '>
                    <ul className='text-white text-[13px] flex flex-col gap-2 py-4 border-b md:border-0 lg:border-0 mr-4'>
                        <li className='mb-2 text-gray-500 font-bold'>Home</li>
                        {/*ffjhgjjkkk hkhhk,n,n*/}
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'><Link to="/">Hero Section</Link></li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'><Link to="/about">Features</Link></li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'><Link to="/properties">Properties</Link></li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'><Link to="/about">Testimonials</Link></li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'>FAQ`s</li>
                    </ul>
                    <ul className='text-white text-[13px] flex flex-col gap-2 py-4 border-b md:border-0 lg:border-0 mr-4'>
                        <li className='mb-2 text-gray-500 font-bold'>Properties</li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'><Link to="/properties">Portfolio</Link></li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'><Link to="/properties">Categories</Link></li>
                    </ul>
                    <ul className='text-white text-[13px] flex flex-col gap-2 py-4 mr-4'>
                        <li className='mb-2 text-gray-500 font-bold'>Contact Us</li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'><Link to="/contact">Contact Form</Link></li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'><Link to="/contact">Our Offices</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 md:flex-row lg:flex-row">
                    <ul className='text-white text-[13px] flex flex-col gap-3 py-4 border-b md:border-0 lg:border-0 ml-4 mr-3 '>
                        <li className='mb-2 text-gray-500 font-bold'>About Us</li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'>Our Story</li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'>Our Works</li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'>How It Work</li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'>Our Teams</li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'>Our Clients</li>
                    </ul> 
                    <ul className='text-white text-[13px] flex flex-col gap-3 py-4 px-4 '>
                        <li className='mb-2 text-gray-500 font-bold'>Services</li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'>Valuation Mastery</li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'>Strategic Marketing</li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'>Negotiation Wizardry</li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'>Closing Success</li>
                        <li className='cursor-pointer hover:underline hover:underline-offset-3'>Property Management</li>
                    </ul>
                </div>
            </div>
        </section>

        <footer className='bg-gray-900 text-white py-3 flex gap-2 justify-center text-[12px]'>
            <p>@2025 Estatein. All Rights Reserved.</p>
            <p>Terms & Conditions</p>
        </footer>
    </>
  )
}

export default Footer