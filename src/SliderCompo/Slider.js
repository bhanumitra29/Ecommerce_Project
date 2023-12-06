import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import "../App.css"
import "../styles/All.css"
const SliderComponent = () => {

const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:2926/api/slider");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const user = await response.json();
      setData(user);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 2000, 
    };

const sliderRef = React.createRef();

const handleNextSlide = () => {
  sliderRef.current.slickNext();
};

const handlePrevSlide = () => {
  sliderRef.current.slickPrev();
};

  
    return (
      <div>
       
        <Slider {...settings} ref={sliderRef}>
        {data.filter((item) => item.id >30 && item.id<37).map((item,index)=>(
            
            <div key={index} className="slider-item">
              <img
                src={item.image}
                alt={item.title}
                className="sliderClass" 
              />
              <div className="custom-arrows">
                <div className="arrow-left" onClick={handlePrevSlide}></div>
                <div className="arrow-right" onClick={handleNextSlide}></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  

export default SliderComponent;