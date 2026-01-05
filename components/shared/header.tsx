"use client"
import { NavigationMenu } from "@/components/navigation/NavigationMenu"
import Link from "next/link"
import { useScrollSpy } from "@/hooks/useScrollSpy"

const navItems = [
    { label: "Home", href: "#home" },
    { label: "Deals", href: "#deals" },
    { label: "New Arrivals", href: "#new-arrivals" },
    { label: "Shop", href: "/shop" },
    { label: "Sign In", href: "/sign-in", external: true },
]

export function Header() {
    const sectionIds = ["home", "deals", "new-arrivals", "packages"]
    const activeSection = useScrollSpy(sectionIds, 100)

    const isLoggedIn = false
    // bg-white bg-cyan-500
    return (
        <header className="flex items-center justify-between py-4 sticky top-0 z-50 shadow max-w-7xl mx-auto bg-white">
            <div className="flex items-center">
                <span className="font-volkhov leading-6 text-[52px] font-medium neutral-800">
                    FASCO
                </span>
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
                    <Link
                        href={"/sign-up"}
                        className={
                            "px-11 py-4 relative text-sm font-medium transition-colors hover:text-gray-200 bg-primary text-white rounded-lg"
                        }
                    >
                        Sign Up
                    </Link>
                )}
            </div>
        </header>
    )
}
