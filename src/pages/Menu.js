import React from 'react'
import {BiMenuAltRight} from "react-icons/bi"
import { Link } from 'react-router-dom'
import {useState} from 'react'

function Menu() {

    const [isOpen,setisOpen]=useState(false)

  return (
    <>
  <div className="menu-btn">
            <button onClick={()=>setisOpen(!isOpen)}>
            <BiMenuAltRight />
            </button>
        </div>

  
        <header className={`${isOpen ? "header open" : "header"}`}>
        <nav>
            <ul>
                <li onClick={()=>setisOpen(false)}>
                    <Link to='/'>Homepage</Link>
                </li>
                <li onClick={()=>setisOpen(false)}>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li onClick={()=>setisOpen(false)}>
                    <Link to='/contact'>Contact Me</Link>
                </li>
                
            </ul>
        </nav>
    </header>
   
   
    
    </>
  )
}

export default Menu