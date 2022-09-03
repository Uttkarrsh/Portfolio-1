import React, { useState } from 'react'
import {project} from "../data/project"
import '../Projects.css'
import {FaGithub,FaExternalLinkAlt} from "react-icons/fa"

function Projects() {

  const [cards,setCards]=useState(project)

  return (
    <>
   <section className='projects'>
     <h1>
       Projects
     </h1>
     
     <div className="cards">
      {cards.map(({id, title, description ,link, tech ,github ,image})=>(
        <article key={id}>
          
            <div className="image">
              <div className="linked">
              <a href={github} target="_blank" 
          rel='noopener noreferrer' className='links'>
            <FaGithub className='github'/>
            </a>
            <a href={link} target="_blank" 
          rel='noopener noreferrer' className='links'>
            <FaExternalLinkAlt className='share' />
            </a>
              </div>
           
           
            <h1>
            {title}
          </h1>
          <p>
            {tech}
          </p>
          <div className="image2">
          <div className="linked">
              <a href={github} target="_blank" 
          rel='noopener noreferrer' className='links'>
            <FaGithub className='github'/>
            </a>
            <a href={link} target="_blank" 
          rel='noopener noreferrer' className='links'>
            <FaExternalLinkAlt className='share' />
            </a>
              </div>
            <h1>
            {title}
          </h1>
          <span>
            {description}
          </span>
          <p>
            {tech}
          </p>
          </div>
            </div>
        </article>
      ))}
     </div>

   </section>
    </>
  )
}

export default Projects
