import React from 'react'
import {FaPhone,FaEnvelope} from 'react-icons/fa'

function Contact() {
  return (
    <>
    <section className='contact'>
      <h1>
        Contact Me
      </h1>
      <ul>
        <li>
          <a href="tel:9319223096">
           <span><FaPhone /></span> 
            9319223096</a>
        </li>
        <li>
          <a href="mailto:utkarsh.harsh2002@gmail.com">
            <span><FaEnvelope /></span>
            utkarsh.harsh2002@gmail.com</a>
        </li>
      </ul>
    </section>
    </>
  )
}

export default Contact