import banner from "../../utils/images/banner.png";
import { ProductSection } from "../ProductSection";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.HomeDiv>
      <img src={banner} alt="banner-image" />
      <ProductSection
        children="Ofertas imperdíveis"
        promo={true}
        textColor="#E63946"
        titleSize="32px"
      />
      <ProductSection
        children="Eletrônicos"
        promo={false}
        textColor="#2E3A59"
      />
      <ProductSection
        children="Eletrodomésticos"
        promo={false}
        textColor="#2E3A59"
      />
    </S.HomeDiv>
  );
};
