import { ColorOption } from "./filtersType"

export interface ProductImage {
    id: number
    name: string
}

export type ProductColor = Omit<ColorOption, "name">

export interface ProductVariant {
    id: number
    color: ProductColor
    images: ProductImage[]
}

export interface ProductItemDB {
    id: number
    title: string
    current_price: number
    discount_price: number | null
    is_sold_out: boolean
    variants: ProductVariant[]
}

// export type ProductList = ProductItem[]

export interface TransformedVariant {
    id: number
    hex_code: string
    image: string
}

export interface ProductItem {
    id: number
    title: string
    current_price: number
    discount_price: number
    is_sold_out: boolean
    variants: TransformedVariant[]
}
