import { useState } from "react";
import Ticket from "../icons/Ticket";
import { cn } from "../../lib/utils";

const CouponInput = ({ onApply, className = "" }) => {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code.trim()) return;
    onApply?.(code.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex items-center flex-wrap gap-2 border-b border-border pb-3.5", className)}
    >
      <div className="flex-1 flex items-center gap-3 h-11 px-3 border border-muted/60 rounded-sm bg-white">
        <Ticket />
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Coupon Code"
          aria-label="Coupon code"
          className="flex-1 min-w-0 bg-transparent outline-none text-sm text-foreground placeholder:text-muted"
        />
      </div>

      <button
        type="submit"
        className="h-11 px-4 text-sm font-semibold text-white bg-brand rounded-sm transition hover:bg-brand/90  cursor-pointer"
      >
        Apply Code
      </button>
    </form>
  );
};

export default CouponInput;
