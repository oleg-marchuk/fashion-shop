import { ColorButton } from "./color-button"

export function Colors() {
    const colors = [
        { id: 1, color: "#FF6C6C", href: "/shop?color=red" },
        { id: 2, color: "#FF7629", href: "/shop?color=orange" },
        { id: 3, color: "#FFF06C", href: "/shop?color=yellow" },
        { id: 4, color: "#9BFF6C", href: "/shop?color=lime" },
        { id: 5, color: "#6CFF9E", href: "/shop?color=green" },
        { id: 6, color: "#6CFFDC", href: "/shop?color=mint" },
        { id: 7, color: "#6CB9FF", href: "/shop?color=sky" },
        { id: 8, color: "#6CF6FF", href: "/shop?color=cyan" },
        { id: 9, color: "#6CA7FF", href: "/shop?color=blue" },
        { id: 10, color: "#6C7BFF", href: "/shop?color=indigo" },
        { id: 11, color: "#8A6CFF", href: "/shop?color=purple" },
        { id: 12, color: "#B66CFF", href: "/shop?color=violet" },
        { id: 13, color: "#FC6CFF", href: "/shop?color=pink" },
        { id: 14, color: "#FF6C6C", href: "/shop?color=coral" },
    ]

    return (
        <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
                <ColorButton
                    key={color.id}
                    color={color.color}
                    href={color.href}
                />
            ))}
        </div>
    )
}
