import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <>
      <div className="titleContainer">
        <div className="title">
          <h3>Popular restaurants in Atyrau</h3>
        </div>
      </div>

      <div className="featured">
        <div className="featuredList">
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h5>Coffee Boom</h5>
              <h6>21 tables</h6>
              <button className="featuredBtn">Reserve Now</button>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h5>Shafran</h5>
              <h6>40 tables</h6>
              <button className="featuredBtn">Reserve Now</button>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h5>Sarqyt</h5>
              <h6>33 tables</h6>
              <button className="featuredBtn">Reserve Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
