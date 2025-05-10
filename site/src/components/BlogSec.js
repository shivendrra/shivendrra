import React from 'react';

export default function BlogSec(props) {
  return (
    <>
      <div className='card'>
        <div className='card-header bg-transparent'>
          <h3 className='card-title blog-title'>
            {props.title}
          </h3>
        </div>
        <div className='card-body'>
          <p 
            className='card-text text-start'
            dangerouslySetInnerHTML={{ __html: props.description }}
          />
        </div>
        <div className='card-footer blog-date bg-transparent'>
          {props.date}
        </div>
      </div>
    </>
  );
}