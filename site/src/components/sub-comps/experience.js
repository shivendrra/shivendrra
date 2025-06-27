import React from 'react';
import vakya from '../pics/vakya.png';
import devs from '../pics/devs.png';
import '../styles/Experience.css';

export default function Experience() {
  return (
    <div className="container-fluid py-4 m-auto">
      <div className="row m-auto">
        <div className="col-lg-12 col-md-12 m-auto">
          <div className="experience-card">
            <div className="row align-items-center mb-3">
              <div className="col-auto">
                <img src={devs} alt="DEVS Labs" className="company-logo" />
              </div>
              <div className="col">
                <h4 className="company-name mb-1">D.E.V.S. Labs</h4>
                <a href="https://devsorg.vercel.app/" target="_blank" rel="noopener noreferrer" className="company-link">
                  website
                  <i className="external-icon ms-1"></i>
                </a>
              </div>
              <div className="col-auto text-end">
                <div className="duration">May 2025 - present</div>
                <div className="duration-sub">2 months & continuing</div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <h5 className="position-title">Lead Tinkerer</h5>
                <span className="badge position-badge">Self-employed</span>
              </div>
            </div>
            <div className="mb-4">
              <p className="description">
                This is a my SkyLab plan. If it works, it would be great.<br />
                Focusing on building niche projects in ML/Deep Learning, Bio-Computation field. Along with some tools & products development, but mostly sticking to resarch based projects.
              </p>
            </div>
            <div className="mb-4">
              <ul className="responsibility-list">
                <li>
                  Developing a efficient & lightweight ML model training framework- <em>Axon.</em> It's like Numpy but has power of Parallel computation using GPU. CUDA & AMD's HIP supported.
                  Currently in Pre-Alpha phase. Contributed over 8k lines of code and developed a 10x faster version of naive-cpu matmul.
                </li>
                <li>
                  Also wrote a tokenizer for DNA & Protein related use-cases & that also has simple DNA CGR & C-Map visualizers. Training a VQ-VAE & EvoFormer models currently for Deep Learning use-cases.
                  Along with a DNA & Protein Data generation pipeline over NCBI-API.
                </li>
              </ul>
            </div>
            <div className="mb-2">
              <p className='description'>
                Contributing & maintaing projects alone for now, maybe in future will try to recruit some good talent with some funding & even dive into hardware for training & deployment
                of ML models using FPGA & custom designed GPUs.
              </p>
            </div>
          </div>
          <div className="experience-card">
            <div className="row align-items-center mb-3">
              <div className="col-auto">
                <img src={vakya} alt="Vakya Studio" className="company-logo" />
              </div>
              <div className="col">
                <h4 className="company-name mb-1">Vakya Studio</h4>
                <a href="http://youtube.com/@vakyastudio/" target="_blank" rel="noopener noreferrer" className="company-link">
                  YouTube Channel
                  <i className="external-icon ms-1"></i>
                </a>
              </div>
              <div className="col-auto text-end">
                <div className="duration">Sep 2022 - Jan 2024</div>
                <div className="duration-sub">1 year 5 months</div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <h5 className="position-title">Creative Head</h5>
                <span className="badge position-badge">Self-employed</span>
              </div>
            </div>
            <div className="mb-4">
              <p className="description">
                Started this as a part time project with a friend to make videos related to geopolitics, science, economics, business, etc. I handled all of the animation, video editing and motion/graphics design parts at the beginning but later started handling all the management tasks too.
              </p>
            </div>
            <div className="mb-4">
              <ul className="responsibility-list">
                <li>I used Photoshop & Figma for making the designs and some assets and After Effects for making the motion design & animations and at last, Audition for recording and editing sound and Premiere Pro to edit all the videos & documentaries</li>
                <li>We were doing it as a part time thing, even though I wanted to do it full time but couldn't because of school & all, we still managed to get descent views and got famous among my classmates. Even Mohak Mangal, on of the inspirations behind this thing saw our videos and personally dm'd me appreciating our content.</li>
              </ul>
            </div>
            <div className="mb-2">
              <p className='description'>For now, I & my friend has stopped posting because we are invloved in some personal matters, but I've plans to restart it soon as possible. And this time it would be better than before, at least 10x.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}