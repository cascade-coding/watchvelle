import { Link } from "react-router";
import Button from "../shared/Button";

const NoOrders = () => {
  return (
    <>
      <div>
        <p className="font-medium tracking-[1.4px] text-muted mt-3">
          You haven't placed any orders yet.
        </p>
        <Button className="mt-4 hover:opacity-90">
          <Link to="/watches">Explore Watches</Link>
        </Button>
      </div>
    </>
  );
};

export default NoOrders;
