import React from 'react'

// importing images
import img1 from './images/Thumbnail13.png'
import img2 from './images/Thumbnail11.png'

export default function showcase() {
  return (
    <>
      <div className="show">
        <div className="designs col-lg-12 px-0">
          <h2 className='text-dark px-5'>Designing</h2>
          <div className="items">
            <div className="col-md-6 col-sm-12 m-auto">
              <img src={img1} alt="" className='m-4' style={{ objectFit: 'contain', height: '500px', width: '800px' }} />
            </div>
            <div className="col-md-6 col-sm-12 m-auto">
              <img src={img2} alt="" className='m-4' style={{ objectFit: 'contain', height: '500px', width: '800px' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
