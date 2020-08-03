import React from 'react';
import aboutImage from "../../../static/assets/images/bio/wayofkings.jpg"

export default function () {
    return (
        <div className="content-page-wrapper">
            <div
                className="left-column"
                syle={{
                    background: "url(" + aboutImage + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >

            </div>

            <div className="right-column">
                This needs to be some placeholder content that doesnt
                really matter what it says.This needs to be some placeholder content that doesnt
                really matter what it says.This needs to be some placeholder content that doesnt
                really matter what it says.This needs to be some placeholder content that doesnt
                really matter what it says.This needs to be some placeholder content that doesnt
                really matter what it says.This needs to be some placeholder content that doesnt
                really matter what it says.This needs to be some placeholder content that doesnt
                really matter what it says.This needs to be some placeholder content that doesnt
                really matter what it says.
            </div>
        </div>
    )
}