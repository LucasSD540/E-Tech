import React from "react";
import { ProductProps } from "../Card";
import { discountFormated } from "../../utils/formatDiscount";
import { useFetchProductQuery } from "../../services/productApi";
import { formatProductName } from "../../utils/formatProductName";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Card } from "../Card";
import "./styles.css";

const loading_card = "/assets/images/loading_card.png";

export const OfferProductCarousel = () => {
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

  const offerProducts = productsData.filter(
    (product: any) => product.old_price > product.price
  );

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      navigation
      modules={[Navigation]}
    >
      {offerProducts.map((product: any, index: number) => {
        const productItem: ProductProps = {
          id: product.id,
          cardProductId: product.id,
          quantity: product.quantity,
          promo: product.old_price > product.price,
          productName: formatProductName(product.productName),
          discount: discountFormated(product.old_price, product.price),
          old_price: product.old_price,
          price: product.price,
          image_url: product.image_url,
          categoryName: product.categoryName,
        };

        return (
          <SwiperSlide key={index}>
            <Card product={productItem} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
