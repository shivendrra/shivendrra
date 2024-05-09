import React from 'react';
import Footer from './Footer';

export default function Blog() {
  return (
    <>
      <div className='blog row'>
        <div className='col-lg-12 pb-5'>
          <h3 className='text-center'>Blogs</h3>
          <hr style={{ width: '50%', margin: 'auto' }} />
        </div>
        <div className='col-lg-12 blog-items'>
          <div className='card'>
            <div className='card-header bg-transparent'>
              <h3 className='card-title'>
                <a href="/blog-main" className='blog-title'>
                  After a fall
                </a>
                </h3>
            </div>
            <div className='card-body'>
              <p className='card-text text-start'>
                “God created men. Saw us working hard, flawlessly, and feared that we would become equal to if not greater than them.”<br />
                “What are you saying?”<br/>
                “Then he created women”, I added, and turned back to her.<br />
                “Are you drunk or what?”, asked my sister.<br />
              </p>
            </div>
            <div className='card-footer text-body-secondary bg-transparent'>
              14 Aug, 2023
            </div>
          </div>
        </div>
        <br /><br /><br />
        <br /><br /><br />
        <Footer />
      </div>
    </>
  )
}
