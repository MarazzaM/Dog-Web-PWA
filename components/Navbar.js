import React from 'react'
import Link from 'next/link'
import Nam from './Nam'
import { useRouter } from "next/router"; //set active color
import { useState } from 'react'; //useState for reset on mobile 
//icons from react-icons 
import { BiAlignRight } from "react-icons/bi";
import { BiXCircle } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";

function Nav() {
    const router = useRouter(); //Router for color on active
    const [active, setActive] = useState(false) //navbar mobile useState
    return (
        <>
        <nav  className={active ? "mobile-active nav" : "nav"}>
            <div className="logo" onClick={()=> setActive(false)}>
               <Nam />
            </div>
            <ul>
                <li className={router.pathname == "/" ? "active" : ""} onClick={()=> setActive(false)}>
                    <Link href="/">Home</Link>
                </li>
                <li className={router.pathname == "/About" ? "active" : ""} onClick={()=> setActive(false)}>
                    <Link href="/About" >About</Link>
                </li> 
                <li className={router.pathname == "/History" ? "active" : ""} onClick={()=> setActive(false)}>
                    <Link href="/History">History</Link>
                </li>
                <li className={router.pathname == "/Dogs" ? "active" : ""} onClick={()=> setActive(false)}>
                    <Link href="/Dogs">More dogs!</Link>
                </li>
                <li className='close-btn'>
                    <div className="container-close">
                    <BiXCircle className='bx bx-circle' onClick={()=> setActive(!active)}></BiXCircle>
                    </div>
                </li>
            </ul> 
            <div className="menu-btn">
            <BiAlignRight className='bx bx-menu'  onClick={()=> setActive(!active)}/>
            </div>
            <div className="linkedin-container">
                <a href="https://www.linkedin.com/in/matías-edgardo-marazza-cantero/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin className="linkedin"/>
                </a>
            </div>
        </nav>
        </>
    )
}

export default Nav
