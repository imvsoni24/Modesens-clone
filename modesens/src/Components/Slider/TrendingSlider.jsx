import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "./slider.css";
const newdeal = [
   

    {
        src: "https://cdn.modesens.com/availability/55784063?w=400",
        title: "SAINT LAURENT",
        sub: "Leather Biker Jacket In Black",
        rate: "$2639 (30% OFF)  - $5490",
        st: "Compare 11 stores"
    },
    {
        src: "https://cdn.modesens.com/availability/53982490?w=400",
        title: "DOLCE & GABBANA",
        sub: "Dg Pop Leather Ankle Boots In Black",
        rate: "$644 (43% OFF)  - $1295",
        st: "Compare 9 stores"
    },
    {
        src: "https://cdn.modesens.com/availability/45835347?w=400",
        title: "GANNI",
        sub: "Ganni Sky Captain Single-breasted Corduroy Jacket In Blu",
        rate: "$190 (60% OFF)  - $272",
        st: "Compare 5 stores"
    },
    {
        src: "https://cdn.modesens.com/product/46762388_2?w=400",
        title:  "BALMAIN",
        sub: "Double-breasted Black Viscose Blazer",

        rate: "$1146 (41% OFF)  - $2808",
        st: "Compare 13 stores"
    },
    {
        src: "https://cdn.modesens.com/availability/58475510?w=400",
        title: "MONCLER",
        sub: "Moscova Faux Fur-trimmed Leather Ankle Boots In Black",

        rate: "$406 (35% OFF)  - $904",
        st: "Compare 12 stores"
    },
    {
        src: "https://cdn.modesens.com/product/18412404_177?w=400",
        title:  "GRENOBLE",
        sub: "Ledi Hooded Color-block Quilted Shell Down Jacket In Multi-colored",

        rate: "$632 (29% OFF)  - $1370",
        st: "Compare 15 stores"
    },
    {
        src: "https://cdn.modesens.com/availability/56317619?w=400",
        title:   "MONCLER",
        sub: "Black Carinne Lace-up Boots",

        rate: "$512 (23% OFF)  - $825",
        st: "Compare 5 stores"
    },
    {
        src: "https://cdn.modesens.com/availability/53101621?w=400",
        title:   "DOLCE & GABBANA",
        sub: "Dg Pop Leather Ankle Boots In Black",

        rate: "$644 (43% OFF)  - $1295",
        st: "Compare 9 stores"
    },
   
   
    
    ]

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowRight
      className={className}
      style={{ ...style,
        display: "block",
        color: "grey",
        height: "2.5rem",
        width: "2.5rem",
        marginRight:"-25px"
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        color: "grey",
        height: "2.5rem",
        width: "2.5rem",
        marginLeft:"-25px"
      }}
      onClick={onClick}
    />
  );
}

const TrendingSlider = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ width: "72%", margin: "auto", marginTop: "50px" }}>
      <div style={{width:"20%",margin:"auto"}}><h1 style={{fontSize:"25px",fontWeight:"bold"}}>Trending Now</h1></div>
      <Slider {...settings}>
        {newdeal.map((item)=>(
            <div className="card4">
            <img src={item.src}   alt=""
             
              width="100%"
            
            />
            <div>
              <h2 style={{fontSize:"15px",marginTop:"10px",fontWeight:"bold"}}>{item.title}</h2>
              <h4 style={{fontSize:"15px",marginTop:"10px",fontSize:"13px",color:"#8E8E8E"}}>{item.sub}</h4>
              <h3 style={{fontSize:"15px",marginTop:"10px",color:"red"}}>{item.rate}</h3>
              <h3 style={{fontSize:"15px",marginTop:"10px",color:"#8E8E8E"}}>{item.st}</h3>
            </div>
          </div>
        ))}
       
       
      
      </Slider>
      <div className="view">SHOP MORE</div>
    </div>
  );
};

export default TrendingSlider;