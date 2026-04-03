import Link from "next/link"
import Image from "next/image"
import { ProductItem } from "@/types/productsType"

interface CardProps extends ProductItem {
    setSelectedVariantColor: (id: number) => void
    image: string
    variantColor: number
}

export const Card = ({
    id,
    title,
    current_price,
    discount_price,
    is_sold_out,
    variants,
    setSelectedVariantColor,
    image,
    variantColor,
}: CardProps) => (
    <div className="w-[302px] bg-white rounded-xl p-2 transition-shadow duration-300 shadow-sm hover:shadow-md border border-gray-100">
        <Link
            href={`/product/${id}`}
            className="block w-full h-[402px] bg-gray-200 rounded-lg overflow-hidden relative"
        >
            <Image
                src={`/images/products/${image}`}
                alt={title}
                fill
                sizes="302px"
                className="object-cover"
            />

            {is_sold_out && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                    <div className="w-[54px] h-[54px] bg-[#B1B1B1] rounded-full flex flex-col items-center justify-center leading-tight shadow-sm">
                        <span className="text-[10px] font-bold text-white uppercase">
                            Sold
                        </span>
                        <span className="text-[10px] font-bold text-white uppercase">
                            Out
                        </span>
                    </div>
                </div>
            )}
        </Link>

        <div className="mt-5">
            <Link href={`/product/${id}`}>
                <h3 className="text-base font-volkhov hover:text-gray-600 transition-colors cursor-pointer">
                    {title}
                </h3>
            </Link>

            <div className="mt-3.5 flex items-center gap-2">
                {discount_price > 0 ? (
                    <>
                        <p className="text-base font-semibold">
                            ${discount_price.toFixed(2)}
                        </p>
                        <p className="text-base line-through text-[#666666]">
                            ${current_price.toFixed(2)}
                        </p>
                    </>
                ) : (
                    <p className="text-base font-semibold">
                        ${current_price.toFixed(2)}
                    </p>
                )}
            </div>

            <div className="mt-3.5">
                <div className="flex gap-2">
                    {variants.map(
                        ({ hex_code }: { hex_code: string }, index: number) => (
                            <button
                                key={index}
                                onClick={() => setSelectedVariantColor(index)}
                                className={`
                                    w-[26px] h-[26px] rounded-full flex items-center justify-center
                                    ${
                                        variantColor === index
                                            ? "border border-gray-900"
                                            : ""
                                    }
                                `}
                                style={{
                                    backgroundColor:
                                        variantColor === index
                                            ? "transparent"
                                            : hex_code,
                                }}
                            >
                                {variantColor === index && (
                                    <div
                                        className="w-5 h-5 rounded-full"
                                        style={{ backgroundColor: hex_code }}
                                    />
                                )}
                            </button>
                        ),
                    )}
                </div>
            </div>
        </div>
    </div>
)
