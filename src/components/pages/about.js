import React from 'react';
import aboutImage from "../../../static/assets/images/familyPicture.jpg"

export default function () {
    return (
        <div className="content-page-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + aboutImage + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >

            </div>

            <div className="right-column">
                I am 26 years old. I have one child and two dogs. I love to read fantasy and sci-fi novels, go mountain biking, and play video games
                in my spare time. I love to spend time with my family and go on walks/hikes with them. I love to go on family road trips to new places
                and to go visit family. I am from Washington State but I am currently living in Utah.
            </div>
        </div>
    )
}