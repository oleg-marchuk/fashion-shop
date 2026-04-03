import { prisma } from "@/lib/prisma"
import { ProductItemDB, ProductItem } from "@/types/productsType"

export async function getProducts(filters: {
    sizes?: string[]
    colors?: string[]
    categories?: string[]
    brands?: string[]
    minPrice?: number
    maxPrice?: number
    page?: number
}): Promise<ProductItem[]> {
    const {
        sizes,
        colors,
        categories,
        brands,
        minPrice,
        maxPrice,
        page = 1,
    } = filters

    const pageSize = 9
    const skip = (page - 1) * pageSize

    const products = await prisma.product.findMany({
        where: {
            category: categories?.length
                ? { value: { in: categories } }
                : undefined,

            brand: brands?.length ? { value: { in: brands } } : undefined,

            sizes: sizes?.length
                ? { some: { value: { in: sizes } } }
                : undefined,

            variants: colors?.length
                ? {
                      some: {
                          color: { name: { in: colors } },
                      },
                  }
                : undefined,

            current_price: {
                gte: minPrice ?? 0,
                lte: maxPrice ?? 999999,
            },
        },
        omit: {
            brand_id: true,
            category_id: true,
            collection_id: true,
        },
        include: {
            variants: {
                omit: {
                    color_id: true,
                    product_id: true,
                },
                include: {
                    color: {
                        omit: { name: true },
                    },
                    images: {
                        omit: { variant_id: true },
                    },
                },
            },
        },
        take: pageSize,
        skip: skip,
        orderBy: {
            id: "desc",
        },
    })

    return products.map(
        (product: ProductItemDB): ProductItem => ({
            id: product.id,
            title: product.title,
            current_price: product.current_price,
            discount_price: product.discount_price ?? 0,
            is_sold_out: product.is_sold_out,
            variants: product.variants.map((v) => ({
                id: v.id,
                hex_code: v.color.hex_code,
                image: v.images[0]?.name || "placeholder.webp",
            })),
        }),
    )
}
