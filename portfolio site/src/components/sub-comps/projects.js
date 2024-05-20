import React from 'react'

export default function projects() {
  return (
    <>
      <div className='projects row g-4'>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Small Language Model</h5>
              <h6 className='card-subtitle mb-2 text-body-secondary'><em>Dec 23 - Mar 24</em></h6>
              <p className='card-text'>
                It's a llm cookbook repo that has everything you need to build a basic llm. Has decoder-only, encoder-only
                models along with full transformer based model. Data too could be gathered using the webscrappers &
                transcript generators, from over ~167k YouTube videos and ~3.8million Wikipedia web pages.
              </p>
              <div className='col-lg-12 d-flex'>
                <a className='card-link d-flex align-items-baseline' href='https://github.com/shivendrra/SmallLanguageModel-project'>github
                  <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-box-arrow-up-right ms-1' viewBox='0 0 16 16'>
                    <path fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5' />
                    <path fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z' />
                  </svg>
                </a>
                <a className='card-link d-flex align-items-baseline' href='http://national-electricals.com/'>huggingface
                  <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-box-arrow-up-right ms-1' viewBox='0 0 16 16'>
                    <path fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5' />
                    <path fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Enigma-1.5b</h5>
              <h6 className='card-subtitle mb-2 text-body-secondary'><em>Feb 24 - Apr 24</em></h6>
              <div className="col-lg-8">
                <p className='card-text'>
                  These are two, a 440million & a 1.5billion parameter transformer model that is capable of generating next
                  DNA sequence based on given input sequence. Trained on data gathered from various sources like NCBI,
                  Hugging-Face, Kaggle, etc. It has its own custom sub-sequence tokenizer too
                </p>
              </div>
              <div className="col-lg-4">
                <div className='col-lg-12 mt-3'>
                  <iframe src='https://github.com/shivendrra/enigma-1.5b' width='100%' height='300' frameborder='0' title='Enigma-1.5b GitHub Repository'></iframe>
                </div>
              </div>
              <div className='col-lg-12 d-flex'>
                <a className='card-link d-flex align-items-baseline' href='https://github.com/shivendrra/enigma-1.5b'>github
                  <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-box-arrow-up-right ms-1' viewBox='0 0 16 16'>
                    <path fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5' />
                    <path fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z' />
                  </svg>
                </a>
                <a className='card-link d-flex align-items-baseline' href='https://huggingface.co/shivendrra/enigma-1.5b'>huggingface
                  <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-box-arrow-up-right ms-1' viewBox='0 0 16 16'>
                    <path fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5' />
                    <path fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-12 pb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>AIVA 4x500M</h5>
              <h6 className='card-subtitle mb-2 text-body-secondary'><em>Mar 24 - present</em></h6>
              <p className='card-text'>
                It is a 430million parameter model capable of generating next token based on the input. It is then finetuned 4 times to get the model precise in different tasks, and uses mixture-of-experts to produce output
                based on the input. It also has a vision and audio model for multi-modal capabilities. (still in progress)
              </p>
              <div className='col-lg-12 d-flex'>
                <a className='card-link d-flex align-items-baseline' href='https://github.com/shivendrra/AIVA-4x500m'>github
                  <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-box-arrow-up-right ms-1' viewBox='0 0 16 16'>
                    <path fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5' />
                    <path fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z' />
                  </svg>
                </a>
                <a className='card-link d-flex align-items-baseline' href='https://huggingface.co/shivendrra/avia-4x500m'>huggingface
                  <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-box-arrow-up-right ms-1' viewBox='0 0 16 16'>
                    <path fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5' />
                    <path fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-12 pb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>WebGraze</h5>
              <h6 className='card-subtitle mb-2 text-body-secondary'><em>Jan 24 - Feb 24</em></h6>
              <p className='card-text'>
                It's a llm cookbook repo that has everything you need to build a basic llm. Has decoder-only, encoder-only
                models along with full transformer based model. Data too could be gathered using the webscrappers &
                transcript generators, from over ~167k YouTube videos and ~3.8million Wikipedia web pages.
              </p>
              <div className='col-lg-12 d-flex'>
                <a className='card-link d-flex align-items-baseline' href='https://github.com/shivendrra/web-graze'>github
                  <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-box-arrow-up-right ms-1' viewBox='0 0 16 16'>
                    <path fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5' />
                    <path fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
