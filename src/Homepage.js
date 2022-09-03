import React from 'react'
import {FaLinkedin,FaInstagram,FaGithub,FaBehance} from "react-icons/fa"
function Homepage() {
  return (
    <>
    <section className='homepage'>
    <div className='overlay'>
    <h1 className='name'>
        Utkarsh Maurya
    </h1>
    <p>
       Designer |   Developer |   Coder
    </p>
    <ul>
        <li> <a href="https://github.com/Uttkarrsh" target="_blank" rel="noopener
        noreferrer">
            <FaGithub />
            </a></li>
        <li> <a href="https://www.behance.net/utkarshmaurya3" target="_blank" rel="noopener
        noreferrer">
            <FaBehance />
            </a></li>
        <li> <a href="https://www.linkedin.com/in/utkarsh-maurya-962a65210/" target="_blank" rel="noopener
        noreferrer">
            <FaLinkedin />
            </a></li>
    </ul>
    </div>
    </section>
    </>
  )
}

export default Homepage