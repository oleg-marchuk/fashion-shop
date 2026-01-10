"use client"
import { ColorButton } from "./color-button"
import { ColorOption, ColorOptionWithoutName } from "@/types/filters"
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
                ({ id, color, href, isActive }: ColorOptionWithoutName) => (
                    <ColorButton
                        key={id}
                        href={href}
                        color={color}
                        isActive={isActive}
                    />
                )
            )}
        </div>
    )
}
