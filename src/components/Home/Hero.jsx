import { useNavigate } from "react-router";
import Button from "../shared/Button";
import Container from "../shared/Container";

const Hero = () => {
  let navigate = useNavigate();

  return (
    <div className="relative min-h-125 flex justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="./hero-bg.webp"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/46"></div>

      {/* Content */}
      <Container className="relative z-10 text-white pt-16 md:pt-20 lg:pt-22">
        <p className="text-sm md:text-base font-semibold md:font-bold uppercase tracking-[1.8px] mb-3">
          DISCOVER YOUR NEXT WATCH
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-[1.4px] font-brand font-bold uppercase mb-3 -ml-px md:max-w-175 leading-[1.4]">
          Find the Watch
          <br className="block sm:hidden" /> That Fits You.
        </h1>

        <p className="text-base font-medium md:font-semibold md:text-lg mb-8 leading-relaxed">
          Every style. Every occasion. <br className="block sm:hidden" /> Every
          moment.
        </p>

        <div>
          <Button
            onClick={() => {
              navigate("/watches");
            }}
          >
            Explore Watches
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
