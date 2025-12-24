"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface CardProps {
    images?: string[]
    title?: string
    colors?: string[]
    price?: number
    href?: string
}

export function Card({
    images = [
        "/images/products/Rounded Red Hat.png",
        "/images/products/yellow hat.png",
    ],
    title = "Rounded Red Hat",
    colors = ["#FF6C6C", "#6C7BFF"],
    price = 45.0,
    href = "/product/rounded-red-hat",
}: CardProps) {
    const [selectedColor, setSelectedColor] = useState<number>(0)

    return (
        <div className="w-[302px]">
            <Link
                href={href}
                className="block w-[302px] h-[402px] bg-gray-200 rounded-lg overflow-hidden relative"
            >
                <Image
                    src={images[selectedColor]}
                    alt={title}
                    fill
                    sizes="302px"
                    className="object-cover"
                />
            </Link>

            <div className="mt-5">
                <Link href={href}>
                    <h3 className="text-base font-volkhov hover:text-gray-600 transition-colors cursor-pointer">
                        {title}
                    </h3>
                </Link>

                <div className="mt-3.5">
                    <p className="text-base font-semibold">
                        ${price.toFixed(2)}
                    </p>
                </div>

                <div className="mt-3.5">
                    <div className="flex gap-2">
                        {colors.map((color: string, index: number) => (
                            <button
                                key={index}
                                onClick={() => setSelectedColor(index)}
                                className={`
                                    w-[26px] h-[26px] rounded-full flex items-center justify-center
                                    ${
                                        selectedColor === index
                                            ? "border border-gray-900"
                                            : ""
                                    }
                                `}
                                style={{
                                    backgroundColor:
                                        selectedColor === index
                                            ? "transparent"
                                            : color,
                                }}
                            >
                                {selectedColor === index && (
                                    <div
                                        className="w-5 h-5 rounded-full"
                                        style={{ backgroundColor: color }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
