import SectionHeading from "../shared/SectionHeading";
import Container from "../shared/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ShopByBrandCard from "../shared/ShopByBrandCard";
import { useConstants } from "../../store/useConstants";

const ShopByBrands = () => {
  const cards = useConstants((state) => state.DEMO_SHOP_BY_BRAND_CARDS);

  return (
    <div className="bg-linear-to-b from-[#1B1B1B] to-[#272727]">
      <Container className="pt-16 md:pt-20 pb-18">
        <SectionHeading
          title="SHOP BY"
          coloredTitle="BRANDS"
          subtitle="Explore timepieces from the world's finest watchmakers."
          titleClassName="text-white"
          subtitleClassName="text-white"
        />

        <div className="pt-6 md:pt-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            loop
            breakpoints={{
              0: { slidesPerView: 1.1, spaceBetween: 16 },
              460: { slidesPerView: 2.1, spaceBetween: 20 },
              660: { slidesPerView: 3.1, spaceBetween: 20 },
              1024: { slidesPerView: 3.2, spaceBetween: 50 },
              1440: { slidesPerView: 4.2, spaceBetween: 50 },
            }}
            className="text-white my-slider"
          >
            {cards.map(({ id, ...card }) => (
              <SwiperSlide key={id}>
                <div className="">
                  <ShopByBrandCard key={id} {...card} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default ShopByBrands;
