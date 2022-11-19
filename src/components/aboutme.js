import React from 'react'
import '../css/about.css'
import dino from '../cool-dinosaur.gif'
import js from '../jsgif.gif'
import avatar from '../avatar.png'

function About() {
  return (
    <div className='bound'>
      <div className='cont'>
        <div className='rounded nameslip'>
          <img src={avatar} width='150'/>
          <div className='text-container'>
            <h2>I am a Computer Science student.</h2>
          </div>
        </div>

        <div className='rounded skills'>
          <h1>Skills</h1>
          <div className='text-container'>
            
              <li>c++</li>
              <li>javascript</li>
              <li>node.js</li>
              <li>mongodb</li>
              <li>react</li>
            
          </div>
        </div>

        <div className='rounded education'>
          <h1>Education</h1>
          <div className='text-container'>
            <h2>Currently pursuing my bachelors in Computer Science Engineering from Chitkara University, Chandigarh</h2>
          </div>
        </div>

        <div className='rounded contact'>
          <h1>Contact</h1>
          <div className='text-container'>
            <h2>email: aayushmaanrana04@gmail.com</h2>
          </div>
        </div>

        <div className='rounded e'>
          <img src={dino} />
          <img src={js} />
        </div>


      </div>
    </div>
  )
}

export default About