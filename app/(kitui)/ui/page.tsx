import { Button } from "@/components/ui"
import clsx from "clsx/lite"
import { ShoppingCart } from "lucide-react"

export default function KitUI() {
    const st =
        "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-3">
            <button
                className={clsx(
                    st,
                    "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                    "px-11 py-4",
                    "text-base"
                )}
            >
                Sign Up
            </button>
            <button
                className={clsx(
                    st,
                    "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 font-medium",
                    "px-15 py-5",
                    "text-base"
                )}
            >
                SHOP NOW
            </button>
            <button
                className={clsx(
                    st,
                    "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                    "px-17 py-4",
                    "text-base"
                )}
            >
                Buy Now
            </button>
            <button
                className={clsx(
                    st,
                    "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                    "px-11 py-4",
                    "text-base"
                )}
            >
                Subscribe Now
            </button>
            <button
                className={clsx(
                    st,
                    "bg-primary shadow-xs hover:bg-primary/90",
                    "px-4 py-4"
                )}
            >
                <ShoppingCart color="white" />
            </button>
            <Button>Sign Up</Button>
            <Button size="sm">SHOP NOW</Button>
            <Button size="sm">Buy Now</Button>
            <Button>Subscribe Now</Button>
            <Button variant="noText" size="icon">
                <ShoppingCart color="white" />
            </Button>
        </div>
    )
}
