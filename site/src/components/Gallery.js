import React from 'react';
import Footer from './Footer';
import './styles/Portfolio.css';

// importing images
import img1 from './pics/1.jpg';
import img2 from './pics/2.jpg';
import img3 from './pics/3.jpg';
import img4 from './pics/4.jpg';
import img5 from './pics/5.jpg';
import img6 from './pics/6.jpg';
import img7 from './pics/7.jpg';
import img8 from './pics/8.jpg';
import img9 from './pics/9.jpg';
import img10 from './pics/10.jpg';
import img11 from './pics/11.jpg';
import img12 from './pics/12.jpg';
import img13 from './pics/13.jpg';
import img14 from './pics/14.jpg';
import img15 from './pics/15.jpg';
import img16 from './pics/16.jpg';
import img17 from './pics/17.jpg';
import img18 from './pics/18.jpg';
import img19 from './pics/19.jpg';
import img20 from './pics/20.jpg';
import img21 from './pics/21.jpg';
import img22 from './pics/22.jpg';
import img23 from './pics/23.jpg';
import img24 from './pics/24.jpg';
import img25 from './pics/25.jpg';
import img26 from './pics/26.jpg';
import img27 from './pics/27.jpg';
import img28 from './pics/28.jpg';
import img29 from './pics/29.jpg';
import img30 from './pics/30.jpg';
import img32 from './pics/32.jpg';
import img33 from './pics/33.jpg';
import img34 from './pics/34.jpg';
import img35 from './pics/35.jpg';
import img36 from './pics/36.jpg';

export default function Gallery() {
  return (
    <>
      <div className="gallery row m-auto">
        <div className="col-lg-12 pb-5">
          <h3 className='text-center'>Lens of Perception</h3>
          <hr style={{ width: '50%', margin: 'auto' }} />
        </div>
        <div className="col-lg-12 gallery-grid">
          <div className="row">
            <div className="column">
              <img src={img30} alt="" />
              <img src={img28} alt="" />
              <img src={img29} alt="" />
              <img src={img23} alt="" />
              <img src={img32} alt="" />
              <img src={img33} alt="" />
              <img src={img36} alt="" />
              <img src={img26} alt="" />
            </div>
            <div className="column">
              <img src={img1} alt="" />
              <img src={img11} alt="" />
              <img src={img4} alt="" />
              <img src={img27} alt="" />
              <img src={img6} alt="" />
              <img src={img9} alt="" />
              <img src={img15} alt="" />
              <img src={img8} alt="" />
              <img src={img35} alt="" />
            </div>
            <div className="column">
              <img src={img10} alt="" />
              <img src={img34} alt="" />
              <img src={img12} alt="" />
              <img src={img13} alt="" />
              <img src={img14} alt="" />
              <img src={img3} alt="" />
              <img src={img16} alt="" />
              <img src={img17} alt="" />
              <img src={img18} alt="" />
            </div>
            <div className="column">
              <img src={img19} alt="" />
              <img src={img2} alt="" />
              <img src={img20} alt="" />
              <img src={img21} alt="" />
              <img src={img22} alt="" />
              <img src={img7} alt="" />
              <img src={img24} alt="" />
              <img src={img25} alt="" />
              <img src={img5} alt="" />
            </div>
          </div>
        </div>
        {/* <br /><br /><br /><br />
        <br /><br /><br /><br /> */}
        <Footer />
      </div>
    </>
  )
}