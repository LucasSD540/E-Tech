import { useFetchProductQuery } from "../../services/productApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Card } from "../Card";

export const ProductCarousel = ({ promo }) => {
  const { data: productsData = [] } = useFetchProductQuery({});

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      navigation
      modules={[Navigation]}
    >
      {productsData.map((product, index) => (
        <SwiperSlide key={index}>
          <Card
            key={index}
            promo={promo}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            category={product.category}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
