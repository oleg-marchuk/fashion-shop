import { LinkItem } from "../link-item"

export function Tags() {
    const tags = [
        { id: 1, text: "Fashion", href: "/shop?tag=fashion" },
        { id: 2, text: "Hats", href: "/shop?tag=hats" },
        { id: 3, text: "Sandal", href: "/shop?tag=sandal" },
        { id: 4, text: "Belt", href: "/shop?tag=belt" },
        { id: 5, text: "Bags", href: "/shop?tag=bags" },
        { id: 6, text: "Snacker", href: "/shop?tag=snacker" },
        { id: 7, text: "Denim", href: "/shop?tag=denim" },
        { id: 8, text: "Minimog", href: "/shop?tag=minimog" },
        { id: 9, text: "Vagabond", href: "/shop?tag=vagabond" },
        { id: 10, text: "Sunglasses", href: "/shop?tag=sunglasses" },
        { id: 11, text: "Beachwear", href: "/shop?tag=beachwear" },
    ]

    return (
        <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
                <LinkItem key={tag.id} text={tag.text} href={tag.href} />
            ))}
        </div>
    )
}
