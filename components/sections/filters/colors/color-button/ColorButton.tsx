import Link from "next/link"
import { FilterColorLink } from "@/types/filtersType"

export const ColorButton = ({
    hex_code,
    href,
    isActive = false,
}: FilterColorLink) => (
    <Link
        href={href}
        className={`
                w-8 h-8 rounded-full border-2 active:scale-95 transition-all 
                duration-150 cursor-pointer shadow-sm hover:shadow-md block
                ${
                    isActive
                        ? "border-gray-700 ring-2 ring-gray-400 ring-offset-2"
                        : "border-gray-300 hover:border-gray-500"
                }
            `}
        style={{ backgroundColor: hex_code }}
    />
)
