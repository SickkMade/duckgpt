import React from 'react'
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import './css/nav.css'

function Nav() {
  return (
    <nav>
        <div className='nav--icons'>
            <HiOutlinePencilAlt color='gray' size={22}/>
            <div>DuckGPT 4o mini <MdKeyboardArrowDown /></div>
        </div>
        <div className="nav--buttons">
            <a className="button button__light">Log in</a>
            <a className="button button__dark">Sign up</a>
        </div>
    </nav>
  )
}

export default Nav