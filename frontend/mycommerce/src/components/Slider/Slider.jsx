import { useFetchProductQuery } from "../../services/productApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Card } from "../Card";
import loading_card from "../../assets/images/loading_card.png";
import "./styles.css";

export const ProductCarousel = ({ promo }) => {
  const {
    data: productsData = [],
    isLoading,
    isError,
  } = useFetchProductQuery({});

  if (isLoading || isError) {
    return (
      <div className="loading-div">
        <img src={loading_card} alt="Carregando..." className="loading-img" />
        <img src={loading_card} alt="Carregando..." className="loading-img" />
        <img src={loading_card} alt="Carregando..." className="loading-img" />
        <img src={loading_card} alt="Carregando..." className="loading-img" />
      </div>
    );
  }

  const formatProductName = (name) => {
    return name.length > 16 ? name.slice(0, 16) + "..." : name;
  };

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
            promo={product.isPromo}
            name={formatProductName(product.name)}
            price={product.price}
            imageUrl={product.image_url}
            category={product.category}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
