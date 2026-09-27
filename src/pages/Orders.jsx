import { Link } from "react-router";
import Container from "../components/shared/Container";
import Button from "../components/shared/Button";
import { formatPrice, parsePrice } from "../lib/utils";
import { useConstants } from "../store/useConstants";
import OrderStatus from "../components/Orders/OrderStatus";
import NoOrders from "../components/Orders/NoOrders";

const Orders = () => {
  const ORDERS = useConstants((state) => state.DEMO_ORDERS);

  return (
    <div className="bg-white pb-20">
      <Container className="py-8 sm:py-10">
        <div>
          <h1 className="font-base! font-semibold text-xl sm:text-3xl tracking-[1.4px] text-foreground">
            My Orders
          </h1>

          {ORDERS.length >= 1 ? (
            <p className="font-medium tracking-[1.4px] text-muted mt-3">
              View your current and recent orders.
            </p>
          ) : (
            <NoOrders />
          )}
        </div>

        <div className="flex flex-col gap-8 max-w-200 mt-5 sm:mt-10">
          {ORDERS.map((order, index) => {
            const lineTotal =
              parsePrice(order.item.price) * order.item.quantity;

            return (
              <article
                key={`${order.id}-${index}`}
                className="bg-white px-4 lg:px-5 pt-3 sm:pt-8 pb-5 flex flex-col border border-border rounded-md"
              >
                <header className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      ORDER #{order.id}
                    </p>
                    <p className="font-medium text-sm text-foreground mt-1.5">
                      Ordered on {order.orderedOn}
                    </p>
                  </div>

                  <OrderStatus status={order.status} />
                </header>

                <div className="py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Link
                    to={order.item.to}
                    className="shrink-0 w-24 h-24 sm:w-35 sm:h-35 border border-border rounded-md overflow-hidden"
                  >
                    <img
                      src={order.item.primaryImage}
                      alt={order.item.title}
                      className="w-full h-full object-cover scale-85"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="font-semibold text-sm uppercase tracking-[1.44px] text-gold">
                        {order.item.brand}
                      </span>
                      <span className="text-sm font-medium text-muted/70">
                        {order.item.code}
                      </span>
                    </div>

                    <div className="mt-1.5">
                      <Link
                        to={order.item.to}
                        className="block font-medium text-sm sm:text-base text-foreground line-clamp-2 hover:underline mt-0.5"
                      >
                        {order.item.title}
                      </Link>

                      <p className="font-semibold text-base sm:text-lg text-foreground mt-1">
                        {formatPrice(lineTotal)}
                      </p>
                    </div>

                    <p className="text-sm font-medium text-foreground uppercase tracking-[0.5px] mt-1.5">
                      QTY: {order.item.quantity}
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center border-b border-border pb-3">
                    <span className="font-semibold text-foreground">
                      Order Total
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-foreground">
                      {formatPrice(lineTotal)}
                    </span>
                  </div>

                  <dl className="pt-3 flex flex-col gap-2 text-sm">
                    <div>
                      <dt className="font-medium text-foreground text-sm">
                        Phone
                      </dt>
                      <dd className="text-muted text-sm mt-1">{order.phone}</dd>
                    </div>

                    <div>
                      <dt className="font-medium text-foreground text-sm">
                        Shipping Address
                      </dt>
                      <dd className="text-muted text-sm mt-1">
                        {order.shippingAddress}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Orders;
