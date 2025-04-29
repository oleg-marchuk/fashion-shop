import Link from "next/link"
import { cn } from "@/lib/utils" // если у тебя есть утилита cn

interface NavItem {
    label: string
    href: string
    external?: boolean
}

interface NavigationMenuProps {
    items: NavItem[]
    activeSection?: string
}

export function NavigationMenu({ items, activeSection }: NavigationMenuProps) {
    return (
        <nav className="relative flex gap-8">
            {items.map((item) => {
                const isActive = activeSection === item.href

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        scroll={!item.external}
                        className={cn(
                            "relative text-sm font-medium transition-colors hover:text-primary",
                            isActive ? "text-primary" : "text-muted-foreground"
                        )}
                    >
                        {item.label}

                        {/* Полоска под активным пунктом */}
                        {isActive && (
                            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary transition-all" />
                        )}
                    </Link>
                )
            })}
        </nav>
    )
}
