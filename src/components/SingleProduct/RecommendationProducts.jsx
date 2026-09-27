import SectionHeading from "../shared/SectionHeading";
import ProductCard from "../shared/ProductCard";
import { useConstants } from "../../store/useConstants";
import Container from "../shared/Container";

const RecommendationProducts = () => {
  const getRecommendationProductCards = useConstants(
    (state) => state.getRecommendationProductCards,
  );

  const cards = getRecommendationProductCards();

  return (
    <>
      <Container className="">
        <SectionHeading
          title="YOU MAY ALSO LIKE"
          align="left"
          titleClassName="lg:text-[32px]"
        />

        {/* Product cards wrapper */}

        <div className="no-scrollbar pt-5 sm:pt-8 w-full flex gap-x-6 overflow-x-auto pb-11  ">
          {/* Product cards */}

          {cards.map(({ id, ...product }) => (
            <ProductCard
              key={id}
              className="min-w-[85%] min-[500px]:min-w-[45%] sm:min-w-[45%] md:min-w-[32%] lg:min-w-[23%] "
              {...product}
            />
          ))}

          {/* Product cards */}
        </div>
      </Container>
    </>
  );
};

export default RecommendationProducts;
