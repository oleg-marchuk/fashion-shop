// src/components/ui/product-card.tsx

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

// Типи для пропсів компонента
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
        <Card className="w-full max-w-sm overflow-hidden rounded-xl border shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
            {/* Верхня секція: Фото */}
            <CardHeader className="">
                <div className="aspect-[4/3] overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </CardHeader>

            {/* Середня секція: Назва, бренд, відгуки */}
            <CardContent className="pt-[15px] px-[25px] flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col items-start">
                        <h3 className="text-lg font-semibold leading-tight">
                            {title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{brand}</p>
                    </div>
                    <div className="flex items-center gap-0.5 mt-1 flex-shrink-0">
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
                <p className="text-sm text-muted-foreground text-left">
                    {reviews} Customer Reviews
                </p>
            </CardContent>

            {/* Нижня секція: Ціна та статус */}
            <CardFooter className="px-[25px] pb-[36px] pt-4 flex justify-between items-center">
                <p className="text-2xl font-bold">{price}</p>
                <p className={`text-sm font-medium ${statusColor}`}>
                    {statusText}
                </p>
            </CardFooter>
        </Card>
    )
}
