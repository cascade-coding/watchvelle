import Container from "./Container";

const WhyUs = ({ v2 = false }) => {
  return (
    <div className="relative h-116 sm:h-120 xl:h-125 overflow-hidden">
      {/* Background image */}
      <img
        src={`./images/misc/${v2 ? "why-us-bg-2.png" : "why-us-bg.png"}`}
        alt=""
        className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-150 sm:h-187 md:h-220 object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <Container className="relative pt-20 sm:pt-28 md:pt-30">
        <h2 className="font-brand font-bold uppercase text-2xl sm:text-[28px] md:text-3xl lg:text-[32px] tracking-[1.4px] text-white pb-3">
          Why Buy From Watchvelle?
        </h2>

        <p className="w-full max-w-190 font-normal md:font-semibold text-base md:text-lg text-white leading-relaxed">
          We bring together timepieces from some of the world's most respected
          watchmakers, offering authentic products, carefully selected designs,
          and a shopping experience built around quality, trust, and exceptional
          service.
        </p>
      </Container>
    </div>
  );
};

export default WhyUs;
