import React from "react";
import { Link } from "react-router-dom"
export default function (props) {
  //keys needed: 
  // - background image: thumb_image_url
  // - logo
  // - description: description
  // - id: id


  const { id, description, thumb_image_url, logo_url } = props.item;
  return (
    <div className="portfolio-item-wrapper">     
      <div 
        className="portfolio-background-img"
        style={{
          backgroundImage: "url(" + thumb_image_url + ")"
        }}
      /> 
      <div className="img-text-wrapper">
        <div className="logo-wrapper">
          <img src={logo_url}></img>
        </div>
        <div className="subtitle">{description}</div>
      </div>
    </div>
  );
}