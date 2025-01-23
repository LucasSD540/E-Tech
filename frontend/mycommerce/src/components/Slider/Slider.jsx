import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Card } from "../Card";

export const ProductCarousel = ({ promo }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      navigation
      modules={[Navigation]}
    >
      <SwiperSlide>
        <Card promo={promo} />
      </SwiperSlide>
      <SwiperSlide>
        <Card promo={promo} />
      </SwiperSlide>
      <SwiperSlide>
        <Card promo={promo} />
      </SwiperSlide>
      <SwiperSlide>
        <Card promo={promo} />
      </SwiperSlide>
      <SwiperSlide>
        <Card promo={promo} />
      </SwiperSlide>
      <SwiperSlide>
        <Card promo={promo} />
      </SwiperSlide>
    </Swiper>
  );
};
