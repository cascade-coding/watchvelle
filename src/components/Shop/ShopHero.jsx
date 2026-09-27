import { useNavigate } from "react-router";
import Button from "../shared/Button";
import Container from "../shared/Container";

const ShopHero = () => {
  return (
    <div className="relative min-h-100 sm:min-h-120 flex justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="./shop-hero-bg.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-right sm:object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/46"></div>

      {/* Content */}
      <Container className="relative z-10 text-white flex items-center">
        <div className="-mt-8 sm:-mt-20">
          <p className="text-base md:text-lg font-semibold md:font-bold uppercase tracking-[1.8px] mb-3">
            DISCOVER YOUR NEXT WATCH
          </p>

          <p className="text-base font-medium tracking-[1.6px] leading-relaxed max-w-190">
            Discover timepieces selected for every style, occasion, and moment.
            From refined everyday watches to distinctive statement pieces,
            explore the Watchvelle collection and find the one that suits you.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ShopHero;
