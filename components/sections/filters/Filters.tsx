import { SizeFilter } from "./size-filter"
import { Colors } from "./colors"
import { Prices } from "./prices"
import { Brands } from "./brands"
import { Collections } from "./collections"
import { Tags } from "./tags"

export function Filters() {
    return (
        <div>
            <h2>Size</h2>
            <SizeFilter />
            <h2>Colors</h2>
            <Colors />
            <h2>Prices</h2>
            <Prices />
            <h2>Brands</h2>
            <Brands />
            <h2>Collections</h2>
            <Collections />
            <h2>Tags</h2>
            <Tags />
        </div>
    )
}
