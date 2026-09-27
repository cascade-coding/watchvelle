import { Link } from "react-router";
import Container from "../components/shared/Container";
import { formatPrice, parsePrice } from "../lib/utils";
import { cn } from "../lib/utils";

const STATUS_STYLES = {
  processing: {
    label: "Processing",
    text: "#9A6B00",
    bg: "#FFF6DE",
    border: "#E8D5A8",
  },
  confirmed: {
    label: "Confirmed",
    text: "#2F6FED",
    bg: "#EEF4FF",
    border: "#C9DBFF",
  },
  shipped: {
    label: "Shipped",
    text: "#6B4FA1",
    bg: "#F4EFFB",
    border: "#DCCEF0",
  },
  delivered: {
    label: "Delivered",
    text: "#2E7D32",
    bg: "#EDF7EE",
    border: "#C8E3CA",
  },
  cancelled: {
    label: "Cancelled",
    text: "#C0392B",
    bg: "#FDEEEE",
    border: "#F1C9C5",
  },
};

const OrderStatus = ({ status }) => {
  const config = STATUS_STYLES[status];
  if (!config) return null;

  return (
    <span
      className="inline-block px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.8px] rounded-sm border"
      style={{
        color: config.text,
        backgroundColor: config.bg,
        borderColor: config.border,
      }}
    >
      {config.label}
    </span>
  );
};

const ORDERS = [
  {
    id: "WV-10482736",
    orderedOn: "28 Aug 2026",
    status: "processing",
    item: {
      to: "/watches/speedmaster-chronograph",
      brand: "Omega",
      code: "310.30.42.50.01.001",
      title: "De Ville Prestige Automatic Chronometer Blue Dial Men's Watch",
      price: "$3,200.00",
      quantity: 1,
      primaryImage: "/images/product-speedmaster-1.png",
    },
    phone: "+1 (202) 555-0147",
    shippingAddress: "123 Main Street, Apt 4B New York, NY 10001",
  },
  {
    id: "WV-10482736",
    orderedOn: "28 Aug 2026",
    status: "delivered",
    item: {
      to: "/watches/speedmaster-chronograph",
      brand: "Omega",
      code: "310.30.42.50.01.001",
      title: "De Ville Prestige Automatic Chronometer Blue Dial Men's Watch",
      price: "$3,200.00",
      quantity: 1,
      primaryImage: "/images/product-speedmaster-1.png",
    },
    phone: "+1 (202) 555-0147",
    shippingAddress: "123 Main Street, Apt 4B New York, NY 10001",
  },
];

const Orders = () => {
  return (
    <div className="bg-white pb-20">
      <Container className="px-0 py-8 sm:py-10">
        <div className="mb-6">
          <h1 className="px-4 lg:px-0 font-semibold text-2xl tracking-[1.4px] text-foreground">
            My Orders
          </h1>

          <p>View your current and recent orders.</p>
        </div>

        <div className="flex flex-col gap-8 max-w-200">
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
                    <p className="font-semibold text-sm sm:text-base text-foreground">
                      ORDER #{order.id}
                    </p>
                    <p className="text-sm text-muted mt-0.5">
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
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="font-semibold text-foreground">
                      Order Total
                    </span>
                    <span className="font-semibold text-foreground">
                      {formatPrice(lineTotal)}
                    </span>
                  </div>

                  <dl className="pt-3 flex flex-col gap-2 text-sm">
                    <div>
                      <dt className="text-muted">Phone</dt>
                      <dd className="text-foreground">{order.phone}</dd>
                    </div>

                    <div>
                      <dt className="text-muted">Shipping Address</dt>
                      <dd className="text-foreground">
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
