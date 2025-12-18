import { SizeFilter } from "./size-filter"
import { Colors } from "./colors"
import { Prices } from "./prices"
import { Brands } from "./brands"
import { Collections } from "./collections"
import { Tags } from "./tags"

export function Filters() {
    return (
        <div>
            <h2 className="font-volkhov text-3xl mb-8">Filters</h2>
            <h3 className="font-volkhov mb-4">Size</h3>
            <SizeFilter />
            <h3 className="font-volkhov mt-8 mb-4">Colors</h3>
            <Colors />
            <h3 className="font-volkhov mt-8 mb-4">Prices</h3>
            <Prices />
            <h3 className="font-volkhov mt-8 mb-4">Brands</h3>
            <Brands />
            <h3 className="font-volkhov mt-8 mb-4">Collections</h3>
            <Collections />
            <h3 className="font-volkhov mt-8 mb-4">Tags</h3>
            <Tags />
        </div>
    )
}
