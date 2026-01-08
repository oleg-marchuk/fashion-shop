import { Sizes } from "./sizes"
import { Colors } from "./colors"
import { Prices } from "./prices"
import { Brands } from "./brands"
import { Collections } from "./collections"
import { Tags } from "./tags"
import { filterService } from "@/services"

export async function Filters() {
    const filters = await filterService.getFilters()

    const { sizes, colors, prices, brands, collections, tags } = filters.data

    // console.log("Filters sizes:", sizes)

    return (
        <div>
            <h2 className="font-volkhov text-3xl mb-8">Filters</h2>
            <h3 className="font-volkhov mb-4">Size</h3>
            <Sizes sizes={sizes} />
            <h3 className="font-volkhov text-lg mt-8 mb-4">Colors</h3>
            <Colors />
            <h3 className="font-volkhov text-lg mt-8 mb-4">Prices</h3>
            <Prices />
            <h3 className="font-volkhov text-lg mt-8 mb-4">Brands</h3>
            <Brands />
            <h3 className="font-volkhov text-lg mt-8 mb-4">Collections</h3>
            <Collections />
            <h3 className="font-volkhov text-lg mt-8 mb-4">Tags</h3>
            <Tags />
        </div>
    )
}
