"use client"
import { SizeButton } from "./size-button"

export function SizeFilter() {
    const sizes = [
        { id: 1, text: "S", href: "/shop?size=s" },
        { id: 2, text: "M", href: "/shop?size=m" },
        { id: 3, text: "L", href: "/shop?size=l" },
        { id: 4, text: "XL", href: "/shop?size=xl" },
    ]

    return (
        <div className="flex gap-3">
            {sizes.map((size) => (
                <SizeButton key={size.id} text={size.text} href={size.href} />
            ))}
        </div>
    )
}
