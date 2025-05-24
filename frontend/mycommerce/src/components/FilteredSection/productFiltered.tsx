import React from "react";
import { useFetchProductQuery } from "../../services/productApi";
import { discountFormated } from "../../utils/formatDiscount";
import { formatProductName } from "../../utils/formatProductName";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Card } from "../Card";

import "swiper/css";
import "swiper/css/navigation";

type Props = {
  productIds: number[];
};

export const ProductCarouselByIds = ({ productIds }: Props) => {
  const {
    data: productsData = [],
    isLoading,
    isError,
  } = useFetchProductQuery({});

  if (isLoading || isError) {
    return (
      <div className="loading-div">
        {[...Array(4)].map((_, index) => (
          <img
            key={index}
            src="/assets/images/loading_card.png"
            alt="Carregando..."
            className="loading-img"
          />
        ))}
      </div>
    );
  }

  const filteredProducts = productsData.filter((product: any) =>
    productIds.includes(product.id)
  );

  if (filteredProducts.length === 0) {
    return <p>Nenhum produto encontrado.</p>;
  }

  return (
    <div className="container">
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        navigation
        modules={[Navigation]}
      >
        {filteredProducts.map((product: any, index: number) => {
          const productItem = {
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
    </div>
  );
};
