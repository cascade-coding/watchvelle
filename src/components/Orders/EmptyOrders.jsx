import { Link } from "react-router";
import Container from "../shared/Container";
import Button from "../shared/Button";

const EmptyOrders = () => {
  return (
    <>
      <Container className="py-16">
        <div className="text-center">
          <p className="text-muted text-sm mt-3">
            You haven't placed any orders yet.
          </p>
          <Link to="/watches" className="inline-block mt-6">
            <Button className="text-white">Explore Watches</Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default EmptyOrders;
