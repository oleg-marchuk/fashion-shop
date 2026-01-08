"use client"
import { SizeButton } from "./size-button"
import { FilterOption } from "@/types/filters"
import { useSearchParams } from "next/navigation"
import { createFilterUrl } from "@/lib/utils"

export function Sizes({ sizes }: { sizes: FilterOption[] }) {
    const searchParams = useSearchParams()
    const selectedSizes = searchParams.get("size")?.split(",") || []

    return (
        <div className="flex gap-3">
            {sizes.map(({ id, text, value }: FilterOption) => {
                const lowerValue = value.toLowerCase()
                const href = createFilterUrl("size", lowerValue, searchParams)
                const isActive = selectedSizes.includes(lowerValue)

                return (
                    <SizeButton
                        key={id}
                        text={text}
                        href={href}
                        isActive={isActive}
                    />
                )
            })}
        </div>
    )
}
