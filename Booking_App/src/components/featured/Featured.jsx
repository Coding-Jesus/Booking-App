import React from 'react'
import './cities.css'

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                    src="/images/templebar.png"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img
                    src="/images/berlin.png"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Berlin</h1>
                    <h2>533 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="/images/prauge.png"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Prauge</h1>
                    <h2>452 properties</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;