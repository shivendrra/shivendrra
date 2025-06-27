import React from 'react';
import './styles/Youtube.css';

export default function Youtube() {
  return (
    <>
      <div className="yt">
        <div className="scrolling-wrapper">
          <div className="scroll-card">
            <iframe
              className='yt-video'
              width="280"
              height="157"
              src="https://www.youtube.com/embed/PVpyN_2z5II?si=9_gLPTBt49TMnedo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen />
          </div>
          <div className="scroll-card">
            <iframe
              className='yt-video'
              width="280"
              height="157"
              src="https://www.youtube.com/embed/OfyEUGiRzYw?si=rze2k143oJguXIjW"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen />
          </div>
          <div className="scroll-card">
            <iframe
              className='yt-video'
              width="280"
              height="157"
              src="https://www.youtube.com/embed/86kPclU1X8E?si=gBAbn8IpK37GdYL0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen />
          </div>
          <div className="scroll-card">
            <iframe
              className='yt-video'
              width="280"
              height="157"
              src="https://www.youtube.com/embed/t5M_D5hAyoc?si=Q_Eg9xwjFcZe51Ic"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen />
          </div>
          <div className="scroll-card">
            <iframe
              className='yt-video'
              width="280"
              height="157"
              src="https://www.youtube.com/embed/L-hUYR9KsIk?si=AVtBu0HXCTnbPltH"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen />
          </div>
          <div className="scroll-card">
            <iframe
              className='yt-video'
              width="280"
              height="157"
              src="https://www.youtube.com/embed/aGXL-BPlA3w?si=6bOW1BlmtfLYNguX"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen />
          </div>
        </div>
      </div>
    </>
  )
}