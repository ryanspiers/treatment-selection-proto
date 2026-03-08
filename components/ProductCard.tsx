import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onRetake: () => void;
}

export default function ProductCard({ product, onRetake }: ProductCardProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">
        <p className="text-sm font-semibold tracking-widest uppercase text-stone-400 mb-6">
          Your recommendation
        </p>

        {/* Product image placeholder */}
        <div className="w-full aspect-square rounded-2xl bg-stone-100 mb-6 flex items-center justify-center">
          {product.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <span className="text-stone-300 text-5xl select-none">✦</span>
          )}
        </div>

        <h2 className="text-2xl font-bold text-stone-900 mb-1">{product.name}</h2>
        <p className="text-stone-500 font-medium mb-4">{product.tagline}</p>
        <p className="text-stone-600 text-sm leading-relaxed">{product.description}</p>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {product.learnMoreUrl && (
          <a
            href={product.learnMoreUrl}
            className="w-full py-4 rounded-xl bg-stone-800 text-white text-base font-semibold text-center transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-800 focus-visible:ring-offset-2"
          >
            Learn more
          </a>
        )}
        <button
          onClick={onRetake}
          className="w-full py-4 rounded-xl border-2 border-stone-200 text-stone-700 text-base font-semibold cursor-pointer transition-colors hover:border-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-800 focus-visible:ring-offset-2"
        >
          Retake quiz
        </button>
      </div>
    </div>
  );
}
