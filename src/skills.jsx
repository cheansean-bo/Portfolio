import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import leftArrow from './images/leftarrow.png';
import rightArrow from './images/rightarrow.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SkillsCard from './skillsCard';


const Skills = ({lists}) => (
    <div className="skills">
        <Swiper
            grabCursor={true}
            centeredSlides={false}
            loop={true}
            slidesPerView={3}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
                nextEl: '.arrowRight',
                prevEl: '.arrowLeft',
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
