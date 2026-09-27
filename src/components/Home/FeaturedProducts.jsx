import React from "react";
import SectionHeading from "../shared/SectionHeading";
import Container from "../shared/Container";
import ProductCard from "../shared/ProductCard";
import { useConstants } from "../../store/useConstants";

const FeaturedProducts = () => {
  const getDemoFeaturedProductCards = useConstants(
    (state) => state.getDemoFeaturedProductCards,
  );

  const cards = getDemoFeaturedProductCards();

  return (
    <div className="bg-white">
      <Container className="pt-16 md:pt-20 pb-18 ">
        <SectionHeading
          title="FEATURED"
          coloredTitle="WATCHES"
          subtitle="Discover watches selected for every style and occasion."
        />

        {/* Product cards wrapper */}

        <div className="no-scrollbar pt-5 sm:pt-8 w-full flex gap-x-6 overflow-x-auto pb-4   lg:grid lg:grid-cols-4 lg:gap-y-9 lg:overflow-visible">
          {/* Product cards */}

          {cards.map((product) => (
            <ProductCard
              key={product.id}
              className="min-w-[85%] min-[500px]:min-w-[45%] sm:min-w-[45%] md:min-w-[32%]  lg:min-w-0"
              {...product}
            />
          ))}

          {/* Product cards */}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
