import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from "../images/leftarrow.png";
import rightArrow from "../images/rightarrow.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Skills.css";
import SkillsCard from "./SkillsCard";

const Skills = ({ lists }) => (
  <div className="skills">
    <Swiper
      grabCursor={true}
      centeredSlides={false}
      loop={true}
      breakpoints={{
        0: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".arrowRight",
        prevEl: ".arrowLeft",
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="swiper_container"
    >
      {lists.map((props) => (
        <SwiperSlide key={props.id}>
          <SkillsCard id={props.id} img={props.img} />
        </SwiperSlide>
      ))}

      <div className="swiper-control">
        <div className="swiper-button-prev slider-arrow">
          <button className="arrowButton arrowLeft">
            <img src={leftArrow} alt="left" />
          </button>
        </div>
        <div className="swiper-button-next slider-arrow">
          <button className="arrowButton arrowRight">
            <img src={rightArrow} alt="right" />
          </button>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
);

export default Skills;
