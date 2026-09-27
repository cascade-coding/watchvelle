import { Link } from "react-router";
import { cn } from "../../lib/utils";
import SilverStrip from "./SilverStrip";

const ShopByBrandCard = ({
  to = "#",
  brand,
  brandImage,
  className = "",
  ...props
}) => {
  return (
    <Link
      to={`/watches?brand=${brand}`}
      className={cn(
        "relative block w-full max-w-80 overflow-hidden group",
        className,
      )}
      {...props}
    >
      {/* Brand image background */}
      <img
        src={brandImage}
        alt={brand}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Silver strip */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="absolute inset-0">
          <SilverStrip />
        </div>

        <div className="relative flex items-center h-16 px-4">
          <p className="font-brand font-normal lg:font-bold uppercase text-sm sm:text-lg bg-brand/80 px-1 text-white ">
            {brand}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ShopByBrandCard;
