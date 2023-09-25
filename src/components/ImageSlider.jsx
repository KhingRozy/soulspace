import React from "react";
import "./styles/HomePage.css";

export default function ImageSlider({
  currentIndex,
  images,
  handlePrevSlide,
  handleNextSlide,
  //   autoplayDelay = 3000
}) {
  return (
    <section className="slider">
      {/* <button className="prev-btn" onClick={handlePrevSlide}>
        Previous
      </button> */}
      <img src={images[currentIndex]} className="slider-image" alt="" />

      {/* <button className="next-btn" onClick={handleNextSlide}>
        Next
      </button> */}
    </section>
  );
}
