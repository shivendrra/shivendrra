import React from 'react';

// importing thumbnails
import img1 from './images/Thumbnail8-1.png';
import img2 from './images/Thumbnail9.png';
import img3 from './images/Thumbnail10.png';
import img4 from './images/Thumbnail11.png';
import img5 from './images/Thumbnail11-1.png';
import img6 from './images/Thumbnail7-1.png';
import img7 from './images/Thumbnail13.png';
import img8 from './images/Thumbnail5.png';
import img9 from './images/Thumbnail6-2.png';

// importing posters
// import post1 from './images/post-1.png';
import post2 from './images/post-2.png';
import post3 from './images/post-3.png';
import post4 from './images/post-4.png';
import post5 from './images/post-5.png';
import post6 from './images/post-6.png';
import post7 from './images/post-7.png';
import post8 from './images/post-8.png';
import post9 from './images/post-9.png';
import post10 from './images/post-10.png';
import post11 from './images/post-11.png';
import post12 from './images/post-12.png';
import post13 from './images/post-13.png';
import './styles/Portfolio.css';

export default function Showcase() {
  return (
    <>
      <div className='showcase'>
        <div className='post row g-1'>
          <div className='col-lg-12 head pb-2'>
            <h3 className='text-center'>Poster Designs</h3>
            <hr />
          </div>
          <div className="col-lg-12 poster-grid">
            <div className="row">
              <div className="column">
                <img src={post7} alt="" />
                <img src={post4} alt="" />
                <img src={post10} alt="" />
              </div>
              <div className="column">
                <img src={post13} alt="" />
                <img src={post5} alt="" />
                <img src={post9} alt="" />
              </div>
              <div className="column">
                <img src={post6} alt="" />
                <img src={post8} alt="" />
                <img src={post11} alt="" />
              </div>
              <div className="column">
                <img src={post2} alt="" />
                <img src={post3} alt="" />
                <img src={post12} alt="" />
              </div>
            </div>
          </div>
          <div className='thumb pt-5 row g-1'>
            <div className='col-lg-12 head pb-2'>
              <h3 className='text-center'>Thumbnail Designs</h3>
              <hr />
            </div>
            <div className='row g-0 images'>
              <div className='col-lg-4 p-4'>
                <img src={img1} alt='' className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
              </div>
              <div className='col-lg-4 p-4'>
                <img src={img2} alt='' className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
              </div>
              <div className='col-lg-4 p-4'>
                <img src={img3} alt='' className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
              </div>
              <div className='col-lg-4 p-4'>
                <img src={img4} alt='' className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
              </div>
              <div className='col-lg-4 p-4'>
                <img src={img5} alt='' className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
              </div>
              <div className='col-lg-4 p-4'>
                <img src={img6} alt='' className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
              </div>
              <div className='col-lg-4 p-4'>
                <img src={img7} alt='' className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
              </div>
              <div className='col-lg-4 p-4'>
                <img src={img8} alt='' className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
              </div>
              <div className='col-lg-4 p-4'>
                <img src={img9} alt='' className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}