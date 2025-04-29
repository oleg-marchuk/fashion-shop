"use client"
import { Text, Button } from "@/components/ui"
import { NavigationMenu } from "@/components/navigation/NavigationMenu"
import { useScrollSpy } from "@/hooks/useScrollSpy"

const navItems = [
    { label: "Home", href: "#home" },
    { label: "Deals", href: "#deals" },
    { label: "New Arrivals", href: "#new-arrivals" },
    { label: "Packages", href: "#packages" },
    { label: "Sign In", href: "/sign-in", external: true },
]

export function Header() {
    const sectionIds = ["home", "deals", "new-arrivals", "packages"]
    const activeSection = useScrollSpy(sectionIds, 100)

    const isLoggedIn = false

    return (
        <header className="flex items-center justify-between py-4 sticky top-0 z-50 bg-white shadow max-w-[1280px] mx-auto">
            <div className="flex items-center">
                <Text as="span" styleVariant="large">
                    FASCO
                </Text>
            </div>
            <div className="flex items-center justify-between gap-8">
                <NavigationMenu
                    items={navItems}
                    activeSection={activeSection}
                />
                {isLoggedIn ? (
                    <div className="flex items-center gap-4">
                        {/* <FavoritesIcon />
                        <ProfileDropdown /> */}
                    </div>
                ) : (
                    <Button variant="default">Sign Up</Button>
                )}
            </div>
        </header>
    )
}
