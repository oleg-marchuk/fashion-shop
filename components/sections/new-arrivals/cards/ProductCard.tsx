import { Star } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
    imageUrl: string
    title: string
    brand: string
    rating: number
    reviews: string
    price: string
    statusText: string
    statusColor?: string
}

export function ProductCard({
    imageUrl,
    title,
    brand,
    rating,
    reviews,
    price,
    statusText,
    statusColor = "text-red-500",
}: ProductCardProps) {
    return (
        <div className="w-full max-w-sm overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col pt-4 px-6 pb-9">
            <div className="aspect-4/3 overflow-hidden rounded-md">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={426}
                    height={150}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col grow mt-2">
                <div className="pt-[15px] grow">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-xl font-semibold leading-tight text-gray-600">
                                {title}
                            </h3>
                            <p className="text-left text-xs text-gray-500">
                                {brand}
                            </p>
                        </div>
                        <div className="flex items-center gap-0.5 mt-1 shrink-0">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-5 w-5 ${
                                        i < Math.round(rating)
                                            ? "text-yellow-400 fill-yellow-400"
                                            : "text-gray-300"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                    <p className="text-xs text-gray-600 text-left mt-6">
                        {reviews} Customer Reviews
                    </p>
                </div>

                <div className="flex justify-between items-center pt-4">
                    <p className="text-xl font-semibold leading-tight text-gray-600">
                        {price}
                    </p>
                    <p className={`text-xs font-medium ${statusColor}`}>
                        {statusText}
                    </p>
                </div>
            </div>
        </div>
    )
}
