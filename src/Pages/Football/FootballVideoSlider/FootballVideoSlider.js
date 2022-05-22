import React, { useRef } from "react";
import Slider from "react-slick";



const FootballVideoSlider = () => {


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
        <iframe  width="400" height="315" src="https://www.youtube.com/embed/YeBHdkrlXKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="ImagesItam">
        <iframe width="400" height="315" src="https://www.youtube.com/embed/Qx09bqRC9BU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="ImagesItam">
        <iframe width="400" height="315" src="https://www.youtube.com/embed/eQEyX95FVkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="ImagesItam">
        <iframe width="400" height="315" src="https://www.youtube.com/embed/eyyXmYABcxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="ImagesItam">
        <iframe width="400" height="315" src="https://www.youtube.com/embed/bTFOt9i_vpA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="ImagesItam">
        <iframe width="400" height="315" src="https://www.youtube.com/embed/PViRpkvnISE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </Slider>
      
    </div>
  );
};

export default FootballVideoSlider;