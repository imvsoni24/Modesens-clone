import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "./slider.css";
const newdeal = [
   

    {
        src: "https://cdn.modesens.com/availability/53902355?w=400",
        title: "MONCLER GRENOBLE",
        sub: "Ledi Hooded Color-block",
        rate: "$632 (29% OFF)  - $1370",
        st: "Compare 15 stores"
    },
   
    {
        src: "https://cdn.modesens.com/availability/56830338?w=400",
        title:"MONCLER",
sub:"Moscova Faux Fur-trimmed",

rate:"$406 (35% OFF)  - $904",
st:"Compare 12 stores"
    },

    {
        src: "https://cdn.modesens.com/product/10881690_51?w=400",
        title:"BALMAIN",
sub:"Double-breasted Black Viscose",

rate:"$1146 (41% OFF)  - $2808",
st:"Compare 13 stores"
    },

    {
        src: "https://cdn.modesens.com/product/3469145_255?w=400",
        title: "SAINT LAURENT",
        sub: "Leather Biker Jacket In Black",
        rate: "$2639 (30% OFF)  - $5490",
        st: "Compare 11 stores"
    },
    {
        src: "https://cdn.modesens.com/availability/58680698?w=400",
        title: "VALENTINO",
        sub: "Long Wool Wrap Coat With",
        rate: "$2743 (32% OFF)  - $6900",
        st: "Compare 15 stores"
    },
    {
        src: "https://cdn.modesens.com/availability/56340710?w=400",
        title: "KHAITE",
        sub: "Fullman Cropped Padded",
        rate: "$740 (50% OFF)  - $1480",
        st: "Compare 13 stores"
    },
    {
        src: "https://cdn.modesens.com/availability/54375340?w=400",
        title: "RAG & BONE",
        sub: "Icon Andrea Zip-front Leather",
        rate: "$679 (38% OFF)  - $1095",
        st: "Compare 6 stores"
    },
    {
        src: "https://cdn.modesens.com/product/22342103_107?w=400",
        title: "TOTÊME",
        sub: "Signature Wool And Cashmere-",
        rate: "$878 (18% OFF)  - $1296",
        st: "Compare 6 stores"
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

const NewDealSlider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ width: "72%", margin: "auto", marginTop: "50px" }}>
      <div style={{width:"20%",margin:"auto"}}><h1 style={{fontSize:"25px",fontWeight:"bold"}}>New To Sale</h1></div>
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

export default NewDealSlider;