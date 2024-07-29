import React from 'react'

export default function projects() {
  return (
    <>
      <div className='projects row g-4'>
        <div className='col-lg-6'>
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
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Enigma-1.5b</h5>
              <h6 className='card-subtitle mb-2 text-body-secondary'><em>Feb 24 - Apr 24</em></h6>
              <p className='card-text'>
                These are two, a 440million & a 1.5billion parameter transformer model that is capable of generating next
                DNA sequence based on given input sequence. Trained on data gathered from various sources like NCBI,
                Hugging-Face, Kaggle, etc. It has its own custom sub-sequence tokenizer too
              </p>
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
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Synapse</h5>
              <h6 className='card-subtitle mb-2 text-body-secondary'><em>Jun 24 - present</em></h6>
              <p className='card-text'>
                An app that allows you to stream music, videos & podcast that are available on YouTube for free, without any ads or interruption. Using YouTube's V3 API to fetch & a script that converts video to audio. It also has a feature to convert pdf into audio, that allows to listen any book as an audio book (still work in progress though).
              </p>
              <div className='col-lg-12 d-flex'>
                <a className='card-link d-flex align-items-baseline' href='https://github.com/shivendrra/synapse'>github
                  <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-box-arrow-up-right ms-1' viewBox='0 0 16 16'>
                    <path fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5' />
                    <path fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z' />
                  </svg>
                </a>
                <a className='card-link d-flex align-items-baseline' href='https://synapse-music.vercel.app/home'>web-app
                  <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-box-arrow-up-right ms-1' viewBox='0 0 16 16'>
                    <path fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5' />
                    <path fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Axon</h5>
              <h6 className='card-subtitle mb-2 text-body-secondary'><em>Jun 24 - Jul 24</em></h6>
              <p className='card-text'>
                A light weight scalar-level autograd engine written in c/c++ & python, like micrograd along with multidimensional array manipulation library like numpy
              </p>
              <div className='col-lg-12 d-flex'>
                <a className='card-link d-flex align-items-baseline' href='https://github.com/shivendrra/axon'>github
                  <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-box-arrow-up-right ms-1' viewBox='0 0 16 16'>
                    <path fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5' />
                    <path fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>WebGraze</h5>
              <h6 className='card-subtitle mb-2 text-body-secondary'><em>Jan 24 - Feb 24</em></h6>
              <p className='card-text'>
                A library that allows you to scrape raw text data from various sites such as Britannica.com, Wikipedia.com & could fetch YouTube videos transcripts. It's main role is to scrape raw text data for training LLM model from scratch. I used this library to generate training data for my LLM Cookbook project & others too.
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
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>AxGrad</h5>
              <h6 className='card-subtitle mb-2 text-body-secondary'><em>Jun 24 - Present</em></h6>
              <p className='card-text'>
                lightweight tensor library that contains it's own auto-diff engine like pytorch
              </p>
              <div className='col-lg-12 d-flex'>
                <a className='card-link d-flex align-items-baseline' href='https://github.com/shivendrra/axgrad'>github
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
