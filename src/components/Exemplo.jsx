import React from "react";
import SlickSlider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

import teste2 from "../assets/baner1.png";
import teste3 from "../assets/baner2.png";
import teste4 from "../assets/banner3.png";
import teste5 from "../assets/banner4.png";
import teste6 from "../assets/banner5.png";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slider = () => (
  <SlickSlider {...sliderSettings}>
    <img src={teste2} alt="Image 2" />
    <img src={teste3} alt="Image 3" />
    <img src={teste4} alt="Image 4" />
    <img src={teste5} alt="Image 5" />
    <img src={teste6} alt="Image 6" />
  </SlickSlider>
);

const Exemplo = () => (
  <div>
    <Slider />
  </div>
);

export default Exemplo;
