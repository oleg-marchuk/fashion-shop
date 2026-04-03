"use client"
import { useState } from "react"
import { ProductItem } from "@/types/productsType"
import { Card } from "./Card"

export function CardContainer({ product }: { product: ProductItem }) {
    const [variantColor, setSelectedVariantColor] = useState<number>(0)

    const image = product.variants[variantColor].image || product.variants[0].image

    return (
        <Card
            {...product}
            setSelectedVariantColor={(index) => setSelectedVariantColor(index)}
            image={image}
            variantColor={variantColor}
        />
    )
}
