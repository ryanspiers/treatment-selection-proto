import type { Product } from "@/types";

interface HeroProductCardProps {
  product: Product;
}

export default function HeroProductCard({ product }: HeroProductCardProps) {
  return (
    <div
      className="relative w-full h-[324px] rounded-[12px] overflow-hidden flex items-end p-3"
      style={{
        backgroundImage: `linear-gradient(171deg, ${product.gradientFrom || "rgb(220,242,255)"} 7%, white 93%)`,
      }}
    >
      {/* Product image */}
      <div className="absolute inset-x-0 bottom-0 top-[16px] flex items-end justify-center">
        {product.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full object-contain"
          />
        ) : (
          <div className="w-16 h-64 rounded-full bg-white/60 border border-[#e6e7ed]" />
        )}
      </div>

      {/* Medication + Plans overlay */}
      <div
        className="relative z-10 w-full backdrop-blur-sm bg-white/60 border border-[#e6e7ed] rounded-[8px] flex flex-col gap-[10px] py-3 overflow-hidden"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <div className="flex items-center justify-between px-5">
          <span className="text-[12px] leading-3 text-[#2f345f]">
            Medication
          </span>
          <span className="text-[14px] leading-[22px] font-semibold text-[#07073d]">
            {product.name}
          </span>
        </div>
        <div className="flex items-center justify-between px-5">
          <span className="text-[12px] leading-3 text-[#2f345f]">
            Plans available
          </span>
          <span className="text-[14px] leading-[22px] font-semibold text-[#07073d]">
            1, 2 or 3 months
          </span>
        </div>
      </div>
    </div>
  );
}
