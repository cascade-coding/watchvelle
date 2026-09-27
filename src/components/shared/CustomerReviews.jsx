import SectionHeading from "../shared/SectionHeading";
import Container from "../shared/Container";
import Stars from "../icons/Stars";
import {
  chunkIntoColumns,
  useCustomerReviews,
} from "../../store/useCustomerReviews";

const CustomerReviews = () => {
  const reviews = useCustomerReviews((state) => state.CUSTOMER_REVIEWS);

  const columns = chunkIntoColumns(reviews, 3);

  return (
    <div className="bg-white">
      <Container className="pt-16 md:pt-20 pb-28 md:pb-36">
        <SectionHeading
          title="CUSTOMER REVIEWS"
          subtitle="Rated by 18,803 customers"
          subtitleClassName="text-brand"
          align="left"
        />

        {/* Review cards wrapper */}

        <div className="custom-scrollbar scrollbar-hide-md pt-10 w-full flex gap-x-6 overflow-x-auto pb-4  ">
          {/* Review cards */}

          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              className="flex flex-row lg:flex-col gap-4 md:gap-5 shrink-0"
            >
              {column.map((review) => (
                <div
                  key={review.id}
                  className="w-[calc(100vw-3rem)] max-w-80 shrink-0 lg:w-75 border-3 md:border-4 border-border rounded-[10px] px-3 pt-3.5 pb-2.5"
                >
                  <div className="pb-2.5">
                    <Stars />
                  </div>
                  <p className="font-semibold text-sm md:text-base text-foreground pb-2">
                    {review.name} · {review.date}
                  </p>
                  <p className="font-medium text-base leading-relaxed text-foreground">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          ))}

          {/* Review cards */}
        </div>
      </Container>
    </div>
  );
};

export default CustomerReviews;
