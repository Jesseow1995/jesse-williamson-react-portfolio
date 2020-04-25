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
    <div>
      <img src={thumb_image_url}></img>
      
      <div>{description}</div>
      <Link to={`/portfolio/${id}`}>Link</Link>
    </div>
  );
}