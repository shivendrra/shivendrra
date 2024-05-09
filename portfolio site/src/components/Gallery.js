import React from 'react';
import Footer from './Footer';

// importing images
import img1 from './pics/1.jpg'
import img2 from './pics/2.jpg'
import img3 from './pics/3.jpg'
import img4 from './pics/4.jpg'
import img5 from './pics/5.jpg'
import img6 from './pics/6.jpg'
import img7 from './pics/7.jpg'
import img8 from './pics/8.jpg'
import img9 from './pics/9.jpg'
import img10 from './pics/10.jpg'
import img11 from './pics/11.jpg'
import img12 from './pics/12.jpg'
import img13 from './pics/13.jpg'
import img14 from './pics/14.jpg'
import img15 from './pics/15.jpg'
import img16 from './pics/16.jpg'

export default function Gallery() {
  return (
    <>
      <div className="gallery row m-auto">
        <div className="col-lg-12 pb-5">
          <h3 className='text-center'>Lens of Perception</h3>
          <hr style={{width: '50%', margin: 'auto'}}/>
        </div>
        <div className="col-lg-12 gallery-grid">
          <div className="row">
            <div className="column">
              <img src={img1} alt="" />
              <img src={img12} alt="" />
              <img src={img2} alt="" />
              <img src={img16} alt="" />
            </div>
            <div className="column">
              <img src={img5} alt="" />
              <img src={img15} alt="" />
              <img src={img3} alt="" />
              <img src={img6} alt="" />
            </div>
            <div className="column">
              <img src={img9} alt="" />
              <img src={img10} alt="" />
              <img src={img11} alt="" />
              <img src={img4} alt="" />
            </div>
            <div className="column">
              <img src={img13} alt="" />
              <img src={img8} alt="" />
              <img src={img14} alt="" />
              <img src={img7} alt="" />
            </div>
          </div>
        </div>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <Footer />
      </div>
    </>
  )
}

// import React from 'react';
// import Footer from './Footer';

// // Importing images dynamically
// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { 
//     return images[item.replace('./', '')] = r(item);
//   });
//   console.log(images);
//   return images;
// }

// const images = importAll(require.context('./pics', false, /\.(jpg)$/));

// export default function Gallery() {
//   return (
//     <>
//       <div className="gallery row m-auto">
//         <div className="col-lg-12 pb-5">
//           <h3 className='text-center'>Lens of Perception</h3>
//           <hr style={{width: '50%', margin: 'auto'}}/>
//         </div>
//         <div className="col-lg-12 gallery-grid">
//           <div className="row">
//             {Object.keys(images).map((image, index) => {
//               return (
//                 <div className="column" key={index}>
//                   <img src={images[image].default} alt="" />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <br /><br /><br /><br />
//         <br /><br /><br /><br />
//         <Footer />
//       </div>
//     </>
//   )
// }
