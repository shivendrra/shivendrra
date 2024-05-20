import React from 'react';
import Footer from './Footer';
import Exp from './sub-comps/experience';
import Proj from './sub-comps/projects';
import profpic from './pics/Profile-2.png';

export default function Lander() {
  return (
    <>
      <div className='lander'>
        <div className='mainHead row'>
          <div className='col-lg-12 text-center top'>
            <div className="prof-pic">
              <img src={profpic} alt="" className='img-thumbnail' />
            </div>
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
          <h4 className='text-dark pb-5 px-5'>Experience</h4>
          <Exp />
          <hr style={{ width: '60%', margin: 'auto', padding: '1% 0%' }} />
          <h4 className='text-dark py-5 px-5'>Coding Projects</h4>
          <Proj />
          <hr style={{ width: '60%', margin: 'auto', padding: '1% 0%' }} />
        </div>

        <Footer />
      </div>
    </>
  )
}