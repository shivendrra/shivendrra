import React from 'react';
import './styles/BlogSec.css';

export default function BlogSec(props) {
  return (
    <div className="blog-card-wrapper">
      <div className="blog-card">
        <div className="blog-card-header">
          <h3 className="blog-card-title">
            {props.title}
          </h3>
        </div>
        <div className="blog-card-body">
          <p 
            className="blog-card-description"
            dangerouslySetInnerHTML={{ __html: props.description }}
          />
        </div>
        <div className="blog-card-footer">
          <span className="blog-card-date">
            <i className="fas fa-calendar-alt"></i>
            {props.date}
          </span>
        </div>
      </div>
    </div>
  );
}