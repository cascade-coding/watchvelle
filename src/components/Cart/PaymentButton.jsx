import { cn } from "../../lib/utils";

const PaymentButton = ({ children, onClick, className = "", ...props }) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "hover:opacity-75 hover:cursor-pointer transition-opacity",
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

export default PaymentButton;
