import { Link } from "react-router";
import useCartActions from "../hooks/useCartActions";
import Container from "../components/shared/Container";
import Button from "../components/shared/Button";
import MinusIcon from "../components/icons/MinusIcon";
import AddIcon from "../components/icons/AddIcon";
import CouponInput from "../components/Cart/CouponInput";
import Paypal from "../components/icons/Paypal";
import AmazonPay from "../components/icons/AmazonPay";
import Visa from "../components/icons/Visa";
import Mastercard from "../components/icons/Mastercard";
import Amex from "../components/icons/Amex";
import Discover from "../components/icons/Discover";
import ApplePay from "../components/icons/ApplePay";
import { cartTotal, formatPrice, parsePrice } from "../lib/utils";
import EmptyCart from "../components/Cart/EmptyCart";
import SummaryRow from "../components/Cart/SummaryRow";
import PaymentButton from "../components/Cart/PaymentButton";
import WhyUs from "../components/shared/WhyUs";
import CustomerReviews from "../components/shared/CustomerReviews";

const Cart = () => {
  const {
    items,
    totalItems,
    incrementQuantity,
    decrementQuantity,
    removeItem,
  } = useCartActions();

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div>
      <div className="bg-white pb-20">
        <Container className="px-0 py-8 sm:py-10">
          <div className="px-4 lg:px-0 font-semibold text-2xl tracking-[1.4px] text-foreground mb-6">
            Shopping Cart ({totalItems})
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8">
            {/* Cart items */}
            <ul className="bg-white px-4 lg:px-5 pt-3 sm:pt-8 pb-5 flex flex-col border border-border rounded-md">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-border last:border-b-0"
                >
                  {/* Image */}
                  <Link
                    to={item.to}
                    className="shrink-0 w-24 h-24 sm:w-35 sm:h-35 border border-border rounded-md overflow-hidden"
                  >
                    <img
                      src={item.primaryImage}
                      alt={item.title}
                      className="w-full h-full object-cover scale-85"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="font-semibold text-sm uppercase tracking-[1.44px] text-gold">
                        {item.brand}
                      </span>
                      <span className="text-sm font-medium text-muted/70">
                        {item.code}
                      </span>
                    </div>

                    <div className="mt-1.5">
                      <Link
                        to={item.to}
                        className="block font-medium text-sm sm:text-base text-foreground line-clamp-2 hover:underline mt-0.5"
                      >
                        {item.title}
                      </Link>

                      <p className="font-semibold text-base sm:text-lg text-foreground mt-1">
                        {formatPrice(parsePrice(item.price) * item.quantity)}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-sm font-medium text-foreground uppercase tracking-[0.5px]">
                        QTY:
                      </span>

                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => decrementQuantity(item.id)}
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                          className="px-1 py-1.5 cursor-pointer transition disabled:opacity-40"
                        >
                          <MinusIcon />
                        </button>
                        <span className="px-4 text-sm font-medium min-w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => incrementQuantity(item.id)}
                          aria-label="Increase quantity"
                          className="px-1 py-1.5 cursor-pointer transition"
                        >
                          <AddIcon />
                        </button>
                      </div>
                    </div>

                    <div className="mt-0.5">
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove from cart"
                        className="font-semibold text-[13px] text-foreground hover:text-brand cursor-pointer transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Order summary */}
            <aside className="bg-white lg:sticky lg:top-6 lg:self-start">
              <div className="border border-border rounded-md p-4 lg:px-6 pb-20">
                <h2 className="font-semibold text-base sm:text-xl tracking-[1.2px] text-foreground pb-4 border-b border-border">
                  Order Summary
                </h2>

                <div className="flex flex-col pt-4 text-sm">
                  <CouponInput
                    onApply={(code) => console.log("Apply:", code)}
                  />

                  <SummaryRow
                    label="Subtotal"
                    value={formatPrice(cartTotal(items))}
                  />
                  <SummaryRow label="Estimated Shipping" value="$80.00" />
                  <SummaryRow label="Estimated Tax" value="$0.00" />

                  <SummaryRow
                    label="Order Total"
                    value={formatPrice(cartTotal(items))}
                    className="[&>span]:font-semibold [&>span]:text-foreground"
                  />
                </div>

                <div className="mt-4 sm:mt-7 ">
                  <Button className="w-full font-medium text-white tracking-[1.2px] rounded-sm">
                    Checkout Securely
                  </Button>

                  <p className="text-sm text-foreground uppercase text-center mt-4.5 ">
                    Quick Checkout Options
                  </p>

                  {/* Payment Buttons */}
                  <div className="mt-3.5 flex flex-col gap-4">
                    <PaymentButton onClick={() => console.log("PayPal")}>
                      <Paypal />
                    </PaymentButton>
                    <PaymentButton onClick={() => console.log("Amazon Pay")}>
                      <AmazonPay />
                    </PaymentButton>

                    <div className="flex flex-wrap gap-4 mx-auto lg:justify-between w-full">
                      <PaymentButton onClick={() => console.log("Visa")}>
                        <Visa />
                      </PaymentButton>
                      <PaymentButton onClick={() => console.log("Mastercard")}>
                        <Mastercard />
                      </PaymentButton>
                      <PaymentButton onClick={() => console.log("Amex")}>
                        <Amex />
                      </PaymentButton>
                      <PaymentButton onClick={() => console.log("Discover")}>
                        <Discover />
                      </PaymentButton>
                      <PaymentButton onClick={() => console.log("Apple Pay")}>
                        <ApplePay />
                      </PaymentButton>
                    </div>
                  </div>
                  {/* End: Payment Buttons */}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </div>

      <WhyUs v2/>

      <CustomerReviews />
    </div>
  );
};

export default Cart;
