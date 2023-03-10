import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EffectFade, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const App = () => {
  const [posts, setPosts] = useState<{ title: string; channel: string }[]>([]);
  useEffect(() => {
    axios
      .get('http://maksip83.beget.tech/', { withCredentials: true })
      .then((res) => {
        setPosts(res.data);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <Swiper
        className="blog-slider"
        modules={[Pagination, EffectFade]}
        spaceBetween={750}
        effect={'fade'}
        loop={true}
        mousewheel={{ invert: false }}
        pagination={{ clickable: true, el: '.blog-slider__pagination' }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        {posts &&
          posts.map((el, index) => {
            return (
              <SwiperSlide key={index} className={'blog-slider__item'}>
                <div className="blog-slider__img">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
                    alt=""
                  />
                </div>
                <div className="blog-slider__content">
                  <span className="blog-slider__code">26 December 2019</span>
                  <div className="blog-slider__title">{el.title}</div>
                  <div className="blog-slider__text">{el.channel}</div>
                  <a href="/" className="blog-slider__button">
                    READ MORE
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        <div className="blog-slider__pagination"></div>
      </Swiper>
    </>
  );
};
