import { Swiper } from "swiper/react";
import { type ReactNode } from "react";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css/bundle";

interface Props {
  children: ReactNode;
}

const CarouselSwiper = ({ children }: Props) => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      loop={true}
      autoplay
      slidesPerGroup={1}
      className="my-swiper"
    >
      {children}
    </Swiper>
  );
};

export default CarouselSwiper;
