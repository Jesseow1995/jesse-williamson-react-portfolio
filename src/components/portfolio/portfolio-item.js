import React from "react";
import { Link } from "react-router-dom"
export default function (props) {
  //keys needed: 
  // - background image: thumb_image_url
  // - logo
  // - description: description
  // - id: id


  const { id, description, thumb_image_url, logo } = props.item;
  return (
    <div className="portfolio-item-wrapper">     
      <div 
        className="portfolio-background-img"
        style={{
          backgroundImage: "url(" + thumb_image_url + ")"
        }}
      /> 
      <div>{description}</div>
      <Link to={`/portfolio/${id}`}>Link</Link>
    </div>
  );
}