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
        <div className='col-lg-12 blog-items' onClick={() => leadToPath("Idealism & Passion in Youth", "25 Sep 2024")}>
          <BlogSec 
            title="Idealism & Passion in Youth" 
            description={`“God created men. Saw us working hard, flawlessly, and feared that we would become equal to if not greater than them.”<br />
              “What are you saying?”<br />
              “Then he created women”, I added, and turned back to her.<br />
              “Are you drunk or what?”, asked my sister.<br />`}
            date="25 Sep 2024" 
          />
        </div>
        <div className='col-lg-12 blog-items' onClick={() => leadToPath("I guess, that's life", "14 Feb 2024")}>
          <BlogSec 
            title="I guess, that's life" 
            description="It was a warm, sunny day, so I and my family members were sitting in the balcony. There was an uncanny and loud silence. Bua was leaning against the railing, so was my Mausi. I was sitting on the bed, inside the room with notebook in my hand and my nana and fufa ji on one side of the bed. We were talking about something." 
            date="14 Feb 2024" 
          />
        </div>
        <div className='col-lg-12 blog-items' onClick={() => leadToPath("After a Fall", "4 Jan 2024")}>
          <BlogSec 
            title="After a Fall" 
            description={`“God created men. Saw us working hard, flawlessly, and feared that we would become equal to if not greater than them.”<br />
              “What are you saying?”<br />
              “Then he created women”, I added, and turned back to her.<br />
              “Are you drunk or what?”, asked my sister.<br />`}
            date="4 Jan 2024" 
          />
        </div>
        <div className='col-lg-12 blog-items' onClick={() => leadToPath("Eighteen", "14 Aug 2023")}>
          <BlogSec 
            title="Eighteen" 
            description={`His legs were shaking while his feet tapped against the floor, continuously, and his eyes gazed upon the laptop’s screen. He was animating for the video.<br/>
            Time to time, he was un-focusing from the screen to take a glimpse at the clock.<br/>
            “Is it 12?”, he murmurs to himself, and then looks at the clock, “no, it’s just 11:45”, then again gets back to the animation.`}
            date="14 Aug 2023" 
          />
        </div>
        <br /><br /><br />
        <br /><br /><br />
        <Footer />
      </div>
    </>
  );
}