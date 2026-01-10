import Link from "next/link"
import { FilterLinkText } from "@/types/filtersType"

export function LinkItem({
    text,
    href = "",
    isActive = false,
}: FilterLinkText) {
    return (
        <Link
            href={href}
            className={`
                text-base no-underline transition-colors duration-200
                ${
                    isActive
                        ? "text-gray-700"
                        : "text-gray-400 hover:text-gray-600"
                }
            `}
        >
            {text}
        </Link>
    )
}
