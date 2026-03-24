import { prisma } from "../../lib/prisma"
import dataFilters from "./dataFilters.json"
import dataProducts from "./dataProducts.json"

async function filtersLoad() {
    console.log("Start seeding...")

    await prisma.size.createMany({
        data: dataFilters.size,
        skipDuplicates: true,
    })
    await prisma.color.createMany({
        data: dataFilters.color,
        skipDuplicates: true,
    })
    await prisma.price.createMany({
        data: dataFilters.price,
        skipDuplicates: true,
    })
    await prisma.brand.createMany({
        data: dataFilters.brand,
        skipDuplicates: true,
    })
    await prisma.collection.createMany({
        data: dataFilters.collection,
        skipDuplicates: true,
    })
    await prisma.category.createMany({
        data: dataFilters.category,
        skipDuplicates: true,
    })

    console.log("Seeding finished.")
}

async function productsLoad() {
    for (const product of dataProducts) {
        await prisma.product.create({
            data: {
                title: product.title,
                current_price: product.current_price,
                discount_price: product.discount_price,
                is_sold_out: product.is_sold_out,

                brand: { connect: { value: product.brand } },
                category: { connect: { value: product.category } },
                collection: { connect: { value: product.collection } },

                sizes: {
                    connect: product.sizes.map((sizeValue) => ({
                        value: sizeValue,
                    })),
                },

                variants: {
                    create: product.variants.map((variant) => ({
                        color: { connect: { name: variant.color_name } },
                        images: {
                            create: variant.images.map((img) => ({
                                name: img.name,
                            })),
                        },
                    })),
                },
            },
        })
    }
}

productsLoad()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
