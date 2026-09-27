import { cn } from "../../lib/utils";

const Button = ({
  children,
  className = "",
  onClick = null,
  type = "button",
  id = "",
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      id={id}
      className={cn(
        "bg-brand text-white block px-6 h-12 text-sm font-semibold tracking-[0.5px] rounded-md border border-border cursor-pointer",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
