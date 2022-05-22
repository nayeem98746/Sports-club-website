import React, { useRef } from "react";
import Slider from "react-slick";



const VolleyBallVideoSlider = () => {


   const  sliderref = useRef();



    
  const settings = {
    
    arrows: false,
    pauseOnHover: true,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div style={{ marginTop: "100px", marginBottom: "100px" }}>
        <h2>Latest Match </h2>
      <Slider ref={sliderref}  {...settings} >
        <div className="ImagesItam">
        <iframe width="400" height="315" src="https://www.youtube.com/embed/Yowt_nloX3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="ImagesItam">
        <iframe width="400" height="315" src="https://www.youtube.com/embed/Q3dS6By4rDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="ImagesItam">
        <iframe width="400" height="315" src="https://www.youtube.com/embed/umM0XarqwYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="ImagesItam">
        <iframe width="400" height="315" src="https://www.youtube.com/embed/zC5ySLI4SYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="ImagesItam">
        <iframe width="400" height="315" src="https://www.youtube.com/embed/o78y1264dD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="ImagesItam">
        <iframe width="400" height="315" src="https://www.youtube.com/embed/5DUDpJ3do8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </Slider>
    </div>
  );
};

export default VolleyBallVideoSlider;