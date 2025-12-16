import { LinkItem } from "../link-item"

export function Collections() {
    const collections = [
        { id: 1, text: "All products", href: "/shop?collection=all-products" },
        { id: 2, text: "Best sellers", href: "/shop?collection=best-sellers" },
        { id: 3, text: "New arrivals", href: "/shop?collection=new-arrivals" },
        { id: 4, text: "Accessories", href: "/shop?collection=accessories" },
    ]

    return (
        <div className="flex flex-col gap-1">
            {collections.map((collection) => (
                <LinkItem
                    key={collection.id}
                    text={collection.text}
                    href={collection.href}
                />
            ))}
        </div>
    )
}
