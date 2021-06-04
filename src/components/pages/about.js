import React from 'react';
import aboutImage from "../../../static/assets/images/bio/wayofkings.jpg"

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
                I am 25 years old. I enjoy reading books, playing video games, and
                going out with my family. My wife is expecting our first child. We
                also have a dog that is half Great Pyrenees and half Australian Shepard.
            </div>
        </div>
    )
}