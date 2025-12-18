import { LinkItem } from "../link-item"

export function Brands() {
    const brands = [
        { id: 1, text: "Minimog", href: "/shop?brand=minimog" },
        { id: 2, text: "Retrolie", href: "/shop?brand=retrolie" },
        { id: 3, text: "Brook", href: "/shop?brand=brook" },
        { id: 4, text: "Learts", href: "/shop?brand=learts" },
        { id: 5, text: "Vagabond", href: "/shop?brand=vagabond" },
        { id: 6, text: "Abby", href: "/shop?brand=abby" },
    ]

    return (
        <div className="flex flex-wrap gap-3">
            {brands.map((brand) => (
                <LinkItem key={brand.id} text={brand.text} href={brand.href} />
            ))}
        </div>
    )
}
