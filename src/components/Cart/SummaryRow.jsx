import { cn } from "../../lib/utils";

const SummaryRow = ({ label, value, className = "" }) => (
  <div
    className={cn(
      "flex justify-between border-b border-border py-3.5",
      className,
    )}
  >
    <span className="text-foreground text-base">{label}</span>
    <span className="text-muted text-base">{value}</span>
  </div>
);

export default SummaryRow;
