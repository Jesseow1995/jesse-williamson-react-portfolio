import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactImage from "../../../static/assets/images/20210325_130417.jpg"


export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactImage + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />



      <div className="right-column">
        <div className="contact-bullet-points">

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>
            <div className="text">360-550-7246</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="text">jesseowilliamson@gmail.com</div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>
            <div className="text">Provo, Utah</div>
          </div>
        </div>
      </div>
    </div>
  )
}