import { Suspense } from "react"
import { Sizes } from "./sizes"
import { Colors } from "./colors"
import { Prices } from "./prices"
import { Brands } from "./brands"
import { Collections } from "./collections"
import { Categories } from "./categories"
import { getAllFilters } from "@/services"

export async function Filters() {
    const filters = await getAllFilters()

    const { sizes, colors, prices, brands, collections, categories } = filters

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <h2 className="font-volkhov text-3xl mb-8">Filters</h2>
                <h3 className="font-volkhov mb-4">Size</h3>
                <Sizes sizes={sizes} />
                <h3 className="font-volkhov text-lg mt-8 mb-4">Colors</h3>
                <Colors colors={colors} />
                <h3 className="font-volkhov text-lg mt-8 mb-4">Categories</h3>
                <Categories category={categories} />
                <h3 className="font-volkhov text-lg mt-8 mb-4">Prices</h3>
                <Prices prices={prices} />
                <h3 className="font-volkhov text-lg mt-8 mb-4">Brands</h3>
                <Brands brands={brands} />
                <h3 className="font-volkhov text-lg mt-8 mb-4">Collections</h3>
                <Collections collections={collections} />
            </Suspense>
        </div>
    )
}
