import React from 'react'
import Footer from './Footer';

// importing thumbnails
import img1 from './images/Thumbnail8-1.png'
import img2 from './images/Thumbnail9.png'
import img3 from './images/Thumbnail10.png'
import img4 from './images/Thumbnail11.png'
import img5 from './images/Thumbnail11-1.png'
import img6 from './images/Thumbnail7-1.png'
import img7 from './images/Thumbnail13.png'
import img8 from './images/Thumbnail5.png'
import img9 from './images/Thumbnail6-2.png'

// importing posters
import post1 from './images/post-1.png'
import post2 from './images/post-2.png'
import post3 from './images/post-3.png'
import post4 from './images/post-4.png'
import post5 from './images/post-5.png'
import post6 from './images/post-6.png'
import post7 from './images/post-7.png'
import post8 from './images/post-8.png'

export default function showcase() {
  return (
    <>
      <div className="show">
        <div className="post row g-1">
          <div className="col-lg-12 head pb-5">
            <h4 className='text-center'>Poster Designs</h4>
          </div>
          <div className="images">
            {/* <div className="col-lg-4">
              <img src={post2} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-4">
              <img src={post7} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-4">
              <img src={post3} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-4">
              <img src={post8} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-4">
              <img src={post4} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-4">
              <img src={post1} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-4">
              <img src={post5} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-4">
              <img src={post6} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-4">
              <img src={post2} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div> */}
            <img src={post2} alt="" className='m-3' style={{ objectFit: 'contain', width: '30%' }} />
            <img src={post7} alt="" className='m-3' style={{ objectFit: 'contain', width: '30%' }} />
            <img src={post3} alt="" className='m-3' style={{ objectFit: 'contain', width: '30%' }} />
            <img src={post8} alt="" className='m-3' style={{ objectFit: 'contain', width: '30%' }} />
            <img src={post4} alt="" className='m-3' style={{ objectFit: 'contain', width: '30%' }} />
            <img src={post1} alt="" className='m-3' style={{ objectFit: 'contain', width: '30%' }} />
            <img src={post5} alt="" className='m-3' style={{ objectFit: 'contain', width: '30%' }} />
            <img src={post6} alt="" className='m-3' style={{ objectFit: 'contain', width: '30%' }} />
          </div>
        </div>
        <div className="thumb row g-1">
          <div className="col-lg-12 head pb-5">
            <h4 className='text-center'>Thumbnail Designs</h4>
          </div>
          <div className="row g-0 images">
            <div className="col-lg-4 d-flex">
              <img src={img1} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-4 d-flex">
              <img src={img2} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-4 d-flex">
              <img src={img3} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-4 d-flex">
              <img src={img4} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-4 d-flex">
              <img src={img5} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-4 d-flex">
              <img src={img6} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-4 d-flex">
              <img src={img7} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-4 d-flex">
              <img src={img8} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
            <div className="col-lg-4 d-flex">
              <img src={img9} alt="" className='m-auto' style={{ objectFit: 'contain', width: '100%' }} />
            </div>
          </div>
        </div>
        <br /><br /><br />
        <Footer />
      </div>
    </>
  )
}
