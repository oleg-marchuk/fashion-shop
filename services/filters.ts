import { prisma } from "@/lib/prisma"
import { FiltersData, PriceOption, FilterOption } from "@/types/filtersType"

export async function getAllFilters(): Promise<FiltersData> {
    try {
        const [categories, brands, collections, sizes, colors, prices] =
            await prisma.$transaction([
                prisma.category.findMany({ orderBy: { text: "asc" } }),
                prisma.brand.findMany({ orderBy: { text: "asc" } }),
                prisma.collection.findMany({ orderBy: { order: "asc" } }),
                prisma.size.findMany({ orderBy: { order: "asc" } }),
                prisma.color.findMany(),
                prisma.price.findMany({ orderBy: { order: "asc" } }),
            ])

        const pricesList = transformPriceData(prices)

        return {
            categories,
            brands,
            collections,
            sizes,
            colors,
            prices: pricesList,
        }
    } catch (error) {
        console.error("Error retrieving filters:", error)
        throw new Error("Failed to load filters")
    }
}

function transformPriceData(prices: PriceOption[]): FilterOption[] {
    return prices.map((price) => ({
        id: price.id,
        text: `$${price.min_val} - $${price.max_val}`,
        value: `${price.min_val}-${price.max_val}`,
        order: price.order,
    }))
}
