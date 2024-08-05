import React from 'react';
import '../App.css';
import Footer from './Footer';
import Showcase from './Showcase';

export default function Portfolio() {
  return (
    <>
      <div className="portfolio">
        <div className="row">
          <div className="col-lg-12 videos-portfolio">
            <h3 className='text-center'>Videos</h3>
            <hr />
            <br />
            <div className="content row">
              <div className="col-lg-3 item">
                <iframe
                  className='yt-video'
                  src="https://www.youtube.com/embed/t5M_D5hAyoc?si=Q_Eg9xwjFcZe51Ic"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen />
              </div>
              <div className="col-lg-3 item">
                <iframe
                  className='yt-video'
                  src="https://www.youtube.com/embed/86kPclU1X8E?si=gBAbn8IpK37GdYL0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen />
              </div>
              <div className="col-lg-3 item">
                <iframe
                  className='yt-video'
                  src="https://www.youtube.com/embed/L-hUYR9KsIk?si=AVtBu0HXCTnbPltH"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen />
              </div>
              <div className="col-lg-3 item">
                <iframe
                  className='yt-video'
                  src="https://www.youtube.com/embed/qmGBnLhP0C4?si=WM-BkojCaGd018GC"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen />
              </div>
              <div className="col-lg-3 item">
                <iframe
                  className='yt-video'
                  src="https://www.youtube.com/embed/BGheXxtHl_c?si=lDwLCHs6oYHO6isL"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen />
              </div>
              <div className="col-lg-3 item">
                <iframe
                  className='yt-video'
                  src="https://www.youtube.com/embed/jwBfdld1-h0?si=8FSo5qRpjJ_F0lqq"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen />
              </div>
              <div className="col-lg-3 item">
                <iframe
                  className='yt-video'
                  src="https://www.youtube.com/embed/mTDbJNYL-hk?si=vwTXRFNbYDc8znrN"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen />
              </div>
              <div className="col-lg-3 item">
                <iframe
                  className='yt-video'
                  src="https://www.youtube.com/embed/akeSkNuMB4E?si=SyaDL_-d5PRlHMuc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen />
              </div>
              <div className="col-lg-3 item">
                <iframe
                  className='yt-video'
                  src="https://www.youtube.com/embed/PVpyN_2z5II?si=CqINiDbzr7VGMPg6"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen />
              </div>
              <div className="col-lg-3 item">
                <iframe
                  className='yt-video'
                  src="https://www.youtube.com/embed/aGXL-BPlA3w?si=4_QWrUiDjQXSLSj-"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen />
              </div>
              <div className="col-lg-3 item">
                <iframe
                  className='yt-video'
                  src="https://www.youtube.com/embed/OfyEUGiRzYw?si=ilnOSgGDlzWR5oFo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen />
              </div>
              <div className="col-lg-3 item">
                <iframe
                  className='yt-video'
                  src="https://www.youtube.com/embed/G0T0LClBmAg?si=I_o9h_JP5YqYOoPD"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen />
              </div>
            </div>
          </div>
          <div className="showcase-section">
            <Showcase />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
