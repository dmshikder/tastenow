import React, { useEffect, useState } from "react";
import Burgers from "../../Assets/SVG/Burgers";
import Combos from "../../Assets/SVG/Combos";
import Pizzas from "../../Assets/SVG/Pizzas";
import Salads from "../../Assets/SVG/Salads";
import "./Categories.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import Badge from "../../Assets/SVG/Badge";


const Categories = () => {

  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch('fakeData.json')
    .then(res=>res.json())
    .then(data=>setItems(data))
  },[])
  return (
    <>
      <div ><h2 className="popular-category">Our Popular <span className="span">Categories</span></h2>
      <div className="category-tab-group">
        <p className="category-tab">
          <Pizzas />
          <span className="category-title">Pizzas</span>
        </p>
        <p className="category-tab">
         <Burgers />
          <span className="category-title">Burgers</span>
        </p>
        <p className="category-tab">
          <Salads/>
          <span className="category-title">Salads</span>
        </p>
        <p className="category-tab">
          <Combos/>
          <span className="category-title">Combos</span>
        </p>
        
      </div>
      <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
          items.map(item=>{
            return  <SwiperSlide>
          <div className="category-card">
          <div className="badge"><Badge/><span className="badge-star">{item.star}</span></div>
          <img src={item.img} alt="" />
            <p className="item-name">{item.name}</p>
            <p>{item.description}</p>
            <p className="item-price">${item.price}</p>
          </div>
        </SwiperSlide>
          })

        }
      </Swiper>
      </div></div>
    </>
  );
};

export default Categories;
