import React from "react";
import "./BLogCard.css";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  return (
    <>
      <div className="col-3">
        <div className="blog-card">
          <div className="card-image">
            <img src="images/blog-1.jpg" alt="blog" className="img-fluid" />
            <div className="blog-content">
              <p className="date">{ props.date }</p>
              <h5 className="title"></h5>
              <p className="desc"></p>
              <Link className="button">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
