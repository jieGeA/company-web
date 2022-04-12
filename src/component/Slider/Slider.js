import React, { Component } from 'react'
import AwesomeSwiper from 'react-awesome-swiper';
import './slider.css'
import img1 from '../../static/lunbo/1.jpg'
import img2 from '../../static/lunbo/2.jpg'
import img3 from '../../static/lunbo/3.jpg'
import img4 from '../../static/lunbo/4.jpg'


export default class Slider extends Component {
    swiperRef = null
    goNext = (activeKey) => {//use `this.swiperRef.swiper` to get the instance of Swiper
        // this.swiperRef.swiper.slideNext();
        console.log('activeKey', activeKey)
        this.swiperRef.swiper.slideTo(activeKey);
    }

    state = {
        activeIndex: 1
    }

    config = {
        loop: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazy: true,
        speed: 500,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            bulletElement: 'li',
            // hideOnClick: true,
            clickable: true,
        },
        on: {
            slideChange: function () {
                // console.log(this.activeIndex);
            },
        },
    }

    render() {
        return (
            <AwesomeSwiper ref={ref => (this.swiperRef = ref)} config={this.config} className="sliderWrapper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src={img1} alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src={img2} alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src={img3} alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src={img4} alt="" />
                    </div>
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>
            </AwesomeSwiper>
        )
    }
}
