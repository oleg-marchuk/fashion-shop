import { LinkItem } from "../link-item"

export function Prices() {
    const prices = [
        { id: 1, text: "$0-$50", href: "/shop?price=0-50" },
        { id: 2, text: "$50-$100", href: "/shop?price=50-100" },
        { id: 3, text: "$100-$150", href: "/shop?price=100-150" },
        { id: 4, text: "$150-$200", href: "/shop?price=150-200" },
        { id: 5, text: "$300-$400", href: "/shop?price=300-400" },
    ]

    return (
        <div className="flex flex-col gap-1">
            {prices.map((price) => (
                <LinkItem key={price.id} text={price.text} href={price.href} />
            ))}
        </div>
    )
}
