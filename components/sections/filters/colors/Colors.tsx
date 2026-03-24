"use client"
import { ColorButton } from "./color-button"
import { ColorOption, ColorLink } from "@/types/filtersType"
import { useSearchParams } from "next/navigation"
import { getColorsListItem } from "@/lib/utils"

export function Colors({ colors }: { colors: ColorOption[] }) {
    const searchParams = useSearchParams()

    const colorsList = getColorsListItem({
        key: "color",
        list: colors,
        searchParams: searchParams,
    })

    return (
        <div className="flex flex-wrap gap-3">
            {colorsList.map(
                ({ id, hex_code, href, isActive }: ColorLink) => (
                    <ColorButton
                        key={id}
                        href={href}
                        hex_code={hex_code}
                        isActive={isActive}
                    />
                )
            )}
        </div>
    )
}
