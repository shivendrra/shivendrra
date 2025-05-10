import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import BlogSec from './BlogSec';

export default function Blog() {
  const navigate = useNavigate();

  const leadToPath = (title, date) => {
    const path = `/blogs/${encodeURIComponent(title.replace(/\s+/g, '-').toLowerCase())}`;
    navigate(path, { state: { date } });
  };

  return (
    <>
      <div className='blog row'>
        <div className='col-lg-12 pb-5'>
          <h3 className='text-center'>Blogs</h3>
          <hr style={{ width: '50%', margin: 'auto' }} />
        </div>
        <div className='col-lg-12 blog-items' onClick={() => leadToPath("Pursuit of Order fuels Entropy", "2 Dec 2024")}>
          <BlogSec
            title="Pursuit of Order fuels Entropy"
            description={`“This sucks, I can't work on this software. There has to be some alternative to this!”</br>
“There isn't any.”</br>
“What?? Looks like I've to write a new one all by myself,” I said in frustration. “It will have all the components, be super easy to use, and have a great UI.”</br>
“No shit, Sherlock,” my friend scoffed.</br>`}
            date="4 Jan 2024"
          />
        </div>
        <div className='col-lg-12 blog-items' onClick={() => leadToPath("Idealism & Passion in Youth", "25 Sep 2024")}>
          <BlogSec
            title="Idealism & Passion in Youth"
            description={`In current situation of the world where every passing day something new & strange is happening, be it some discovery in science or some new technology coming to life or some country invading other; we need to have something that gives us an escape from this turmoil.
              <br/>Every single person when born as a kid possess two of very basic qualities- innocence or naivety & curiosity.`}
            date="25 Sep 2024"
          />
        </div>
        <div className='col-lg-12 blog-items' onClick={() => leadToPath("Night of Horror", "26 Nov 2023")}>
          <BlogSec
            title="Night of Horror"
            description={`“Why is there so much of crowd? Why are so many police men out there?”</br>
      “Hey!! Put the barricades! Quick!”, a voice from the crowd says, along with other voices.</br>
      
      “What's going on there? I heard a loud noise a few minutes before but what now? What was that sound of?”</br>`}
            date="26 Nov 2023"
          />
        </div>
        <div className='col-lg-12 blog-items' onClick={() => leadToPath("Eighteen", "14 Aug 2023")}>
          <BlogSec
            title="Eighteen"
            description={`His legs were shaking while his feet tapped against the floor, continuously, and his eyes gazed upon the laptop's screen. He was animating for the video.<br/>
              Time to time, he was un-focusing from the screen to take a glimpse at the clock.<br/>
              “Is it 12?”, he murmurs to himself, and then looks at the clock, “no, it's just 11:45”, then again gets back to the animation.`}
            date="14 Aug 2023"
          />
        </div>
        <div className='col-lg-12 blog-items' onClick={() => leadToPath("Engineer", "21 July 2023")}>
          <BlogSec
            title="Engineer"
            description={`“Do you want to go to MIT?”</br>

“Yes, very much” he becomes cheerful soon as he says this, “why'd you ask that?”, he adds.</br>

“No, I thought you were more into arts than engineering and science stuff.”</br>

He smiles and says, “you know, I've read approx. 30 books, and 20 of them are related to physics and mathematics and three of them are entirely about biology and chemistry”.`}
            date="4 Jan 2023"
          />
        </div>
        <br /><br /><br />
        <br /><br /><br />
        <Footer />
      </div>
    </>
  );
}