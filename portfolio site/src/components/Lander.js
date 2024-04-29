import React from 'react'
import Footer from './Footer';

export default function Lander() {
  return (
    <>
      <div className='lander'>
        <div className='mainHead row'>
          <div className='col-lg-12 text-center top'>
            <h3>hello, i'm <span className='spanTxt'>Shivendra.</span></h3>
          </div>
          <div className='col-lg-12 subtop text-center'>
            <p>a machine learning enthusiast, film nerd & 'wanna-be' writer</p>
          </div>
        </div>
        <div className='mainSec row text-center'>
          <h5>something about me.</h5>
          <p>
            I'm an 19 year old guy who does everything, be it designing, writing, coding, video editing/animating or photography.
            I love to learn new stuff & I never stop this journey of learning.
            Currently, i'm trying to read as much as possible and also make my way into a descent college. Enigneering or other, that is yet to be determined.
          </p>
          <br />
        </div>
        <hr className='mainHr' />
        <div className="workSec row mt-5 mx-0">
          <h4 className='text-dark text-center pb-5'>My work</h4>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  )
}