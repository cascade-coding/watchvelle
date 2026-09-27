import { Link, useParams } from "react-router";
import Tag from "../icons/Tag";
import Bag from "../icons/Bag";
import Verified from "../icons/Verified";
import Certificate from "../icons/Certificate";
import Refund from "../icons/Refund";
import { useConstants } from "../../store/useConstants";
import useCartActions from "../../hooks/useCartActions";

const ProductOverviewInfo = () => {
  const { productId } = useParams();

  const product = useConstants((state) => state.DEMO_SINGLE_PRODUCT);

  const { addItem, isInCart } = useCartActions();

  const handleAddToBag = () => {
    addItem({
      id: productId,
      to: product.to ?? `/watches/${product.id}`,
      brand: product.item.brand,
      code: product.item.code,
      title: product.info.title,
      price: product.info.price,
      originalPrice: product.info.retail,
      primaryImage: product.images?.[0]?.src ?? "",
      secondaryImage: product.images?.[1]?.src ?? "",
    });
  };

  return (
    <>
      <div className="w-full lg:flex-1 min-w-0">
        <p className="font-semibold text-sm tracking-[1.44px] uppercase text-gold">
          {product.item.brand}
        </p>

        <p className="font-brand font-bold text-lg md:text-xl lg:text-[28px] uppercase leading-snug text-brand pt-1.5">
          {product.info.title}
        </p>

        <div className="select-none flex gap-x-3 gap-y-1.5 flex-wrap max-w-50 pt-3">
          {product.info.inStock ? (
            <div className="px-1.5 py-1 bg-[#C9F8D7] text-success font-bold text-[11px] tracking-[0.8px] uppercase rounded-sm">
              IN STOCK
            </div>
          ) : (
            <div className="px-1.5 py-1 bg-[#FBD5D5] text-danger font-bold text-[11px] tracking-[0.8px] uppercase rounded-sm">
              OUT OF STOCK
            </div>
          )}

          {product.info.off && (
            <div className="px-1.5 py-1 bg-[#F5EEDF] text-[#8A6A32] font-bold text-[11px] tracking-[0.8px] uppercase rounded-sm">
              {product.info.off} OFF
            </div>
          )}

          {product.info.brandNew && (
            <div className="flex gap-1 items-center px-1.5 py-0">
              <Tag />
              <span className="px-1.5 py-1 inline-block text-[#327B8A] text-sm tracking-[0.8px] uppercase">
                Brand New
              </span>
            </div>
          )}
        </div>

        <div className="pt-1.5">
          {product.code && (
            <p className="font-medium text-[13px] text-muted/70 ">
              Code: {product.code}
            </p>
          )}

          <div className="text-brand pt-1.5">
            <span>★★★★★</span> ·{" "}
            <Link to="#" className="font-medium text-[13px] underline">
              {product.info.totalReviews} reviews
            </Link>
          </div>
        </div>

        <div className="pt-4 flex flex-col gap-1.5">
          <p className="font-medium text-sm sm:font-semibold sm:text-[15px] text-muted">
            Retail <span className="line-through">{product.info.retail}</span>
          </p>

          <p className="font-semibold sm:font-bold text-lg sm:text-xl md:text-[26px] text-brand">
            {product.info.price}
          </p>

          <p className="font-normal sm:font-medium text-sm text-muted">
            {product.info.extraCosts}
          </p>

          <p className="font-medium sm:font-semibold text-sm">
            <span className="text-muted">Discover our Stores. </span>
            <Link className="text-brand underline">Store finder</Link>
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 pt-4 md:pt-6">
          <p className="font-normal md:font-medium text-sm text-[#DC7065]">
            {product.info.message}
          </p>

          <button
            onClick={handleAddToBag}
            className="group relative overflow-hidden w-full h-12 lg:h-14 flex gap-2.5 sm:gap-3.5 items-center justify-center bg-brand hover:cursor-pointer text-white rounded-md transition"
          >
            {/* Sliding flash */}
            <span className="absolute top-0 left-0 h-full w-1/2 translate-x-[-250%] group-hover:translate-x-[350%] bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] transition-transform duration-700 ease-out pointer-events-none" />
            <Bag className="relative z-10" />
            <span className="relative z-10 font-medium lg:font-semibold text-base lg:text-lg tracking-[1.44px] uppercase">
              {isInCart(product.id) ? "Add Again" : "Add To Bag"}
            </span>
          </button>

          {/* trusts */}
          <div className="relative grid grid-cols-1 lg:grid-cols-3 mt-1 lg:mt-3 border border-border select-none">
            {/* Pattern background */}
            <div
              className="absolute inset-0 opacity-20 bg-repeat"
              style={{
                backgroundImage: "url('/images/misc/checks-pattern.png')",
              }}
            />

            {/* White 80% overlay */}
            <div className="absolute inset-0 bg-white/80" />

            {/* Content */}
            <div className="relative flex gap-2.5 items-center px-4 py-4">
              <Verified className="shrink-0" />
              <span className="font-semibold sm:font-bold text-sm md:text-[15px] tracking-[1.44px] leading-snug text-[#22345B]">
                Authenticity Guaranteed
              </span>
            </div>

            <div className="relative flex gap-2.5 items-center px-4 py-4 border-t lg:border-t-0 lg:border-l lg:border-r border-border">
              <Certificate className="shrink-0" />
              <span className="font-semibold sm:font-bold text-sm md:text-[15px] tracking-[1.44px] leading-snug text-[#22345B]">
                4 Year <br className="hidden lg:block" /> Warranty
              </span>
            </div>

            <div className="relative flex gap-2.5 items-center px-4 py-4 border-t lg:border-t-0 border-border">
              <Refund className="shrink-0" />
              <span className="font-semibold sm:font-bold text-sm md:text-[15px] tracking-[1.44px] leading-snug text-[#22345B]">
                30 Day Return Policy
              </span>
            </div>
          </div>
          {/* trusts */}
        </div>
      </div>
    </>
  );
};

export default ProductOverviewInfo;
