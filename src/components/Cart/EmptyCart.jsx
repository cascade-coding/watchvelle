import { Link } from "react-router";
import Container from "../shared/Container";
import Button from "../shared/Button";

const EmptyCart = () => {
  return (
    <>
      <Container className="py-16">
        <div className="text-center">
          <h1 className="font-brand font-bold text-2xl uppercase tracking-[1.4px] text-brand">
            Your cart is empty
          </h1>
          <p className="text-muted text-sm mt-3">
            Looks like you haven't added anything yet.
          </p>
          <Link to="/watches" className="inline-block mt-6">
            <Button className="text-white">Continue Shopping</Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default EmptyCart;
