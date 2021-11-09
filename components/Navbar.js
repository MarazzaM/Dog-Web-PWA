import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from "next/router"; //set active color
import { useState } from 'react'; //useState for reset on mobile 
//icons from react-icons 
import { BiAlignRight } from "react-icons/bi";
import { BiXCircle } from "react-icons/bi";


function Nav() {
    const router = useRouter(); //Router for color on active
    const [active, setActive] = useState(false) //navbar mobile useState
    return (
        <>
        <Head>

        </Head>
        <nav  className={active ? "mobile-active nav" : "nav"}>
            <div className="logo" onClick={()=> setActive(false)}>
               <Link href="/">
                    LOGO
                </Link>
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
                <li id='close-btn'>
                    <BiXCircle className='bx bx-circle' onClick={()=> setActive(!active)}></BiXCircle>
                </li>
            </ul> 
            <div className="menu-btn">
            <BiAlignRight className='bx bx-menu'  onClick={()=> setActive(!active)}></BiAlignRight>
            </div>
        </nav>
        </>
    )
}

export default Nav
