import { cn } from "../../lib/utils";

const MinusIcon = ({ className = "" }) => {
  return (
    <>
      <svg
        className={cn("size-4", className)}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.22852 8H12.5618"
          stroke="#2F2F2F"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default MinusIcon;
