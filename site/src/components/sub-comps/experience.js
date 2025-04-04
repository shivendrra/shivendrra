import React from 'react'
import vakya from '../pics/vakya.png';

export default function experience() {
  return (
    <>
      <div className='exp'>
        <div className="row vakya-sec">
          <div className="col-lg-12 col-sm-12 mb-2 work-head">
            <img src={vakya} alt="" className='img-thumbnail work-pic' />
            <h3 className='my-auto ps-4'>Creative Head</h3>
          </div>
          <div className="col-lg-12 col-sm-12 d-flex align-items-center mb-2 work-body">
            <div className="col-lg-8 col-sm-8 work-place d-flex align-items-center">
              <h3>Vakya</h3>
              <span className='text-start ms-2'>
                <a className='pe-3 d-flex align-items-baseline' href='http://youtube.com/@vakyastudio/'>youtube
                  <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-box-arrow-up-right ms-1' viewBox='0 0 16 16'>
                    <path fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5' />
                    <path fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z' />
                  </svg>
                </a>
              </span>
            </div>
            <div className="col-lg-4 col-sm-4 work-date text-end">
              <h5>/ Sep 22 - Jan 24 /</h5>
            </div>
          </div>
          <div className='col-lg-12 description'>
            <p>Started this as a part time project with a friend to make videos related to geopolitics, science,
              economics, business, etc. I handled all of the animation, video editing and motion/graphics design
              parts at the beginning but later started handling all the management tasks too.</p>
            <ul>
              <li>I used Photoshop & Figma for making the designs and some assets and After Effects for making the motion design & animations and at last,
                Audition for recording and editing sound and Premiere Pro to edit all the videos & documentaries</li>
              <li>We were doing it as a part time thing, even though I wanted to do it full time but couldn't because of school & all, we still managed to get descent views and got famous among my classmates.
                Even Mohak Mangal, on of the inspirations behind this thing saw our videos and personally dm'd me appreciating our content.</li>
            </ul>
            <p>For now, I & my friend has stopped posting because we are invloved in some personal matters, but I've plans to restart it soon as possible. And this time it would be better than before, at least 10x.</p>
          </div>
        </div>
      </div>
    </>
  )
}
